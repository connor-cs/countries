import React from 'react'
import Searchbar from './Searchbar'
import Dropdown from './Dropdown'
import './searchSection.css'

export default function SearchSection({search, darkMode, setSearch, region, setRegion}) {
  return (
    <div className={darkMode ? 'darkMode-search search' : 'lighMode-search search'}>
      <Searchbar search={search} setSearch={setSearch} darkMode={darkMode}/>
      <Dropdown region={region} setRegion={setRegion} darkMode={darkMode}/>
    </div>
  )
}
