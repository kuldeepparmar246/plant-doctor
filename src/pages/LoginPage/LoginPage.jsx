import styles from './LoginPage.module.css'
import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from 'react-router-dom'
import { useState } from 'react';

const LoginPage = (props) => {
  const { setUser } = props
  const [message, setMessage] = useState(null)
  return (
    <div className={styles.container}>
      {message && <div className={styles.message}>{message}</div>}
      <div className={styles.box}>
        <h2 className={styles.title}>Farmer Login</h2>
        <LoginForm setUser={setUser} setMessage={setMessage}/>
        <p className={styles.link}><Link to='/register' >Sign In</Link></p>
      </div>
    </div>
  )
}

export default LoginPage
