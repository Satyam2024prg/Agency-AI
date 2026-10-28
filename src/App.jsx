import React, { useState } from "react"
import Navbar from './components/Navbar.jsx'
import Hero from "./components/hero.jsx"
import TrustedBy from "./components/TrustedBy.jsx"
import Services from "./components/Services.jsx"
import OurWork from "./components/OurWork.jsx"
import Teams from "./components/Teams.jsx"
import ContactUs from "./components/ContactUs.jsx"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer.jsx"

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return <>
    <div className="dark:bg-black relative">
      <Toaster></Toaster>
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      <Hero />
      <TrustedBy></TrustedBy>
      <Services></Services>
      <OurWork></OurWork>
      <Teams></Teams>
      <ContactUs></ContactUs>
      <Footer theme={theme}></Footer>

    </div>
  </>

}

export default App
