import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import DeveloperPool from './pages/DeveloperPool'
import HowItWorks from './pages/HowItWorks'
import ProjectRequest from './pages/ProjectRequest'
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developers" element={<DeveloperPool />} />
          <Route path="/process" element={<HowItWorks />} />
          <Route path="/request" element={<ProjectRequest />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
