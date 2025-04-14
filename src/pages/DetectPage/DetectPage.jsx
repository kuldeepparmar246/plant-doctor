import React, { useState } from "react";
import styles from './DetectPage.module.css'

const DetectPage = () => {
  const [image, setImage] = useState(null)
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!image) return

    setLoading(true);
    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      })

      const data = await response.json();
      setResult(data.prediction);
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Detect Potato Disease</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Upload & Detect</button>
      </form>
      {loading && <p className={styles.loadingText}>Detecting...</p>}
      {result && <p className={styles.resultText}>Result: {result}</p>}
    </div>
  )
}

export default DetectPage
