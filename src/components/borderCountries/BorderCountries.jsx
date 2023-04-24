import React from 'react'
import { Link } from 'react-router-dom'

export default function BorderCountries({country}) {

  return (
    <Link to={`/details/${country}`} className='link'><p>{country}</p></Link> 
  )
}
