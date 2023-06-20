import React from "react";
import Skills from "./Skills";
import "./MultipleSkills.css";
import Lottie from "lottie-react";
import skillsLottie from "../../assets/skills-lottie.json";

const frontEndSkills = [
  "HTML5",
  "CSS3",
  "Javascript",
  "ReactJS",
  "Bootstrap",
  "REST API",
];
const mobileSkills = ["Flutter", "Dart", "Dio"];

function MultipleSkills() {
  return (
    <div className="multiple-skills">
      <div className="multiple-skills__left">
        <h3
          style={{
            marginLeft: "20px",
            marginBottom: "20px",
            marginRight: "100px",
            color: "grey",
          }}
        >
          Web
        </h3>
        <div className="multiple-skills__web">
          {frontEndSkills.map((skill) => (
            <Skills skill={skill} />
          ))}
        </div>
        <h3
          style={{
            marginLeft: "20px",
            marginBottom: "20px",
            marginRight: "100px",
            color: "gray",
          }}
        >
          Mobile
        </h3>
        <div className="multiple-skills__web">
          {mobileSkills.map((skill) => (
            <Skills skill={skill} />
          ))}
        </div>
      </div>
      <Lottie
        className="skills-lottie"
        animationData={skillsLottie}
        loop={true}
      />
    </div>
  );
}

export default MultipleSkills;
