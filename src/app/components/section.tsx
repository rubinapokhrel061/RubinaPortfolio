import Reveal from "./reveal";

type SectionProps = {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  tone?: "default" | "muted";
};

export default function Section({ id, index, label, title, intro, children, tone = "default" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`border-t border-line ${tone === "muted" ? "bg-surface-2/40" : ""}`}
    >
      <div className="container grid gap-8 py-12 md:py-16 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-12 xl:gap-16">
        <div className="lg:sticky lg:top-20 lg:self-start">
          <Reveal>
            <p className="eyebrow">
              <span className="text-faint">{index}</span>
              <span className="text-line-strong">/</span>
              <span>{label}</span>
            </p>
            <h2 id={`${id}-title`} className="mt-2.5 text-2xl font-bold leading-[1.15] md:text-3xl">
              {title}
            </h2>
            {intro ? <p className="mt-3 text-sm leading-relaxed text-muted">{intro}</p> : null}
          </Reveal>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
