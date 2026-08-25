export type TekItem = { navn: string; rolle: string };
export type Tjeneste = {
  nr: string;
  tittel: string;
  tekst: string;
  lead: string;
  media: string;
  punkter: { navn: string; tekst: string }[];
  caseNavn?: string;
  caseTekst?: string;
  caseUrl?: string;
};
export type TekRad = { navn: string; tekst: string };
export type TekGruppe = { nr: string; delay: string; tittel: string; rader: TekRad[] };

const tek: TekItem[] = [
  { navn: "Next.js", rolle: "Rammeverk — nettside & app" },
  { navn: "React", rolle: "Grensesnitt" },
  { navn: "TypeScript", rolle: "Språk med sikkerhetsnett" },
  { navn: "Tailwind CSS", rolle: "Design & lys/mørk modus" },
  { navn: "Supabase", rolle: "Database · innlogging · lagring" },
  { navn: "PostgreSQL + RLS", rolle: "Hver bedrift ser kun sitt" },
  { navn: "Stripe", rolle: "Abonnement & betaling" },
  { navn: "Resend", rolle: "E-post & logging" },
];

const tek2: TekItem[] = [
  { navn: "Vercel", rolle: "Hosting — push til publisert" },
  { navn: "GitHub", rolle: "Kodelager & historikk" },
  { navn: "Playwright", rolle: "Automatiske skjermbilder & test" },
  { navn: "ESLint + tsc", rolle: "Kodesjekk før hver publisering" },
  { navn: "Swift & SwiftUI", rolle: "iOS-appen Oystr" },
  { navn: "Åpne datakilder", rolle: "Kartverket · Kystverket · MET" },
  { navn: "Google Gemini", rolle: "AI-illustrasjoner" },
  { navn: "Claude Code", rolle: "AI-utvikleren" },
];

export const tekRad1: TekItem[] = tek.concat(tek);
export const tekRad2: TekItem[] = tek2.concat(tek2);

export const tjenester: Tjeneste[] = [
  {
    nr: "/01",
    tittel: "Salg",
    tekst:
      "Vi bygger salgsapparatet: hvem du skal snakke med, hva du skal si, og systemet som holder styr på det. Vi har gjort det for oss selv først.",
    lead:
      "De fleste startups dør ikke fordi produktet var dårlig, men fordi ingen fikk høre om det. Salg er derfor det første vi tar tak i.",
    media: "/uploads/tjeneste-web-saas.jpg",
    punkter: [
      {
        navn: "Hvem du skal ringe",
        tekst:
          "Vi finner ut hvem som faktisk har problemet du løser, hvem som har budsjett, og hvem som bare kommer til å stjele tiden din.",
      },
      {
        navn: "Hva du skal si",
        tekst:
          "Pitch, innvendinger og oppfølging. De første femti samtalene former produktet like mye som de selger det.",
      },
      {
        navn: "Systemet under",
        tekst:
          "Pipeline, logging og oppfølginger som ikke faller mellom stolene. Vi bygde Altiv fordi vi trengte det selv.",
      },
    ],
    caseNavn: "Altiv",
    caseTekst: "Vårt eget CRM for salgsoppfølging i B2B.",
    caseUrl: "https://altiv.no",
  },
  {
    nr: "/02",
    tittel: "Produkt & teknologi",
    tekst:
      "Fra idé til lansert produkt. Apper, web og SaaS — vi bygger det, og vi drifter det etterpå. Ingen leverandør å kjefte på.",
    lead:
      "Vi er utviklerne dine. Ikke et byrå som leverer og forsvinner, men folk som drifter det de bygde, i årevis.",
    media: "/uploads/tjeneste-mobilapper.jpg",
    punkter: [
      {
        navn: "Bygget for å vare",
        tekst:
          "Kjedelig, veldokumentert teknologi fremfor det nyeste. Vi skal leve med koden lenge, og det skal du også.",
      },
      {
        navn: "Native og web",
        tekst:
          "iOS i Swift når det trengs, nettleser når det holder. Vi har gjort begge deler og har ingen agenda om hvilken du velger.",
      },
      {
        navn: "Drift inkludert",
        tekst:
          "Hosting, oppdateringer, sikkerhetsfikser og det som knekker klokka to om natten. Det følger med.",
      },
    ],
    caseNavn: "Oystr",
    caseTekst: "Sjøkart og navigasjon for hele norskekysten.",
    caseUrl: "https://www.oystr.no",
  },
  {
    nr: "/03",
    tittel: "Design & merkevare",
    tekst:
      "Navn, identitet og grensesnitt. Produkter som ser like bra ut som de virker — fordi førsteinntrykket avgjør om noen prøver i det hele tatt.",
    lead:
      "Hele pakken fra navn og identitet til ferdig grensesnitt, tegnet og bygget av de samme folkene.",
    media: "/uploads/tjeneste-design.jpg",
    punkter: [
      {
        navn: "Identitet",
        tekst:
          "Navn, logo og visuell profil som står seg — og som ikke må gjøres om når dere vokser.",
      },
      {
        navn: "Grensesnitt",
        tekst:
          "Det som tegnes er det som bygges. Ingen overlevering der halve kvaliteten forsvinner.",
      },
      {
        navn: "Innhold",
        tekst:
          "Tekst, illustrasjon og video. Nettsiden du leser nå er et eksempel på hva vi mener med ferdig.",
      },
    ],
  },
  {
    nr: "/04",
    tittel: "Alt det andre",
    tekst:
      "Domener, drift, betaling, e-post, søkemotorer og regnearkene ingen vil ta. Du skal bygge selskapet, ikke sette opp DNS.",
    lead:
      "Den usynlige halvdelen av å drive et selskap. Vi tar den, slik at du kan bruke tiden på det bare du kan gjøre.",
    media: "/uploads/tjeneste-kart-data.jpg",
    punkter: [
      {
        navn: "Infrastrukturen",
        tekst:
          "Domener, e-post, hosting, sertifikater og overvåking. Kjedelig, nødvendig, og fort gjort feil.",
      },
      {
        navn: "Betaling og abonnement",
        tekst:
          "Stripe, prøveperioder, fakturaer og oppsigelser. Å ta betalt er et produktproblem, ikke bare et teknisk et.",
      },
      {
        navn: "Synlighet",
        tekst:
          "Søkemotorer, analyse og det som skal til for at folk finner dere uten at dere kjøper annonser.",
      },
    ],
  },
];

export const tekGrupper: TekGruppe[] = [
  {
    nr: "/01",
    delay: ".65s",
    tittel: "Kjerne — koden",
    rader: [
      { navn: "Next.js 16", tekst: "Selve rammeverket — nettsiden og appen, alt i ett prosjekt." },
      { navn: "React", tekst: "Byggeklossene i grensesnittet: knapper, tavler og skjemaer." },
      { navn: "TypeScript", tekst: "Programmeringsspråket — JavaScript med sikkerhetsnett." },
      { navn: "Tailwind CSS v4", tekst: "Design, farger og lys/mørk modus med CSS-variabler." },
      { navn: "Swift & SwiftUI", tekst: "iOS-appen Oystr — native for iPhone." },
    ],
  },
  {
    nr: "/02",
    delay: ".75s",
    tittel: "Data & innlogging",
    rader: [
      { navn: "Supabase", tekst: "Database (PostgreSQL), innlogging og fillagring for dokumenter." },
      { navn: "Row Level Security", tekst: "Regler i selve databasen — hver bedrift ser kun sine egne data." },
    ],
  },
  {
    nr: "/03",
    delay: ".85s",
    tittel: "Betaling & e-post",
    rader: [
      { navn: "Stripe", tekst: "Abonnement, kort, prøveperiode og fakturaer." },
      { navn: "Resend", tekst: "E-postmottak — logg-adressene og videresending av post@altiv.no." },
    ],
  },
  {
    nr: "/04",
    delay: ".95s",
    tittel: "Drift",
    rader: [
      { navn: "Vercel", tekst: "Hosting — hver push publiseres automatisk til altiv.no." },
      { navn: "GitHub", tekst: "Kodelager og full historikk på alt vi bygger." },
      { navn: "Domeneshop", tekst: "Domener og DNS." },
    ],
  },
  {
    nr: "/05",
    delay: "1.05s",
    tittel: "Kvalitet & innhold",
    rader: [
      { navn: "Playwright", tekst: "Tar de ekte skjermbildene på landingssiden automatisk." },
      { navn: "ESLint + tsc", tekst: "Sjekker koden for feil før hver eneste publisering." },
      { navn: "Search Console + Bing", tekst: "Søkemotor-registrering og synlighet." },
      { navn: "Google Gemini", tekst: "AI-illustrasjoner og video." },
      { navn: "Claude Code", tekst: "AI-utvikleren 🙂" },
    ],
  },
];
