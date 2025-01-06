import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/skills'
import Footer from './components/footer'
import Contact from './components/contact'
import {Toaster} from "react-hot-toast"
function App() {

  return (
    <>
    <div>
    <Navbar />
    <Home />
    <About />
    <Portfolio/>
    <Skills/>
    <Footer/>
    <Contact/>
    </div>
    <Toaster/>
    </>
  )
}

export default App
