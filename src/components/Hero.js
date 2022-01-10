import React from "react";
import Contacto from './Contacto'

//CSS
import "../index.css";

function Hero() {
  return (
    <div className="hero-section container">
      <div className="hero-title">
        <h1>Experience w5</h1>
      </div>
      <div>
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/The_Fabs.JPG/338px-The_Fabs.JPG"></img> */}
        <Contacto />
      </div>
    </div>
  );
}

export default Hero;
