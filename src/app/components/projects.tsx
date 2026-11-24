import Image from "next/image";
import { getImgPath } from "@/utils/image";
import Reveal from "./reveal";
import { PROJECTS } from "@/data/site";

function host(href: string) {
  return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section bg-surface-2/50">
      <div className="container">
        <Reveal>
          <p className="eyebrow">03 — Projects</p>
          <h2 id="projects-title" className="mt-4 max-w-2xl text-4xl font-bold md:text-5xl">
            Featured projects
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Production software I have built and shipped, with live links where they are public.
          </p>
        </Reveal>

        <div className="mt-16 space-y-20 md:space-y-28">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title}>
              <article className="group grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
                <div className={`card overflow-hidden rounded-2xl ${i % 2 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-2.5">
                    <span className="flex gap-1.5" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                      <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                      <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                    </span>
                    <span className="ml-2 truncate rounded-md border border-line bg-surface px-2.5 py-0.5 font-mono text-xs text-faint">
                      {host(p.links[0].href)}
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <Image
                      src={getImgPath(p.image)}
                      alt={p.alt}
                      width={1200}
                      height={700}
                      sizes="(min-width: 1024px) 560px, 100vw"
                      loading={i === 0 ? "eager" : "lazy"}
                      className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-brand">0{i + 1}</span>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">{p.category}</p>
                  </div>
                  <h3 className="mt-3 text-3xl font-bold md:text-4xl">{p.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{p.overview}</p>

                  <div className="mt-6 rounded-xl border border-line bg-surface p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">The problem</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.problem}</p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {p.contributions.map((c) => (
                      <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                    {p.tags.map((t) => (
                      <li key={t} className="chip">{t}</li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-4 !py-2 text-sm">
                        {l.label}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}