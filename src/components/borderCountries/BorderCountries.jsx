import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BorderCountries({country}) {

  const navigate = useNavigate()
  return (
   <p key={country} className='link' onClick={()=>navigate(`/detail/${country}`)}>{country}</p>
  )
}
