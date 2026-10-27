import type { Metadata } from "next";
import { type Avdeling, finnAvdeling } from "@/lib/avdelinger";
import { selskap } from "@/lib/selskap";

// Metadata og oppmerking for avdelingssidene, så de tre sidefilene blir korte
// og ikke kan komme i utakt med hverandre.

export function hentAvdeling(slug: string): Avdeling {
  const a = finnAvdeling(slug);
  if (!a) throw new Error(`Ukjent avdeling: ${slug}`);
  return a;
}

export function avdelingMetadata(slug: string): Metadata {
  const a = hentAvdeling(slug);
  const url = `${selskap.url}/${a.slug}`;
  return {
    title: a.metaTittel,
    description: a.metaBeskrivelse,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: selskap.fulltNavn,
      title: a.metaTittel,
      description: a.metaBeskrivelse,
      url,
      locale: "nb_NO",
      images: [{ url: "/og-image.jpg?v=2", width: 1200, height: 630, alt: a.navn }],
    },
    twitter: {
      card: "summary_large_image",
      title: a.navn,
      description: a.metaBeskrivelse,
      images: ["/og-image.jpg?v=2"],
    },
  };
}

// Avdelingene er funksjoner i selskapet, ikke egne rettssubjekter: derfor
// Brand med Crest Holding som eier. Spørsmålene står som FAQPage, som er den
// oppmerkingen en KI-oversikt leser.
export function avdelingJsonLd(slug: string) {
  const a = hentAvdeling(slug);
  const url = `${selskap.url}/${a.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Brand",
        "@id": `${url}#merke`,
        name: a.navn,
        description: a.metaBeskrivelse,
        url,
        parentOrganization: { "@id": `${selskap.url}/#organisasjon` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#side`,
        url,
        name: a.metaTittel,
        description: a.metaBeskrivelse,
        inLanguage: "nb-NO",
        publisher: { "@id": `${selskap.url}/#organisasjon` },
        about: { "@id": `${url}#merke` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: "nb-NO",
        mainEntity: a.sporsmaal.map((p) => ({
          "@type": "Question",
          name: p.spm,
          acceptedAnswer: { "@type": "Answer", text: p.svar },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: selskap.navn, item: `${selskap.url}/` },
          { "@type": "ListItem", position: 2, name: a.navn, item: url },
        ],
      },
    ],
  };
}
