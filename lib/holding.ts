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
//  - No list of what we own on the front page (removed 21 October 2026).

import { selskap } from "./selskap";

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
  avdeling: "Crest Software",
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
        "Our own software department, Crest Software, and our sales people work inside the companies: quoting that takes minutes instead of days, follow-up that does not fall between chairs, and being found by the customers already looking for what they sell.",
    },
  ],
};

// Crest Software is a department inside Crest Holding AS, not a business we
// own on the side: it is one of the ways the group makes companies grow. The
// same people also take work for companies outside the group.
export const avdeling = {
  merkelapp: "A department of Crest Holding",
  tittel: "Crest Software",
  ingress:
    "Crest Software is the department that handles the software side of a business. It is one of the main ways we make companies grow: we go in, find the hours lost to manual work, and build what removes them. The same team works for companies outside the group.",
  tjenester: [
    {
      navn: "Efficiency and automation",
      tekst:
        "Quoting, invoicing, reporting and follow-up that run by themselves instead of by hand. We map where the hours go and remove them one by one.",
    },
    {
      navn: "New websites",
      tekst:
        "Fast websites and web shops that are found on Google and in AI answers, and that turn visitors into enquiries and orders.",
    },
    {
      navn: "Internal tools",
      tekst:
        "Order systems, planning boards, customer portals and dashboards built around how the company actually works, not the other way round.",
    },
    {
      navn: "Integrations",
      tekst:
        "Accounting, CRM, web shop, suppliers and payment connected, so the same number is never typed twice.",
    },
    {
      navn: "AI automation",
      tekst:
        "AI that sorts email, drafts quotes, answers customers and reads documents, with a person checking where it matters.",
    },
    {
      navn: "IT and digital operations",
      tekst:
        "Hosting, domains, email, backups, security and accounts looked after, with one person to call when something stops working.",
    },
  ],
  lenke: { tekst: "See what Crest Software does", href: "/crest-software" },
};

export const andreAvdelinger = {
  tittel: "The other departments",
  ingress:
    "Three more functions the group runs for the companies it owns, for the same reason as the software: they cost less done once than done in every company.",
  punkter: [
    {
      navn: "Crest Commerce",
      rolle: "Brings brands to Norway",
      tekst:
        "Takes a brand with no Norwegian dealer, builds the shop, runs the advertising and ships the goods. HEL Performance Norge is the first one.",
    },
    {
      navn: "Crest Services",
      rolle: "Runs the back office",
      tekst:
        "Accounting, invoicing, purchasing agreements and systems — done once for the group instead of once inside every company.",
    },
    {
      navn: "Crest Growth",
      rolle: "Finds the customers",
      tekst:
        "Pricing, sales follow-up and being found: search, AI answers and the CRM the companies sell from. Most of what we buy has never done any of it.",
    },
  ],
};

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
