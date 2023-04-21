import React, { useState } from "react";
import Header from "./components/header/Header";
import SearchSection from './components/searchsection/SearchSection'
import './index.css'
import { IoRecordingOutline } from "react-icons/io5";

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState(null)

  console.log({ search })
  console.log({ region })
  return (
    <div className={darkMode ? 'darkMode-main main' : 'lightMode-main main'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchSection darkMode={darkMode} setSearch={setSearch} search={search} region={region} setRegion={setRegion} />
      <div className="grid-container">
        Heyy there
      </div>
    </div>
  );
}

export default App;
