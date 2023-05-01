import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi";

export default function Searchbar({ search, setSearch }) {
  return (
    <div className='search-container'>
      <BiSearchAlt2 size={18}/>
      <input className="input" placeholder="Search for a country..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}
