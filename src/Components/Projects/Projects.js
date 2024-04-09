import React from "react";
import styles from "./Projects.module.css";

function Projects(props) {
  return (
    <div className={styles.projects}>
      <div className={styles["projects-first"]}>
        <a target="_blank" href={props.firstProjectPath}>
          <img className="project-image" src={props.firstImage} alt="" />
        </a>
        <p className={styles["projects-title"]}>{props.titleOne}</p>
      </div>
      <div className={styles["projects-second"]}>
        <a target="_blank" href={props.firstProjectPath}>
          <img className="project-image" src={props.firstImage} alt="" />
        </a>
        <p className={styles["projects-title"]}>{props.titleOne}</p>
      </div>
    </div>
  );
}

export default Projects;
