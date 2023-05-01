import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./countrydetails.css";
import { getCountryDetails } from "../../api/api";
import BorderCountries from "../../components/borderCountries/BorderCountries";
import { BiArrowBack } from "react-icons/bi";

export default function CountryDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const [details, setdetails] = useState(null);

  useEffect(() => {
    getCountryDetails(params.id)
      .then((data) => setdetails(data[0]))
      .catch((error) => console.log(error));
  }, [params]);

  // console.log(details);

  if (!details) return <h1>Loading...</h1>;

  //need name of language to access native name of country
  const languageName = Object.keys(details.languages)[0].toString();
  const allLanguages = Object.values(details.languages)
  const currencies = Object.entries(details.currencies).map((curr) => curr[1].name);
  const borderingCountries = details.borders
  
  return (
    <div
      className= "details"
    >
      <main className="container">
        <div className="left-side">
          <button
            className="back-button"
            onClick={() => navigate("/")}
          >
            <BiArrowBack /> Back
          </button>
          <img
            src={details.flags.png}
            alt={`flag of ${details.name.common}`}
            className="country-flag"
          />
        </div>
        <div className="right-side">
          <h1>{details.name.common ? details.name.common : "none"}</h1>
          <div className="details-section">
            <section className="left-details-column">
              <p><span>Native Name: </span>{details.name.nativeName[languageName].common}</p>
              <p><span>Population: </span>{Number(details.population).toLocaleString("en-us")}</p>
              <p><span>Region: </span>{details.region}</p>
              <p><span>Sub Region: </span> {details.subregion}</p>
              <p><span>Capital: </span>{details.capital}</p>
            </section>
            <section className="right-details-column">
              <p><span>Top Level Domain: </span>{details.tld}</p>
              <p><span>Currencies: </span>{currencies.join(', ')}</p>
              <p><span>Languages: </span>{allLanguages.join(', ')}</p>
            </section>
          </div>
          <div className="border-countries">
            <span>Border Countries: </span>
            {borderingCountries ? borderingCountries.map(country=><BorderCountries country={country} />) : 'no bordering countries'}
          </div>
        </div>
      </main>
    </div>
  );
}
