"use client";

import Link from "next/link";

export default function ResumeDownload() {
  return (
    <div className="no-print sticky top-16 z-30 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="text-sm text-muted transition hover:text-ink">← Back to site</Link>
        <button type="button" onClick={() => window.print()} className="btn btn-primary !px-4 !py-2 text-sm">
          Download PDF
        </button>
      </div>
    </div>
  );
}
