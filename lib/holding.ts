// Content for the holding company's front page.
//
// Language: English. The rest of the site (Crest Software, the journal, the
// legal pages) is Norwegian, so the wrapper carries lang="en".
//
// Positioning from 19 October 2026: Crest buys companies. Some are sold on,
// most are kept and operated for the annual profit, and the group's own
// software and sales people work inside them to make them grow.
//
// Rules that still hold:
//  - No founding date, no "new company", no count of how young anything is.
//  - No figures for revenue, profit, returns or headcount until Philip says
//    which ones may be published. Invented numbers are the fastest way to lose
//    a reader who checks the register.
//  - Everything is inside Crest Holding AS today, so "businesses", not
//    "portfolio companies", unless a company really is a separate AS.

import { selskap } from "./selskap";

export type Virksomhet = {
  navn: string;
  rolle: string;
  tekst: string;
  href?: string;
  lenketekst?: string;
  ekstern?: boolean;
  merknad?: string;
};

// vis: false gir en ren typografisk topp uten bilde. Bytt fil og kreditering
// samlet her — fotografen og lisensen må alltid følge bildet.
export const foto = {
  vis: true,
  fil: "/uploads/oslo-opera.jpg",
  filMobil: "/uploads/oslo-opera-mobil.jpg",
  alt: "The marble roof of the Oslo Opera House, with people walking up the slope",
  fotograf: "Jorge Láscar",
  lisens: "CC BY 2.0",
  lisensUrl: "https://creativecommons.org/licenses/by/2.0/",
  kilde:
    "https://commons.wikimedia.org/wiki/File:Climbing_the_Oslo_Opera_House_(Operahuset)_(29796497621).jpg",
};

export const hero = {
  overtittel: `${selskap.fulltNavn} · Oslo, Norway`,
  tittel: "We buy companies, run them, and make them grow.",
  ingress:
    "Crest Holding acquires profitable Norwegian companies. A few are sold on. Most we keep and operate, and the annual profit is the return — we do not need an exit to make an investment work.",
  knappKontakt: "Get in touch",
  knappArbeid: "What we do",
};

export const meny = {
  slikJobberVi: "What we do",
  portefolje: "What we own",
  kontakt: "Contact",
  hjem: `${selskap.fulltNavn} — home`,
};

export const omOss = {
  tittel: "Who we are",
  avsnitt: [
    `${selskap.fulltNavn} is a Norwegian company based in Oslo. We buy, own and run companies — and we do the work ourselves rather than send in consultants.`,
    "That is the whole difference. An owner who writes the code, sits in the sales meetings and answers the phone when something stops working makes different decisions than one who reads a quarterly report.",
  ],
};

export const prinsipper = {
  tittel: "What we do",
  punkter: [
    {
      nr: "01",
      navn: "Acquire",
      tekst:
        "We buy profitable companies that are too small for the funds and too large to run as a hobby. The money is our own, so the decision is ours — and it is made in weeks, not quarters.",
    },
    {
      nr: "02",
      navn: "Operate",
      tekst:
        "Most of what we buy, we keep. The annual profit is the return, and nobody is waiting for a sale. If selling is right for a company, we sell — but it is a choice, never a deadline.",
    },
    {
      nr: "03",
      navn: "Grow",
      tekst:
        "Our own software and sales people work inside the companies: quoting that takes minutes instead of days, follow-up that does not fall between chairs, and being found by the customers already looking for what they sell.",
    },
  ],
};

// Teksten under beskriver bare det nettsiden selv sier: offisiell HEL-forhandler
// i Norge. Ingen påstand om at vi eier merket HEL — det lages i England.
export const virksomheter: Virksomhet[] = [
  {
    navn: "HEL Performance Norge",
    rolle: "E-commerce · Motorcycle brakes",
    tekst:
      "Official Norwegian dealer for HEL, the English maker of braided brake lines and calipers used in British Superbike. Lines are built to order, in any length, for most motorcycles.",
    href: "https://helperformance.no",
    lenketekst: "helperformance.no",
    ekstern: true,
  },
  {
    navn: "Altiv",
    rolle: "SaaS · CRM for sales",
    tekst:
      "Norwegian CRM for B2B sales follow-up. Pipeline across departments, automatic email logging, follow-ups in the calendar, and revenue and margin per salesperson.",
    href: "https://altiv.no",
    lenketekst: "altiv.no",
    ekstern: true,
  },
  {
    navn: "Oystr",
    rolle: "App · Sea charts",
    tekst:
      "Sea charts and navigation for leisure boats along the Norwegian coast. Offline charts, routing around land and shallows, AIS, tide and weather.",
    href: "https://oystr.no",
    lenketekst: "oystr.no",
    ekstern: true,
    merknad: "Built and operated together with Embretr.",
  },
  {
    navn: "Crest Software",
    rolle: "Software development",
    tekst:
      "Builds and runs the software: the systems inside the companies we own, and websites and apps for customers outside the group.",
    href: "/crest-software",
    lenketekst: "See what they do",
    ekstern: false,
  },
];

export const portefoljeMerknad = `Owned and operated by ${selskap.fulltNavn}`;

export const kriterier = {
  tittel: "What we look for",
  ingress:
    "We do not buy something because it is for sale. Four things have to be in place before we spend years on a company:",
  punkter: [
    "It makes money, from customers who come back.",
    "It does not stand or fall with one person.",
    "There is an obvious digital gap: quoting by hand, no visibility, planning on paper.",
    "It is small enough that we can be in it ourselves.",
  ],
  etterord: "If one of them is missing, we leave it alone — and we say so the same week.",
};

export const kontakt = {
  tittel: "Get in touch",
  tekst:
    "Selling a company, or sitting on one that should be growing faster than it is? Write to us. We answer honestly, including when the answer is no.",
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
