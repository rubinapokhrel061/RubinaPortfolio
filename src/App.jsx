import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomeSec from "./components/HomeSec";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      {/* <Navbar />
      <HomeSec />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer /> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeSec />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
