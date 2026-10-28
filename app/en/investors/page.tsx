import type { Metadata } from "next";
import InvestorSide from "@/components/InvestorSide";
import { investor } from "@/lib/investor-en";
import { innhold } from "@/lib/holding-en";
import { sprakvalg, alternativer } from "@/lib/sprak";
import { selskap } from "@/lib/selskap";

const beskrivelse =
  "Crest Holding AS buys profitable Norwegian companies and keeps them. What the capital is for, and how the departments change the numbers after a purchase.";

export const metadata: Metadata = {
  title: `For investors — ${selskap.fulltNavn}`,
  description: beskrivelse,
  keywords:
    "Crest Holding investors, invest in Norwegian holding company, acquire Norwegian companies, buy and hold, Oslo",
  alternates: { ...alternativer("/investor"), canonical: `${selskap.url}/en/investors` },
  openGraph: {
    type: "website",
    siteName: selskap.fulltNavn,
    title: `For investors — ${selskap.fulltNavn}`,
    description: beskrivelse,
    url: `${selskap.url}/en/investors`,
    locale: "en_GB",
    images: [
      {
        url: "/og-holding.jpg?v=2",
        width: 1200,
        height: 630,
        alt: `${selskap.fulltNavn} — ${investor.tittel}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `For investors — ${selskap.fulltNavn}`,
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
      "@id": `${selskap.url}/en/investors#siden`,
      url: `${selskap.url}/en/investors`,
      name: `For investors — ${selskap.fulltNavn}`,
      description: beskrivelse,
      inLanguage: "en",
      about: { "@id": `${selskap.url}/#organisasjon` },
      mainEntity: { "@id": `${selskap.url}/#organisasjon` },
      disclaimer: investor.forbehold,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: selskap.navn, item: `${selskap.url}/` },
        { "@type": "ListItem", position: 2, name: "For investors", item: `${selskap.url}/en/investors` },
      ],
    },
  ],
};

export default function InvestorsEn() {
  return (
    <>
      <InvestorSide i={investor} h={innhold} sprak={sprakvalg("en", "/en/investors")} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
