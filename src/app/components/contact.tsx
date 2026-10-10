"use client";
import { useState } from "react";
import { SITE } from "@/data/site";

const field = "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none";

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
    <section id="contact" aria-labelledby="contact-title" className="no-print section bg-ink text-white">
      <div className="container grid gap-12 lg:grid-cols-2">
        <div>
          <h2 id="contact-title" className="text-4xl font-bold md:text-5xl">Let&apos;s work together</h2>
          <p className="mt-4 max-w-md text-slate-300">Hiring for a Full Stack or Backend role, or have a project in mind? Send a message and I will reply by email.</p>
          <ul className="mt-8 space-y-3 text-lg">
            <li><a className="hover:text-white/70" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><a className="hover:text-white/70" href={SITE.phoneHref}>{SITE.phone}</a></li>
            <li><a className="hover:text-white/70" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className="hover:text-white/70" href={SITE.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
        <form onSubmit={onSubmit} className="space-y-5 rounded-2xl bg-white p-6 text-ink md:p-8">
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">Full name</label>
            <input id="name" name="name" required autoComplete="name" className={field} />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">Email address</label>
            <input id="email" name="email" type="email" required autoComplete="email" className={field} />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">Message</label>
            <textarea id="message" name="message" rows={5} required className={`${field} resize-none`} />
          </div>
          <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-60 sm:w-auto">
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          <p role="status" aria-live="polite" className={`text-sm font-medium ${status === "error" ? "text-brand" : "text-emerald-700"}`}>
            {status === "sent" && "Message sent. I will reply by email soon."}
            {status === "error" && `Message not sent. Check your connection and try again, or email ${SITE.email}.`}
          </p>
        </form>
      </div>
    </section>
  );
}
