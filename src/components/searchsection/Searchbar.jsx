import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi";

export default function Searchbar({ darkMode, search, setSearch }) {
  return (
    <div className={darkMode ? 'darkMode-search-container search-container' : 'lightMode-search-container search-container'}>
      <BiSearchAlt2 size={18}/>
      <input className={darkMode ? 'darkMode-input input' : 'lightMode-input input'} placeholder="Search for a country..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}
