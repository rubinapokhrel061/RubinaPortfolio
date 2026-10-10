import Image from "next/image";
import { getImgPath } from "@/utils/image";
import Reveal from "./reveal";
import { PROJECTS } from "@/data/site";

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="section">
      <div className="container">
        <h2 id="work-title" className="text-4xl font-bold md:text-5xl">Selected work</h2>
        <p className="mt-3 max-w-xl text-muted">Production software I have built and shipped, with live links where they are public.</p>
        <div className="mt-14 space-y-20 md:space-y-28">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title}><article className={`group grid items-center gap-8 lg:gap-14 ${p.image ? "lg:grid-cols-2" : "lg:grid-cols-1"}`}>
              {p.image && (
                <div className={`overflow-hidden rounded-2xl border border-line bg-paper shadow-sm ${i % 2 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-1.5 border-b border-line bg-white px-4 py-2.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" />
                  </div>
                  <Image src={getImgPath(p.image)} alt={p.alt} width={1200} height={700} sizes="(min-width:1024px) 560px, 100vw" loading={i === 0 ? "eager" : "lazy"} className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.04]" />
                </div>
              )}
              <div className={!p.image ? "max-w-2xl rounded-2xl border border-line bg-paper p-8" : ""}>
                <p className="text-sm font-semibold text-brand">{p.type}</p>
                <h3 className="mt-1 text-3xl font-bold md:text-4xl">{p.title}</h3>
                <ul className="mt-5 list-disc space-y-2.5 pl-5 text-muted marker:text-brand">
                  {p.points.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {p.tags.map((t) => <li key={t} className="chip">{t}</li>)}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !py-2 text-sm">
                      {l.label}<span className="sr-only"> of {p.title} (opens in a new tab)</span>
                    </a>
                  ))}
                </div>
              </div>
            </article></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
