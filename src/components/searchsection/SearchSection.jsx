import React from 'react'
import Searchbar from './Searchbar'
import Dropdown from './Dropdown'
import './searchSection.css'

export default function SearchSection({search, setSearch, region, setRegion}) {
  return (
    <div className='search'>
      <Searchbar search={search} setSearch={setSearch} />
      <Dropdown region={region} setRegion={setRegion} />
    </div>
  )
}
