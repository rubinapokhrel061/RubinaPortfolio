import { HERO_STATS, SITE } from "@/data/site";

const d = (ms: number) => ({ animationDelay: `${ms}ms` });

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full blur-3xl" style={{ background: "var(--glow-brand)" }} aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full blur-3xl" style={{ background: "var(--glow-accent)" }} aria-hidden="true" />

      <div className="container relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium" style={d(50)}>
            <span className="status-dot h-2 w-2 rounded-full bg-success" aria-hidden="true" />
            {SITE.availability}
          </p>

          <h1 id="hero-title" className="rise mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl xl:text-6xl" style={d(160)}>
            Building scalable digital products &amp; <span className="gradient-text">intelligent systems</span>.
          </h1>

          <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted" style={d(280)}>
            I&apos;m {SITE.name}, a {SITE.role} building enterprise applications, AI-powered automation,
            real-time systems and scalable backend solutions.
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={d(400)}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href={SITE.resume} className="btn btn-ghost">Download Resume</a>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition hover:border-line-strong hover:text-ink">
              <GitHubIcon />
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition hover:border-line-strong hover:text-ink">
              <LinkedInIcon />
            </a>
          </div>

          <dl className="rise mt-12 flex divide-x divide-line border-t border-line pt-6" style={d(520)}>
            {HERO_STATS.map((s) => (
              <div key={s.label} className="pr-8">
                <dt className="font-display text-2xl font-bold sm:text-3xl">{s.value}</dt>
                <dd className="text-sm text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise relative mx-auto w-full max-w-xl lg:max-w-none" style={d(300)}>
          <div className="card overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
              <span className="ml-2 font-mono text-xs text-faint">rubina.stack.ts</span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed" style={{ backgroundColor: "var(--code-bg)", color: "var(--code-ink)" }}>
              <code>
                <span className="text-[#71717a]">{"// what I build"}</span>{"\n"}
                <span className="text-[#c4b5fd]">const</span> <span className="text-[#93c5fd]">stack</span> <span className="text-[#71717a]">=</span> {"{"}{"\n"}
                {"  "}<span className="text-[#e6e6ee]">frontend:</span> <span className="text-[#86efac]">["React", "Next.js", "TypeScript"]</span>,{"\n"}
                {"  "}<span className="text-[#e6e6ee]">backend:</span> <span className="text-[#86efac]">["Node.js", "Express", "REST + WebSockets"]</span>,{"\n"}
                {"  "}<span className="text-[#e6e6ee]">data:</span> <span className="text-[#86efac]">["PostgreSQL", "MongoDB", "Redis"]</span>,{"\n"}
                {"  "}<span className="text-[#e6e6ee]">queues:</span> <span className="text-[#86efac]">["BullMQ"]</span>,{"\n"}
                {"  "}<span className="text-[#e6e6ee]">ai:</span> <span className="text-[#86efac]">["OCR", "RAG", "LangChain"]</span>,{"\n"}
                {"};"}{"\n"}{"\n"}
                <span className="text-[#71717a]">{"// shipping to production"}</span>{"\n"}
                <span className="text-[#c4b5fd]">export async function</span> <span className="text-[#fbbf24]">ship</span><span className="text-[#e6e6ee]">(product)</span> {"{"}{"\n"}
                {"  "}<span className="text-[#c4b5fd]">await</span> <span className="text-[#fbbf24]">integrate</span>({"{"} <span className="text-[#e6e6ee]">erp:</span> <span className="text-[#86efac]">"SAP Business One"</span>, <span className="text-[#e6e6ee]">pay:</span> <span className="text-[#86efac]">"NCHL"</span> {"}"});{"\n"}
                {"  "}<span className="text-[#c4b5fd]">return</span> <span className="text-[#fbbf24]">deploy</span>(product);{"\n"}
                {"}"}
              </code>
            </pre>
          </div>

          <div className="bob absolute -left-4 top-8 hidden rounded-xl border border-line bg-surface px-3.5 py-2 text-sm font-medium shadow-lg sm:block" aria-hidden="true">
            SAP Business One
          </div>
          <div className="bob absolute -right-3 bottom-16 hidden rounded-xl border border-line bg-surface px-3.5 py-2 text-sm font-medium shadow-lg sm:block" style={{ animationDelay: "-2s" }} aria-hidden="true">
            WebSockets · BullMQ
          </div>
        </div>
      </div>
    </section>
  );
}