import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <div className="skills-web">
        <center>
          <p>WEB</p>
        </center>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>ReactJS</li>
        </ul>
      </div>

      {/* Make another div of some skill maybe problem solving(In total 3 divs) */}

      <div className="skills-mobile">
        <center>
          <p>MOBILE</p>
        </center>
        <ul>
          <li>Dart</li>
          <li>Flutter</li>
          <li>Dio</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
