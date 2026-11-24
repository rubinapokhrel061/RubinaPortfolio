import Reveal from "./reveal";
import Section from "./section";
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
    <Section id="about" index="01" label="About" title="Production systems, built end to end." intro="Frontend, backend, data and integrations — owned together.">
      <div className="space-y-8">
        <Reveal>
          <p className="max-w-2xl text-base leading-relaxed text-muted">
            I&apos;m a Full Stack Developer specializing in scalable web applications, enterprise ERP solutions,
            AI-powered automation, real-time messaging platforms and payment integrations.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            I work across the stack — modern interfaces, REST APIs, database-driven applications, background
            processing and third-party integrations — and I care about the production details: clean APIs,
            reliable data and systems that keep working.
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="bg-surface px-4 py-3">
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">{f.label}</dt>
                <dd className="mt-1 text-sm font-semibold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-lg border border-line bg-surface px-4 py-3">
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Currently</span>
            <span className="text-sm font-medium">{SITE.role}</span>
            <span className="text-sm text-muted">· {SITE.company}</span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">Focus areas</h3>
          </Reveal>
          <ul className="mt-3 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {focus.map(([title, text], i) => (
              <li key={title} className="border-t border-line pt-3">
                <Reveal delay={(i % 2) * 60}>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[11px] text-brand">0{i + 1}</span>
                    <h4 className="text-sm font-semibold">{title}</h4>
                  </div>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}