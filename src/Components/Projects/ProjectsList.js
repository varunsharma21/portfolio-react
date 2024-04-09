import React from "react";
import styles from "./ProjectsList.module.css";
import amazonPoster from "./../../assets/amazon-image.jpeg";
import Project from "./Project";

const projects = [
  {
    title: "Amazon Clone",
    poster: amazonPoster,
    projectPath: "https://amazon-clone-by-varun.vercel.app/",
  },
  {
    title: "Amazon Clone",
    poster: amazonPoster,
    projectPath: "https://amazon-clone-by-varun.vercel.app/",
  },
  {
    title: "Amazon Clone",
    poster: amazonPoster,
    projectPath: "https://amazon-clone-by-varun.vercel.app/",
  },
  {
    title: "Amazon Clone",
    poster: amazonPoster,
    projectPath: "https://amazon-clone-by-varun.vercel.app/",
  },
];

const ProjectsList = () => {
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <Project
          projectPath={project.projectPath}
          poster={project.poster}
          title={project.title}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
