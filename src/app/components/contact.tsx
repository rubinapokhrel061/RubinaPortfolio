"use client";

import { useState } from "react";
import Reveal from "./reveal";
import Section from "./section";
import { SITE } from "@/data/site";

const field =
  "w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink transition placeholder:text-faint focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

const contacts = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "LinkedIn", value: "rubinapokhrel", href: SITE.linkedin },
  { label: "GitHub", value: "rubinapokhrel061", href: SITE.github },
  { label: "Portfolio", value: "rubinapokhrel61.com.np", href: SITE.url },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(new FormData(form)), _subject: "New message from your portfolio" }),
      });
      const data = await res.json();
      if (!res.ok || String(data.success) !== "true") throw new Error("failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      index="05"
      label="Contact"
      title="Let's build your next product."
      intro="Open to full stack and backend roles, remote work and engineering collaborations."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-10">
        <Reveal>
          <p className="max-w-md text-base leading-relaxed text-muted">
            Have a product to build or a role to fill? Send a message and I&apos;ll reply by email — usually within a day.
          </p>

          <ul className="mt-6 divide-y divide-line border-y border-line">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 py-3"
                >
                  <span className="flex min-w-0 flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">{c.label}</span>
                    <span className="mt-0.5 truncate text-sm font-medium">{c.value}</span>
                  </span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-faint transition group-hover:text-brand" aria-hidden="true">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
            Based in {SITE.location} · working remotely
          </p>
        </Reveal>

        <Reveal delay={80}>
          <form onSubmit={onSubmit} className="card p-5 md:p-6">
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-semibold">Full name</label>
              <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={field} />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="mb-1.5 block text-xs font-semibold">Email address</label>
              <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-xs font-semibold">Message</label>
              <textarea id="message" name="message" rows={4} required minLength={10} placeholder="Tell me about your project or role..." className={`${field} resize-none`} />
            </div>
            <button type="submit" disabled={status === "sending"} className="btn btn-primary mt-5 w-full disabled:opacity-60">
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            <p role="status" aria-live="polite" className={`mt-3 text-xs font-medium ${status === "error" ? "text-brand" : "text-success"}`}>
              {status === "sent" && "Message sent. I will reply by email soon."}
              {status === "error" && `Message not sent. Check your connection and try again, or email ${SITE.email}.`}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}