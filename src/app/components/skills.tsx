import Reveal from "./reveal";
import Section from "./section";
import { CAPABILITIES, CERTIFICATIONS, EDUCATION, SKILL_GROUPS } from "@/data/site";

export default function Skills() {
  return (
    <Section id="skills" index="04" label="Skills" title="Skills & capabilities" intro="The stack I build with, and the problems I solve with it.">
      <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
        {SKILL_GROUPS.map((g, i) => (
          <div key={g.group} className="h-full border-t border-line pt-3">
            <Reveal delay={(i % 3) * 60}>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand">{g.group}</h3>
              <ul className="mt-2.5 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <li key={s} className="chip">{s}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Reveal>
          <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">Engineering capabilities</h3>
        </Reveal>
        <ul className="mt-3 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {CAPABILITIES.map((c, i) => (
            <li key={c.title} className="border-t border-line pt-3">
              <Reveal delay={(i % 2) * 60}>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[10px] text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="text-sm font-semibold">{c.title}</h4>
                </div>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">{c.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 grid gap-6 border-t border-line pt-5 sm:grid-cols-2">
        <Reveal>
          <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">Education</h3>
          <ul className="mt-3 space-y-2.5">
            {EDUCATION.map((e) => (
              <li key={e.title}>
                <p className="text-sm font-semibold">{e.title}</p>
                <p className="text-[13px] text-muted">{e.place} · {e.period}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={80}>
          <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">Certifications</h3>
          <ul className="mt-3 space-y-2">
            {CERTIFICATIONS.map((c) => (
              <li key={c} className="flex gap-2 text-[13px] text-muted">
                <span className="mt-[0.5rem] h-px w-2.5 shrink-0 bg-brand/60" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}