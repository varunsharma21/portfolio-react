import React from "react";
import styles from "./Skills.module.css";

function Skills(props) {
  return (
    <div className={styles.skill}>
      <p>{props.skill}</p>
    </div>
  );
}

export default Skills;
