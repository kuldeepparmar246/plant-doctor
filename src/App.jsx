import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetectPage from "./pages/DetectPage/DetectPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from './pages/HomePage/HomePage'

const  App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/detect" element={<DetectPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
