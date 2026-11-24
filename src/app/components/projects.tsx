import Image from "next/image";
import { getImgPath } from "@/utils/image";
import Reveal from "./reveal";
import Section from "./section";
import { PROJECTS } from "@/data/site";

function host(href: string) {
  return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export default function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      label="Projects"
      title="Selected projects"
      intro="Production software I built and shipped, with live links where they are public."
      tone="muted"
    >
      <div>
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title}>
            <article className={`group ${i > 0 ? "mt-8 border-t border-line pt-8" : ""}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[11px] text-brand">0{i + 1}</span>
                  <h3 className="text-xl font-bold sm:text-2xl">{p.title}</h3>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">{p.category}</p>
              </div>

              <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-8">
                <div className={`overflow-hidden rounded-lg border border-line bg-surface ${i % 2 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-3 py-2">
                    <span className="flex gap-1" aria-hidden="true">
                      <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
                      <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
                      <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
                    </span>
                    <span className="ml-1 truncate font-mono text-[10px] text-faint">{host(p.links[0].href)}</span>
                  </div>
                  <Image
                    src={getImgPath(p.image)}
                    alt={p.alt}
                    width={1200}
                    height={700}
                    sizes="(min-width: 1024px) 420px, 100vw"
                    loading={i === 0 ? "eager" : "lazy"}
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                <div>
                  <p className="text-sm leading-relaxed text-muted">{p.overview}</p>

                  <div className="mt-4 border-l-2 border-brand/40 pl-3.5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Problem</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">{p.problem}</p>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {p.contributions.map((c) => (
                      <li key={c} className="flex gap-2 text-[13px] leading-relaxed text-muted">
                        <span className="mt-[0.5rem] h-px w-2.5 shrink-0 bg-brand/60" aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
                    {p.tags.map((t) => (
                      <li key={t} className="chip">{t}</li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-brand transition hover:text-brand-strong"
                      >
                        {l.label}
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}