import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { SITE, PROJECTS } from "@/data/site";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex", display: "swap" });

const title = `${SITE.name} | ${SITE.role} in Nepal`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  keywords: ["Rubina Pokhrel", "Full Stack Developer Nepal", "React developer", "Node.js developer", "MongoDB", "SAP Business One integration", "payment gateway integration", "Nepal Pay", "NCHL", "portfolio"],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", url: SITE.url, siteName: `${SITE.name} Portfolio`, title, description: SITE.description, locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${SITE.name}, ${SITE.role}` }],
  },
  twitter: { card: "summary_large_image", title, description: SITE.description, images: ["/og-image.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export const viewport: Viewport = { themeColor: "#1e1b4b", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person", "@id": `${SITE.url}/#person`, name: SITE.name, jobTitle: SITE.role, url: SITE.url,
      image: `${SITE.url}/og-image.png`, email: `mailto:${SITE.email}`, telephone: SITE.phone,
      address: { "@type": "PostalAddress", addressLocality: "Lalitpur", addressCountry: "NP" },
      worksFor: { "@type": "Organization", name: "BizHub Consulting Service Pvt. Ltd" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Amrit Science Campus" },
      knowsAbout: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Redis", "SAP Business One", "Payment gateway integration", "WebSockets"],
      sameAs: [SITE.github, SITE.linkedin],
    },
    {
      "@type": "ItemList", name: "Selected work", itemListElement: PROJECTS.map((p, i) => ({
        "@type": "ListItem", position: i + 1,
        item: { "@type": "CreativeWork", name: p.title, description: p.points[0], url: p.links[0].href, creator: { "@id": `${SITE.url}/#person` } },
      })),
    },
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: `${SITE.name} Portfolio`, inLanguage: "en", publisher: { "@id": `${SITE.url}/#person` } },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
