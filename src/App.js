import { BrowserRouter } from "react-router-dom";
import Topnavbar from "./components/Topbar/Topnavbar";
import Homesection from "./components/Home/Homesection";
import Aboutsection from "./components/About/Aboutsection";
// import Skillsection from "./components/Skills/Skillsection";
// import ProjectDetail from "./components/Project/ProjectDetail";
// import Contactsection from "./components/Contact/Contactsection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topnavbar />
        <Homesection />
        <Aboutsection />
        {/* <Skillsection />
        <ProjectDetail />
        <Contactsection /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
