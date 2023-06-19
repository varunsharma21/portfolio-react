import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <p className="greeting">Hey,</p>
        <p className="name">I am Varun Sharma</p>
        <p className="description" align="justify">
          A software engineer is a skilled professional who designs, develops,
          and maintains computer software applications. They possess expertise
          in programming languages, algorithms, and software development
          methodologies. Software engineers analyze user needs, create technical
          specifications, write code, conduct testing, and collaborate with
          teams to deliver efficient and high-quality software solutions.
        </p>
      </div>
      <div className="intro-right"></div>
    </div>
  );
}

export default Intro;
