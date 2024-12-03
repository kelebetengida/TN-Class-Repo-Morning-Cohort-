import React from 'react'
import ReactDOM from "react-dom"
import Aboutme from './components/AboutMe'
import Home from './components/Home'
import ContactMe from './components/ContactMe'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/Navbar'

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Aboutme/>}/>
        <Route path="/contact" element={<ContactMe/>}/>
      </Routes> 
    </Router>
  )
}




const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);