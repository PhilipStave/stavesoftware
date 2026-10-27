import type { Metadata } from "next";
import NorskRamme from "@/components/NorskRamme";
import ProgramvareSide from "@/components/ProgramvareSide";
import { programvare } from "@/lib/programvare";
import { selskap } from "@/lib/selskap";
import { tjenesteSider } from "@/lib/tjenestesider";

// Crest Software. Siden ble bygget om 26. oktober 2026 fra den gamle mørke
// forsiden til samme rolige stil som resten av nettstedet, og handler nå bare
// om programvare.

const beskrivelse =
  "Crest Software lager og drifter nettsider, apper og interne verktøy for norske bedrifter. Én fast kontaktperson, tolv måneder om gangen, fast pris eller eierandel. En avdeling i Crest Holding AS.";

const tittel = "Crest Software — nettsider, apper og interne verktøy, laget og driftet";

export const metadata: Metadata = {
  title: tittel,
  description: beskrivelse,
  keywords:
    "nettside til bedrift, apputvikling, interne verktøy, automatisering, integrasjoner, SEO, AEO, drift av nettside, Oslo, Crest Software",
  alternates: { canonical: `${selskap.url}/crest-software` },
  openGraph: {
    type: "website",
    siteName: selskap.fulltNavn,
    title: tittel,
    description: beskrivelse,
    url: `${selskap.url}/crest-software`,
    locale: "nb_NO",
    images: [{ url: "/og-image.jpg?v=2", width: 1200, height: 630, alt: "Crest Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crest Software",
    description: beskrivelse,
    images: ["/og-image.jpg?v=2"],
  },
};

// Crest Software er en avdeling i selskapet, ikke et eget rettssubjekt:
// derfor Brand med Crest Holding som eier, og tjenestene som tilbud.
// Spørsmålene står som FAQPage — det er den oppmerkingen en KI-oversikt leser.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Brand",
      "@id": `${selskap.url}/crest-software#merke`,
      name: "Crest Software",
      description: beskrivelse,
      url: `${selskap.url}/crest-software`,
      parentOrganization: { "@id": `${selskap.url}/#organisasjon` },
    },
    {
      "@type": "FAQPage",
      "@id": `${selskap.url}/crest-software#faq`,
      inLanguage: "nb-NO",
      mainEntity: programvare.sporsmaal.punkter.map((p) => ({
        "@type": "Question",
        name: p.spm,
        acceptedAnswer: { "@type": "Answer", text: p.svar },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: selskap.navn, item: `${selskap.url}/` },
        { "@type": "ListItem", position: 2, name: "Crest Software", item: `${selskap.url}/crest-software` },
      ],
    },
    ...tjenesteSider.map((s) => ({
      "@type": "Service",
      "@id": `${selskap.url}/${s.slug}#tjeneste`,
      name: s.tittel,
      url: `${selskap.url}/${s.slug}`,
      provider: { "@id": `${selskap.url}/#organisasjon` },
      brand: { "@id": `${selskap.url}/crest-software#merke` },
    })),
  ],
};

export default function CrestSoftware() {
  return (
    <NorskRamme
      lenker={[
        { navn: "Hva vi gjør", href: "#hva" },
        { navn: "Tjenester", href: "#tjenester" },
        { navn: "Teknologi", href: "#teknologi" },
        { navn: "Hva vi har bygget", href: "#bygget" },
      ]}
      knapp={{ navn: "Kontakt", href: "#contact" }}
    >
      <ProgramvareSide />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </NorskRamme>
  );
}
