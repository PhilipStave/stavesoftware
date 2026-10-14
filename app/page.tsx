import type { Metadata } from "next";
import HoldingSide from "@/components/HoldingSide";
import { selskap } from "@/lib/selskap";
import { virksomheter } from "@/lib/holding";

const beskrivelse =
  "Crest Holding AS is a Norwegian company in Oslo that starts, runs and grows its own businesses: Crest Software, Altiv and Oystr.";

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
  mentions: virksomheter.map((v) => ({
    "@type": "Brand",
    name: v.navn,
    description: v.rolle,
    url: v.ekstern ? v.href : `${selskap.url}${v.href}`,
  })),
};

export default function Home() {
  return (
    <>
      <HoldingSide />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
