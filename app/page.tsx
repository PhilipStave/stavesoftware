import type { Metadata } from "next";
import HoldingSide from "@/components/HoldingSide";
import { selskap } from "@/lib/selskap";

const beskrivelse =
  "Crest Holding AS acquires profitable Norwegian companies. Most we keep and operate, and the annual profit is the return.";

export const metadata: Metadata = {
  title: `${selskap.fulltNavn} — we buy companies, run them, and make them grow`,
  description: beskrivelse,
  keywords:
    "Crest Holding, holding company Oslo, Norwegian holding company, Crest Software, Altiv, Oystr, build and operate businesses",
  alternates: { canonical: `${selskap.url}/` },
  openGraph: {
    type: "website",
    siteName: selskap.fulltNavn,
    title: `${selskap.fulltNavn} — we buy companies, run them, and make them grow`,
    description: beskrivelse,
    url: `${selskap.url}/`,
    locale: "en_GB",
    images: [
      {
        url: "/og-holding.jpg?v=2",
        width: 1200,
        height: 630,
        alt: `${selskap.fulltNavn} — we buy companies, run them, and make them grow`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: selskap.fulltNavn,
    description: beskrivelse,
    images: ["/og-holding.jpg?v=2"],
  },
};

// Virksomhetene som merkevarer under selskapet. De er ikke egne juridiske
// enheter, så de står som brand — ikke subOrganization, som ville vært en
// påstand om datterselskaper.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${selskap.url}/#forsiden`,
  url: `${selskap.url}/`,
  name: `${selskap.fulltNavn}`,
  description: beskrivelse,
  inLanguage: "en",
  about: {
    "@id": `${selskap.url}/#organisasjon`,
  },
  mainEntity: {
    "@id": `${selskap.url}/#organisasjon`,
  },
};

export default function Home() {
  return (
    <>
      <HoldingSide />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
