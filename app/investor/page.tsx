import type { Metadata } from "next";
import InvestorSide from "@/components/InvestorSide";
import { innhold } from "@/lib/holding";
import { investor } from "@/lib/investor";
import { selskap } from "@/lib/selskap";
import { alternativer, sprakvalg } from "@/lib/sprak";

// Investorsiden på norsk. Engelsk tvilling på /en/investors. Den gamle
// adressen /investors sendes hit med 308 fra next.config.ts.

const beskrivelse =
  "Crest Holding AS kjøper lønnsomme norske bedrifter og driver dem videre. Hva kapitalen går til, og hvordan avdelingene endrer tallene etter et kjøp.";

const tittel = `For investorer — ${selskap.fulltNavn}`;

export const metadata: Metadata = {
  title: tittel,
  description: beskrivelse,
  keywords:
    "investere i oppkjøp, medinvestor bedriftskjøp, kjøpe norske bedrifter, holdingselskap Oslo, Crest Holding investor",
  alternates: { ...alternativer("/investor"), canonical: `${selskap.url}/investor` },
  openGraph: {
    type: "website",
    siteName: selskap.fulltNavn,
    title: tittel,
    description: beskrivelse,
    url: `${selskap.url}/investor`,
    locale: "nb_NO",
    alternateLocale: ["en_GB"],
    images: [{ url: "/og-holding.jpg?v=2", width: 1200, height: 630, alt: `${selskap.fulltNavn} — ${investor.tittel}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: tittel,
    description: beskrivelse,
    images: ["/og-holding.jpg?v=2"],
  },
};

// Siden beskriver selskapet, og sier det selv i forbeholdet nederst: den er
// ikke et tilbud om aksjer. Derfor WebPage om organisasjonen — ingen Offer,
// ingen priser, ingen tall i de strukturerte dataene heller.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${selskap.url}/investor#siden`,
      url: `${selskap.url}/investor`,
      name: tittel,
      description: beskrivelse,
      inLanguage: "nb-NO",
      about: { "@id": `${selskap.url}/#organisasjon` },
      mainEntity: { "@id": `${selskap.url}/#organisasjon` },
      disclaimer: investor.forbehold,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: selskap.navn, item: `${selskap.url}/` },
        { "@type": "ListItem", position: 2, name: "For investorer", item: `${selskap.url}/investor` },
      ],
    },
  ],
};

export default function Investor() {
  return (
    <>
      <InvestorSide i={investor} h={innhold} sprak={sprakvalg("nb", "/investor")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
