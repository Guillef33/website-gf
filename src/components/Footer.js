import React from "react";
import ReactDom from "react-dom";

//CSS
import "../index.css";

function Footer() {
  return (
    <footer className="footerContainer container">
      <div>
        <h3>
         Web design and visual identity agency based in Buenos Aires, Argentina.
        </h3>
      </div>
      <div>
        <h3>Secciones</h3>
        <ul>
          <li>Autores</li>
          <li>Catalogo</li>
          <li>Contacto</li>
        </ul>
      </div>

      <div>
        <h3>Redes Sociales</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
