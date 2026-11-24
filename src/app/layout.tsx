import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ThemeProvider from "./components/theme-provider";
import { SITE, PROJECTS } from "@/data/site";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains", display: "swap", preload: false });

const title = `${SITE.name} — ${SITE.role} in Nepal`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: title, template: `%s — ${SITE.name}` },
  description: SITE.description,
  keywords: [
    "Full Stack Developer",
    "Backend Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Software Engineer",
    "Rubina Pokhrel",
    "Nepal",
    "SAP Business One",
    "payment integration",
    "ERP",
    "Next.js",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: `${SITE.name} — Portfolio`,
    title,
    description: SITE.description,
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${SITE.name}, ${SITE.role}` }],
  },
  twitter: { card: "summary_large_image", title, description: SITE.description, images: ["/og-image.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export const viewport: Viewport = { themeColor: "#08080a", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: SITE.name,
      jobTitle: SITE.role,
      url: SITE.url,
      image: `${SITE.url}/og-image.png`,
      email: `mailto:${SITE.email}`,
      telephone: SITE.phone,
      address: { "@type": "PostalAddress", addressLocality: "Lalitpur", addressCountry: "NP" },
      worksFor: { "@type": "Organization", name: SITE.company },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Amrit Science Campus" },
      knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Redis", "BullMQ", "SAP Business One", "WebSockets", "Payment gateway integration"],
      sameAs: [SITE.github, SITE.linkedin],
    },
    {
      "@type": "ItemList",
      name: "Selected work",
      itemListElement: PROJECTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "CreativeWork", name: p.title, description: p.contributions[0], url: p.links[0].href, creator: { "@id": `${SITE.url}/#person` } },
      })),
    },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: `${SITE.name} Portfolio`, inLanguage: "en", publisher: { "@id": `${SITE.url}/#person` } },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <ThemeProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-ink">
            Skip to content
          </a>
          <Header />
          {children}
          <Footer />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </ThemeProvider>
      </body>
    </html>
  );
}