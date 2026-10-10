import Hero from "./components/hero";
import Marquee from "./components/marquee";
import About from "./components/about";
import Work from "./components/work";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Contact from "./components/contact";

export default function Page() {
  return (
    <main id="main">
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
