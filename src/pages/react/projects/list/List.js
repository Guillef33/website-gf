import React, { useState, useEffect } from "react";
import RegalosList from "./RegalosList";
import props from "prop-types"; // Las props que va a recibir nuestro componente si son requeridas o no
import { faCandyCane } from "@fortawesome/free-solid-svg-icons";
import Counter from "./Counter";
import Modal from "./Modal";

import './list.css';

function List() {
  let localRegalos;
  if (localStorage.getItem("Nuevo Regalo")) {
    localRegalos = JSON.parse(localStorage.getItem("Nuevo Regalo"));
  } else {
    console.log("No hay nada en el storage");
  }

  const [cantidad, setCantidad] = useState(1);

  const [regalo, setRegalo] = useState({
    addGift: "",
    gifs: localRegalos ? localRegalos : [],
    metodo: "agregar",
    // inicialState: false,
    // url: "",
    // dedicatoria: ""
  });

  useEffect(() => {
    //  api.regalo.gifs().then(regalo => setRegalo(regalo))
  }, []);

  const [url, setUrl] = useState();
  const [dedicatoria, setDedicatoria] = useState();
  const [addGift, setAddGift] = useState();

  const removeItem = (item) => {
    let prevRegalo = regalo.gifs;
    prevRegalo = prevRegalo.filter((gift) => gift.id !== item.id); //guardamos el resultado del filtrado
    setRegalo({
      ...regalo,
      gifs: prevRegalo,
    });
    localStorage.setItem("Nuevo Regalo", JSON.stringify(prevRegalo)); // Sobreescribe el LocalStorage con el nuevo array actualizado luego de borrar
  };

  const validarRepetidos = (gifs, addGift) => {
    let response = -1;
    gifs.forEach((el, index) => {
      if (el.title.toUpperCase() === addGift.toUpperCase()) {
        response = index;
      }
    });
    return response;
  };

  /// Revisar
  function handleSubmit(e) {
    e.preventDefault();
    if (regalo.gifs.length >= 0) {
      if (!addGift || addGift === " ") {
        alert("Debes agregar un titulo");
      } else if (validarRepetidos(regalo.gifs, regalo.addGift) !== -1) {
        alert("Ese regalo esta repetido");
      } else {
        let newContainer = regalo.gifs;
        newContainer[newContainer.length] = {
          id: regalo.gifs.length + 1,
          title: addGift,
          url: url,
          cantidad: cantidad, /// aca estamos agregando un atributo al array gift, que es una constante del componente padre List. Y este atributo lo pasaremos como prop al componente hijo Counter
          dedicatoria: dedicatoria,
          metodo: "agregar",
        };
        setRegalo({
          ...regalo,
          gifs: newContainer,
          addGift: "",
          inicialState: true,
          url: "",
          dedicatoria: "",
          metodo: "agregar",
        });

        localStorage.setItem("Nuevo Regalo", JSON.stringify(newContainer));
      }
    }
  }

  const [show, setShow] = useState(false); // tener cuidado porque si se utiliza show en otro elemento lo puede mostrar, usar showModal

  function editItem(id) {
    let nuevoId = id;
    console.log(nuevoId);

    let editRegalo = regalo.gifs;
    editRegalo = editRegalo.filter((gift) => gift.id !== id.id); //guardamos el resultado del filtrado
    console.log(id);
    console.log(editRegalo);
    setRegalo({
      ...regalo,
      gifs: editRegalo,
      id: id,
      metodo: "editar",
    });
    setShow(true);
  }

  return (
    <div className="Lista" onClick={props.onClose}>
      <div className="list-wrapper">
        <h2>Regalos:</h2>
        <input
          type="submit"
          value="Agrega un nuevo regalo"
          onClick={() => setShow(true)}
          autoFocus
        />

        <Modal
          onClose={() => setShow(false)}
          show={show}
          handleSubmit={handleSubmit}
          regalo={regalo}
          cantidad={cantidad}
          setCantidad={setCantidad}
          setUrl={setUrl}
          setDedicatoria={setDedicatoria}
          setAddGift={setAddGift}
        />

        <ul>
          {regalo.gifs.length === 0 ? ( // 0 elementos del array, esto aplica tanto para el boton de borrar como para el borrado
            <div className="empty-state">
              <p>Ahora puedes agregar regalos</p>
            </div>
          ) : (
            <>
              <RegalosList
                lista={regalo.gifs}
                removeItem={removeItem}
                editItem={editItem}
              />{" "}
              {/* cambiar o unificar los nombres */}
              <button
                className="btn"
                onClick={() =>
                  setRegalo({ ...regalo, gifs: [], inicialState: false })
                }
                style={{ width: "90%", margin: "20px" }}
              >
                Borra todos los regalos
              </button>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default List;
