import React from "react";
import "./Intro.css";
import Lottie from "lottie-react";
import coderImage from "../../assets/coder-image.json";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <p className="greeting">Hey! I am</p>
        <p className="name">Varun Sharma</p>
        <p className="description" align="justify">
          As a skilled software engineer, my expertise lies in developing
          engaging front-end experiences for web using reactJS and mobile
          applications using Flutter. With a passion for creating intuitive
          interfaces and seamless user interactions, I am dedicated to
          delivering high-quality solutions that enhance user experiences. Check
          out my portfolio to explore my work!
        </p>
      </div>
      <div className="intro-right">
        <Lottie
          className="coder-image"
          animationData={coderImage}
          loop={true}
        />
      </div>
    </div>
  );
}

export default Intro;
