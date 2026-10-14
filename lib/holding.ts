// Content for the holding company's front page.
//
// Language rule: this page is in English, while Crest Software, the journal and
// the legal pages stay in Norwegian. The wrapper element carries lang="en" so
// the mix is declared, not guessed.
//
// Wording rule: "businesses", never "portfolio companies" or "the companies we
// own". Everything sits inside Crest Holding AS today, and nothing on the page
// may suggest subsidiaries that do not exist. No figures for revenue, returns
// or headcount — we have none to show yet, and invented numbers are the fastest
// way to lose a reader who checks.

import { selskap } from "./selskap";

export type Virksomhet = {
  navn: string;
  rolle: string;
  tekst: string;
  href: string;
  lenketekst: string;
  ekstern: boolean;
  merknad?: string;
};

export const foto = {
  tekst: "Oslo at night",
  fotograf: "Jørn Eriksson",
  lisens: "CC BY 2.0",
  lisensUrl: "https://creativecommons.org/licenses/by/2.0/",
  kilde: "https://commons.wikimedia.org/wiki/File:Oslo_at_night.jpg",
};

export const hero = {
  overtittel: `${selskap.fulltNavn} · Oslo, Norway`,
  tittel: "We build businesses and stay to run them.",
  ingress:
    "We start businesses we would want to be customers of ourselves, build them properly, and remain the ones who operate them. No fund with an end date, no outside investors.",
  knappPortefolje: "The businesses",
  knappKontakt: "Get in touch",
};

export const meny = {
  virksomheter: "Businesses",
  slikJobberVi: "How we work",
  kontakt: "Contact",
  hjem: `${selskap.fulltNavn} — home`,
};

export const omOss = {
  tittel: "Who we are",
  avsnitt: [
    `${selskap.fulltNavn} is a Norwegian company based in Oslo. We own and run our businesses ourselves: we write the code, talk to the customers, and answer the phone when something stops working.`,
    `The company was previously named ${selskap.tidligereNavn}. The name changed when the work grew beyond software — and the software side was given a name of its own, Crest Software.`,
  ],
  fakta: [
    { merkelapp: "Founded", verdi: "19 August 2026" },
    { merkelapp: "Registered office", verdi: "Oslo, Norway" },
    { merkelapp: "Company number", verdi: selskap.orgnr },
    { merkelapp: "Businesses operating", verdi: "Three" },
  ],
};

export const prinsipper = {
  tittel: "How we work",
  punkter: [
    {
      nr: "01",
      navn: "Build",
      tekst:
        "We start the businesses ourselves. The product, the first customers and the first mistakes are our own — not something we bought into once the work was done.",
    },
    {
      nr: "02",
      navn: "Operate",
      tekst:
        "We run what we build. There is no supplier to pass the bill to when something breaks at two in the morning, and that shapes every decision we make on the way there.",
    },
    {
      nr: "03",
      navn: "Grow",
      tekst:
        "We have no fund with an end date. A business is given the time it needs, and we do not sell because the calendar says so.",
    },
  ],
};

export const virksomheter: Virksomhet[] = [
  {
    navn: "Crest Software",
    rolle: "Websites, apps and operations",
    tekst:
      "Builds the website or app for a business, keeps running it, and gives the customer one named contact. Being found on Google and in AI answers is part of the job, not an add-on.",
    href: "/crest-software",
    lenketekst: "See what they do",
    ekstern: false,
    merknad: "Site in Norwegian.",
  },
  {
    navn: "Altiv",
    rolle: "CRM for sales",
    tekst:
      "Norwegian CRM for B2B sales follow-up. Pipeline across departments, automatic email logging, follow-ups in the calendar, and revenue and margin per salesperson.",
    href: "https://altiv.no",
    lenketekst: "altiv.no",
    ekstern: true,
  },
  {
    navn: "Oystr",
    rolle: "Sea charts for iPhone",
    tekst:
      "Sea charts and navigation for leisure boats along the Norwegian coast. Offline charts, routing around land and shallows, AIS, tide and weather.",
    href: "https://oystr.no",
    lenketekst: "oystr.no",
    ekstern: true,
    merknad: "Built and operated together with Embretr.",
  },
];

export const portefoljeMerknad = `Owned and operated by ${selskap.fulltNavn}`;

export const kriterier = {
  tittel: "What we look for",
  ingress:
    "We do not start something because it is possible. Three things have to be in place before we spend years on a new business:",
  punkter: [
    "A dull problem someone already pays to get rid of.",
    "Technology we can run for ten years without rebuilding it.",
    "A customer we can talk to directly, not through three layers.",
  ],
  etterord: "If one of them is missing, we leave it alone.",
};

export const kontakt = {
  tittel: "Get in touch",
  tekst:
    "Have something you want built, or a business you think belongs here? Write to us. We answer honestly, including when the answer is no.",
};

export const bunntekst = {
  lenker: [
    { navn: "Crest Software", href: "/crest-software", ekstern: false },
    { navn: "Journal", href: "/blogg", ekstern: false },
    { navn: "Terms", href: "/vilkar", ekstern: false },
    { navn: "Privacy", href: "/personvern", ekstern: false },
    { navn: "altiv.no ↗", href: "https://altiv.no", ekstern: true },
    { navn: "oystr.no ↗", href: "https://oystr.no", ekstern: true },
  ],
  linje: `© 2026 ${selskap.fulltNavn} · Company no. ${selskap.orgnr} · Oslo, Norway`,
  // Samme opplysning som selskapsangivelse() på de norske sidene, men på engelsk.
  // Teksten følger NAVN_REGISTRERT-flagget i lib/selskap.ts og må rettes der
  // samtidig som den norske når Foretaksregisteret har registrert navnebyttet.
  juridisk: `${selskap.fulltNavn}, company registration number ${selskap.orgnr}, registered office in Oslo, Norway. The company is listed in the Norwegian Register of Business Enterprises under its former name ${selskap.tidligereNavn}; the change of name was resolved on 3 September 2026 and has been filed with the register.`,
  norskeSider: "Crest Software, the journal and the legal pages are in Norwegian.",
};
