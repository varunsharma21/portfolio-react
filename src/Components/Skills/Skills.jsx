import React from "react";
import "./Skills.css";

function Skills(props) {
  return (
    <div className="skill">
      <p>{props.skill}</p>
    </div>
  );
}

export default Skills;
