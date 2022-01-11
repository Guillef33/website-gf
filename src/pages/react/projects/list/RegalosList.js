import React, { useState } from "react";
// import { faCandyCane } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RegalosList({ lista, removeItem, editItem }) {
  // Aca traemos la lista de regalos, destructuring porque sabemos el nombre para identificar a la prop que esta recibiendo el componente hijo

  return (
    <>
      {lista.map((item, id) => (
        <li key={id}>
          <div className="regalo-card">
            <img src={item.url} alt="imagen" className="regalo-imagen" />
            {/* <FontAwesomeIcon icon={faCandyCane} /> */}
            <div className="regalo-title">
              {item.title}{" "}
              <span className="regalo-cantidad-badge">{item.cantidad}</span>
            </div>
            <div className="regalo-dedicatoria">{item.dedicatoria}</div>
            <button onClick={() => editItem(id)}>e</button>
          </div>
          <button onClick={() => removeItem(item)}>X</button>
        </li>
      ))}
      {console.log(lista[0])}
    </>
  );
}

export default RegalosList;

// const removeItem = (id) => {
//   let newPeople = regalo.gifs.filter((rega) => rega.id !== id);
//   setRegalo(newPeople);
// };
