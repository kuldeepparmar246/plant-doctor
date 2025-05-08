import { Link } from "react-router-dom"
import RegisterForm from "../../components/RegisterForm/RegisterForm"
import styles from './RegisterPage.module.css'
import { useState } from "react"

const RegisterPage = () => {
  const [message,setMessage] = useState(null)
  return (
    <div className={styles.container}>
      {message && <div className={styles.error}>{message}</div>}
      <div className={styles.box}>
        <h1 className={styles.title}>Farmer Registration</h1>
        <RegisterForm setMessage={setMessage}/>
        <p className={styles.link}><Link to='/'>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default RegisterPage