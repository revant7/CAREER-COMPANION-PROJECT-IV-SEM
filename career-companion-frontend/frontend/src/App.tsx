import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './components/Register'
import Login from './components/Login'
import ParticlesEffect from './components/ParticlesEffect'

function App() {


  return (

    <BrowserRouter>
      <div className="relative min-h-screen">
        <ParticlesEffect />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>


  )
}

export default App
