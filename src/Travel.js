import React from "react";
import "./Travel.css"

const Travel = ({ destination, country, photo,distance }) => (
    <div className = 'cardsContainer'>
        <h1>{destination}</h1>
        <div className = "content">
            <h2>{country}</h2>
            <img src={photo} alt="#" srcset=""/>
            <h4>{distance}</h4>
        </div>

  </div>
);

export default Travel;