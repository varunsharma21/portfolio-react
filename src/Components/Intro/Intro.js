import React from "react";
import styles from "./Intro.module.css";
import Lottie from "lottie-react";
import coderImage from "../../assets/coder-image.json";

function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles["intro-left"]}>
        <p className={styles.greeting}>Hey, I am</p>
        <p className={styles.name}>Varun Sharma</p>
        <p className={styles.description}>
          As an adept full-stack engineer specializing in the MERN stack, my
          expertise is centered around crafting captivating front-end
          experiences for web applications using ReactJS and delivering robust
          back-end solutions with Node.js, Express, and MongoDB. With a keen eye
          for detail and a passion for creating intuitive interfaces, I am
          committed to developing seamless user interactions that elevate the
          overall user experience. Explore my portfolio to discover a showcase
          of my work and see how I bring projects to life with precision and
          innovation!
        </p>
      </div>
      <div className={styles["intro-right"]}>
        <Lottie
          className={styles["coder-image"]}
          animationData={coderImage}
          loop={true}
        />
      </div>
    </div>
  );
}

export default Intro;
