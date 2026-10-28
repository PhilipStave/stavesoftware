import type { Metadata } from "next";
import HoldingSide from "@/components/HoldingSide";
import { innhold, sporsmaal } from "@/lib/holding";
import { selskap } from "@/lib/selskap";
import { alternativer, sprakvalg } from "@/lib/sprak";

// Forsiden på norsk. Den engelske tvillingen ligger på /en og tegnes av samme
// komponent med lib/holding-en.ts som innhold.

const beskrivelse =
  "Crest Holding AS kjøper lønnsomme norske bedrifter. De fleste beholder vi og driver videre, og det årlige overskuddet er avkastningen.";

const tittel = `${selskap.fulltNavn} — vi kjøper bedrifter og driver dem videre`;

export const metadata: Metadata = {
  title: tittel,
  description: beskrivelse,
  keywords:
    "Crest Holding, oppkjøp av bedrifter, kjøpe bedrift, selge bedrift, generasjonsskifte, holdingselskap Oslo, Crest Software, Altiv, Oystr",
  alternates: { ...alternativer("/"), canonical: `${selskap.url}/` },
  openGraph: {
    type: "website",
    siteName: selskap.fulltNavn,
    title: tittel,
    description: beskrivelse,
    url: `${selskap.url}/`,
    locale: "nb_NO",
    alternateLocale: ["en_GB"],
    images: [{ url: "/og-holding.jpg?v=2", width: 1200, height: 630, alt: tittel }],
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
const side = {
  "@type": "WebPage",
  "@id": `${selskap.url}/#forsiden`,
  url: `${selskap.url}/`,
  name: selskap.fulltNavn,
  description: beskrivelse,
  inLanguage: "nb-NO",
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
      inLanguage: "nb-NO",
      mainEntity: sporsmaal.punkter.map((p) => ({
        "@type": "Question",
        name: p.spm,
        acceptedAnswer: { "@type": "Answer", text: p.svar },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <HoldingSide i={innhold} sprak={sprakvalg("nb", "/")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
