import React, { useState } from "react";
import styles from './DetectPage.module.css'
import DetectForm from "../../components/DetectForm/DetectForm";
import Navbar from "../../components/Navbar/Navbar";

const DetectPage = () => {
  
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Detect Potato Disease</h1>
      <DetectForm  setLoading={setLoading} setResult={setResult} />
      {loading && <p className={styles.loadingText}>Detecting...</p>}
      {result && <p className={styles.resultText}>Result: {result.predicted_class_name}</p>}
    </div>
  )
}

export default DetectPage
