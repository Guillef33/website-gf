import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import './ReactProjects.css';
import backgroundImage from '../projects/counter/counter.png'


function ReactProjects() {
  return (
    <div className="project-container">
      <NavLink to="/login" className="ReactLink">
        Login
      </NavLink>
      <NavLink to="/form" className="ReactLink">
        Form
      </NavLink>

      <NavLink to="/list" className="ReactLink">
        #Advency Challenge by @goncy
      </NavLink>

      <NavLink
        to="/counter"
        className="ReactLink"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        Counter from Front End Mentor
      </NavLink>
    </div>
  );
}

export default ReactProjects;
