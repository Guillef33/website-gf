import React, { useRef } from "react";
import emailjs from "emailjs-com";

import './contacto.css';

function Contacto() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_iurxj7h",
        e.target,
        "user_vqPFxAk62xt1529ZNfLfd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div className="container form-wrapper">
        <form onSubmit={sendEmail} className="estilos-formulario">
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              id="nameImput"
              placeholder="Ingrese tu nombre"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="company"
              className="form-control"
              id="companyInput"
              placeholder="La empresa o negocio"
            />
          </div>
          <div className="form-group">
            <input
              name="email"
              type="email"
              className="form-control"
              id="emailImput"
              placeholder="Escribi tu email"
            />
          </div>
          <div className="submit-container">
            <input type="submit" value="Enviar" className="btn-primary" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Contacto;
