import React, { useState } from "react";
import Header from "./components/header/Header";
import SearchSection from './components/searchsection/SearchSection'
import './index.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <SearchSection />
      <div className="grid-container">
        Heyy there
      </div>
    </>
  );
}

export default App;
