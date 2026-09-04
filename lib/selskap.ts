// Én kilde til selskapsidentiteten.
//
// Selskapet byttet foretaksnavn fra STAVE SOFTWARE AS til CREST HOLDING AS ved
// enstemmig vedtak i ekstraordinær generalforsamling 3. september 2026. Samme
// juridiske enhet, samme organisasjonsnummer — bare nytt navn.
//
// VIKTIG: et foretaksnavn får rettsvirkning først når det er registrert i
// Foretaksregisteret. Fram til det er på plass står selskapet oppført der under
// det gamle navnet, og de juridiske sidene må si det.
//
// Når registreringen er bekreftet i Brønnøysund, settes NAVN_REGISTRERT til
// true. Det snur to ting automatisk: overgangssetningen i selskapsangivelse(),
// og legalName/alternateName i JSON-LD-en i app/layout.tsx.
// Én ting er IKKE styrt av flagget og må rettes for hånd: setningen om e-post
// i lib/juridisk.ts som sier at selskapet «vedtok å bytte navn» — den kan da
// skrives om til at navnet er byttet.

export const NAVN_REGISTRERT = false;

export const selskap = {
  /** Merkenavnet slik det brukes i løpende tekst. */
  navn: "Crest Holding",
  /** Fullt foretaksnavn med selskapsform. */
  fulltNavn: "Crest Holding AS",
  /** Foretaksnavnet slik det er vedtatt, i registerets skrivemåte. */
  juridiskNavn: "CREST HOLDING AS",
  /** Tidligere foretaksnavn. Beholdes så lenge det finnes spor av det ute. */
  tidligereNavn: "Stave Software AS",
  orgnr: "938 341 788",
  /** Uten mellomrom — for strukturerte data og API-oppslag. */
  orgnrKompakt: "938341788",
  sted: "Oslo",
  land: "NO",

  // NETTSTEDET. Flyttet hit 4. september 2026, etter at domenet faktisk
  // svarte — delegering publisert i .no-sonen, DNSSEC-kjeden intakt og
  // sertifikatet utstedt. Rekkefølgen er ikke likegyldig: flippes dette før
  // domenet svarer, forteller canonical-taggene og sitemapen søkemotorene at
  // hver side hører hjemme et sted som ikke finnes.
  domene: "crestholding.no",
  url: "https://crestholding.no",

  // E-POSTEN er en egen bryter, og skal byttes uavhengig av nettstedet:
  // først når post@crestholding.no faktisk mottar. Byttes den for tidlig,
  // slutter kontaktlenkene å virke uten at noen får beskjed.
  epost: "post@stavesoftware.no",

  // Det tidligere domenet. Beholdes så lenge det videresender og finnes
  // lenker til det.
  tidligereDomene: "stavesoftware.no",

  navnendringVedtatt: "2026-09-03",
} as const;

/** Vedtaksdatoen skrevet ut på norsk, av samme konstant som resten leser. */
const vedtaksdato = (): string =>
  new Intl.DateTimeFormat("nb-NO", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(selskap.navnendringVedtatt)
  );

/**
 * Selskapsbetegnelsen for juridiske sider: full identifikasjon, og — så lenge
 * navnet ikke er registrert — en presis forklaring på hvorfor Foretaksregisteret
 * fortsatt viser det gamle navnet.
 */
export const selskapsangivelse = (): string =>
  NAVN_REGISTRERT
    ? `${selskap.fulltNavn}, org.nr. ${selskap.orgnr}, registrert i Foretaksregisteret, med forretningssted i ${selskap.sted}.`
    : `${selskap.fulltNavn}, org.nr. ${selskap.orgnr}, med forretningssted i ${selskap.sted}. Selskapet er registrert i Foretaksregisteret, foreløpig under det tidligere foretaksnavnet ${selskap.tidligereNavn}; navneendringen ble vedtatt ${vedtaksdato()} og meldes til Foretaksregisteret.`;

/** Kort variant til bunntekst og lignende. */
export const selskapslinje = `© 2026 ${selskap.fulltNavn} · Org.nr ${selskap.orgnr} · ${selskap.sted}`;
