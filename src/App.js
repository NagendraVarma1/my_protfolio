
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Qualification from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
    <NavBar />
    <Home />
    <Qualification />
    <Projects />
    <Contact />
    </>
  );
}

export default App;
