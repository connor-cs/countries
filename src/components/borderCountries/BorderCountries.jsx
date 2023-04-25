import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BorderCountries({country, darkMode}) {

  const navigate = useNavigate()
  return (
   <p className={darkMode ? 'darkMode-country-link link' : 'lightMode-country-link link'} onClick={()=>navigate(`/detail/${country}`)}>{country}</p>
  )
}
