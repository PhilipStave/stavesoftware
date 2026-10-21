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
    tittel: "Talk to us",
    tekst:
      "Both addresses below reach a person, not a form. Tell us who you are, what kind of exposure you are looking for, and roughly what you would put to work.",
    knapp: "Write to us",
  },

  forbehold:
    "This page is information about the company. It is not an offer of shares or other securities, and nothing on it is investment advice.",
};
