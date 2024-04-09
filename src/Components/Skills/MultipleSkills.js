import React from "react";
import Skills from "./Skills";
import styles from "./MultipleSkills.module.css";
import Lottie from "lottie-react";
import skillsLottie from "../../assets/skills-lottie.json";

const frontEndSkillsOne = ["HTML5", "CSS3", "Javascript", "ReactJS"];

const frontEndSkillsTwo = ["Bootstrap", "REST API"];

const mobileSkills = ["Flutter", "Dart", "Dio"];

function MultipleSkills() {
  return (
    <div className={styles["multiple-skills"]}>
      <div className={styles["multiple-skills__left"]}>
        <h3>Web</h3>
        <div className={styles["multiple-skills__web"]}>
          <div className={styles.skills}>
            {frontEndSkillsOne.map((skill) => (
              <Skills skill={skill} />
            ))}
          </div>
          <div className={styles.skills}>
            {frontEndSkillsTwo.map((skill) => (
              <Skills skill={skill} />
            ))}
          </div>
        </div>
        <h3>Mobile</h3>
        <div className={styles["multiple-skills__mobile"]}>
          {mobileSkills.map((skill) => (
            <Skills skill={skill} />
          ))}
        </div>
      </div>
      <Lottie
        className={styles["skills-lottie"]}
        animationData={skillsLottie}
        loop={true}
      />
    </div>
  );
}

export default MultipleSkills;
