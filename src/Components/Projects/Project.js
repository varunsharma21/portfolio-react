import React from "react";
import styles from "./Project.module.css";

function Project(props) {
  return (
    <div className={styles.container}>
      <a target="_blank" href={props.projectPath}>
        <img className={styles["project-image"]} src={props.poster} alt="" />
      </a>
      <p className={styles["projects-title"]}>{props.title}</p>
    </div>
  );
}

export default Project;
