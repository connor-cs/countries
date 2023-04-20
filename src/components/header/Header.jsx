import React from 'react'
import './header.css'

export default function Header({darkMode, setDarkMode}) {
  return (
    <div className={darkMode ? 'darkMode' : 'lightMode'}>
      <h1>Where in the world?</h1>
      <button onClick={()=>setDarkMode(!darkMode)}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
    </div>
  )
}
