// Emnekø for bloggen.
//
// Den planlagte redaksjonelle kalenderen. En automatisk oppgave plukker det
// øverste ubrukte emnet hver 10. dag, skriver artikkelen og publiserer den.
//
// Poenget med å ha en ENDELIG liste er at innholdet skal være planlagt, ikke
// masseprodusert: når køen er tom, stopper publiseringen og du får beskjed om
// å fylle på. Legg gjerne til egne emner — det viktigste kriteriet er at
// artikkelen må kunne inneholde noe bare Stave Software kan skrive, hentet fra
// reell erfaring med Oystr og Altiv.

export type Emne = {
  tittel: string;
  vinkel: string; // hva artikkelen konkret skal handle om
  kategori: string;
  brukt: boolean;
};

export const emnekoe: Emne[] = [
  {
    tittel: "Åpne offentlige data i Norge: hva finnes, og hva kan du bygge med det",
    vinkel:
      "Gjennomgang av Kartverket, Kystverket og Meteorologisk institutt som datakilder — hva de tilbyr, hvilket format det kommer i, og hva som faktisk kreves for å gjøre det om til et produkt. Konkret fra arbeidet med Oystr.",
    kategori: "Kart & data",
    brukt: false,
  },
  {
    tittel: "Row Level Security: derfor hører sikkerheten hjemme i databasen",
    vinkel:
      "Hvorfor vi legger tilgangsreglene i PostgreSQL i stedet for i applikasjonskoden i Altiv. Hva som går galt når man filtrerer i koden, og hva det koster å gjøre det riktig fra start.",
    kategori: "Web & SaaS",
    brukt: false,
  },
  {
    tittel: "Native eller nettleser: når lønner hva seg",
    vinkel:
      "Vi bygde Oystr native og Altiv i nettleseren. Konkret sammenligning av hva som avgjorde valget hver gang — ytelse, offline, maskinvaretilgang, distribusjon og kostnad over tid.",
    kategori: "Apputvikling",
    brukt: false,
  },
  {
    tittel: "Hva du bør spørre en utviklingsleverandør om før du signerer",
    vinkel:
      "Konkrete spørsmål som avslører om leverandøren har tenkt på drift, eierskap til koden, hva som skjer ved uenighet, og hvem som sitter med ansvaret når noe knekker. Skrevet fra leverandørsiden, ærlig.",
    kategori: "Apputvikling",
    brukt: false,
  },
  {
    tittel: "Hva koster det å ha en app i drift?",
    vinkel:
      "Oppfølger til kostnadsartikkelen, men om det folk glemmer: årlige plattformoppdateringer, datakilder som endrer seg, sikkerhetsfikser, hosting og supporten som kommer uansett.",
    kategori: "Apputvikling",
    brukt: false,
  },
  {
    tittel: "Offline-synkronisering: når to enheter har endret det samme",
    vinkel:
      "Det tekniske problemet bak offline-first. Hvordan man håndterer konflikter, hvorfor «siste skriv vinner» sjelden holder, og hvilke valg vi tok i Oystr.",
    kategori: "Kart & data",
    brukt: false,
  },
  {
    tittel: "Hvorfor vi velger kjedelig teknologi",
    vinkel:
      "Argumentet for å velge veletablerte verktøy fremfor nye og elegante når du skal drifte noe i mange år. Konkret om stacken bak Altiv og Oystr, og hva vi vurderte og valgte bort.",
    kategori: "Teknologi",
    brukt: false,
  },
  {
    tittel: "Abonnement i praksis: det Stripe-dokumentasjonen ikke sier",
    vinkel:
      "Hva som faktisk kreves for å ta betalt for et SaaS-produkt: prøveperioder, oppsigelser midt i perioden, mislykkede betalinger, fakturaer og momshåndtering i Norge.",
    kategori: "Web & SaaS",
    brukt: false,
  },
  {
    tittel: "Hva en MVP faktisk skal inneholde",
    vinkel:
      "De fleste MVP-er er enten for store eller for tynne. Hvordan vi avgjør hva som må med i første versjon, med eksempler fra hva vi kuttet i Altiv og hva vi ikke kunne kutte i Oystr.",
    kategori: "Apputvikling",
    brukt: false,
  },
  {
    tittel: "Slik bruker vi AI i utviklingen — ærlig",
    vinkel:
      "Hva AI faktisk gjør og ikke gjør i arbeidsflyten vår: hvor det sparer tid, hvor det koster tid, og hvorfor mennesket fortsatt tar alle avgjørelsene som betyr noe.",
    kategori: "Teknologi",
    brukt: false,
  },
  {
    tittel: "Design og kode fra samme hånd",
    vinkel:
      "Hva som skjer når den som tegner grensesnittet også bygger det. Hvorfor overleveringen mellom design og utvikling er der mest kvalitet går tapt, og hvordan vi unngår det.",
    kategori: "Design & merkevare",
    brukt: false,
  },
  {
    tittel: "AIS: hva det er, og hva du kan bygge med det",
    vinkel:
      "Forklaring av AIS-systemet for folk som ikke kjenner det, og en gjennomgang av hva slags produkter dataene åpner for — med utgangspunkt i hvordan Oystr bruker dem.",
    kategori: "Kart & data",
    brukt: false,
  },
  {
    tittel: "Multi-tenant fra dag én, eller etterpå?",
    vinkel:
      "Beslutningen om å bygge for flere kunder i samme system fra start. Hva det koster i begynnelsen, hva det sparer senere, og hva som skjer hvis du utsetter det.",
    kategori: "Web & SaaS",
    brukt: false,
  },
  {
    tittel: "App Store-lansering: hva som faktisk skjer",
    vinkel:
      "Praktisk gjennomgang av veien fra ferdig app til lansert app — TestFlight, vurderingsprosessen, vanlige avslag, og hvor lang tid det egentlig tar.",
    kategori: "Apputvikling",
    brukt: false,
  },
  {
    tittel: "Å bygge merkevare som et lite studio",
    vinkel:
      "Hvordan vi tenker om navn, identitet og uttrykk når vi er få — og hvorfor produktene våre har egne merkevarer i stedet for å hete Stave 1 og Stave 2.",
    kategori: "Design & merkevare",
    brukt: false,
  },
];

export const nesteEmne = (): Emne | undefined => emnekoe.find((e) => !e.brukt);
export const antallIgjen = (): number => emnekoe.filter((e) => !e.brukt).length;
