import Link from "next/link";
import type { ReactNode } from "react";

// Lenker i løpende tekst.
//
// Innholdet i artikler og tjenestesider er rene strenger, så en lenke må enten
// skrives som markering i teksten eller settes inn som egne felt. Markeringen
// [tekst](adresse) er valgt fordi den er lesbar i innholdsfila og ikke slipper
// HTML inn i innholdet: det som kommer ut er React-elementer, aldri rå HTML.
const LENKE = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export function medLenker(tekst: string): ReactNode {
  const deler: ReactNode[] = [];
  let sist = 0;
  for (const m of tekst.matchAll(LENKE)) {
    const [hel, etikett, adresse] = m;
    if (m.index > sist) deler.push(tekst.slice(sist, m.index));
    deler.push(
      adresse.startsWith("/") ? (
        <Link key={m.index} href={adresse} data-hover="" className="tekstlenke">
          {etikett}
        </Link>
      ) : (
        <a
          key={m.index}
          href={adresse}
          target="_blank"
          rel="noopener"
          data-hover=""
          className="tekstlenke"
        >
          {etikett}
        </a>
      )
    );
    sist = m.index + hel.length;
  }
  if (!deler.length) return tekst;
  if (sist < tekst.length) deler.push(tekst.slice(sist));
  return deler;
}

// Samme tekst uten markering — til strukturerte data og andre steder der det
// skal stå nøyaktig det leseren ser, uten klammer og parenteser.
export const utenLenker = (tekst: string): string => tekst.replace(LENKE, "$1");
