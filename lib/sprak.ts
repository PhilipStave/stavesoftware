// Språk på nettstedet.
//
// Norsk er hovedspråket og ligger på de korte adressene; engelsk ligger under
// /en. Begge er egne, indekserbare adresser med hreflang mellom seg — det er
// slik Google vil ha det, og det er grunnen til at vi ikke serverer to språk
// på samme adresse.
//
// Mellomleddet i middleware.ts sender en besøkende med engelsk nettleser fra
// / til /en første gang. Valget huskes i en informasjonskapsel, og søkeroboter
// sendes aldri videre — ellers ville den norske utgaven aldri blitt indeksert.

import { selskap } from "./selskap";

export type Sprak = "nb" | "en";

/** Sidene som finnes på begge språk, norsk adresse → engelsk adresse. */
export const PAR: { nb: string; en: string }[] = [
  { nb: "/", en: "/en" },
  { nb: "/investor", en: "/en/investors" },
];

export const engelskAv = (nb: string): string => PAR.find((p) => p.nb === nb)?.en ?? "/en";
export const norskAv = (en: string): string => PAR.find((p) => p.en === en)?.nb ?? "/";

/** Lenken som står i menyen: peker alltid på den andre utgaven av samme side. */
export const sprakvalg = (sprak: Sprak, sti: string) =>
  sprak === "nb"
    ? { kode: "en" as const, navn: "EN", href: engelskAv(sti) }
    : { kode: "nb" as const, navn: "NO", href: norskAv(sti) };

/** hreflang-oppføringene til metadata. x-default peker på norsk. */
export const alternativer = (nbSti: string) => ({
  canonical: "",
  languages: {
    "nb-NO": `${selskap.url}${nbSti}`,
    en: `${selskap.url}${engelskAv(nbSti)}`,
    "x-default": `${selskap.url}${nbSti}`,
  },
});
