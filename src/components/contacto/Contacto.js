import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Input from './components/input/Input'

import './contacto.css';

function Contacto() {

  const [hasError, sethasError] = useState(false);

  
  function handleChange(name, value) {
    console.log(handleChange);
      if (value.length < 6) {
        console.log("Se activa el error");
        sethasError(true)
      } else {
         sethasError(false);
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
          // Aca podria agregar el modal de exito
         // <ModalSuccess />
          console.log(result.text);
        },
        (error) => {
          // Aca podria agregar el modal de exito
          // <ModalError />
          console.log(error.text);
        }
      );
    // alert('Tu mensaje ha sido enviado');
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
