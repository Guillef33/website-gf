import React from 'react'

import Jobs from "./jobs/Jobs";

function SobreMi () {
    return (
      <section>
        <div className='about-container'>
          <h2>Mi nombre es Guillermo y puedo ayudarte</h2>
          <p>Te invito a conocer un poco mas</p>
        </div>
        <Jobs />
      </section>
    );
}

export default SobreMi;