import Reveal from "./reveal";
import Section from "./section";
import { EXPERIENCE } from "@/data/site";

export default function Experience() {
  return (
    <Section id="experience" index="02" label="Experience" title="Where I've worked" intro="Enterprise products, shipped and maintained in production.">
      <ol>
        {EXPERIENCE.map((e, i) => (
          <li key={e.role + e.period} className={i > 0 ? "mt-6 border-t border-line pt-5" : ""}>
            <Reveal delay={i * 60}>
              <div className="grid gap-2.5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-6">
                <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-start sm:gap-1.5">
                  <p className="font-mono text-[11px] text-faint">{e.period}</p>
                  <span className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted">{e.type}</span>
                  {i === 0 ? (
                    <span className="inline-flex items-center gap-1.5 rounded border border-brand/30 bg-brand-soft px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-brand">
                      <span className="h-1 w-1 rounded-full bg-brand" aria-hidden="true" />
                      Current
                    </span>
                  ) : null}
                </div>
                <div>
                  <h3 className="text-base font-bold sm:text-lg">{e.role}</h3>
                  <p className="mt-0.5 text-sm text-muted">
                    {e.company} <span className="text-faint">·</span> {e.location}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{e.summary}</p>
                  <ul className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-[13px] leading-relaxed text-muted">
                        <span className="mt-[0.55rem] h-px w-2.5 shrink-0 bg-brand/60" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}