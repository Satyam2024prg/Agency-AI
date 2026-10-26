import React, { useState } from "react"
import Navbar from './components/Navbar.jsx'
import Hero from "./components/hero.jsx"

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return <>
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      <Hero />

    </div>
  </>

}

export default App
