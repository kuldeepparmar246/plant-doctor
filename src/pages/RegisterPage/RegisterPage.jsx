import { Link } from "react-router-dom"
import RegisterForm from "../../components/RegisterForm/RegisterForm"
import styles from './RegisterPage.module.css'

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>Farmer Registration</h1>
        <RegisterForm />
        <p className={styles.link}><Link to='/'>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default RegisterPage