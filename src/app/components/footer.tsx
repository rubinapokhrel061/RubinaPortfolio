import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container flex flex-col gap-4 py-6 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-display font-semibold text-ink">{SITE.name}</span>
          <span className="hidden h-3 w-px bg-line-strong sm:block" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            {SITE.role} · {SITE.location}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-ink">GitHub</a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-ink">LinkedIn</a>
          <a href={`mailto:${SITE.email}`} className="transition hover:text-ink">Email</a>
          <a href="#main" className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint transition hover:text-ink">
            Top
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5M6 11l6-6 6 6" />
            </svg>
          </a>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </footer>
  );
}