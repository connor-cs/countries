import React from 'react'
import { Link } from 'react-router-dom'
import CountryDetails from '../../pages/countrydetails/CountryDetails'

export default function BorderCountries({country}) {
  console.log(country)
  return (
    <Link to={`/detail/${country}`} className='link'><p>{country}</p></Link> 
  )
}
