// Egne sider for avdelingene Commerce, Services og Growth.
//
// Crest Software har sin egen side fra før (/crest-software, lib/programvare.ts).
// Disse tre er bygget over samme lest, slik at kortene på forsiden får hver
// sin side å peke på i stedet for bare en beskrivelse.
//
// Regler:
//  - Ingen tall vi ikke kan vise til, ingen kundenavn uten avtale.
//  - Services beskriver det konsernet gjør for bedriftene det eier. Autorisert
//    regnskapsføring for andre krever bevilling etter regnskapsførerloven, og
//    den har vi ikke — siden skal derfor ikke kunne leses som at vi selger
//    regnskapstjenester til utenforstående.
//  - HEL er det eneste merket Commerce kan vise til, og vi eier det ikke. Det
//    lages i England; vi er forhandler i Norge.

export type Avdeling = {
  slug: string;
  navn: string;
  rolle: string;
  metaTittel: string;
  metaBeskrivelse: string;
  hero: { tittel: string; ingress: string };
  hva: { tittel: string; ingress: string; punkter: { navn: string; tekst: string }[] };
  slik: { tittel: string; punkter: { navn: string; tekst: string }[] };
  bevis?: { tittel: string; tekst: string; href?: string; lenketekst?: string };
  sporsmaal: { spm: string; svar: string }[];
};

export const avdelingssider: Avdeling[] = [
  {
    slug: "crest-commerce",
    navn: "Crest Commerce",
    rolle: "Henter merker til Norge",
    metaTittel: "Crest Commerce — vi henter merker til Norge",
    metaBeskrivelse:
      "Crest Commerce tar inn merker som ikke har norsk forhandler: agentur, butikk, annonsering og logistikk. En avdeling i Crest Holding AS.",
    hero: {
      tittel: "Vi henter merker som ikke finnes i Norge",
      ingress:
        "Det finnes produkter nordmenn allerede leter etter, men som ingen selger her. Crest Commerce tar inn merket, bygger butikken, kjører annonseringen og sender varene.",
    },
    hva: {
      tittel: "Fra agentur til pakke på døra",
      ingress:
        "Vi gjør hele kjeden selv, fordi delene henger sammen: den som forhandler avtalen må kjenne marginen, og den som kjører annonsene må kjenne lageret.",
      punkter: [
        {
          navn: "Agentur",
          tekst:
            "Vi finner merkene uten norsk forhandler, dokumenterer markedet og forhandler vilkårene — rabatt, eksklusivitet, minstekjøp og hva som skjer ved eierskifte.",
        },
        {
          navn: "Butikk",
          tekst:
            "Nettbutikk med produktsøk på modell, priser i kroner og moms ferdig håndtert. Bygget av Crest Software, så den er rask og blir funnet i søk.",
        },
        {
          navn: "Annonsering",
          tekst:
            "Søk, sosiale medier og innhold som svarer på det folk faktisk googler. Vi måler på ordre, ikke på visninger.",
        },
        {
          navn: "Logistikk",
          tekst: "Innkjøp, lager, toll og forsendelse. Kunden skal slippe å forholde seg til at varen kommer fra utlandet.",
        },
      ],
    },
    slik: {
      tittel: "Slik vurderer vi et merke",
      punkter: [
        {
          navn: "Finnes etterspørselen allerede?",
          tekst:
            "Vi ser på søkevolum, forum og hva folk importerer selv. Et merke ingen leter etter, må markedsføres fram — og det er en helt annen regning.",
        },
        {
          navn: "Tåler marginen norsk mva og frakt?",
          tekst:
            "Et produkt som koster det samme hos produsenten som hos oss, har ingen forhandler. Vi regner på det før vi tar kontakt.",
        },
        {
          navn: "Hva sier avtalen om eierskifte og direktesalg?",
          tekst:
            "Kan produsenten selge rett til norske kunder fra egen nettbutikk, er jobben vår service og lager — ikke tilgang. Det må være avklart skriftlig.",
        },
      ],
    },
    bevis: {
      tittel: "HEL Performance Norge",
      tekst:
        "Offisiell norsk forhandler av HEL, den engelske produsenten av flettede bremseslanger og kalipere som brukes i britisk superbike. Nettside, delesøk på merke og modell, annonsering og forsendelse er vårt. Delene lages i England — merket eier vi ikke.",
      href: "https://helperformance.no",
      lenketekst: "helperformance.no",
    },
    sporsmaal: [
      {
        spm: "Hva gjør Crest Commerce?",
        svar:
          "Crest Commerce tar inn merker som ikke har norsk forhandler, bygger nettbutikken, kjører annonseringen og håndterer innkjøp, toll og forsendelse. Avdelingen er en del av Crest Holding AS i Oslo.",
      },
      {
        spm: "Representerer dere merket mitt i Norge?",
        svar:
          "Hvis det finnes etterspørsel her og marginen tåler frakt og moms, vil vi gjerne høre fra deg. Vi vil ha vilkårene skriftlig først: rabatt, territorium, minstekjøp og hva som skjer med ordre dere får direkte fra norske kunder.",
      },
      {
        spm: "Selger dere bare motorsykkeldeler?",
        svar:
          "Nei. HEL Performance Norge er det første merket, ikke det eneste vi kan ta. Kravet er at produktet har en kjøper i Norge som ikke blir betjent i dag.",
      },
    ],
  },

  {
    slug: "crest-services",
    navn: "Crest Services",
    rolle: "Driver ryggraden",
    metaTittel: "Crest Services — ryggraden i konsernet",
    metaBeskrivelse:
      "Crest Services driver regnskap, fakturering, innkjøp, kontrakter og etterlevelse for bedriftene Crest Holding eier — én gang for konsernet.",
    hero: {
      tittel: "Papirarbeidet gjøres én gang, ikke i hver bedrift",
      ingress:
        "Hver bedrift med egen regnskapsfører, egne forsikringer, egne innkjøpsavtaler og egne systemer betaler for det samme flere ganger. Crest Services gjør det én gang for konsernet.",
    },
    hva: {
      tittel: "Det som følger med å eie bedrifter",
      ingress:
        "Dette er ikke et tjenestetilbud til andre — det er måten konsernet drives på, og en av grunnene til at en bedrift er verdt mer hos oss enn alene.",
      punkter: [
        {
          navn: "Regnskap og fakturering",
          tekst:
            "Bilag, fakturering og rapportering samlet i ett system for alle bedriftene, med autorisert regnskapsfører på selve føringen.",
        },
        {
          navn: "Innkjøp",
          tekst:
            "Felles volum gir bedre betingelser enn hver bedrift får alene — på varer, frakt, forsikring og abonnementer.",
        },
        {
          navn: "Juridisk",
          tekst:
            "Kontrakter, meldinger til registeret og avtalene som avgjør hva som skjer ved et eierskifte. Advokat leies inn per sak; vi holder papirene i orden så den regningen blir mindre.",
        },
        {
          navn: "Etterlevelse",
          tekst:
            "Personvern, forsikring, HMS-dokumentasjon og frister. Kjedelig, men det er alltid det kjedelige som velter et oppkjøp i ettertid.",
        },
        {
          navn: "Systemer",
          tekst:
            "Samme verktøy i alle bedriftene, satt opp av Crest Software. Da kan folk flyttes mellom dem uten å lære alt på nytt.",
        },
      ],
    },
    slik: {
      tittel: "Slik går det for seg etter et kjøp",
      punkter: [
        {
          navn: "Måned 1–3: vi overtar bilagene",
          tekst:
            "Regnskap, forsikring og abonnementer flyttes inn i konsernets egne avtaler. Ingen i bedriften merker annet enn at papirene går et annet sted.",
        },
        {
          navn: "Måned 3–6: innkjøpet slås sammen",
          tekst:
            "Vi ser hvor bedriften kjøper det samme som vi allerede kjøper, og forhandler på samlet volum.",
        },
        {
          navn: "Deretter: fast rytme",
          tekst:
            "Månedsrapport, likviditet og frister følges likt i alle bedriftene, slik at styret ser det samme bildet hver gang.",
        },
      ],
    },
    sporsmaal: [
      {
        spm: "Hva gjør Crest Services?",
        svar:
          "Crest Services driver regnskap, fakturering, innkjøp, kontrakter og etterlevelse for bedriftene Crest Holding AS eier. Arbeidet gjøres én gang for konsernet i stedet for én gang inne i hver bedrift.",
      },
      {
        spm: "Tilbyr dere regnskapstjenester til andre?",
        svar:
          "Nei. Crest Services er konsernets egen ryggrad, ikke et regnskapsbyrå. Autorisert regnskapsføring for andre krever bevilling, og selve føringen gjøres av autorisert regnskapsfører.",
      },
      {
        spm: "Hva betyr det for en bedrift dere kjøper?",
        svar:
          "At den slipper å holde egen administrasjon. I praksis betyr det lavere faste kostnader og bedre innkjøpsbetingelser, uten at noen mister jobben i driften.",
      },
    ],
  },

  {
    slug: "crest-growth",
    navn: "Crest Growth",
    rolle: "Markedsfører og selger",
    metaTittel: "Crest Growth — markedsføring og salg som gir ordre",
    metaBeskrivelse:
      "Crest Growth jobber med prising, annonsering, søk, KI-svar og CRM i bedriftene Crest Holding eier — og for kunder utenfor konsernet.",
    hero: {
      tittel: "Vi begynner med prislisten, ikke med annonsebudsjettet",
      ingress:
        "I en bedrift som ikke har rørt prisene på år, ligger det mer penger i prislisten enn i et annonsebudsjett. Først når den er ryddet, lønner det seg å hente nye forespørsler.",
    },
    hva: {
      tittel: "Fire ting, i denne rekkefølgen",
      ingress:
        "Rekkefølgen er poenget. Annonser inn i en bedrift som ikke følger opp tilbudene sine, er penger ut av vinduet.",
      punkter: [
        {
          navn: "Prising",
          tekst:
            "Vi går gjennom prislisten, marginen per produkt og rabattene som har festet seg. Ett prosentpoeng her slår som regel alt annet på kort sikt.",
        },
        {
          navn: "Oppfølging",
          tekst:
            "CRM på plass, og en rutine som gjør at ingen tilbud blir liggende ubesvart. De fleste bedrifter vi kjøper har aldri hatt en slik rutine.",
        },
        {
          navn: "Søk og KI-svar",
          tekst:
            "Sider som svarer på det kundene faktisk søker etter, og som er bygget for å bli lest av både Google og KI-assistenter. Vi lover arbeidet, aldri plasseringen.",
        },
        {
          navn: "Annonsering",
          tekst:
            "Søk og sosiale medier der det er lønnsomt, målt på ordre og ikke på visninger. Vi starter smått og skalerer det som virker.",
        },
      ],
    },
    slik: {
      tittel: "Slik måler vi",
      punkter: [
        {
          navn: "Forespørsler, ikke besøk",
          tekst:
            "Besøkstall er lette å få opp og betyr lite. Vi teller forespørsler, tilbud og ordre — og hvor mange av dem som ble fulgt opp.",
        },
        {
          navn: "Margin, ikke omsetning",
          tekst:
            "Omsetning kan kjøpes med rabatt. Vi ser på hva som er igjen etter at varen er betalt.",
        },
        {
          navn: "Gjenkjøp",
          tekst:
            "En kunde som kommer tilbake koster ingenting å skaffe. Derfor er gjenkjøpsandelen det tallet vi følger lengst.",
        },
      ],
    },
    bevis: {
      tittel: "Verdivurderingen",
      tekst:
        "Verktøyet på crestholding.no henter tre års regnskap fra Brønnøysund og regner ut et verdispenn. Det er et eksempel på hvordan vi jobber: lag noe som gir svar på et spørsmål kunden faktisk stiller, i stedet for å kjøpe annonser mot folk som ikke spør.",
      href: "/verdivurdering",
      lenketekst: "Prøv verdivurderingen",
    },
    sporsmaal: [
      {
        spm: "Hva gjør Crest Growth?",
        svar:
          "Crest Growth jobber med prising, salgsoppfølging, søk, KI-svar og annonsering i bedriftene Crest Holding AS eier, og for kunder utenfor konsernet. Arbeidet måles på forespørsler, margin og gjenkjøp.",
      },
      {
        spm: "Kan dere love at vi havner øverst på Google?",
        svar:
          "Nei, og ingen kan det. Vi kan love arbeidet: teknisk søkemotoroptimalisering, innhold som svarer på det folk søker etter, og sider bygget for å bli lest av både Google og KI-assistenter.",
      },
      {
        spm: "Jobber dere for andre enn bedriftene dere eier?",
        svar:
          "Ja. Avdelingene tar arbeid for kunder utenfor konsernet også — det er det som betaler for dem mellom oppkjøpene.",
      },
    ],
  },
];

export const finnAvdeling = (slug: string): Avdeling | undefined =>
  avdelingssider.find((a) => a.slug === slug);

// Siste gang innholdet på avdelingssidene ble endret.
export const AVDELINGER_OPPDATERT = "2026-10-27";
