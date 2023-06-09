import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ props }) {
    const navigate = useNavigate()
    return (
        <div className='card'
            key={props.cca3} onClick={()=>navigate(`/detail/${props.cca3}`)} >
            <img src={props.flags.png} alt={`${props.name} flag`} />
            <h3>{props.name.common}</h3>
            <p><span>Population: </span> {Number(props.population).toLocaleString("en-US")}</p>
            <p><span>Region: </span>{props.region}</p>
            <p><span>Capital: </span>{props.capital}</p>
        </div >
    )
}