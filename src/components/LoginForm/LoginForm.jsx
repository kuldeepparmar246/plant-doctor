import { useState } from "react";
import styles from './LoginForm.module.css'

const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { username, password });
    // TODO: Add login logic here
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
