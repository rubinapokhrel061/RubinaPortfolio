import Reveal from "./reveal";
import { EXPERIENCE } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="section bg-paper">
      <div className="container">
        <h2 id="exp-title" className="text-4xl font-bold md:text-5xl">Experience</h2>
        <ol className="mt-12 border-l-2 border-line">
          {EXPERIENCE.map((e, i) => (
            <li key={e.title + e.period} className="relative pb-10 pl-8 last:pb-0">
              <span className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 bg-white ${i === 0 ? "border-brand" : "border-ink/40"}`} aria-hidden="true" />
              <Reveal><p className="text-sm font-medium text-muted">{e.period}</p>
              <h3 className="mt-1 text-2xl font-bold">{e.title}</h3>
              <p className="font-medium text-brand">{e.company}</p>
              <p className="mt-2 max-w-2xl text-muted">{e.text}</p></Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
