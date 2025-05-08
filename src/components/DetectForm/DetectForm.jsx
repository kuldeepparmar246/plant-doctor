import { useEffect, useState } from "react";
import styles from './DetectForm.module.css'

const baseUrl = import.meta.env.VITE_SERVER_URL || 'http://localhost:5000';

const DetectForm = (props) => {
  const { setLoading, setResult,setGeminiResponse } = props 
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [selectedValue, setSelectedValue] = useState('potato')
  const [message,setMessage] = useState(null)

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value)
  }

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
    setGeminiResponse(null)
    setResult(null)
    console.log(e.target.files[0])
    setImage(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    setGeminiResponse(null)
    setResult(null)
    e.preventDefault()
    if (!image) {
      setMessage("image is not selected")
      setTimeout(()=> {
        setMessage(null)
      },3000)
      return
    }

    setLoading(true)
    const formData = new FormData();
    formData.append("file", image);

    try {
      const url = baseUrl + (selectedValue === 'soya' ? '/predict/soya' : '/predict')
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      })
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      setResult("Server error!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {image && <img  src={preview} />}
      <form onSubmit={handleSubmit} className={styles.form}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {message && <div>{message}</div>}
      <label>
        <input
          type="radio"
          value="soya"
          checked={selectedValue === 'soya'}
          onChange={handleRadioChange}
        />
        soya
      </label>
      <label>
        <input
          type="radio"
          value="potato"
          checked={selectedValue === 'potato'}
          onChange={handleRadioChange}
        />
        potato
      </label>
      <button type="submit" >Upload & Detect</button>
      </form>
    </div>
  )
}


export default DetectForm