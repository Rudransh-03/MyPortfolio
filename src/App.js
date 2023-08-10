import './App.css';
import Achievements from './components/Achievements/Achievements';
import Education from './components/Education/Education';
import ExtraCurriculars from './components/ExtraCurriculars/ExtraCurriculars';
import Internships from './components/Internships/Internships';
import Intro from './components/Intro/Intro';
import Navbar from "./components/Navbar/Navbar";
import Pors from './components/Pors/Pors';
import Projects from './components/Projects/Projects';
import TechSkills from './components/TechSkills/TechSkills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <Education/>
      <Internships/>
      <Projects/>
      <Achievements/>
      <TechSkills/>
      <Pors/>
      <ExtraCurriculars/>
    </div>
  );
}

export default App;
