import Hero from "./components/hero";
import Marquee from "./components/marquee";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

export default function Page() {
  return (
    <main id="main">
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}