import React from "react";
import "./Projects.css";
import { ProjectList } from "../../utils/ProjectList";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Top Recent Projects</h1>
      <div className="project-list">
        {ProjectList.map((project) => (
          <div className="project-card" key={project.id}>
            <h2>{project.title}</h2>
            <div className="project-image">
              <img src={project.img} alt={`${project.title} screenshot`} />
            </div>
            <p className="project-category">{project.category}</p>
            <p className="project-techstack">{project.techstack}</p>
            <p className="project-description">{project.description}</p>
            <a href="">View</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
