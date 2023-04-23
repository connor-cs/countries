import React from "react";

export default function Card({ darkMode, props, handleCardClick }) {
    return (
        <div className={darkMode ? 'darkMode-card card' : 'lightMode-card card'} key={props.cca2} onClick={()=>handleCardClick(props.cca2)} >
            <img src={props.flags.png} alt={`${props.name} flag`} />
            <h3>{props.name.common}</h3>
            <p><span>Population: </span> {Number(props.population).toLocaleString("en-US")}</p>
            <p><span>Region: </span>{props.region}</p>
            <p><span>Capital: </span>{props.capital}</p>
        </div >
    )
}