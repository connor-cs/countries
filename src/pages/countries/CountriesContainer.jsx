import React from 'react'
import './countriescontainer.css'
import Card from '../../components/card/Card'

export default function CountriesContainer({ countries, handleCardClick }) {
  return (
    <div className='countries-grid'>
      {countries.map(country => (
        <Card props={country} key={country.cca2} handleCardClick={handleCardClick} />
      ))}
    </div>
  )
}
