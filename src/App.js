import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import SearchSection from './components/searchsection/SearchSection'
import CountryDetails from './pages/countrydetails/CountryDetails'
import CountriesContainer from "./pages/countries/CountriesContainer";
import { getCountries, getCountryDetails } from "./api/api";
import './index.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState(undefined)
  const [countries, setCountries] = useState([])
  const [countryDetails, setCountryDetails] = useState()

  // console.log({ search })
  // console.log({ region })

  useEffect(() => {
    getCountries(search, region)
      .then(data => setCountries(data))
      .then(console.log(countries))
  }, [search, region])

  return (
    <div className={darkMode ? 'darkMode-main main' : 'lightMode-main main'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchSection darkMode={darkMode} setSearch={setSearch} search={search} region={region} setRegion={setRegion} />
      <Routes>
        <Route path='/' element={<CountriesContainer countries={countries} darkMode={darkMode} handleCardClick={handleCardClick} />} />
        <Route path='/detail/:id' element={<CountryDetails />} />
      </Routes>
    </div>
  );

  function handleCardClick(countryCode) {
    getCountryDetails(countryCode)
    .then(data=>console.log({data}))

  }
}

export default App;
