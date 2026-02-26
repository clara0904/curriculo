import './App.css';
import NavBar from './sections/NavBar/NavBar';
import Welcome from './sections/Welcome/Welcome';
import About from './sections/About/About';
import Certifications from './sections/Certifications/Certifications';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Footer from './sections/Footer/Footer';
import Experience from './sections/Experience/Experience';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Welcome/>
      <About/>
      <Certifications/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
