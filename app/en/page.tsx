import type { Metadata } from "next";
import HoldingSide from "@/components/HoldingSide";
import { innhold, sporsmaal } from "@/lib/holding-en";
import { selskap } from "@/lib/selskap";
import { alternativer, sprakvalg } from "@/lib/sprak";

// Den engelske forsiden. Samme komponent som den norske, annet innhold.

const beskrivelse =
  "Crest Holding AS acquires profitable Norwegian companies. Most we keep and operate, and the annual profit is the return.";

const tittel = `${selskap.fulltNavn} — we buy Norwegian companies and keep them`;

export const metadata: Metadata = {
  title: tittel,
  description: beskrivelse,
  keywords:
    "Crest Holding, holding company Oslo, Norwegian holding company, acquire Norwegian companies, Crest Software, Altiv, Oystr",
  alternates: { ...alternativer("/"), canonical: `${selskap.url}/en` },
  openGraph: {
    type: "website",
    siteName: selskap.fulltNavn,
    title: tittel,
    description: beskrivelse,
    url: `${selskap.url}/en`,
    locale: "en_GB",
    alternateLocale: ["nb_NO"],
    images: [{ url: "/og-holding.jpg?v=2", width: 1200, height: 630, alt: tittel }],
  },
  twitter: {
    card: "summary_large_image",
    title: selskap.fulltNavn,
    description: beskrivelse,
    images: ["/og-holding.jpg?v=2"],
  },
};

const side = {
  "@type": "WebPage",
  "@id": `${selskap.url}/en#forsiden`,
  url: `${selskap.url}/en`,
  name: selskap.fulltNavn,
  description: beskrivelse,
  inLanguage: "en",
  about: { "@id": `${selskap.url}/#organisasjon` },
  mainEntity: { "@id": `${selskap.url}/#organisasjon` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    side,
    {
      "@type": "FAQPage",
      "@id": `${side.url}#faq`,
      inLanguage: "en",
      mainEntity: sporsmaal.punkter.map((p) => ({
        "@type": "Question",
        name: p.spm,
        acceptedAnswer: { "@type": "Answer", text: p.svar },
      })),
    },
  ],
};

export default function Forside() {
  return (
    <>
      <HoldingSide i={innhold} sprak={sprakvalg("en", "/en")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
