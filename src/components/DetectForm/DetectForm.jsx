import { useEffect, useState } from "react";
import styles from './DetectForm.module.css'

const DetectForm = (props) => {
  const { setLoading, setResult } = props 
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)

  useEffect(() => {
    if(!image) {
      setPreview(null)
      return
    }

    const objectUrl = URL.createObjectURL(image)
    setPreview(objectUrl)
    console.log(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  },[image])

  const handleImageChange = (e) => {
    console.log(e.target.files[0])
    setImage(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!image) return

    setLoading(true)
    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      })

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {image && <img src={preview} />}
      <form onSubmit={handleSubmit} className={styles.form}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Upload & Detect</button>
      </form>
    </div>
  )
}


export default DetectForm