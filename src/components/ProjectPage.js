import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "./projects";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

//CSS
import "../index.css";
// Constants
const ProjectImage = (props) => {
  const { img } = props; // objet destructuring the properties
  return (
    <div className="book">
      <img src={img} alt="cover" />
    </div>
  );
};

const ProjectDescription = (props) => {
  const { title, technology, id, category, description } = props; // object destructuring the properties
  const [count, setCount] = useState(0);

  return (
    <div className="product-card">
      <div className="book-wrapper">
        <h2 className="book-title">{title}</h2>
        <h4>Proyecto: {title}</h4>
        <h4>Tecnologia: {technology}</h4>
        <p>{description}</p>

      </div>
    </div>
  );
};

function ProjectPage() {
  let { idUrl } = useParams();

  console.log(projects);
  let requestedProjects;

  projects.forEach((project) => {
    if (project.id === idUrl) {
      requestedProjects = project;
    }
  });

  return (
    <>
      <div className="container breadcrumbs">
        <h3>
          Estas comprando / {requestedProjects.category} /{" "}
          {requestedProjects.title}
        </h3>
      </div>
      <div className="product-wrapper">
        <>
          <ProjectDescription
            id={requestedProjects.id}
            title={requestedProjects.title}
            author={requestedProjects.url}
            description={requestedProjects.description}
          ></ProjectDescription>
        </>
        <>
          <ProjectImage img={requestedProjects.img}></ProjectImage>
        </>
      </div>
    </>
  );
}

export default ProjectPage;
