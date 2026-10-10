import { SKILLS, EDUCATION, CERTIFICATIONS } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <div className="container grid gap-14 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 id="skills-title" className="text-4xl font-bold md:text-5xl">Skills</h2>
          <dl className="mt-10 space-y-7">
            {SKILLS.map((g) => (
              <div key={g.group} className="grid gap-3 sm:grid-cols-[10rem_1fr]">
                <dt className="font-semibold">{g.group}</dt>
                <dd className="flex flex-wrap gap-2">{g.items.map((s) => <span key={s} className="chip">{s}</span>)}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Education</h2>
          <ul className="mt-6 space-y-5">
            {EDUCATION.map((e) => (
              <li key={e.title}>
                <p className="font-semibold">{e.title}</p>
                <p className="text-muted">{e.place}, {e.period}</p>
              </li>
            ))}
          </ul>
          <h3 className="mt-10 text-xl font-bold">Certifications</h3>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-muted marker:text-brand">
            {CERTIFICATIONS.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
