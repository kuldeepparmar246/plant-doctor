import { useState } from "react";
import axios from "axios";
import styles from "./RegisterFrom.module.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const userObject = {
      username,
      name,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/api/users",
        userObject
      );
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.log("error while creating the user", error.message);
    }

    setName("");
    setPassword("");
    setUserName("");
  };
  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <input 
        type="text"
        placeholder="Username"
        value={username} 
        className={styles.input}
        onChange={(e) => setUserName(e.target.value)} 
      />
      <input 
        type="text"
        placeholder="name"
        value={name} 
        className={styles.input}
        onChange={(e) => setName(e.target.value)}
      />
      
      <input 
        type="text"
        placeholder="password"
        value={password} 
        className={styles.input}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit" className={styles.button}>Register</button>
    </form>
  );
};

export default RegisterForm;
