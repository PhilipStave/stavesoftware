import type { Metadata } from "next";
import JuridiskSide from "@/components/JuridiskSide";
import { vilkar, vilkarIngress, JURIDISK_OPPDATERT } from "@/lib/juridisk";

const beskrivelse =
  "Vilkår for bruk av stavesoftware.no: hvem som står bak siden, hva du kan gjøre med innholdet, og hva som ikke er et bindende tilbud.";

export const metadata: Metadata = {
  title: "Vilkår — Stave Software AS",
  description: beskrivelse,
  alternates: { canonical: "https://stavesoftware.no/vilkar" },
  openGraph: {
    type: "website",
    siteName: "Stave Software AS",
    title: "Vilkår — Stave Software AS",
    description: beskrivelse,
    url: "https://stavesoftware.no/vilkar",
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
