import React from "react";
import Contacto from '../contacto/Contacto'

//CSS
// import "../index.css";
import './hero.css'

function Hero() {
  return (
    <div className="hero-section container">
      <div className="hero-title">
        <h1>Frontend Developer & Project Manager</h1>
        <p>
          I lead teams and love to code websites with great user experience
        </p>
      </div>
        <Contacto />
    </div>
  );
}

export default Hero;
