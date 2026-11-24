import { SKILL_GROUPS } from "@/data/site";

export default function Marquee() {
  const items = Array.from(new Set(SKILL_GROUPS.flatMap((g) => g.items)));
  return (
    <div className="marquee border-b border-line bg-surface/60" aria-label="Technologies I work with">
      <div className="container flex items-center gap-5 py-3">
        <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-faint sm:block">Core stack</span>
        <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="marquee-track flex w-max items-center gap-8">
            {[0, 1].map((n) => (
              <ul key={n} className="flex shrink-0 items-center gap-8" aria-hidden={n === 1}>
                {items.map((s) => (
                  <li key={s} className="flex items-center gap-8 font-mono text-xs text-muted">
                    {s}
                    <span className="h-1 w-1 rounded-full bg-brand/50" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}