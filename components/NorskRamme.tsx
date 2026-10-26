import HoldingNav from "@/components/HoldingNav";
import { HoldingBunn } from "@/components/holding-stil";
import { bunntekst } from "@/lib/holding";
import { selskap } from "@/lib/selskap";

// Rammen rundt de norske sidene under holdingselskapet: verdivurderingen og
// guidene. Samme lyse tema og samme meny som forsiden, men med norske
// menytekster — forsiden er på engelsk, disse sidene er for norske eiere som
// vurderer å selge.

type Lenke = { navn: string; href: string };

const STANDARD: Lenke[] = [
  { navn: "Verdivurdering", href: "/verdivurdering" },
  { navn: "Guider", href: "/guider" },
];

export default function NorskRamme({
  children,
  lenker = STANDARD,
  knapp = { navn: "Kontakt", href: "/#contact" },
}: {
  children: React.ReactNode;
  /** Menyen følger siden: selgersidene og programvaresiden har ulike lenker. */
  lenker?: Lenke[];
  knapp?: Lenke;
}) {
  return (
    <div lang="nb" className="lys" style={{ minHeight: "100vh" }}>
      <HoldingNav
        hjem={`${selskap.fulltNavn} — forsiden`}
        lenker={lenker}
        knapp={knapp}
      />
      {children}
      <HoldingBunn bunntekst={bunntekst} />
    </div>
  );
}
