import Reveal from "./reveal";
import { SITE } from "@/data/site";

const facts = [
  { label: "Location", value: SITE.location },
  { label: "Education", value: "BSc CSIT" },
  { label: "Experience", value: "1.5+ years" },
  { label: "Company", value: "BizHub Consulting" },
];

const focus = [
  ["Enterprise ERP & SAP integrations", "Production, inventory and finance workflows on SAP Business One."],
  ["Payment integrations", "NCHL and Nepal Pay Dynamic QR with reconciliation and reversals."],
  ["Real-time systems", "WebSocket messaging with Redis and BullMQ background workers."],
  ["AI-powered automation", "OCR invoice extraction and RAG workflows that remove manual data entry."],
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">01 — About</p>
          <h2 id="about-title" className="mt-4 text-4xl font-bold md:text-5xl">
            Engineering real business software, end to end.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            I&apos;m a Full Stack Developer specializing in scalable web applications, enterprise ERP solutions,
            AI-powered automation, real-time messaging platforms and payment integrations.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            I work across frontend and backend development — building modern interfaces, REST APIs,
            database-driven applications, background processing systems and third-party integrations —
            and I care about the production details: clean APIs, reliable data and systems that keep working.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="rounded-xl border border-line bg-surface p-4">
                <dt className="font-mono text-xs uppercase tracking-wide text-faint">{f.label}</dt>
                <dd className="mt-1 text-sm font-semibold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="flex flex-col gap-5">
          <Reveal delay={100}>
            <div className="card p-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-faint">
                <span className="status-dot h-2 w-2 rounded-full bg-success" aria-hidden="true" />
                Currently
              </div>
              <p className="mt-3 font-display text-2xl font-bold">{SITE.role}</p>
              <p className="mt-1 text-muted">{SITE.company}, {SITE.location}</p>
            </div>
          </Reveal>
          {focus.map(([t, d], i) => (
            <Reveal key={t} delay={140 + i * 80}>
              <div className="card group p-6 transition hover:border-brand/50">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-brand">0{i + 1}</span>
                  <h3 className="font-display text-lg font-bold">{t}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}