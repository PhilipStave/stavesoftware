// Innholdet på investorsiden.
//
// Regler, satt 21. oktober 2026:
//  - Ingen verdsettelse, eierandel, prognoser eller avkastningstall. En
//    offentlig side som tilbyr aksjer havner fort i verdipapirreglene, og en
//    pris som står på nett er en pris du har tapt forhandlingen om.
//  - Ingen liste over hva vi har bygget — den ble bevisst holdt utenfor.
//  - Tallene sendes på forespørsel, ikke publiseres.
//
// Merknaden om navnet i registeret følger NAVN_REGISTRERT i lib/selskap.ts.
// Den hører hjemme her og ikke bare i bunnteksten: en investor slår opp
// organisasjonsnummeret, finner det gamle foretaksnavnet, og skal ikke behøve
// å lure på om han har funnet feil selskap.

import { NAVN_REGISTRERT, selskap } from "./selskap";

export const investor = {
  overtittel: "For investors",
  tittel: "Capital that buys companies, not runway.",
  ingress:
    "Crest Holding acquires profitable Norwegian companies, keeps them, and improves them with its own departments. We speak with a small number of investors who want exposure to that — not to a company spending its way towards scale.",

  tese: {
    tittel: "The thesis",
    avsnitt: [
      "Norway is full of small companies that make money and have no buyer. The owner is approaching retirement, the children are not taking over, and no fund looks at anything this size. They change hands at a few times annual profit.",
      "The reason the price is low is usually the same: the profit leaves with the owner. So we buy the ones where it does not — where someone other than the owner runs the day, the customers come back, and the work has never been done digitally.",
      "The return is the annual profit from companies we keep. A sale can happen, but nothing in the model depends on one.",
    ],
  },

  mekanisme: {
    tittel: "Why a company is worth more with us",
    ingress:
      "A buyer who only changes the name on the door adds nothing. The departments are what change the numbers after the purchase, and they are already running — for the companies we own, and for customers outside the group, which is what pays for them between acquisitions.",
    lenketekst: "The departments in full",
  },

  kapital: {
    tittel: "What the capital is for",
    punkter: [
      "The equity portion of an acquisition. The bank lends against the cash flow of the company being bought; the equity is the part that has to be ours.",
      "Stock and agency commitments when Crest Commerce takes on a brand that has no Norwegian dealer.",
      "Nothing else. Not salaries, not marketing budgets, not a runway to be burned.",
    ],
    etterord:
      "Capital is raised against a specific company, at the point where there is something to buy — not held in advance against a plan.",
  },

  selskapet: {
    tittel: "The company",
    fakta: [
      { merkelapp: "Legal name", verdi: selskap.fulltNavn },
      { merkelapp: "Company number", verdi: selskap.orgnr },
      { merkelapp: "Registered office", verdi: "Oslo, Norway" },
    ],
    avsnitt: [
      `Everything sits inside ${selskap.fulltNavn} today — the businesses are not separate limited companies. The accounts are filed and public, so anyone can read them in the Norwegian Register of Business Enterprises before the first meeting.`,
      ...(NAVN_REGISTRERT
        ? []
        : [
            `One thing to expect when you look: the register still shows the former name ${selskap.tidligereNavn}. It is the same legal entity and the same company number; the change of name was resolved on 3 September 2026 and has been filed.`,
          ]),
    ],
    lenke: {
      tekst: "The company in the register",
      href: `https://virksomhet.brreg.no/nb/oppslag/enheter/${selskap.orgnrKompakt}`,
    },
  },

  eksempel: {
    foto: {
      fil: "/uploads/eksempel-lager.jpg",
      alt: "Pallereoler i et lager, sett nedenfra",
      bildetekst: "Illustration. The company in this example does not exist.",
      fotograf: "Shixart1985",
      lisens: "CC BY 2.0",
      lisensUrl: "https://creativecommons.org/licenses/by/2.0/",
      kilde:
        "https://commons.wikimedia.org/wiki/File:Warehouse_filled_with_stacked_pallets_showcasing_efficient_space_usage_during_daytime_operations.jpg",
    },
    merkelapp: "Worked example · not a track record",
    tittel: "What we would do with a company like this",
    ingress:
      "We have not owned a company for five years yet, so we cannot show you what that looked like. What we can show you is the work, priced out on a company of the kind we buy. Every figure below is constructed. The company does not exist.",
    oppsett: {
      tittel: "The company",
      punkter: [
        { merkelapp: "Revenue", verdi: "NOK 30 million" },
        { merkelapp: "Operating profit", verdi: "NOK 3.0 million" },
        { merkelapp: "People", verdi: "Seven" },
        { merkelapp: "Owner", verdi: "64, wants out" },
      ],
      tekst:
        "A wholesaler an hour outside Oslo. Twenty years of repeat customers, no debt, NOK 10 million tied up in stock, and nothing has been done digitally since the website was built in 2014. The owner runs sales himself, but a foreman runs the day.",
      pris:
        "Price: NOK 12 million, four times operating profit. NOK 5 million of our own equity, NOK 7 million borrowed against the company's own cash flow. Thirty per cent of the price is paid over eighteen months and depends on the customers staying.",
    },
    faser: [
      {
        naar: "Month 0",
        avdeling: "The purchase",
        tekst:
          "Three years of accounts, the customer list, the supplier agreements and a stock count. The manager commits for twelve months. We agree a price before we agree a handshake.",
        effekt: null,
      },
      {
        naar: "Months 1–6",
        avdeling: "Crest Services",
        tekst:
          "Accounting, insurance, purchasing agreements and systems move into the group's own. Nobody inside the company notices anything except that the paperwork goes somewhere else.",
        effekt: "+0.3",
      },
      {
        naar: "Months 3–12",
        avdeling: "Crest Software",
        tekst:
          "Quotes and orders that took two days take ten minutes. A website that is actually found, and a parts search by make and model. The hours come back, and so do the enquiries that used to go to someone else.",
        effekt: "+0.4",
      },
      {
        naar: "Months 6–18",
        avdeling: "Crest Growth",
        tekst:
          "The price list is reviewed — most companies this size have not touched theirs in years — and quotes get followed up because something now reminds someone to do it.",
        effekt: "+0.8",
      },
      {
        naar: "Year 2",
        avdeling: "Crest Commerce",
        tekst:
          "A brand with no Norwegian dealer is taken on and sold to the customer list that is already there. New revenue through a channel that costs nothing extra to run.",
        effekt: "+0.5",
      },
      {
        naar: "Years 2–3",
        avdeling: "Service",
        tekst:
          "Repair and service on what the company sells, out of the group's own workshop. It is a new line of income, and it is the one that keeps a customer from shopping around.",
        effekt: "+0.3",
      },
    ],
    resultat: {
      tittel: "Where that leaves it",
      rader: [
        { merkelapp: "Operating profit at purchase", verdi: "NOK 3.0 million" },
        { merkelapp: "Operating profit in year three", verdi: "NOK 5.3 million" },
        { merkelapp: "Value at the same multiple", verdi: "NOK 21 million" },
        { merkelapp: "Paid", verdi: "NOK 12 million" },
      ],
      tekst:
        "We use the same multiple going out as coming in. Many models take half the return from the multiple rising, and that is a bet on the market rather than on the work. The bank debt is repaid out of the company's own cash flow along the way.",
      etterord:
        "And then the point: a sale is optional. NOK 5.3 million a year from a company that runs without us is the return. We would rather keep it than sell it, and nothing in the model needs an exit to work.",
    },
    risiko: {
      tittel: "What breaks it",
      punkter: [
        "The largest customer leaves. On a company this size that is NOK 0.5–1.0 million of operating profit, and it undoes two years of the work above.",
        "A supplier terminates on change of ownership. Then we own stock and no right to replace it.",
        "Nobody at the group owns the integration. Services and purchasing happen anyway; the growth work does not, and half the improvement never arrives.",
        "The stock turns out to be older than the books say. That is paid for at the purchase price, not at the shelf price.",
      ],
    },
  },

  materiale: {
    tittel: "What we send on request",
    punkter: [
      "Accounts, and the figures behind each business.",
      "The companies we are looking at, and what we think they are worth.",
      "Terms. They are discussed, not published.",
    ],
    etterord: "Write to us and say who you are. We answer the same week, including when the answer is no.",
  },

  kontakt: {
    merkelapp: "Invest with us",
    tittel: "Come in on the next purchase",
    tekst:
      "We speak with a small number of people who want to own Norwegian companies that already make money, and who are in no hurry to sell them again.",
    punkter: [
      "You see the company, the accounts and the price before anything is decided. Nothing goes into a blind pool.",
      "We operate it afterwards. The departments do the work, and you do not end up with a second job.",
      "The return is the annual profit from companies we keep. A sale can happen, but nothing in the model depends on one.",
    ],
    sporsmaal:
      "Write one line about who you are and roughly what you would put to work. You get the figures the same week — and the next one we are looking at when there is one.",
    knapp: "Invest with us",
  },

  forbehold:
    "This page is information about the company. It is not an offer of shares or other securities, and nothing on it is investment advice.",
};
