import type { Metadata } from "next";
import JuridiskSide from "@/components/JuridiskSide";
import { personvern, personvernIngress, JURIDISK_OPPDATERT } from "@/lib/juridisk";
import { selskap } from "@/lib/selskap";

const beskrivelse =
  `${selskap.domene} har ingen informasjonskapsler, ingen analyseverktøy og ingen skjemaer. Her står nøyaktig hva som behandles, av hvem, og hvilke rettigheter du har.`;

export const metadata: Metadata = {
  title: `Personvern — ${selskap.fulltNavn}`,
  description: beskrivelse,
  alternates: { canonical: `${selskap.url}/personvern` },
  openGraph: {
    type: "website",
    siteName: selskap.fulltNavn,
    title: `Personvern — ${selskap.fulltNavn}`,
    description: beskrivelse,
    url: `${selskap.url}/personvern`,
    locale: "nb_NO",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: selskap.fulltNavn,
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
