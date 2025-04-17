import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetectPage from "./pages/DetectPage/DetectPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from './pages/HomePage/HomePage'
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const  App = () => {
  const [user,setUser] = useState(null)

  useEffect(()=> {
    const loggedUser = window.localStorage.getItem('loggedUser')
    if(loggedUser) {
      const user = JSON.parse(loggedUser)
      setUser(user)
    }
  },[])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/detect" element={<DetectPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </Router>
  )
}

export default App
