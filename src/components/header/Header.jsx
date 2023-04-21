import React from 'react'
import './header.css'
import { IoMoonOutline, IoMoon } from "react-icons/io5";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <div className={darkMode ? 'darkMode-header header' : 'lightMode-header header'}>
      <h1>Where in the world?</h1>
      <button className={darkMode ? 'darkMode-button button' : 'lightMode-button button'} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <IoMoon className={darkMode ? 'darkMode icon' : 'lightMode icon'} size={18} /> : <IoMoonOutline className={darkMode ? 'darkMode icon' : 'lightMode icon'} size={18} />}
        Dark Mode
      </button>
    </div>
  )
}
