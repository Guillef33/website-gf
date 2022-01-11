import React from "react";
import Counter from "./Counter";

function Modal({
  handleSubmit,
  regalo,
  cantidad,
  setCantidad,
  show,
  onClose,
  setUrl,
  setDedicatoria,
  setAddGift,
}) {
  if (!show) {
    // si Show es falso, retorno nulo, no existe, no retorna nada.
    return null;
  }

  return (
    <div className="modal-container">
      <form onSubmit={handleSubmit}>
        <div className="addRegaloEnModal">
          {regalo.metodo === "agregar" ? (
            <h3>Agrega un nuevo regalo, una imagen y una dedicatoria</h3>
          ) : (
            <h3>Edita el regalo, una imagen y una dedicatoria</h3>
          )}
          <input
            type="text"
            placeholder="Agrega regalo..."
            onChange={(e) => setAddGift(e.target.value)}
            autoFocus
          />
          <input
            type="text"
            placeholder="Agrega imagen..."
            className="imagen-input"
            onChange={(e) => setUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="A quien se lo vas a regalar"
            onChange={(e) => setDedicatoria(e.target.value)}
          />
          <Counter
            cantidad={cantidad}
            setCantidad={setCantidad} // aca estamos pasando la prop hacia el componente counter
          />
          {regalo.metodo === "agregar" ? (
            <input type="submit" value="Agregar" />
          ) : (
            <input type="submit" value="Editar" />
          )}
          <button
            className="button-cerrar"
            onClick={onClose}
            metodo={(regalo.metodo = "agregar")}
          >
            Cerrar este modal
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
