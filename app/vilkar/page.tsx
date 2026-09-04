import type { Metadata } from "next";
import JuridiskSide from "@/components/JuridiskSide";
import { vilkar, vilkarIngress, JURIDISK_OPPDATERT } from "@/lib/juridisk";
import { selskap } from "@/lib/selskap";

const beskrivelse =
  `Vilkår for bruk av ${selskap.domene}: hvem som står bak siden, hva du kan gjøre med innholdet, og hva som ikke er et bindende tilbud.`;

export const metadata: Metadata = {
  title: `Vilkår — ${selskap.fulltNavn}`,
  description: beskrivelse,
  alternates: { canonical: `${selskap.url}/vilkar` },
  openGraph: {
    type: "website",
    siteName: selskap.fulltNavn,
    title: `Vilkår — ${selskap.fulltNavn}`,
    description: beskrivelse,
    url: `${selskap.url}/vilkar`,
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

export default function VilkarSide() {
  return (
    <JuridiskSide
      tittel="Vilkår"
      ingress={vilkarIngress}
      oppdatert={JURIDISK_OPPDATERT}
      innhold={vilkar}
    />
  );
}
