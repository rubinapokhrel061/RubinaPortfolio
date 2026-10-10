import Reveal from "./reveal";

const build = [
  ["ERP and SAP integration", "Mail OCR invoice automation, three-way matching and posting to SAP Business One."],
  ["Payments", "NCHL integration and Nepal Pay Dynamic QR, with validation, reversals and refunds."],
  ["Real-time systems", "WebSockets messaging with Redis and BullMQ workers for media and notifications."],
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container">
        <h2 id="about-title" className="text-4xl font-bold md:text-5xl">About me</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-6">
          <Reveal className="md:col-span-4">
            <div className="card h-full">
              <p className="text-xl leading-relaxed md:text-2xl">
                I am a Full Stack Developer from Nepal with a BSc in Computer Science and Information Technology.
                I build enterprise, AI-powered and real-time applications, from React interfaces to dependable Node.js backends.
              </p>
              <p className="mt-4 text-muted">I like solving real business problems with clean code, careful integrations and systems that keep working.</p>
            </div>
          </Reveal>
          <Reveal className="md:col-span-2" delay={120}>
            <div className="card sweep h-full !border-transparent text-white hover:!shadow-brand/30">
              <p className="flex items-center gap-2 text-sm font-medium text-white/80"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" aria-hidden="true" />Right now</p>
              <p className="mt-3 font-display text-2xl font-bold">Full Stack Developer</p>
              <p className="mt-1 text-white/85">BizHub Consulting Service Pvt. Ltd, Lalitpur, Nepal</p>
            </div>
          </Reveal>
          {build.map(([t, d], i) => (
            <Reveal key={t} className="md:col-span-2" delay={i * 120}>
              <div className="card h-full">
                <h3 className="font-display text-xl font-bold">{t}</h3>
                <p className="mt-2 text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
          <Reveal className="md:col-span-6" delay={100}>
            <div className="card flex flex-wrap items-center gap-3">
              <p className="mr-2 font-semibold">Currently learning</p>
              {["System design", "Docker", "AWS", "RAG with LangChain"].map((s, i) => (
                <span key={s} className="chip tag-float" style={{ animationDelay: `${i * -1.2}s` }}>{s}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
