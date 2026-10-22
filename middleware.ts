import { NextRequest, NextResponse } from "next/server";
import { engelskAv } from "@/lib/sprak";

// Sender en besøkende med engelsk nettleser fra den norske forsiden til den
// engelske utgaven — én gang.
//
// Tre ting gjør at dette ikke ødelegger indekseringen, som automatisk
// språkvideresending ellers pleier å gjøre:
//
//  1. Søkeroboter sendes aldri videre. Googlebot henter sidene med engelsk
//     Accept-Language fra USA, og uten dette unntaket ville den norske
//     forsiden aldri blitt indeksert på sin egen adresse. Innholdet er likt
//     for robot og menneske på hver adresse, så dette er ikke kloaking — det
//     er bare at bekvemmelighetsvideresendingen står over.
//  2. Begge utgavene har egne adresser med hreflang mellom seg, og hver er
//     kanonisk for seg selv.
//  3. Videresendingen er 307, altså midlertidig, og Vary: Accept-Language
//     hindrer at en mellomlagring serverer feil språk videre.
//
// Har den besøkende valgt språk i menyen, ligger valget i en
// informasjonskapsel og respekteres.

const ROBOTER =
  /bot|crawl|spider|slurp|googlebot|bingbot|duckduckbot|applebot|yandex|baiduspider|petalbot|facebookexternalhit|twitterbot|linkedinbot|gptbot|claudebot|perplexity|ccbot|ia_archiver|lighthouse|headlesschrome/i;

const NORDISK = /^(nb|nn|no|da|sv)\b/i;

const tilEngelsk = (req: NextRequest, sti: string) => {
  const svar = NextResponse.redirect(new URL(sti, req.url), 307);
  svar.headers.set("Vary", "Accept-Language, Cookie");
  svar.headers.set("Cache-Control", "no-store");
  return svar;
};

export function middleware(req: NextRequest) {
  const sti = req.nextUrl.pathname;
  const engelsk = engelskAv(sti);

  const svar = NextResponse.next();
  svar.headers.set("Vary", "Accept-Language, Cookie");

  const ua = req.headers.get("user-agent") ?? "";
  if (ROBOTER.test(ua)) return svar;

  const valgt = req.cookies.get("sprak")?.value;
  if (valgt === "nb") return svar;
  if (valgt === "en") return tilEngelsk(req, engelsk);

  // Første språk i Accept-Language avgjør. Mangler hodet, står norsk.
  const foerste = (req.headers.get("accept-language") ?? "").split(",")[0]?.trim() ?? "";
  if (!foerste || foerste === "*" || NORDISK.test(foerste)) return svar;

  return tilEngelsk(req, engelsk);
}

// Bare de to sidene som finnes på begge språk.
export const config = {
  matcher: ["/", "/investor"],
};
