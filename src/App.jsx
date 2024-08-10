// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
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

      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeSec />} />
          <Route path="/about" element={<About />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}

      <div>
        <Navbar />
        <HomeSec />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
