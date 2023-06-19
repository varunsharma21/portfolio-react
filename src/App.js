import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro.jsx";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import amazonImage from "./assets/amazon-image.jpeg";
import weatherAppImage from "./assets/weather-image.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <h2
        style={{
          marginLeft: "100px",
          marginBottom: "50px",
          marginRight: "100px",
        }}
      >
        Projects
      </h2>
      <Projects
        firstProjectPath="https://amazon-clone-by-varun.vercel.app/"
        firstImage={amazonImage}
        secondProjectPath="https://varunsharma21.github.io/Weather-App/"
        secondImage={weatherAppImage}
        titleOne="Amazon Clone"
        titleTwo="Weather App"
      />
      <Projects
        firstProjectPath="https://amazon-clone-by-varun.vercel.app/"
        firstImage={amazonImage}
        secondProjectPath="https://varunsharma21.github.io/Weather-App/"
        secondImage={weatherAppImage}
        titleOne="Amazon Clone"
        titleTwo="Weather App"
      />
      <h2
        style={{
          marginLeft: "100px",
          marginBottom: "50px",
          marginRight: "100px",
        }}
      >
        Skills
      </h2>
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
