import Reveal from "./reveal";
import { EXPERIENCE } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">02 — Experience</p>
          <h2 id="experience-title" className="mt-4 text-4xl font-bold md:text-5xl">
            Professional experience
          </h2>
        </Reveal>

        <ol className="mt-14 space-y-6">
          {EXPERIENCE.map((e, i) => (
            <li key={e.role + e.period} className="relative pl-8 md:pl-10">
              {i < EXPERIENCE.length - 1 && (
                <span className="absolute left-0 top-2 h-[calc(100%-1.5rem)] w-px bg-line" aria-hidden="true" />
              )}
              <span
                className={`absolute left-[3px] top-1.5 h-3 w-3 rounded-full border-2 border-surface ${i === 0 ? "bg-brand" : "bg-line-strong"}`}
                aria-hidden="true"
              />
              <Reveal delay={i * 80}>
                <div className="card p-6 transition hover:border-brand/40 md:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-2xl font-bold">{e.role}</h3>
                        <span className="rounded-full bg-brand-soft px-2.5 py-0.5 font-mono text-xs text-brand">{e.type}</span>
                      </div>
                      <p className="mt-1 font-medium text-muted">{e.company} · {e.location}</p>
                    </div>
                    <p className="font-mono text-sm text-faint">{e.period}</p>
                  </div>

                  <p className="mt-4 max-w-2xl text-muted">{e.summary}</p>

                  <ul className={`mt-5 gap-x-8 gap-y-2 ${e.highlights.length > 2 ? "grid sm:grid-cols-2" : "space-y-2"}`}>
                    {e.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}