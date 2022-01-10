import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import './ReactProjects.css';

function ReactProjects() {
  return (
    <div className="project-container">
      <NavLink to="/login" className="HeroLink">
        Login
      </NavLink>
      <NavLink to="/form" className="HeroLink">
        Form
      </NavLink>

      <NavLink to="/list" className="HeroLink">
        List
      </NavLink>

      <NavLink to="/counter" className="HeroLink">
        Counter
      </NavLink>
    </div>
  );
}

export default ReactProjects;
