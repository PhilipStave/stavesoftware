import type { Metadata } from "next";
import Site from "@/components/Site";
import { selskap } from "@/lib/selskap";
import { tjenesteSider } from "@/lib/tjenestesider";

const beskrivelse =
  "Crest Software lager nettsiden eller appen, drifter den og gir deg én fast kontaktperson. SEO og AEO er en del av jobben. En virksomhet i Crest Holding AS.";

export const metadata: Metadata = {
  title: `Crest Software — nettsider og apper, bygget og driftet`,
  description: beskrivelse,
  keywords:
    "Crest Software, nettside til bedrift, apputvikling, drift av nettside, SEO, AEO, fast kontaktperson, Oslo",
  alternates: { canonical: `${selskap.url}/crest-software` },
  openGraph: {
    type: "website",
    siteName: selskap.fulltNavn,
    title: "Crest Software — nettsider og apper, bygget og driftet",
    description: beskrivelse,
    url: `${selskap.url}/crest-software`,
    locale: "nb_NO",
    images: [
      {
        url: "/og-image.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "Crest Software — vi bygger den, drifter den og svarer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crest Software",
    description: beskrivelse,
    images: ["/og-image.jpg?v=2"],
  },
};

// Crest Software er en virksomhet i selskapet, ikke et eget rettssubjekt:
// derfor Brand med Crest Holding som eier, og tjenestene som tilbud.
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
    <>
      <Site />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
