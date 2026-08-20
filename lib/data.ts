export type TekItem = { navn: string; rolle: string };
export type Tjeneste = { nr: string; tittel: string; tekst: string };
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
  },
  {
    nr: "/02",
    tittel: "Web & SaaS",
    tekst:
      "Komplette systemer i nettleseren, fra pipeline til statistikk. Som Altiv — ingen installasjon, klart på minutter.",
  },
  {
    nr: "/03",
    tittel: "Kart & data",
    tekst:
      "Offentlige datakilder, AIS, vær og kart smeltet sammen til produkter som gir mening ute i felt.",
  },
  {
    nr: "/04",
    tittel: "Design & merkevare",
    tekst:
      "Hele pakken fra navn og identitet til ferdig grensesnitt. Produkter som ser like bra ut som de virker.",
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
