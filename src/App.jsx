import About from "./components/About";
// import Blogs from "./Components/Blogs";
import Contact from "./components/Contact";
import EdSkills from "./components/EdSkills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Projects />
      <EdSkills />
      <Contact />
    </div>
  );
}

export default App;