
import React, { useState } from 'react';
import './navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { StyledNavLink } from "../StyledNavLink";

const Panel = () => {
  const [isOpen, setOpen] = React.useState(false);


  return (
    <div className="hamb-container">
      <button
        onClick={() => setOpen(!isOpen)}
        className={`hamburger-button ${isOpen ? "open" : "close"}`}
      />
      <div className={`panel ${isOpen ? "abierto" : "close"}`}>
        <ul>
          <li>
            <StyledNavLink to="/" className="HeroLink">
             Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/sobre-mi" className="HeroLink">
              Sobre mi
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/projects" className="HeroLink">
              Products API
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/contacto" className="HeroLink">
              Contacto
            </StyledNavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Panel;