import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import './ReactProjects.css';
import backgroundImage from '../projects/counter/counter.png';
import Login from '../projects/login/login.png';
import Regalo from '../projects/list/regalo.png';
import Jobs from "../projects/jobs/jobs.png";



function ReactProjects() {
  return (
    <>
      <div>
        <h3 className="project-title">Estos son mis proyectos en React.Js</h3>
      </div>
      <div className="project-container">
        <NavLink
          to="/login"
          className="ReactLink"
          style={{
            backgroundImage: `url(${Login})`,
            backgroundSize: "cover",
          }}
        >
          <p>Login</p>
        </NavLink>
        <NavLink
          to="/jobs"
          className="ReactLink"
          style={{
            backgroundImage: `url(${Jobs})`,
            backgroundSize: "cover",
          }}
        >
          <p>Jobs from FrontEnd Mentor</p>
        </NavLink>

        <NavLink
          to="/list"
          className="ReactLink"
          style={{
            backgroundImage: `url(${Regalo})`,
            backgroundSize: "cover",
          }}
        >
          <p>#Advency Challenge by @goncy</p>
        </NavLink>

        <NavLink
          to="/counter"
          className="ReactLink"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
          }}
        >
          <p>Counter from Front End Mentor</p>
        </NavLink>
      </div>
    </>
  );
}

export default ReactProjects;
