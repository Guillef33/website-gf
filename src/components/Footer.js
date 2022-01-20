import React from "react";
import ReactDom from "react-dom";

//CSS
import "../index.css";

function Footer() {
  return (
    <footer className="footerContainer container">
      <div>
        <h3>
          Si te interesa estar en contacto escribime a guillef33@gmail.com
        </h3>
      </div>
      <div>
        <ul className="footer-list">
          <li>
            <a href="https://www.linkedin.com/in/guillef33/">Linkedin </a>
          </li>
          <li>
            <a href="https://github.com/Guillef33">GitHub</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
