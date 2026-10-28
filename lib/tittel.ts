import { selskap } from "@/lib/selskap";

// Sidetitler.
//
// Google viser omtrent 60 tegn i et søkeresultat og klipper resten. På
// artiklene og guidene spiste selskapsnavnet til slutt 17–19 av dem, slik at
// titler som var korte nok i seg selv ble kuttet midt i setningen.
//
// Regelen her: selskapsnavnet legges på bare når tittelen fortsatt får plass.
// Da beholder de korte sidene merkenavnet i resultatet, og de lange bruker
// plassen på det som faktisk skiller dem fra hverandre. Merket står uansett i
// adressen, i brødsmulene og i oppmerkingen.

export const MAKS_TITTEL = 60;

/** Tittel med selskapsnavnet bak, men bare hvis det får plass. */
export function medMerke(tittel: string, merke: string = selskap.navn): string {
  const full = `${tittel} — ${merke}`;
  return full.length <= MAKS_TITTEL ? full : tittel;
}
