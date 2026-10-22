import type { Metadata } from "next";
import NorskRamme from "@/components/NorskRamme";
import VerdiSide from "@/components/VerdiSide";
import { selskap } from "@/lib/selskap";

const beskrivelse =
  "Skriv inn organisasjonsnummeret og få et indikativt verdispenn, regnet ut fra de tre siste innsendte årsregnskapene i Brønnøysund. Hele regnestykket er synlig.";

export const metadata: Metadata = {
  title: `Hva er bedriften verdt? Gratis verdivurdering — ${selskap.navn}`,
  description: beskrivelse,
  keywords:
    "verdivurdering bedrift, hva er bedriften min verdt, verdsettelse AS, selge bedrift, regnskapstall Brønnøysund",
  alternates: { canonical: `${selskap.url}/verdivurdering` },
  openGraph: {
    type: "website",
    siteName: selskap.fulltNavn,
    title: "Hva er bedriften verdt?",
    description: beskrivelse,
    url: `${selskap.url}/verdivurdering`,
    locale: "nb_NO",
    images: [{ url: "/og/verdivurdering.jpg?v=1", width: 1200, height: 630, alt: "Verdivurdering av bedrift" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hva er bedriften verdt?",
    description: beskrivelse,
    images: ["/og/verdivurdering.jpg?v=1"],
  },
};

// WebApplication, fordi siden er et verktøy og ikke en artikkel. Spørsmålene
// under er de som faktisk stilles i søk, og svarene er hele setninger slik at
// de kan leses opp alene.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${selskap.url}/verdivurdering#verktoy`,
      name: "Verdivurdering av bedrift",
      url: `${selskap.url}/verdivurdering`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Nettleser",
      inLanguage: "nb-NO",
      description: beskrivelse,
      offers: { "@type": "Offer", price: "0", priceCurrency: "NOK" },
      publisher: { "@id": `${selskap.url}/#organisasjon` },
    },
    {
      "@type": "FAQPage",
      "@id": `${selskap.url}/verdivurdering#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Hvordan regnes verdien av en bedrift ut?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vi tar et vektet snitt av driftsresultatet de tre siste årene, der det nyeste året teller mest, og ganger det med en multippel som justeres for størrelse, driftsmargin og om omsetningen går opp eller ned. Så legges bankinnskuddet til og langsiktig gjeld trekkes fra, fordi kjøperen overtar begge deler.",
          },
        },
        {
          "@type": "Question",
          name: "Hvor kommer tallene fra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fra Enhetsregisteret og Regnskapsregisteret i Brønnøysund, som er åpne data under NLOD. Regnskapsregisteret gir de tre siste innsendte årsregnskapene.",
          },
        },
        {
          "@type": "Question",
          name: "Er dette en verdivurdering jeg kan bruke mot en kjøper?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nei. Det er et regnestykke basert på offentlige tall, og det erstatter ikke en gjennomgang. Kundekonsentrasjon, eieravhengighet, avtaler med eierskifteklausul og kvaliteten på varelageret kan flytte prisen mer enn multippelen gjør.",
          },
        },
        {
          "@type": "Question",
          name: "Lagrer dere det jeg søker på?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nei. Oppslaget går mot Brønnøysundregistrene og vises i nettleseren din. Vi lagrer verken organisasjonsnummeret eller resultatet.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: selskap.navn, item: `${selskap.url}/` },
        { "@type": "ListItem", position: 2, name: "Verdivurdering", item: `${selskap.url}/verdivurdering` },
      ],
    },
  ],
};

export default function Verdivurdering() {
  return (
    <NorskRamme>
      <VerdiSide />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </NorskRamme>
  );
}
