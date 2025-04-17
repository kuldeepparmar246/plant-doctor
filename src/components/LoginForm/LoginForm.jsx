import { useState } from "react";
import styles from './LoginForm.module.css'
import { login } from '../../services/login.js'
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { setUser, setMessage } = props
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Logging in with:", { username, password });
    
    try {
      const response = await login({username,password})
      console.log(response.data)
      const user = response.data;
      window.localStorage.setItem(
        'loggedUser',JSON.stringify(user)
      )
      setUser(user)
      setPassword("")
      setUsername("")
      navigate('/')
    } catch (error) {
      console.log("error while loging",error.message)
      setMessage(error.response.data.error)
      setTimeout(()=>{
        setMessage(null)
      },5000)
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        className={styles.input}
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        className={styles.input}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className={styles.button}>
        Login
      </button>
    </form>
  )
}

export default LoginForm
