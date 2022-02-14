import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Topnavbar from './components/Topnavbar';
import Homesection from './components/Homesection';
import Aboutsection from './components/Aboutsection';
import Skillsection from './components/Skillsection';
import Contactsection from './components/Contactsection';
import Footer from './components/Footer';
import Project from './components/Project';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="scroll-up-btn">
          <i className="fas fa-angle-up"></i>
        </div>
        <Topnavbar />
        <Homesection />
        <Aboutsection />
        <Skillsection />
        <Project />
        <Contactsection />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
