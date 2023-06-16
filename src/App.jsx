import { BrowserRouter as Router, Route ,Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Footer from "./components/Footer.jsx"
import About from "./components/About"
import Brands from "./components/Brands"
import Services from "./components/Services"

import "./styles/home.scss"
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/colors.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/mediaquery.scss"



function App  () {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/#about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/#brands" element={<Brands/>}/>
        <Route path="/services" element={<Services/>}/>
        
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
