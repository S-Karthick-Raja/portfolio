import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import Topnavbar from './components/Topnavbar';
import Homesection from './components/Home/Homesection';
// import Aboutsection from './components/Aboutsection';
// import Skillsection from './components/Skillsection';
// import Contactsection from './components/Contactsection';
import Footer from './components/Footer';
import Topnavbar from './components/Topbar/Topnavbar';
// import ProjectDetail from './components/ProjectDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topnavbar />
        <Homesection />
        {/* <Aboutsection />
        <Skillsection />
        <ProjectDetail />
        <Contactsection /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
