"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { NAV_LINKS, SITE } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector<HTMLElement>(l.href)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const ratio = max > 0 ? doc.scrollTop / max : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${Math.min(1, ratio)})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="container flex h-14 items-center justify-between gap-3">
        <a href="#main" className="flex items-center gap-2.5" aria-label={`${SITE.name}, back to top`}>
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand font-mono text-[11px] font-semibold text-white" aria-hidden="true">
            RP
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-bold tracking-tight">{SITE.name}</span>
            <span className="mt-1 hidden font-mono text-[10px] uppercase tracking-[0.16em] text-faint sm:block">{SITE.role}</span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-0.5 md:flex">
          <a href="#main" className="rounded-md px-2.5 py-1.5 text-[13px] font-medium text-muted transition-colors hover:text-ink">
            Home
          </a>
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-md px-2.5 py-1.5 text-[13px] font-medium transition-colors ${isActive ? "text-ink" : "text-muted hover:text-ink"}`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-2.5 bottom-0 h-px origin-left bg-brand transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={mounted && resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-line text-muted transition hover:border-line-strong hover:text-ink"
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

          <a href={SITE.resume} className="btn btn-primary btn-sm hidden sm:inline-flex">
            Resume
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-line text-muted md:hidden"
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

      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 block h-px">
        <span ref={progressRef} className="block h-px origin-left bg-gradient-to-r from-brand to-accent" style={{ transform: "scaleX(0)" }} />
      </span>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-bg md:hidden">
          <div className="container flex flex-col py-1.5">
            <a href="#main" onClick={() => setOpen(false)} className="rounded-md px-2 py-2.5 text-sm font-medium text-muted hover:bg-surface-2 hover:text-ink">
              Home
            </a>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-2 py-2.5 text-sm font-medium hover:bg-surface-2 ${active === link.href ? "text-ink" : "text-muted hover:text-ink"}`}
              >
                {link.label}
              </a>
            ))}
            <a href={SITE.resume} onClick={() => setOpen(false)} className="btn btn-primary mt-2">
              Download resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}