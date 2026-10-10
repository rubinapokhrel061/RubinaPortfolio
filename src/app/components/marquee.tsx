import { SKILLS } from "@/data/site";

export default function Marquee() {
  const items = SKILLS.flatMap((g) => g.items);
  return (
    <div className="marquee overflow-hidden border-b border-line bg-white py-5" aria-label="Technologies I work with">
      <div className="marquee-track flex w-max gap-10">
        {[0, 1].map((n) => (
          <ul key={n} className="flex shrink-0 gap-10" aria-hidden={n === 1}>
            {items.map((s) => <li key={s} className="font-display text-lg font-semibold text-muted">{s}</li>)}
          </ul>
        ))}
      </div>
    </div>
  );
}
