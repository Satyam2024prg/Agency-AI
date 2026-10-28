import React, { useState } from "react"
import Navbar from './components/Navbar.jsx'
import Hero from "./components/hero.jsx"
import TrustedBy from "./components/TrustedBy.jsx"
import Services from "./components/Services.jsx"

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return <>
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      <Hero />
      <TrustedBy></TrustedBy>
      <Services></Services>

    </div>
  </>

}

export default App
