import React from "react";
import styles from "./ProjectsList.module.css";
import amazonPoster from "./../../assets/amazon-image.jpeg";
import quizNinja from "./../../assets/quiz-ninja.jpeg";
import showBuzz from "./../../assets/show-buzz.jpeg";
import toDoApp from "./../../assets/to-do-app.jpeg";
import Project from "./Project";

const projects = [
  {
    title: "Amazon Clone",
    poster: amazonPoster,
    projectPath: "https://amazon-clone-by-varun.vercel.app/",
  },
  {
    title: "Show Buzz",
    poster: showBuzz,
    projectPath: "https://show-buzz-varun.vercel.app/",
  },
  {
    title: "Quiz Ninja",
    poster: quizNinja,
    projectPath: "https://quiz-ninja.vercel.app/",
  },
  {
    title: "To Do App",
    poster: toDoApp,
    projectPath: "https://github.com/varunsharma21/to-do-app",
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
