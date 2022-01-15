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
import reactProjects from './reactProjectsList'
import projects from "../../../components/portfolio/projects";



function ReactProjects() {

  const [projectos, setProjectos] = useState(reactProjects);

  return (
    <>
      <div>
        <h3 className="project-title">Estos son mis proyectos en React.Js</h3>
        <div className="react-project-wrapper">
          {projectos.map((proj, index) => (
            <NavLink key={proj.index} to={proj.link} className="react-project-article">
              <div
                style={{
                  backgroundImage: `url(${proj.image})`,
                  backgroundSize: "cover",
                  height: "300px",
                  padding: "20px",
                }}
              >
                <h2 className="react-project-title">{proj.title}</h2>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

    </>
  );
}

export default ReactProjects;
