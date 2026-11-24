"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { NAV_LINKS, SITE } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="#main" className="flex items-center gap-2.5" aria-label={`${SITE.name}, back to top`}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand font-display text-sm font-bold text-white" aria-hidden="true">
            R
          </span>
          <span className="font-display text-lg font-bold tracking-tight">{SITE.name}</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          <a href="#main" className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition hover:bg-surface-2 hover:text-ink">
            Home
          </a>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition hover:bg-surface-2 hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={mounted && resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition hover:border-line-strong hover:text-ink"
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )
            ) : (
              <span className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <a href={SITE.resume} className="btn btn-primary hidden !px-4 !py-2 sm:inline-flex">
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted md:hidden"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-bg md:hidden">
          <div className="container flex flex-col gap-1 py-4">
            <a href="#main" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-base font-medium text-muted hover:bg-surface-2 hover:text-ink">
              Home
            </a>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-base font-medium text-muted hover:bg-surface-2 hover:text-ink">
                {l.label}
              </a>
            ))}
            <a href={SITE.resume} onClick={() => setOpen(false)} className="btn btn-primary mt-2">
              Download Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}