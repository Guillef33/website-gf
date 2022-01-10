import React, { useState } from "react";
import projects from "./projects.js";
import Project from "./Project";

//CSS
import "../index.css";

function ProjectList() {
  return (
    <>
      <section className="projectList">
        {projects.map((project) => (
          <Project
            img={project.img}
            title={project.title}
            technology={project.technology}
            id={project.id}
            job={project.job}
            url={project.url}
            category={project.category}
            key={project.id}
            description={project.description}
          />
        ))}
      </section>
    </>
  );
}

export default ProjectList;
