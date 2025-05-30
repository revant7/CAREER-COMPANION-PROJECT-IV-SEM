import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './components/Register'
import AboutUs from './pages/About'
import Footer from './components/Footer'
import Login from './components/Login'
import QuestionnaireForm from './components/QuestionnaireForm'
import FeaturesOverview from './components/FeaturesOverview'
import ExploreCareers from './pages/ExploreCareers'
import ResourcesPage from './pages/Resources'
import RoadmapPage from './pages/RoadmapPage'

function App() {


  return (

    <BrowserRouter>
      <div className="relative min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<><Home /> <FeaturesOverview /></>} />
          <Route path="/register" element={<QuestionnaireForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/explore" element={<ExploreCareers />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/roadmap/:skill" element={<RoadmapPage />} /> {/* Route to view a specific skill's roadmap */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>


  )
}

export default App
