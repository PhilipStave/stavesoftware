import type { Metadata } from "next";
import JuridiskSide from "@/components/JuridiskSide";
import { personvern, personvernIngress, JURIDISK_OPPDATERT } from "@/lib/juridisk";

const beskrivelse =
  "stavesoftware.no har ingen informasjonskapsler, ingen analyseverktøy og ingen skjemaer. Her står nøyaktig hva som behandles, av hvem, og hvilke rettigheter du har.";

export const metadata: Metadata = {
  title: "Personvern — Stave Software AS",
  description: beskrivelse,
  alternates: { canonical: "https://stavesoftware.no/personvern" },
  openGraph: {
    type: "website",
    siteName: "Stave Software AS",
    title: "Personvern — Stave Software AS",
    description: beskrivelse,
    url: "https://stavesoftware.no/personvern",
    locale: "nb_NO",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stave Software AS",
      },
    ],
  },
};

export default function PersonvernSide() {
  return (
    <JuridiskSide
      tittel="Personvern"
      ingress={personvernIngress}
      oppdatert={JURIDISK_OPPDATERT}
      innhold={personvern}
    />
  );
}
