import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container flex flex-col items-center justify-between gap-6 text-sm text-muted md:flex-row">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <p className="font-display font-semibold text-ink">{SITE.name}</p>
          <p>{SITE.role} — {SITE.location}</p>
        </div>
        <div className="flex items-center gap-5">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-ink">GitHub</a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-ink">LinkedIn</a>
          <a href={`mailto:${SITE.email}`} className="transition hover:text-ink">Email</a>
        </div>
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}