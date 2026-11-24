import Hero from "./components/hero";
import Marquee from "./components/marquee";
import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Contact from "./components/contact";

export default function Page() {
  return (
    <main id="main">
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}