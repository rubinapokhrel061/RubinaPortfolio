import { SKILL_GROUPS } from "@/data/site";

export default function Marquee() {
  const items = SKILL_GROUPS.flatMap((g) => g.items);
  return (
    <div className="marquee overflow-hidden border-y border-line bg-surface/50 py-5" aria-label="Technologies I work with">
      <div className="marquee-track flex w-max items-center gap-10">
        {[0, 1].map((n) => (
          <ul key={n} className="flex shrink-0 items-center gap-10" aria-hidden={n === 1}>
            {items.map((s) => (
              <li key={s} className="flex items-center gap-10">
                <span className="font-mono text-sm text-faint">{s}</span>
                <span className="h-1 w-1 rounded-full bg-line-strong" aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}