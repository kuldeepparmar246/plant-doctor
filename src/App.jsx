import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import DetectPage from "./pages/DetectPage/DetectPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from './pages/HomePage/HomePage'
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import WeatherPage from "./pages/WeatherPage/WeatherPage";

const  App = () => {
  const [user,setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(()=> {
    const loggedUser = window.localStorage.getItem('loggedUser')
    if(loggedUser) {
      const user = JSON.parse(loggedUser)
      setUser(user)
      navigate('/home')
    }
  },[])

  const handleLogout = () => {
    window.localStorage.clear()
    setUser(null)
  }

  return (
    <div>
        <Routes>
        <Route path="/home" element={<HomePage user={user} setUser={setUser} />} />
        <Route path="/" element={<LoginPage setUser={setUser} />} />
        <Route path="/detect" element={<DetectPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/weather' element={<WeatherPage />} />
        {user && <Route path='/profile' element={<ProfilePage user={user}/>} /> }

        </Routes>
      
      {user && <Navbar handleLogout={handleLogout} />}
    </div>
  )
}

export default App
