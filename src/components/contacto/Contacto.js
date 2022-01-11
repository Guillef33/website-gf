import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Input from './components/input/Input'

import './contacto.css';

function Contacto() {

  const [hasError, sethasError] = useState(false);

  
  function handleChange(name, value) {
    if (name === "name") {
      // setUser(value);
      console.log("Nombre de usuario agregado");
    } else {
      console.log("No es un texto de user");
      if (value.length < 6) {
        // setPasswordError(true);
        console.log("Se activa el error");
      } else {
        // setPasswordError(false);
        // setPassword(value);
        console.log("Buena contrasena siga sigas");
      }
    }
  }

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
            <Input
              atributo={{
                id: "name",
                name: "name",
                type: "text",
                placeholder: "ingrese tu nombre",
              }}
              handleChange={handleChange}
            />
            {hasError && (
              <label className="label-error">
                Su nombre debe tener mas letras. Minimo 6.
              </label>
            )}
          </div>
          <div className="form-group">
            <Input
              atributo={{
                id: "company",
                name: "company",
                type: "text",
                placeholder: "ingrese tu empresa",
              }}
              handleChange={handleChange}
            />
          </div>
          <div className="form-group">
            <Input
              atributo={{
                id: "email",
                name: "email",
                type: "email",
                placeholder: "ingrese tu email",
              }}
              handleChange={handleChange}
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
