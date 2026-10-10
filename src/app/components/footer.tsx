import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container flex flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <p>Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}
