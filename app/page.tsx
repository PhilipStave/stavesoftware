import type { Metadata } from "next";
import HoldingSide from "@/components/HoldingSide";
import { selskap } from "@/lib/selskap";

const beskrivelse =
  "Crest Holding AS is a Norwegian company in Oslo. We start businesses, build them properly, and stay on as the ones who run them.";

export const metadata: Metadata = {
  title: `${selskap.fulltNavn} — we build businesses and stay to run them`,
  description: beskrivelse,
  keywords:
    "Crest Holding, holding company Oslo, Norwegian holding company, Crest Software, Altiv, Oystr, build and operate businesses",
  alternates: { canonical: `${selskap.url}/` },
  openGraph: {
    type: "website",
    siteName: selskap.fulltNavn,
    title: `${selskap.fulltNavn} — we build businesses and stay to run them`,
    description: beskrivelse,
    url: `${selskap.url}/`,
    locale: "en_GB",
    images: [
      {
        url: "/og-holding.jpg?v=1",
        width: 1200,
        height: 630,
        alt: `${selskap.fulltNavn} — we build businesses and stay to run them`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: selskap.fulltNavn,
    description: beskrivelse,
    images: ["/og-holding.jpg?v=1"],
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
