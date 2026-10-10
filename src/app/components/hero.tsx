import Image from "next/image";
import { getImgPath } from "@/utils/image";
import { SITE } from "@/data/site";

const d = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-paper py-20 md:py-28">
      <div className="drift absolute -left-20 top-0 h-96 w-96 rounded-full bg-brand/25 blur-3xl" aria-hidden="true" />
      <div className="drift absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-violet-400/25 blur-3xl" style={{ animationDelay: "-7s" }} aria-hidden="true" />
      <div className="container relative grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="rise mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium shadow-sm" style={d(50)}>
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" aria-hidden="true" />
            Open to Full Stack and Backend roles
          </p>
          <h1 id="hero-title" className="rise text-5xl font-extrabold leading-[1.02] sm:text-6xl xl:text-7xl" style={d(180)}>
            {SITE.name}
            <span className="sweep mt-3 block bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl xl:text-5xl">{SITE.role}</span>
          </h1>
          <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-muted" style={d(330)}>
            I build ERP, payment and real-time messaging software with React, Node.js and MongoDB.
            At BizHub Consulting I automate AP invoices with OCR and post them to SAP Business One.
          </p>
          <div className="rise mt-9 flex flex-wrap gap-3" style={d(480)}>
            <a href="#work" className="btn btn-primary">View my work</a>
            <a href="#about" className="btn btn-ghost">About me</a>
          </div>
        </div>
        <div className="rise relative mx-auto w-full max-w-sm lg:max-w-none" style={d(300)}>
          <div className="bob">
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-t-[999px] rounded-b-3xl bg-brand" aria-hidden="true" />
            <Image
              src={getImgPath("/images/home/banner/rubina.webp")}
              alt="Rubina Pokhrel, Full Stack Developer, holding a startup fest certificate"
              width={900} height={890} priority
              className="relative aspect-[4/5] w-full rounded-t-[999px] rounded-b-3xl object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
