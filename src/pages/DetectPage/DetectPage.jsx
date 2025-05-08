import React, { useState } from "react";
import styles from './DetectPage.module.css'
import DetectForm from "../../components/DetectForm/DetectForm";
import Navbar from "../../components/Navbar/Navbar";
import ReactMarkdown from "react-markdown";

const DetectPage = () => {
  const [geminiResponse, setGeminiResponse] = useState(null);
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchGeminiResponse = async (diseaseName) => {
    const url = import.meta.env.VITE_APP_SERVER_URL;
  
    const query = `Explain  how to fix the plant disease: ${diseaseName}, with proper steps in around 200 words`
  
    try {
      const res = await fetch(url+'/api/ask/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query }),
      })
  
      const data = await res.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      setGeminiResponse(reply || 'No suggestion found.');
    } catch (err) {
      console.error(err);
      setGeminiResponse('Failed to fetch info from Gemini.');
    }
  };
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Detect Disease</h1>
      <DetectForm  setLoading={setLoading} setResult={setResult} setGeminiResponse={setGeminiResponse}/>
      {loading && <p className={styles.loadingText}>Detecting...</p>}
      {result && 
      <>
        <p className={styles.resultText}>Result: {result.predicted_class_name}</p>
        <button
        className={styles.suggestBtn}
        onClick={() => fetchGeminiResponse(result.predicted_class_name)}
        >
        Get Treatment Advice
        </button>
      </>}
      {geminiResponse && <div className={styles.adviceText}><ReactMarkdown >{geminiResponse}</ReactMarkdown></div>}
    </div>
  )
}

export default DetectPage
