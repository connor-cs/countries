import React from "react";

export default function Card({props}){
    return (
        <div className="card">
            <img src={props.flags.png} alt='flag' />
            <h3>{props.name.common}</h3>
            <p>Population: {props.population}</p>
        </div>
    )
}