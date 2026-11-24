import type { Metadata } from "next";
import ResumeDownload from "../components/resume-download";
import { EDUCATION, EXPERIENCE, PROJECTS, SITE, SKILL_GROUPS } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${SITE.name}, ${SITE.role} in Nepal.`,
  robots: { index: true, follow: true },
};

const sectionTitle = "text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700";

export default function ResumePage() {
  return (
    <main id="main">
      <ResumeDownload />
      <div className="container py-10">
        <div className="resume-sheet mx-auto max-w-3xl rounded-2xl bg-white p-8 text-neutral-900 shadow-lg md:p-12">
          <header className="border-b border-neutral-200 pb-6">
            <h1 className="text-3xl font-bold tracking-tight">{SITE.name}</h1>
            <p className="mt-1 text-lg text-neutral-600">{SITE.role}</p>
            <p className="mt-3 text-sm text-neutral-500">
              {SITE.location} · {SITE.email} · {SITE.phone}
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              <a href={SITE.github} className="hover:text-neutral-800">github.com/rubinapokhrel061</a>
              {" · "}
              <a href={SITE.linkedin} className="hover:text-neutral-800">linkedin.com/in/rubinapokhrel</a>
              {" · "}
              <a href={SITE.url} className="hover:text-neutral-800">rubinapokhrel61.com.np</a>
            </p>
          </header>

          <section className="mt-7">
            <h2 className={sectionTitle}>Summary</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Full Stack Developer specializing in building scalable web applications, enterprise ERP solutions,
              AI-powered automation systems, real-time messaging platforms and payment integrations.
              I work across frontend and backend development, building modern user interfaces, REST APIs,
              database-driven applications, background processing systems and third-party integrations.
            </p>
          </section>

          <section className="mt-7">
            <h2 className={sectionTitle}>Experience</h2>
            <div className="mt-3 space-y-6">
              {EXPERIENCE.map((e) => (
                <div key={e.role + e.period}>
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <h3 className="font-semibold">{e.role}</h3>
                      <p className="text-sm text-neutral-600">{e.company} · {e.location}</p>
                    </div>
                    <p className="shrink-0 text-sm text-neutral-500">{e.period}</p>
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-neutral-700">
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-7">
            <h2 className={sectionTitle}>Selected projects</h2>
            <div className="mt-3 space-y-5">
              {PROJECTS.map((p) => (
                <div key={p.title}>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="shrink-0 text-sm text-neutral-500">{p.category}</p>
                  </div>
                  <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm leading-relaxed text-neutral-700">
                    {p.contributions.slice(0, 3).map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-7">
            <h2 className={sectionTitle}>Technical skills</h2>
            <div className="mt-3 space-y-2">
              {SKILL_GROUPS.map((g) => (
                <p key={g.group} className="text-sm leading-relaxed text-neutral-700">
                  <span className="font-semibold">{g.group}:</span> {g.items.join(" · ")}
                </p>
              ))}
            </div>
          </section>

          <section className="mt-7">
            <h2 className={sectionTitle}>Education</h2>
            <ul className="mt-2 space-y-1.5">
              {EDUCATION.map((e) => (
                <li key={e.title} className="text-sm text-neutral-700">
                  <span className="font-semibold">{e.title}</span> — {e.place}, {e.period}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
