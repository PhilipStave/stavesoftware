import { NextRequest } from "next/server";
import type { Aar, Selskapstall } from "@/lib/verdi";

// Mellomledd mot Brønnøysundregistrene.
//
// Enhetsregisteret svarer på kall fra nettleseren, men Regnskapsregisteret
// gjør det ikke — det mangler CORS-hodene. Derfor går begge oppslagene
// herfra, med en User-Agent som sier hvem vi er, slik registeret ber om.
//
// Dataene er åpne under NLOD. Lisensen krever kreditering, og den står på
// siden som bruker dette.
//
// Svaret bufres et døgn. Årsregnskap endrer seg én gang i året, og det er
// ingen grunn til å plage registeret med samme oppslag mange ganger.

export const revalidate = 86400;

const UA = {
  "User-Agent": "crestholding.no verdivurdering (post@stavesoftware.no)",
  Accept: "application/json",
};

type BrregAar = {
  regnskapsperiode?: { fraDato?: string };
  resultatregnskapResultat?: {
    driftsresultat?: {
      driftsinntekter?: { sumDriftsinntekter?: number };
      driftskostnad?: { loennskostnad?: number; sumDriftskostnad?: number };
      driftsresultat?: number;
    };
    aarsresultat?: number;
  };
  eiendeler?: {
    sumEiendeler?: number;
    sumFordringer?: number;
    sumBankinnskuddOgKontanter?: number;
    omloepsmidler?: { sumOmloepsmidler?: number };
    anleggsmidler?: { sumAnleggsmidler?: number };
  };
  egenkapitalGjeld?: {
    egenkapital?: { sumEgenkapital?: number };
    gjeldOversikt?: {
      kortsiktigGjeld?: { sumKortsiktigGjeld?: number };
      langsiktigGjeld?: { sumLangsiktigGjeld?: number };
    };
  };
};

const tall = (n: number | undefined | null): number => (typeof n === "number" ? n : 0);

export async function GET(req: NextRequest) {
  const orgnr = (req.nextUrl.searchParams.get("orgnr") ?? "").replace(/\D/g, "");
  if (orgnr.length !== 9) {
    return Response.json({ feil: "Organisasjonsnummeret må være ni siffer." }, { status: 400 });
  }

  const enhetSvar = await fetch(`https://data.brreg.no/enhetsregisteret/api/enheter/${orgnr}`, {
    headers: UA,
    next: { revalidate },
  });

  if (enhetSvar.status === 404) {
    return Response.json({ feil: "Fant ikke selskapet i Enhetsregisteret." }, { status: 404 });
  }
  if (!enhetSvar.ok) {
    return Response.json({ feil: "Enhetsregisteret svarte ikke. Prøv igjen om litt." }, { status: 502 });
  }

  const e = await enhetSvar.json();

  const regnskapSvar = await fetch(`https://data.brreg.no/regnskapsregisteret/regnskap/${orgnr}?regnskapstype=SELSKAP`, {
    headers: UA,
    next: { revalidate },
  });

  let aar: Aar[] = [];
  if (regnskapSvar.ok) {
    const rader: BrregAar[] = await regnskapSvar.json();
    aar = (Array.isArray(rader) ? rader : [])
      .map((r): Aar => {
        const d = r.resultatregnskapResultat?.driftsresultat;
        const eiendeler = r.eiendeler;
        const omlop = tall(eiendeler?.omloepsmidler?.sumOmloepsmidler);
        const fordringer = tall(eiendeler?.sumFordringer);
        const bank = tall(eiendeler?.sumBankinnskuddOgKontanter);
        return {
          aar: (r.regnskapsperiode?.fraDato ?? "").slice(0, 4),
          driftsinntekter: tall(d?.driftsinntekter?.sumDriftsinntekter),
          driftsresultat: tall(d?.driftsresultat),
          aarsresultat: tall(r.resultatregnskapResultat?.aarsresultat),
          lonnskostnad: tall(d?.driftskostnad?.loennskostnad),
          sumEiendeler: tall(eiendeler?.sumEiendeler),
          egenkapital: tall(r.egenkapitalGjeld?.egenkapital?.sumEgenkapital),
          bank,
          fordringer,
          lager: Math.max(0, omlop - fordringer - bank),
          kortsiktigGjeld: tall(r.egenkapitalGjeld?.gjeldOversikt?.kortsiktigGjeld?.sumKortsiktigGjeld),
          langsiktigGjeld: tall(r.egenkapitalGjeld?.gjeldOversikt?.langsiktigGjeld?.sumLangsiktigGjeld),
        };
      })
      .filter((a) => a.aar)
      .sort((a, b) => b.aar.localeCompare(a.aar))
      .filter((a, i, alle) => alle.findIndex((b) => b.aar === a.aar) === i);
  }

  const svar: Selskapstall = {
    orgnr,
    navn: e.navn,
    organisasjonsform: e.organisasjonsform?.beskrivelse,
    naering: e.naeringskode1?.beskrivelse,
    sted: e.forretningsadresse?.poststed,
    ansatte: e.antallAnsatte,
    stiftet: e.stiftelsesdato,
    konkurs: Boolean(e.konkurs),
    avvikling: Boolean(e.underAvvikling || e.underTvangsavviklingEllerTvangsopplosning),
    aar,
  };

  return Response.json(svar, {
    headers: { "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800" },
  });
}
