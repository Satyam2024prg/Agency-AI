import React, { useEffect, useState } from "react"
import assets from "../assets/assets"

function ThemeToggleBtn({ theme, setTheme }) {

  useEffect(() => {
    const preferDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
    setTheme(theme || (preferDarkMode ? 'dark' : 'light'))
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return <>
    <button>
      {theme === 'dark' ? (
        <img onClick={() => setTheme('light')} src={assets.sun_icon}
          className="size-8.5 p-1.5 border-gray-500 rounded-full" alt="" />
      ) : (
        <img src={assets.moon_icon} onClick={() => setTheme('dark')} className="size-8.5 p-1.5 border-gray-500 rounded-full" alt=""></img>
      )}
    </button>
  </>

}

export default ThemeToggleBtn
