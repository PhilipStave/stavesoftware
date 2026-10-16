// Content for the holding company's front page.
//
// Language rule: this page is in English, while Crest Software, the journal and
// the legal pages stay in Norwegian. The wrapper element carries lang="en" so
// the mix is declared, not guessed.
//
// What the page deliberately does NOT say (Philip, 14 October 2026): when the
// company was founded, how many businesses it runs, or which ones. The page is
// about what the company is and how it works — the names live in the footer, in
// llms.txt and on /crest-software. Keep it that way unless he says otherwise.
//
// And never any figures for revenue, returns or headcount: there are none to
// show yet, and invented numbers are the fastest way to lose a reader who
// checks.

import { selskap } from "./selskap";

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
  knappKontakt: "Get in touch",
  knappArbeid: "How we work",
};

export const meny = {
  slikJobberVi: "How we work",
  hvaViSerEtter: "What we look for",
  kontakt: "Contact",
  hjem: `${selskap.fulltNavn} — home`,
};

export const omOss = {
  tittel: "Who we are",
  avsnitt: [
    `${selskap.fulltNavn} is a Norwegian company based in Oslo. We own and run what we build: we write the code, talk to the customers, and answer the phone when something stops working.`,
    "We are deliberately small and deliberately slow. Fewer things, built properly, kept running — and a name we intend to still be using in twenty years.",
  ],
};

export const uttalelse = {
  tekst: "We would rather own one business for ten years than ten businesses for one.",
  kilde: "The whole model, in one sentence.",
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
  // Adressen står ikke på siden: den ligger fortsatt på det gamle domenet, og
  // hører ikke hjemme på merkevaresiden. Knappen åpner e-posten som før.
  knapp: "Write to us",
  // Lagt til 16. oktober etter ønske. Dette er private adresser på outlook og
  // gmail, og de blir plukket opp av søppelpost-roboter så snart siden
  // indekseres. Bytt dem ut den dagen crestholding.no har egne postkasser.
  adresser: ["philipstave@outlook.com", "erikmoepost@gmail.com"],
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
