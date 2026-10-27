import AvdelingSide from "@/components/AvdelingSide";
import NorskRamme from "@/components/NorskRamme";
import { avdelingJsonLd, avdelingMetadata, hentAvdeling } from "@/lib/avdeling-meta";

// Crest Services — egen side for avdelingen, laget 27. oktober 2026.

const SLUG = "crest-services";

export const metadata = avdelingMetadata(SLUG);

export default function CrestServices() {
  return (
    <NorskRamme
      lenker={[
        { navn: "Hva vi gjør", href: "#hva" },
        { navn: "Etter et kjøp", href: "#slik" },
        { navn: "Avdelinger", href: "#andre" },
      ]}
      knapp={{ navn: "Kontakt", href: "#contact" }}
    >
      <AvdelingSide avdeling={hentAvdeling(SLUG)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(avdelingJsonLd(SLUG)) }}
      />
    </NorskRamme>
  );
}
