
const URL = 'https://restcountries.com/v3.1/all'


export const getCountries = async () => {
    const res = await fetch(URL)
    return res.json()
}

export const getCountryDetails = async () => {

}