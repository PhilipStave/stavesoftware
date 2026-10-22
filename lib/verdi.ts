// Regnestykket bak verdivurderingen.
//
// Ingen av tallene er hemmelige, og metoden står på siden. Grunnen er enkel:
// et verktøy som spytter ut ett tall uten å vise hvordan det kom fram, er et
// salgstriks. Et som viser regnestykket, kan etterprøves av den som selger —
// og det er den samme gjennomgangen vi selv gjør før vi gir et bud.
//
// Kilden er Regnskapsregisteret, som gir de tre siste innsendte årene. Alt
// annet enn det som står der, er vurdering: kundekonsentrasjon,
// eieravhengighet, avtaler med eierskifteklausul og lagerets kvalitet kan
// flytte prisen mer enn multippelen gjør. Derfor er svaret et spenn, og
// derfor sier siden selv at det ikke er en verdivurdering.

export type Aar = {
  aar: string;
  driftsinntekter: number;
  driftsresultat: number;
  aarsresultat: number;
  lonnskostnad: number;
  sumEiendeler: number;
  egenkapital: number;
  bank: number;
  fordringer: number;
  lager: number;
  kortsiktigGjeld: number;
  langsiktigGjeld: number;
};

export type Selskapstall = {
  orgnr: string;
  navn: string;
  organisasjonsform?: string;
  naering?: string;
  sted?: string;
  ansatte?: number;
  stiftet?: string;
  konkurs?: boolean;
  avvikling?: boolean;
  aar: Aar[];
};

export type Justering = { tekst: string; verdi: number };

export type Vurdering =
  | { slag: "ingen-tall"; begrunnelse: string }
  | { slag: "taper-penger"; begrunnelse: string; substans: number; normalEbit: number }
  | {
      slag: "spenn";
      lav: number;
      hoy: number;
      normalEbit: number;
      multippelLav: number;
      multippelHoy: number;
      justeringer: Justering[];
      kontanter: number;
      gjeld: number;
      substans: number;
      margin: number;
      vekst: number | null;
    };

/** Vektet snitt av driftsresultatet: nyeste år teller mest. */
export function normalisertEbit(aar: Aar[]): number {
  const sortert = [...aar].sort((a, b) => b.aar.localeCompare(a.aar));
  const vekter = [0.5, 0.3, 0.2];
  let sum = 0;
  let vekt = 0;
  sortert.slice(0, 3).forEach((a, i) => {
    sum += a.driftsresultat * vekter[i];
    vekt += vekter[i];
  });
  return vekt ? sum / vekt : 0;
}

/**
 * Multippelen settes av tre ting vi kan lese ut av tallene: størrelse,
 * lønnsomhet og retning. Alt annet krever at noen snakker med eieren.
 */
export function multippel(aar: Aar[]): { lav: number; hoy: number; justeringer: Justering[]; margin: number; vekst: number | null } {
  const sortert = [...aar].sort((a, b) => b.aar.localeCompare(a.aar));
  const siste = sortert[0];
  const forrige = sortert[1];

  const omsetning = siste.driftsinntekter;
  const margin = omsetning > 0 ? (normalisertEbit(aar) / omsetning) * 100 : 0;
  const vekst =
    forrige && forrige.driftsinntekter > 0
      ? ((siste.driftsinntekter - forrige.driftsinntekter) / forrige.driftsinntekter) * 100
      : null;

  let lav = 2.5;
  let hoy = 4;
  const justeringer: Justering[] = [];

  const legg = (tekst: string, verdi: number) => {
    lav += verdi;
    hoy += verdi;
    justeringer.push({ tekst, verdi });
  };

  if (margin >= 15) legg("Driftsmargin over 15 prosent", 0.75);
  else if (margin >= 10) legg("Driftsmargin over 10 prosent", 0.4);
  else if (margin < 5) legg("Driftsmargin under 5 prosent", -0.5);

  if (omsetning >= 50_000_000) legg("Omsetning over 50 millioner", 0.5);
  else if (omsetning >= 20_000_000) legg("Omsetning over 20 millioner", 0.25);
  else if (omsetning < 5_000_000) legg("Omsetning under 5 millioner", -0.5);

  if (vekst !== null) {
    if (vekst >= 10) legg("Omsetningen vokste over 10 prosent siste år", 0.4);
    else if (vekst <= -10) legg("Omsetningen falt over 10 prosent siste år", -0.5);
  }

  return { lav: Math.max(1.5, lav), hoy: Math.min(6, hoy), justeringer, margin, vekst };
}

export function vurder(tall: Selskapstall): Vurdering {
  const aar = tall.aar;
  if (!aar.length) {
    return {
      slag: "ingen-tall",
      begrunnelse:
        "Vi finner ingen innsendte årsregnskap på dette organisasjonsnummeret. Det kan bety at selskapet er nystiftet, at det er et enkeltpersonforetak uten regnskapsplikt, eller at regnskapet for siste år ikke er levert ennå.",
    };
  }

  const sortert = [...aar].sort((a, b) => b.aar.localeCompare(a.aar));
  const siste = sortert[0];
  const ebit = normalisertEbit(aar);
  const substans = siste.egenkapital;

  if (ebit <= 0) {
    return {
      slag: "taper-penger",
      begrunnelse:
        "Det normaliserte driftsresultatet er null eller negativt. Da gir en multippel av overskuddet ingen mening, og prisen settes av eiendelene, kontraktene eller kundene — ikke av inntjeningen.",
      substans,
      normalEbit: ebit,
    };
  }

  const m = multippel(aar);
  const kontanter = siste.bank;
  const gjeld = siste.langsiktigGjeld;

  return {
    slag: "spenn",
    lav: Math.max(0, ebit * m.lav + kontanter - gjeld),
    hoy: Math.max(0, ebit * m.hoy + kontanter - gjeld),
    normalEbit: ebit,
    multippelLav: m.lav,
    multippelHoy: m.hoy,
    justeringer: m.justeringer,
    kontanter,
    gjeld,
    substans,
    margin: m.margin,
    vekst: m.vekst,
  };
}

export const kr = (n: number): string =>
  new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 0 }).format(Math.round(n)) + " kr";

export const mill = (n: number): string =>
  new Intl.NumberFormat("nb-NO", { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(n / 1_000_000) +
  " mill.";

export const pst = (n: number | null): string =>
  n === null ? "—" : new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 1 }).format(n) + " %";

/** Ni siffer, med eller uten mellomrom. Returnerer null hvis det ikke er et organisasjonsnummer. */
export function rensOrgnr(tekst: string): string | null {
  const bare = tekst.replace(/\D/g, "");
  return bare.length === 9 ? bare : null;
}
