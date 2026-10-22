// Innhold til forsiden for holdingselskapet — NORSK hovedutgave.
//
// Språk: norsk er hovedspråket på hele nettstedet fra 22. oktober 2026.
// Den engelske tvillingen ligger i lib/holding-en.ts og vises under /en.
// Samme form og samme rekkefølge i begge; endrer du den ene, endrer du den
// andre, ellers slutter språkbytteren å peke på det samme innholdet.
//
// Posisjonering fra 19. oktober 2026: Crest kjøper bedrifter. Noen selges
// videre, de fleste beholdes og driftes for det årlige overskuddet, og
// konsernets egne folk innen programvare og salg jobber inne i dem.
//
// Regler som fortsatt gjelder:
//  - Ingen stiftelsesdato, ingen «nytt selskap», ingen opptelling av hvor
//    ferskt noe er.
//  - Ingen tall for omsetning, avkastning eller ansatte før Philip sier
//    hvilke som kan publiseres. Oppdiktede tall er den raskeste måten å
//    miste en leser som slår opp i registeret.
//  - Alt ligger inne i Crest Holding AS, så «virksomheter», ikke
//    «porteføljeselskaper», med mindre noe faktisk er et eget AS.
//  - Virksomhetene står på forsiden igjen (21. oktober 2026), men bare de vi
//    eier og driver. Crest Software er en avdeling og hører hjemme blant
//    avdelingene, ikke blant dem.

import { selskap, selskapsangivelse } from "./selskap";

// vis: false gir en ren typografisk topp uten bilde. Bytt fil og kreditering
// samlet her — fotografen og lisensen må alltid følge bildet.
export const foto = {
  vis: true,
  fil: "/uploads/oslo-opera.jpg",
  filMobil: "/uploads/oslo-opera-mobil.jpg",
  alt: "Marmortaket på Operaen i Oslo, med folk som går opp skråningen",
  fotoOrd: "Foto:",
  fotograf: "Jorge Láscar",
  lisens: "CC BY 2.0",
  lisensUrl: "https://creativecommons.org/licenses/by/2.0/",
  kilde:
    "https://commons.wikimedia.org/wiki/File:Climbing_the_Oslo_Opera_House_(Operahuset)_(29796497621).jpg",
};

export const hero = {
  overtittel: `${selskap.fulltNavn} · Oslo`,
  tittel: "Vi kjøper bedrifter, driver dem og får dem til å vokse.",
  ingress:
    "Crest Holding kjøper lønnsomme norske bedrifter. Noen selges videre. De fleste beholder vi og driver, og det årlige overskuddet er avkastningen — vi trenger ikke et salg for at et kjøp skal være riktig.",
  knappKontakt: "Ta kontakt",
  knappArbeid: "Slik jobber vi",
};

export const meny = {
  slikJobberVi: "Slik jobber vi",
  virksomheter: "Virksomheter",
  avdelinger: "Avdelinger",
  investorer: "Investorer",
  verdi: "Verdivurdering",
  kontakt: "Kontakt",
  hjem: `${selskap.fulltNavn} — forsiden`,
};

export const omOss = {
  tittel: "Hvem vi er",
  avsnitt: [
    `${selskap.fulltNavn} er et norsk selskap i Oslo. Vi kjøper, eier og driver bedrifter — og vi gjør arbeidet selv i stedet for å sende inn konsulenter.`,
    "Det er hele forskjellen. En eier som skriver koden, sitter i salgsmøtene og tar telefonen når noe slutter å virke, tar andre beslutninger enn en som leser et kvartalsregnskap.",
  ],
};

export const prinsipper = {
  tittel: "Slik jobber vi",
  punkter: [
    {
      nr: "01",
      navn: "Kjøper",
      tekst:
        "Vi kjøper lønnsomme bedrifter som er for små for fondene og for store til å drives som hobby. Pengene er våre egne, så beslutningen er vår — og den tas på uker, ikke kvartaler.",
    },
    {
      nr: "02",
      navn: "Driver",
      tekst:
        "Det meste av det vi kjøper, beholder vi. Det årlige overskuddet er avkastningen, og ingen venter på et salg. Er salg riktig for en bedrift, selger vi — men det er et valg, aldri en frist.",
    },
    {
      nr: "03",
      navn: "Vokser",
      tekst:
        "Vår egen programvareavdeling, Crest Software, og selgerne våre jobber inne i bedriftene: tilbud som tar minutter i stedet for dager, oppfølging som ikke faller mellom stoler, og å bli funnet av kundene som allerede leter etter det de selger.",
    },
  ],
};

export type Virksomhet = {
  navn: string;
  logo: "hel" | "altiv" | "oystr";
  rolle?: string;
  tekst: string;
  href: string;
  lenketekst: string;
  merknad?: string;
};

// Teksten om HEL beskriver bare det nettsiden selv sier: offisiell
// HEL-forhandler i Norge. Ingen påstand om at vi eier merket HEL — det lages
// i England.
export const virksomheter: Virksomhet[] = [
  {
    navn: "HEL Performance Norge",
    logo: "hel",
    rolle: "Handel · Motorsykkeldeler",
    tekst:
      "Offisiell norsk forhandler av HEL, den engelske produsenten av flettede bremseslanger og kalipere som brukes i britisk superbike. Slangene bygges på bestilling, i alle lengder, til de fleste motorsykler.",
    href: "https://helperformance.no",
    lenketekst: "helperformance.no",
  },
  {
    navn: "Altiv",
    logo: "altiv",
    rolle: "SaaS · CRM for salg",
    tekst:
      "Norsk CRM for salgsoppfølging i B2B. Pipeline på tvers av avdelinger, automatisk e-postlogging, oppfølginger i kalenderen, og omsetning og margin per selger.",
    href: "https://altiv.no",
    lenketekst: "altiv.no",
  },
  {
    navn: "Oystr",
    logo: "oystr",
    rolle: "App · Sjøkart",
    tekst:
      "Sjøkart og navigasjon for fritidsbåt langs norskekysten. Offline-kart, ruting rundt land og grunner, AIS, vannstand og vær.",
    href: "https://oystr.no",
    lenketekst: "oystr.no",
    merknad: "Bygget og driftet sammen med Embretr.",
  },
];

export const virksomhetene = {
  merkelapp: `Eid og drevet av ${selskap.fulltNavn}`,
  tittel: "Våre virksomheter",
  ingress:
    "De er ikke egne aksjeselskaper — alt ligger inne i Crest Holding AS. Avdelingene jobber inne i dem på samme måte som de jobber inne i alt vi kjøper.",
};

export const avdelinger = {
  merkelapp: "Avdelinger i Crest Holding",
  tittel: "Avdelingene",
  ingress:
    "Fire funksjoner konsernet driver for bedriftene det eier — og for kunder utenfor. De koster mindre gjort én gang enn gjort inne i hver enkelt bedrift.",
  punkter: [
    {
      navn: "Crest Software",
      rolle: "Bygger systemene",
      tekst:
        "Går inn, finner timene som forsvinner i manuelt arbeid, og bygger det som fjerner dem: tilbud og fakturering som går av seg selv, interne verktøy, integrasjoner og nettsider som blir funnet på Google og i KI-svar.",
      stikkord: ["Automatisering", "Nettsider", "Interne verktøy", "Integrasjoner", "KI", "IT-drift"],
      href: "/crest-software",
      lenketekst: "Se hva Crest Software gjør",
    },
    {
      navn: "Crest Commerce",
      rolle: "Henter merker til Norge",
      tekst:
        "Tar et merke uten norsk forhandler, bygger butikken, kjører annonseringen og sender varene. HEL Performance Norge er den første.",
      stikkord: ["Agenturer", "Nettbutikk", "Annonsering", "Logistikk"],
    },
    {
      navn: "Crest Services",
      rolle: "Driver ryggraden",
      tekst:
        "Regnskap, fakturering, innkjøp og papirarbeidet som følger med å eie bedrifter: kontrakter, meldinger og avtalene som avgjør hva som skjer ved et eierskifte. Gjort én gang for konsernet i stedet for én gang i hver bedrift.",
      stikkord: ["Regnskap", "Fakturering", "Innkjøp", "Juridisk", "Etterlevelse"],
    },
    {
      navn: "Crest Growth",
      rolle: "Finner kundene",
      tekst:
        "Pris, salgsoppfølging og å bli funnet: søk, KI-svar og CRM-et bedriftene selger fra. Det meste av det vi kjøper, har aldri gjort noe av det.",
      stikkord: ["Pris", "Søk", "KI-svar", "CRM"],
    },
  ],
};

export const verktoy = {
  merkelapp: "Gratis, uten pålogging",
  tittel: "Hva er bedriften verdt?",
  tekst:
    "Skriv inn et organisasjonsnummer, så henter vi de tre siste innsendte årsregnskapene fra registeret og regner ut et spenn — med regnestykket på skjermen og hver justering synlig. Det er den samme utregningen vi gjør før vi gir et bud.",
  knapp: "Prøv verdivurderingen",
  merknad: "Ingenting du slår opp blir lagret.",
};

export const kriterier = {
  tittel: "Hva vi ser etter",
  ingress:
    "Vi kjøper ikke noe fordi det er til salgs. Fire ting må være på plass før vi bruker år på en bedrift:",
  punkter: [
    "Den tjener penger, på kunder som kommer tilbake.",
    "Den står og faller ikke med én person.",
    "Det finnes et åpenbart digitalt etterslep: tilbud for hånd, ingen oversikt, planlegging på papir.",
    "Den er liten nok til at vi kan være inne i den selv.",
  ],
  etterord: "Mangler én av dem, lar vi den være — og vi sier fra samme uke.",
};

export const kontakt = {
  tittel: "Ta kontakt",
  tekst:
    "Skal du selge en bedrift, eller sitter du på en som burde vokst raskere enn den gjør? Skriv til oss. Vi svarer ærlig, også når svaret er nei.",
  knapp: "Skriv til oss",
  // Byttet fra private outlook- og gmail-adresser til egne postkasser på
  // domenet 22. oktober 2026. Hovedadressen i lib/selskap.ts står fortsatt på
  // det gamle domenet og byttes for seg — den bryteren forutsetter at
  // post@crestholding.no faktisk mottar.
  adresser: ["philipstave@crestholding.no", "erikmo@crestholding.no"],
};

export const bunntekst = {
  lenker: [
    { navn: "For investorer", href: "/investor", ekstern: false },
    { navn: "Verdivurdering", href: "/verdivurdering", ekstern: false },
    { navn: "Guider", href: "/guider", ekstern: false },
    { navn: "Crest Software", href: "/crest-software", ekstern: false },
    { navn: "Artikler", href: "/blogg", ekstern: false },
    { navn: "Vilkår", href: "/vilkar", ekstern: false },
    { navn: "Personvern", href: "/personvern", ekstern: false },
    { navn: "altiv.no ↗", href: "https://altiv.no", ekstern: true },
    { navn: "oystr.no ↗", href: "https://oystr.no", ekstern: true },
  ],
  linje: `© 2026 ${selskap.fulltNavn} · Org.nr. ${selskap.orgnr} · Oslo`,
  // Samme opplysning som på de juridiske sidene, og den følger
  // NAVN_REGISTRERT-flagget i lib/selskap.ts.
  juridisk: selskapsangivelse(),
  norskeSider: "",
};

export const stier = {
  hjem: "/",
  investorer: "/investor",
  verdi: "/verdivurdering",
  guider: "/guider",
  programvare: "/crest-software",
  /** Ankerne ligger på forsiden, så undersider må ta med stien dit. */
  forside: "/",
};

// Samlet, så sidene kan sende ett objekt videre til komponenten.
export const innhold = {
  stier,
  foto,
  hero,
  meny,
  omOss,
  prinsipper,
  virksomheter,
  virksomhetene,
  avdelinger,
  verktoy,
  kriterier,
  kontakt,
  bunntekst,
};

export type HoldingInnhold = typeof innhold;
