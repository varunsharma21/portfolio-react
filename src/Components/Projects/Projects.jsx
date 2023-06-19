import React from "react";
import "./Projects.css";

function Projects(props) {
  return (
    <div className="projects">
      <div className="projects-first">
        <a target="_blank" href={props.firstProjectPath}>
          <img className="project-image" src={props.firstImage} alt="" />
        </a>
        <p className="projects-title">{props.titleOne}</p>
      </div>
      <div className="projects-second">
        <a target="_blank" href={props.secondProjectPath}>
          <img className="project-image" src={props.secondImage} alt="" />
        </a>
        <p className="projects-title">{props.titleTwo}</p>
      </div>
    </div>
  );
}

export default Projects;
