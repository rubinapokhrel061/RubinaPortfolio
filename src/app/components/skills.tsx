import Reveal from "./reveal";
import { CAPABILITIES, CERTIFICATIONS, EDUCATION, SKILL_GROUPS } from "@/data/site";

const spans = [
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-1",
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section bg-surface-2/50">
      <div className="container">
        <Reveal>
          <p className="eyebrow">04 — Skills</p>
          <h2 id="skills-title" className="mt-4 text-4xl font-bold md:text-5xl">
            Technical expertise
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            The technologies I use to design, build and operate production systems.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.group} delay={(i % 3) * 80} className={spans[i]}>
              <div className="card h-full p-6 transition hover:border-brand/40">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">{g.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="chip">{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">Engineering capabilities</h2>
            <p className="mt-3 max-w-xl text-muted">The problems I solve, and how I solve them.</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 70}>
                <div className="card h-full p-6 transition hover:border-brand/40">
                  <span className="font-mono text-xs text-brand">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-base font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-8 border-t border-line pt-12 md:grid-cols-2">
          <Reveal>
            <h2 className="text-xl font-bold">Education</h2>
            <ul className="mt-5 space-y-4">
              {EDUCATION.map((e) => (
                <li key={e.title}>
                  <p className="font-semibold">{e.title}</p>
                  <p className="text-sm text-muted">{e.place} · {e.period}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-xl font-bold">Certifications</h2>
            <ul className="mt-5 space-y-3">
              {CERTIFICATIONS.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-muted">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}