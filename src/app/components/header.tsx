"use client";
import Image from "next/image";
import { getImgPath } from "@/utils/image";
import { SITE } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="#main" className="flex items-center gap-3" aria-label={`${SITE.name}, back to top`}>
          <Image src={getImgPath("/images/logo/logo.png")} alt="" width={36} height={36} />
          <span className="font-display text-lg font-bold">{SITE.name}</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted hover:text-brand">{l.label}</a>
          ))}
        </nav>
        <button type="button" onClick={() => window.print()} className="btn btn-ghost !px-4 !py-2 text-sm">
          Download CV
        </button>
      </div>
    </header>
  );
}
