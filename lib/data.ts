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
    tittel: "Mobilapper",
    tekst:
      "Native apper for iOS med kart, offline-funksjonalitet og sanntidsdata. Som Oystr — bygget for å virke der dekningen svikter.",
    lead:
      "Native iOS-apper bygget i Swift og SwiftUI — raske, offline-first og laget for norske forhold.",
    media: "/uploads/tjeneste-mobilapper.jpg",
    punkter: [
      {
        navn: "Kart & offline",
        tekst:
          "Nedlastbare kart og data som virker uten dekning — som sjøkartene i Oystr, bygget for å virke der dekningen svikter.",
      },
      {
        navn: "Sanntidsdata",
        tekst:
          "AIS, vær, vannstand og posisjon — hentet, tolket og vist akkurat når det trengs.",
      },
      {
        navn: "Hele App Store-løpet",
        tekst:
          "Fra TestFlight og lansering til oppdateringer og drift — vi eier hele livssyklusen.",
      },
    ],
    caseNavn: "Oystr",
    caseTekst: "Sjøkart og navigasjon for hele norskekysten.",
    caseUrl: "https://www.oystr.no",
  },
  {
    nr: "/02",
    tittel: "Web & SaaS",
    tekst:
      "Komplette systemer i nettleseren, fra pipeline til statistikk. Som Altiv — ingen installasjon, klart på minutter.",
    lead:
      "Komplette systemer i nettleseren — fra første innlogging til betaling, statistikk og drift.",
    media: "/uploads/tjeneste-web-saas.jpg",
    punkter: [
      {
        navn: "Produkt, ikke prosjekt",
        tekst:
          "Vi bygger som om vi skal drifte det selv — fordi vi gjør det. Ingen installasjon, klart på minutter.",
      },
      {
        navn: "Abonnement & betaling",
        tekst: "Stripe, prøveperioder og fakturaer ferdig koblet fra dag én.",
      },
      {
        navn: "Sikkerhet i bunn",
        tekst:
          "PostgreSQL med Row Level Security — hver bedrift ser kun sine egne data.",
      },
    ],
    caseNavn: "Altiv",
    caseTekst: "Norsk CRM for salgsoppfølging i B2B.",
    caseUrl: "https://altiv.no",
  },
  {
    nr: "/03",
    tittel: "Kart & data",
    tekst:
      "Offentlige datakilder, AIS, vær og kart smeltet sammen til produkter som gir mening ute i felt.",
    lead:
      "Offentlige datakilder er gull — hvis noen gjør dem forståelige. Det er det vi gjør.",
    media: "/uploads/tjeneste-kart-data.jpg",
    punkter: [
      {
        navn: "Åpne kilder",
        tekst:
          "Kartverket, Kystverket og Meteorologisk institutt — smeltet sammen til ett bilde.",
      },
      {
        navn: "Tolket, ikke bare vist",
        tekst:
          "Sjøveisruting rundt land og grunner, varsler og vannstand som gir mening ute i felt.",
      },
      {
        navn: "Raskt på mobil",
        tekst:
          "Store datasett på små flater — optimalisert for å være lynraskt der det brukes.",
      },
    ],
    caseNavn: "Oystr",
    caseTekst: "Kartdata fra Kartverket og Kystverket, vær fra MET.",
    caseUrl: "https://www.oystr.no",
  },
  {
    nr: "/04",
    tittel: "Design & merkevare",
    tekst:
      "Hele pakken fra navn og identitet til ferdig grensesnitt. Produkter som ser like bra ut som de virker.",
    lead:
      "Hele pakken fra navn og identitet til ferdig grensesnitt — produkter som ser like bra ut som de virker.",
    media: "/uploads/tjeneste-design.jpg",
    punkter: [
      {
        navn: "Identitet",
        tekst: "Navn, logo og visuell profil som står seg — som STAVE., Oystr og Altiv.",
      },
      {
        navn: "Grensesnitt",
        tekst: "Design og kode fra samme hånd — det som tegnes, er det som bygges.",
      },
      {
        navn: "Innhold",
        tekst:
          "Tekst, illustrasjon og video — AI-assistert der det er smart, håndlaget der det synes.",
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
