import { HERO_STATS, SITE } from "@/data/site";

const d = (ms: number) => ({ animationDelay: `${ms}ms` });

function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const Key = ({ children }: { children: React.ReactNode }) => <span className="text-[#c4b5fd]">{children}</span>;
const Str = ({ children }: { children: React.ReactNode }) => <span className="text-[#86efac]">{children}</span>;
const Prop = ({ children }: { children: React.ReactNode }) => <span className="text-[#93c5fd]">{children}</span>;
const Fn = ({ children }: { children: React.ReactNode }) => <span className="text-[#fbbf24]">{children}</span>;
const Com = ({ children }: { children: React.ReactNode }) => <span className="text-[#71717a]">{children}</span>;

const CODE: React.ReactNode[] = [
  <Com key="l1">{"// rubina.stack.ts"}</Com>,
  <span key="l2">
    <Key>{"export const"}</Key> stack = {"{"}
  </span>,
  <span key="l3">
    {"  "}
    <Prop>frontend</Prop>: [<Str>&quot;React&quot;</Str>, <Str>&quot;Next.js&quot;</Str>, <Str>&quot;TypeScript&quot;</Str>],
  </span>,
  <span key="l4">
    {"  "}
    <Prop>backend</Prop>: [<Str>&quot;Node.js&quot;</Str>, <Str>&quot;Express&quot;</Str>, <Str>&quot;WebSockets&quot;</Str>],
  </span>,
  <span key="l5">
    {"  "}
    <Prop>data</Prop>: [<Str>&quot;PostgreSQL&quot;</Str>, <Str>&quot;MongoDB&quot;</Str>, <Str>&quot;Redis&quot;</Str>],
  </span>,
  <span key="l6">
    {"  "}
    <Prop>domain</Prop>: [<Str>&quot;SAP Business One&quot;</Str>, <Str>&quot;NCHL&quot;</Str>, <Str>&quot;AI automation&quot;</Str>],
  </span>,
  <span key="l7">{"} as const;"}</span>,
  <span key="l8"> </span>,
  <span key="l9">
    <Key>{"export async function"}</Key> <Fn>ship</Fn>(product: Product) {"{"}
  </span>,
  <Com key="l10">{"  // integrate, test, deploy"}</Com>,
  <span key="l11">
    {"  "}
    <Key>await</Key> integrate(product, {"{"} erp: <Str>&quot;SAP&quot;</Str>, pay: <Str>&quot;NCHL&quot;</Str> {"}"});
  </span>,
  <span key="l12">
    {"  "}
    <Key>return</Key> deploy(product);
  </span>,
  <span key="l13">{"}"}</span>,
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden border-b border-line">
      <div className="dot-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-[26rem] w-[26rem] rounded-full blur-3xl" style={{ background: "var(--glow-brand)" }} aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 top-16 h-[22rem] w-[22rem] rounded-full blur-3xl" style={{ background: "var(--glow-accent)" }} aria-hidden="true" />

      <div className="container relative grid gap-10 py-14 md:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14">
        <div>
          <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted" style={d(40)}>
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
            {SITE.availability}
          </p>

          <h1 id="hero-title" className="rise mt-5 text-[2.15rem] font-extrabold leading-[1.04] tracking-tight sm:text-5xl xl:text-[3.4rem]" style={d(120)}>
            I build <span className="gradient-text">production-ready</span> web platforms for real businesses.
          </h1>

          <p className="rise mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg" style={d(200)}>
            I&apos;m {SITE.name}, a {SITE.role} in {SITE.location} — shipping enterprise ERP workflows,
            payment integrations, real-time messaging and AI automation with React, Node.js and TypeScript.
          </p>

          <div className="rise mt-7 flex flex-wrap items-center gap-2.5" style={d(280)}>
            <a href="#projects" className="btn btn-primary">
              View projects
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href={SITE.resume} className="btn btn-ghost">Resume</a>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition hover:border-line-strong hover:text-ink">
              <GitHubIcon />
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition hover:border-line-strong hover:text-ink">
              <LinkedInIcon />
            </a>
          </div>

          <dl className="rise mt-9 grid grid-cols-3 divide-x divide-line border-y border-line" style={d(360)}>
            {HERO_STATS.map((s) => (
              <div key={s.label} className="px-4 py-3 first:pl-0 last:pr-0">
                <dt className="font-display text-xl font-bold sm:text-2xl">{s.value}</dt>
                <dd className="mt-0.5 font-mono text-[10px] uppercase leading-tight tracking-[0.1em] text-faint">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise relative" style={d(220)}>
          <div className="card overflow-hidden">
            <div className="flex items-center justify-between gap-3 border-b border-line bg-surface-2 px-3.5 py-2">
              <p className="flex items-center gap-2 font-mono text-[11px] text-muted">
                <span className="text-faint">&gt;_</span> rubina.stack.ts
              </p>
              <span className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[10px] text-faint">TypeScript</span>
            </div>

            <div className="flex font-mono text-[12px] leading-[1.8]" style={{ backgroundColor: "var(--code-bg)", color: "var(--code-ink)" }}>
              <div aria-hidden="true" className="select-none border-r border-white/5 py-4 pl-3 pr-2 text-right text-white/20">
                {CODE.map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div className="min-w-0 flex-1 overflow-x-auto py-4 pl-4 pr-5">
                {CODE.map((line, i) => (
                  <div key={i} className="whitespace-pre">
                    {line}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-line bg-surface px-3.5 py-2 font-mono text-[10px] text-faint">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                build passing
              </span>
              <span className="tracking-[0.08em]">deployed · 1.2s</span>
            </div>
          </div>

          <p className="mt-3 text-right font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
            Shipped &amp; running in production
          </p>
        </div>
      </div>
    </section>
  );
}