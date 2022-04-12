import { BrowserRouter } from "react-router-dom";
import Topnavbar from "./components/Topbar/Topnavbar";
import Homesection from "./components/Home/Homesection";
// import Aboutsection from './components/Aboutsection';
// import Skillsection from './components/Skillsection';
// import ProjectDetail from './components/ProjectDetail';
// import Contactsection from './components/Contactsection';
import Footer from "./components/Footer/Footer";

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
