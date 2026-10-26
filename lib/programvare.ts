// Innholdet på /crest-software.
//
// Siden ble bygget om 26. oktober 2026: fra den mørke forsiden med video,
// egen musepeker og vannrett karusell, til samme rolige lyse stil som resten
// av nettstedet. Grunnen er at den ikke lenger er en forside — den er én
// avdeling i Crest Holding, og skal handle om programvare og ingenting annet.
//
// Regler:
//  - Bare programvaresiden. Oppkjøp, investorer og de andre avdelingene
//    hører hjemme på forsiden.
//  - Lov innsatsen, aldri plasseringen i Google.
//  - Ingen tall vi ikke kan vise til, ingen kundenavn uten avtale.

export const programvare = {
  hero: {
    merkelapp: "En avdeling i Crest Holding",
    tittel: "Vi bygger systemene som fjerner timene",
    ingress:
      "Crest Software lager og drifter nettsider, apper og interne verktøy for norske bedrifter. Vi går inn, finner timene som forsvinner i manuelt arbeid, og bygger det som fjerner dem.",
    knappKontakt: "Ta kontakt",
    knappArbeid: "Se hva vi gjør",
  },

  hva: {
    merkelapp: "Hva vi gjør",
    tittel: "Seks ting, og de henger sammen",
    ingress:
      "De fleste bedrifter trenger ikke ett system til. De trenger at det de har slutter å kreve manuelt arbeid.",
    punkter: [
      {
        navn: "Automatisering",
        tekst:
          "Tilbud, fakturering, rapportering og oppfølging som går av seg selv i stedet for for hånd. Vi kartlegger hvor timene faktisk går, og fjerner dem én etter én.",
      },
      {
        navn: "Nettsider",
        tekst:
          "Raske sider og nettbutikker som blir funnet på Google og i KI-svar, og som gjør besøkende til forespørsler i stedet for bare til besøk.",
      },
      {
        navn: "Interne verktøy",
        tekst:
          "Ordresystemer, planleggingstavler, kundeportaler og oversikter bygget rundt slik bedriften faktisk jobber — ikke omvendt.",
      },
      {
        navn: "Integrasjoner",
        tekst:
          "Regnskap, lager, nettbutikk og CRM som snakker sammen, slik at ingen taster det samme to ganger.",
      },
      {
        navn: "KI der den gjør nytte",
        tekst:
          "Kundesøk, dokumenthåndtering og utkast som sparer timer. Vi bygger det inn der det løser noe, ikke for å ha det.",
      },
      {
        navn: "Drift",
        tekst:
          "Vi drifter det vi lager: oppdateringer, overvåking, sikkerhet og endringene du trenger underveis. Det er den delen de fleste byråer ikke vil ha.",
      },
    ],
  },

  tjenester: {
    merkelapp: "Tjenester",
    tittel: "Tre innganger",
    ingress: "Hver av dem har sin egen side med hva du får, hvordan det går for seg og hva det koster.",
  },

  slik: {
    tittel: "Slik jobber vi",
    punkter: [
      {
        navn: "Én fast kontaktperson",
        tekst:
          "Du får navnet og nummeret til den som gjør jobben, ikke et saksnummer i en kø. Ringer du, svarer den som skrev koden.",
      },
      {
        navn: "Tolv måneder om gangen",
        tekst:
          "Ingen binding utover det. Vil du videre alene, tar du med deg siden eller appen — den er din.",
      },
      {
        navn: "Fast pris eller eierandel",
        tekst:
          "Du velger. Eierandel er for dem som heller vil ha oss med på risikoen enn å få en regning, og den modellen krever at vi tror på produktet.",
      },
      {
        navn: "Vi drifter egne produkter",
        tekst:
          "Altiv og Oystr er våre egne. Vi kjenner forskjellen på å levere et prosjekt og å leve med det i tre år etterpå.",
      },
    ],
  },

  bygget: {
    merkelapp: "Bevis, ikke løfter",
    tittel: "Hva vi har bygget",
    ingress:
      "To egne produkter vi har bygget, lansert og driftet selv — og to nettsteder vi har laget for andre og for vår egen virksomhet.",
    punkter: [
      {
        navn: "Altiv",
        rolle: "SaaS · CRM for salg",
        tekst:
          "Norsk CRM for salgsoppfølging i B2B. Pipeline på tvers av avdelinger, automatisk e-postlogging, oppfølginger i kalenderen, og omsetning og margin per selger.",
        href: "https://altiv.no",
        lenketekst: "altiv.no",
      },
      {
        navn: "Oystr",
        rolle: "iOS-app · Kart og navigasjon",
        tekst:
          "Sjøkart og navigasjon for fritidsbåt langs norskekysten. Offline-kart, ruting rundt land og grunner, AIS, vannstand og vær. Bygget og driftet sammen med Embretr.",
        href: "https://oystr.no",
        lenketekst: "oystr.no",
      },
      {
        navn: "OESA",
        rolle: "Nettside · Studentforening",
        tekst:
          "Nettside, medlemspåmelding og analysestudio med interaktivt kart over norsk sokkel. Data fra Sokkeldirektoratet, Meteorologisk institutt og Kystverket. Norsk og engelsk.",
        href: "https://oesa-global.com",
        lenketekst: "oesa-global.com",
      },
      {
        navn: "HEL Performance Norge",
        rolle: "Nettside · Motorsykkeldeler",
        tekst:
          "Nettsiden til den offisielle norske HEL-forhandleren: delesøk på merke og modell, guider, og sider bygget for å bli funnet i søk. Delene lages av HEL i England.",
        href: "https://helperformance.no",
        lenketekst: "helperformance.no",
      },
    ],
  },

  sporsmaal: {
    merkelapp: "Spørsmål og svar",
    tittel: "Det folk spør om",
    punkter: [
      {
        spm: "Hva koster en nettside hos Crest Software?",
        svar:
          "Vi gir fast pris før vi begynner, ikke timepris underveis, og prisen avhenger av omfanget. Alternativet er eierandel i stedet for faktura. Begge deler avtales skriftlig før arbeidet starter.",
      },
      {
        spm: "Eier vi nettsiden selv etterpå?",
        svar:
          "Ja. Avtalen går tolv måneder om gangen, og vil du videre uten oss, tar du med deg siden eller appen. Vi holder ingenting som gissel.",
      },
      {
        spm: "Drifter dere siden etter at den er laget?",
        svar:
          "Ja. Drift er en del av jobben: oppdateringer, overvåking, sikkerhet og endringene du trenger underveis. Det er grunnen til at vi tar tolv måneder om gangen i stedet for å levere et prosjekt og gå.",
      },
      {
        spm: "Kan dere love at vi havner øverst på Google?",
        svar:
          "Nei, og ingen kan det. Vi kan love arbeidet: teknisk søkemotoroptimalisering, innhold som svarer på det folk faktisk søker etter, og sider bygget for å bli lest av både Google og KI-assistenter.",
      },
    ],
  },

  kontakt: {
    tittel: "Ta kontakt",
    tekst:
      "Fortell hva som tar tid i dag, så sier vi om vi kan fjerne det — og hva det koster. Vi svarer samme uke, også når svaret er at du ikke trenger oss.",
    knapp: "Skriv til oss",
  },
};
