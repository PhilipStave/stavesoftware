import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideSide from "@/components/GuideSide";
import NorskRamme from "@/components/NorskRamme";
import { finnGuide, guider } from "@/lib/guider";
import { selskap } from "@/lib/selskap";
import { medMerke } from "@/lib/tittel";

export function generateStaticParams() {
  return guider.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = finnGuide(slug);
  if (!guide) return {};
  const url = `${selskap.url}/guider/${guide.slug}`;
  const bilde = `/og/guide-${guide.slug}.jpg?v=1`;
  return {
    title: medMerke(guide.tittel),
    description: guide.metaBeskrivelse,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: selskap.fulltNavn,
      title: guide.tittel,
      description: guide.metaBeskrivelse,
      url,
      locale: "nb_NO",
      images: [{ url: bilde, width: 1200, height: 630, alt: guide.tittel }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.tittel,
      description: guide.metaBeskrivelse,
      images: [bilde],
    },
  };
}

export default async function Guide({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = finnGuide(slug);
  if (!guide) notFound();

  const url = `${selskap.url}/guider/${guide.slug}`;

  // Artikkel og spørsmål–svar i samme graf. FAQ-oppmerkingen er den som har
  // en sjanse til å bli lest opp av en assistent; derfor er svarene hele
  // setninger som står på egne bein, ikke henvisninger til brødteksten.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#artikkel`,
        headline: guide.tittel,
        description: guide.metaBeskrivelse,
        inLanguage: "nb-NO",
        datePublished: guide.oppdatert,
        dateModified: guide.oppdatert,
        mainEntityOfPage: url,
        author: { "@id": `${selskap.url}/#organisasjon` },
        publisher: { "@id": `${selskap.url}/#organisasjon` },
        // Google krever bilde for artikkelresultatene, og det skal være det
        // samme som deles.
        image: [`${selskap.url}/og/guide-${guide.slug}.jpg`],
        articleSection: "Selge bedrift",
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: guide.faq.map((f) => ({
          "@type": "Question",
          name: f.spm,
          acceptedAnswer: { "@type": "Answer", text: f.svar },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: selskap.navn, item: `${selskap.url}/` },
          { "@type": "ListItem", position: 2, name: "Guider", item: `${selskap.url}/guider` },
          { "@type": "ListItem", position: 3, name: guide.tittel, item: url },
        ],
      },
    ],
  };

  return (
    <NorskRamme>
      <GuideSide guide={guide} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </NorskRamme>
  );
}
