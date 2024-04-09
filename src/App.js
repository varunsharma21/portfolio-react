import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import amazonImage from "./assets/amazon-image.jpeg";
import weatherAppImage from "./assets/weather-image.jpeg";
import foodOrderingAppImage from "./assets/food-ordering-app.jpeg";
import expenseTracker from "./assets/expense-tracker.jpeg";
import MultipleSkills from "./Components/Skills/MultipleSkills";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <h2>Projects</h2>
      {/* <Projects
        firstProjectPath="https://amazon-clone-by-varun.vercel.app/"
        firstImage={amazonImage}
        secondProjectPath="https://varunsharma21.github.io/Weather-App/"
        secondImage={weatherAppImage}
        titleOne="Amazon Clone"
        titleTwo="Weather App"
      /> */}
      {/* <Projects
        firstProjectPath="https://food-ordering-app-by-varun.netlify.app/"
        firstImage={foodOrderingAppImage}
        secondProjectPath="https://expense-tracker-by-varun.netlify.app/"
        secondImage={expenseTracker}
        titleOne="Food Ordering App"
        titleTwo="Expense Tracker"
      /> */}
      <h2>Skills</h2>
      <MultipleSkills />
      <Footer />
    </div>
  );
}

export default App;
