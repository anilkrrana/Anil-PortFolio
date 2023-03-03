import "./App.css";
import About from "./Components/About";
// import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import EdSkills from "./Components/EdSkills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./Components/Projects";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Projects />
      <EdSkills />
      {/* <Blogs /> */}
      <Contact />
    </div>
  );
}

export default App;