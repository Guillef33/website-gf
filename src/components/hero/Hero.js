import React from "react";
import Contacto from "../contacto/Contacto";

//CSS
// import "../index.css";
import "./hero.css";

function Hero() {
  return (
    <div className="hero-section container">
      <div className="hero-title">
        <h1>
          <strong>Frontend & WordPress</strong> Developer
        </h1>
        <p>
          Un desarrollador hibrido, que puede liderar equipos y que ama codear
        </p>
      </div>
      {/* <Contacto /> */}
    </div>
  );
}

export default Hero;
