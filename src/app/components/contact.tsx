"use client";

import { useState } from "react";
import { SITE } from "@/data/site";

const field =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-faint focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

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
    <section id="contact" aria-labelledby="contact-title" className="section">
      <div className="container grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">05 — Contact</p>
          <h2 id="contact-title" className="mt-4 text-4xl font-bold md:text-5xl">
            Have a product to build? Let&apos;s make it happen.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            I&apos;m open to Full Stack and Backend Developer opportunities, international remote roles,
            and interesting engineering collaborations.
          </p>

          <ul className="mt-10 space-y-3">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between rounded-xl border border-line bg-surface px-5 py-4 transition hover:border-brand/50"
                >
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide text-faint">{c.label}</p>
                    <p className="mt-0.5 font-medium">{c.value}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-faint transition group-hover:text-brand" aria-hidden="true">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="card h-fit p-6 md:p-8">
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">Full name</label>
            <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={field} />
          </div>
          <div className="mt-5">
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">Email address</label>
            <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">Message</label>
            <textarea id="message" name="message" rows={5} required minLength={10} placeholder="Tell me about your project or role..." className={`${field} resize-none`} />
          </div>
          <button type="submit" disabled={status === "sending"} className="btn btn-primary mt-6 w-full disabled:opacity-60">
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          <p role="status" aria-live="polite" className={`mt-4 text-sm font-medium ${status === "error" ? "text-brand" : "text-success"}`}>
            {status === "sent" && "Message sent. I will reply by email soon."}
            {status === "error" && `Message not sent. Check your connection and try again, or email ${SITE.email}.`}
          </p>
        </form>
      </div>
    </section>
  );
}