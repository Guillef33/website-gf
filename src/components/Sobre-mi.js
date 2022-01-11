import React from 'react'

import Jobs from "./jobs/Jobs";

import './Sobre-mi.css'

function SobreMi () {
    return (
      <>
        <div className="about-container sobre-mi-title">
          <h2>
            De las ciencias blandas a las ciencias duras con un solo objetivo:{" "}
            <strong>innovar</strong>
          </h2>
          <p>
            Hola, mi nombre es Guillermo. Desde que comence a trabajar en
            comunicacion digital (Social Media, Media Planning, Analytics, SEO)
            siempre me intereso conocer como funcionaban las cosas. Urgando
            sobre eso me encontre que Javascript era el motor donde corrian
            todos los servicios que utilizaba y que para conocer mas, necesitaba
            aprender Javascript. Eso hice. Lo comence usando a traves de
            WordPress. Y ahora lo uso con React. Este conocimiento me ayudo
            mucho a poder participar de equipos de desarrollo, en un principio
            como PM y ahora como dev.
          </p>
        </div>
      </>
    );
}

export default SobreMi;