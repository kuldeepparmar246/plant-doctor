import { useState } from "react";
import axios from "axios";
import styles from "./RegisterFrom.module.css";
import { useNavigate } from "react-router-dom";

const baseUrl =  'http://localhost:3001';

const RegisterForm = ({setMessage}) => {


  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const validatePassword = (password, minLength = 8) => {
    const errors = [];

    if (password.length < minLength) {
      errors.push(`at least ${minLength} characters`);
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("an uppercase letter (A-Z)");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("a lowercase letter (a-z)");
    }
    if (!/\d/.test(password)) {
      errors.push("a digit (0-9)");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push("a special character (!@#$...)");
    }

    return {
      isValid: errors.length === 0,
      errors: errors,
    };
  };


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const result = validatePassword(password)

    if(!result.isValid) {
      let tempMessage = ""
      for(let i=0;i<result.errors.length;i++) {
        tempMessage += result.errors[i]
        tempMessage += " "
      }
      setMessage(tempMessage)
      setTimeout(()=> {
        setMessage(null)
      },5000)
      return
    }

    const userObject = {
      username,
      name,
      password,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/api/users`,
        userObject
      );
      console.log(response.data);
      navigate("/");
    } catch (error) {
      setMessage(error.response.data.message)
      setTimeout(()=> {
        setMessage(null)
      },5000)
      console.log("error while creating the user", error.message);
    }

    setName("");
    setPassword("");
    setUserName("");
  };
  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <input 
        required
        type="text"
        placeholder="Username"
        value={username} 
        className={styles.input}
        onChange={(e) => setUserName(e.target.value)} 
      />
      <input 
        required
        type="text"
        placeholder="name"
        value={name} 
        className={styles.input}
        onChange={(e) => setName(e.target.value)}
      />
      
      <input 
        required
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
