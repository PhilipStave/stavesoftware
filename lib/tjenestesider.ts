// Tjenestesidene: én side for hver ting folk faktisk søker etter.
//
// Forsiden forteller hele historien, men én side kan bare rangere godt på én
// ting, og detaljene i tjenestepanelene finnes ikke i HTML-en før noen klikker.
// Disse sidene gir Google og AI-assistentene noe eget å vise for søk etter
// nettside, app og SEO.
//
// Samme regler som resten av siden: ingen priser, ingen løfter om plassering,
// ingen oppdiktede kunder eller tall. Det som står om hvordan et samarbeid ser
// ut, er en beskrivelse — vilkårene sier at omfang og pris alltid avtales
// skriftlig, og FAQ-svarene må ikke love mer enn det.

import type { TjenesteSlug } from "./tjenester-lenker";

export const TJENESTESIDER_OPPDATERT = "2026-09-15";

export type Punkt = { navn: string; tekst: string };

export type Seksjon = {
  tittel: string;
  avsnitt?: string[];
  punkter?: Punkt[];
  nummerert?: boolean;
};

export type Sporsmal = { sporsmal: string; svar: string };

export type TjenesteSide = {
  slug: TjenesteSlug;
  tittel: string; // <title>, uten selskapsnavnet
  metaBeskrivelse: string; // 140–160 tegn
  overtittel: string;
  h1: string;
  ingress: string;
  tjenestetype: string; // schema.org serviceType
  seksjoner: Seksjon[];
  faq: Sporsmal[];
  artikler: string[]; // slugs i lib/artikler.ts
};

export const tjenesteSider: TjenesteSide[] = [
  {
    slug: "nettside",
    tittel: "Nettside til bedriften, laget og driftet",
    metaBeskrivelse:
      "Vi lager nettsiden til bedriften din, drifter den og gir deg én fast kontaktperson som gjør endringene. Tolv måneder om gangen, og siden er din etterpå.",
    overtittel: "Tjeneste · Nettside",
    h1: "Nettside til bedriften — laget, driftet og fulgt opp",
    ingress:
      "De fleste nettsider er ferdige den dagen de lanseres, og begynner å gå ut på dato dagen etter. Vi lager nettsiden, drifter den og gir deg én fast person som gjør endringene når du trenger dem. Tolv måneder om gangen — og siden er din etterpå.",
    tjenestetype: "Utvikling og drift av nettsider",
    seksjoner: [
      {
        tittel: "Hva du får",
        punkter: [
          {
            navn: "Nettsiden",
            tekst:
              "Design, tekst og utvikling fra de samme folkene. Siden lages for å være rask på mobil, lett å finne og enkel å endre.",
          },
          {
            navn: "Drift",
            tekst:
              "Domene, hosting, sertifikater og oppdateringer. Du skal ikke tenke på at siden er oppe — bare på hva som står der.",
          },
          {
            navn: "Én fast kontaktperson",
            tekst:
              "Samme person hver gang. Du sier fra om noe skal legges til, fjernes eller endres, og det blir gjort — uten at du må forklare bedriften på nytt.",
          },
          {
            navn: "SEO og AEO",
            tekst:
              "Arbeidet med å bli funnet er en del av jobben, ikke et tillegg: en teknisk riktig side, innhold som svarer på det kundene søker etter, og struktur som AI-assistenter kan lese.",
          },
        ],
      },
      {
        tittel: "Slik går det for seg",
        nummerert: true,
        punkter: [
          {
            navn: "Samtale",
            tekst:
              "Vi finner ut hva siden skal gjøre for bedriften: hvem som skal finne den, og hva de skal gjøre når de er der.",
          },
          {
            navn: "Design og utvikling",
            tekst: "Vi tegner og lager siden, og du ser den underveis — ikke først når den er ferdig.",
          },
          {
            navn: "Lansering",
            tekst:
              "Domene, sertifikat, videresendinger fra en eventuell gammel side, og innmelding til Google og Bing.",
          },
          {
            navn: "Drift og endringer",
            tekst: "Deretter drifter vi siden og gjør endringene du ber om, så lenge avtalen løper.",
          },
        ],
      },
      {
        tittel: "Tolv måneder om gangen, og siden er din",
        avsnitt: [
          "Avtalen løper tolv måneder av gangen. Når perioden er over, beholder du nettsiden. Vil du ta den med deg videre, overfører vi den til deg, og da slutter vi å drifte den.",
          "Det er med vilje. Du skal fortsette fordi det fungerer, ikke fordi det er vanskelig å gå. Hva som skal lages, og hva det koster, avtales skriftlig før vi begynner.",
        ],
      },
      {
        tittel: "Fast pris eller eierandel",
        avsnitt: [
          "Du velger hvordan du betaler: en fast pris i måneden, eller en eierandel i selskapet. Fast pris gir forutsigbare kostnader. Eierandel kan passe for selskaper i tidlig fase, der nettsiden er en del av noe som skal vokse — og da tjener vi først når du gjør det.",
        ],
      },
      {
        tittel: "Laget av folk som drifter egne produkter",
        avsnitt: [
          "Vi drifter Oystr og Altiv selv, i tillegg til denne nettsiden. Vi har levd med konsekvensene av våre egne valg, og vet hva som skjer med en side når ingen passer på den.",
        ],
      },
      {
        tittel: "Sist vi laget en nettside for andre",
        avsnitt: [
          "Studentforeningen OESA fikk nettside, medlemspåmelding og et eget analysestudio på [oesa-global.com](https://oesa-global.com). Den tyngste delen er kartet over norsk sokkel: felt, rørledninger og innretninger fra Sokkeldirektoratet, vær fra Meteorologisk institutt og skipstrafikk fra Kystverket, tegnet om til noe en student kan klikke seg gjennom.",
          "Siden finnes på norsk og engelsk, den er meldt inn til Google og Bing, og vi drifter den videre. Det er den samme jobben vi gjør for en bedrift — bare med andre data. Vi har skrevet om hvordan den ble bygget i [en egen artikkel](/blogg/slik-bygde-vi-oesa-siden).",
        ],
      },
    ],
    faq: [
      {
        sporsmal: "Hvem eier nettsiden?",
        svar: "Du. Når avtaleperioden er over, beholder du siden. Vil du flytte den, overfører vi den til deg.",
      },
      {
        sporsmal: "Hva skjer etter tolv måneder?",
        svar:
          "Du velger om vi skal fortsette i tolv nye måneder. Gjør vi ikke det, beholder du siden, og vi overfører den til deg hvis du ønsker det. Da slutter vi å drifte den.",
      },
      {
        sporsmal: "Hva koster en nettside hos dere?",
        svar:
          "Det avhenger av hva siden skal gjøre, og prisen avtales skriftlig før vi begynner. Du kan betale med en fast pris i måneden eller med en eierandel.",
      },
      {
        sporsmal: "Må vi skrive tekstene selv?",
        svar:
          "Nei. Vi kan skrive dem, men de blir best når du er med, fordi du kjenner kundene dine bedre enn noen andre.",
      },
      {
        sporsmal: "Kommer nettsiden øverst på Google?",
        svar:
          "Det kan ingen love, og du bør være skeptisk til den som gjør det. Vi lager siden for å bli funnet og jobber løpende med SEO, men det er Google som bestemmer rekkefølgen.",
      },
    ],
    artikler: ["hva-koster-en-nettside", "derfor-tar-vi-eierandel"],
  },
  {
    slug: "app",
    tittel: "Apputvikling: vi lager appen og drifter den",
    metaBeskrivelse:
      "Vi utvikler apper for iPhone og nettleseren, drifter dem etter lansering og gir deg én fast kontaktperson. Laget av folkene bak Oystr og Altiv.",
    overtittel: "Tjeneste · App",
    h1: "Apputvikling — fra idé til app i drift",
    ingress:
      "Å lansere en app er halve jobben. Den andre halvdelen er å holde den i live når iOS oppdateres, datakilder endrer seg og brukerne finner ting ingen tenkte på. Vi gjør begge deler, og du har én fast person å snakke med hele veien.",
    tjenestetype: "Apputvikling og drift",
    seksjoner: [
      {
        tittel: "Hva vi lager",
        punkter: [
          {
            navn: "Apper for iPhone",
            tekst:
              "Native i Swift og SwiftUI når appen trenger kart, offline-bruk eller tett tilgang til telefonen. Oystr er laget slik.",
          },
          {
            navn: "Webapplikasjoner",
            tekst:
              "Systemer som kjører i nettleseren, med innlogging, roller og regler som sørger for at hver bedrift bare ser sine egne data. Altiv er laget slik.",
          },
          {
            navn: "Data fra andre kilder",
            tekst:
              "Kart, vær, registre og betalingsløsninger, hentet inn og holdt i live når kildene endrer seg.",
          },
          {
            navn: "Betaling og abonnement",
            tekst: "Når appen skal ta betalt: abonnement, prøveperioder og oppsigelser gjennom Stripe.",
          },
        ],
      },
      {
        tittel: "Native eller nettleser?",
        avsnitt: [
          "Vi har ingen agenda om hva du velger. Oystr er native, blant annet fordi den må virke uten dekning langs kysten. Altiv kjører i nettleseren, der den finnes på alle enheter uten at noe må installeres.",
          "Det riktige valget avhenger av hva appen skal gjøre, ikke av hva som er i vinden.",
        ],
      },
      {
        tittel: "Drift er en del av jobben",
        avsnitt: [
          "Apple slipper ny iOS hvert år, datakilder endrer format, og sikkerhetshull dukker opp i biblioteker appen bruker. En app ingen passer på, slutter gradvis å virke. Derfor følger hosting, oppdateringer og sikkerhetsfikser med så lenge avtalen løper.",
        ],
      },
      {
        tittel: "Slik går det for seg",
        nummerert: true,
        punkter: [
          {
            navn: "Start smalt",
            tekst:
              "Vi finner den ene tingen appen absolutt må gjøre, og lager den skikkelig først. Resten kan vente til ekte brukere har sagt hva de savner.",
          },
          {
            navn: "Prøv den tidlig",
            tekst: "Du får bruke appen underveis — på iPhone gjennom TestFlight — ikke først når den er ferdig.",
          },
          {
            navn: "Lansering",
            tekst:
              "Vi tar appen gjennom godkjenningen i App Store, eller ut på nett med domene og alt som hører til.",
          },
          {
            navn: "Drift og videreutvikling",
            tekst: "Etter lansering drifter vi appen og gjør endringene du trenger, med samme kontaktperson som før.",
          },
        ],
      },
      {
        tittel: "Tolv måneder, og appen er din",
        avsnitt: [
          "Avtalen løper tolv måneder om gangen. Etterpå beholder du appen, og vil du flytte den, overfører vi den til deg.",
          "Du betaler med fast pris i måneden eller med eierandel. Er appen selve produktet i et selskap som skal vokse, kan eierandel være det naturlige valget.",
        ],
      },
    ],
    faq: [
      {
        sporsmal: "Hva koster det å lage en app?",
        svar:
          "Det kommer an på hvor mye appen skal gjøre, hvor mange plattformer den skal på, og om den må virke uten nett. Vi har skrevet en egen artikkel om hva prisen består av. Hos oss avtales prisen skriftlig før vi begynner, som fast pris i måneden eller som eierandel.",
      },
      {
        sporsmal: "Hvor lang tid tar det å lage en app?",
        svar:
          "En fokusert app som gjør én ting godt, kan lages på uker. Et produkt med innlogging, betaling og synkronisering tar måneder. Hva din app krever, finner vi ut i første samtale.",
      },
      {
        sporsmal: "Hvem eier appen?",
        svar: "Du. Etter avtaleperioden beholder du appen, og vil du flytte den, overfører vi den til deg.",
      },
      {
        sporsmal: "Kan et selskap i tidlig fase betale med eierandel?",
        svar:
          "Det kan avtales, og det er i tidlig fase en eierandel gir mest mening. Vi har skrevet om hva det koster begge parter, og når fast pris er det bedre valget.",
      },
    ],
    artikler: [
      "hva-koster-det-a-lage-en-app",
      "derfor-tar-vi-eierandel",
      "sjokart-som-virker-uten-dekning",
      "fra-ide-til-lansert-crm",
    ],
  },
  {
    slug: "seo",
    tittel: "SEO og AEO: bli funnet på Google og i AI-svar",
    metaBeskrivelse:
      "Vi jobber for at det er din nettside kundene finner når de søker, på Google og i AI-svar. Teknisk SEO, innhold og AEO, uten løfter om plassering.",
    overtittel: "Tjeneste · SEO og AEO",
    h1: "SEO og AEO — mot toppen av Google",
    ingress:
      "De fleste går inn på et av de første treffene, og det er der salget havner. Vi jobber løpende for at det treffet skal være ditt — på Google, og når kundene dine spør en AI i stedet for å søke. Ingen kan love plassen, men innsatsen kan vi love.",
    tjenestetype: "Søkemotoroptimalisering (SEO) og AEO",
    seksjoner: [
      {
        tittel: "Det vi gjør",
        punkter: [
          {
            navn: "Teknisk grunnmur",
            tekst:
              "Rask side på mobil, ryddig struktur, én adresse per side og strukturerte data som forteller Google hva bedriften heter, gjør og hvor den holder til.",
          },
          {
            navn: "Innhold som svarer",
            tekst:
              "Vi finner ut hva kundene dine faktisk skriver inn, og lager sidene og tekstene som svarer på det.",
          },
          {
            navn: "Lokal synlighet",
            tekst:
              "For søk som ender med et stedsnavn, er bedriftsprofilen på Google ofte like viktig som selve nettsiden. Vi hjelper deg å sette den opp riktig og holde den oppdatert.",
          },
          {
            navn: "Lenker som teller",
            tekst:
              "Google stoler mer på sider andre viser til. Vi hjelper deg å finne stedene som bør lenke til deg — ikke kjøpte lenker eller katalogoppføringer uten verdi.",
          },
          {
            navn: "Synlig i AI-svar",
            tekst:
              "Flere spør ChatGPT eller leser Googles egne AI-svar i stedet for å klikke seg gjennom treff. Vi strukturerer innholdet slik at det kan forstås og siteres der også. Det kalles AEO.",
          },
          {
            navn: "Oppfølging",
            tekst: "Vi følger med på hvilke søk siden dukker opp på, og justerer etter det.",
          },
        ],
      },
      {
        tittel: "Hvorfor vi ikke lover førsteplass",
        avsnitt: [
          "Det er Google som bestemmer rekkefølgen, og ingen utenfor Google styrer den. Den som garanterer deg førsteplass, lover noe de ikke rår over — eller snakker om et søkeord ingen bruker.",
          "Det vi kan love, er at siden din er laget riktig, at innholdet svarer på det kundene spør om, og at vi jobber med det løpende. Resten tar tid, og det er ærligere å si det før du betaler enn etter.",
        ],
      },
      {
        tittel: "Vi gjør det samme for oss selv",
        avsnitt: [
          "Da vi flyttet fra stavesoftware.no til crestholding.no, satte vi opp varige videresendinger fra hver gamle adresse, og byttet den kanoniske adressen først da det nye domenet svarte. Selskapsinformasjonen og logoen på denne siden er merket opp slik at Google kan lese dem, og den består Googles egen test for strukturerte data.",
          "Siden du leser nå, finnes av samme grunn: Google skal ha en egen side å vise når noen søker etter det vi gjør.",
        ],
      },
    ],
    faq: [
      {
        sporsmal: "Hva er forskjellen på SEO og AEO?",
        svar:
          "SEO handler om å bli funnet i vanlige søkeresultater. AEO handler om å bli brukt som kilde når noen får et ferdig svar — fra ChatGPT, Googles egne AI-svar eller lignende. Mye av grunnarbeidet er det samme: tydelig innhold og riktig struktur.",
      },
      {
        sporsmal: "Kan dere garantere førsteplass på Google?",
        svar:
          "Nei. Ingen kan det ærlig, fordi det er Google som bestemmer rekkefølgen. Vi kan love arbeidet, ikke plasseringen.",
      },
      {
        sporsmal: "Hvor lang tid tar SEO?",
        svar:
          "Tekniske feil kan rettes på dager, men plasseringer bygges over måneder. En ny side på et nytt domene må regne med at det tar tid før den vises på søk der det er konkurranse.",
      },
      {
        sporsmal: "Er SEO med når dere lager nettsiden?",
        svar: "Ja. Når vi lager og drifter nettsiden din, er SEO og AEO en del av jobben, ikke et tillegg.",
      },
    ],
    artikler: ["navnet-gjelder-ikke-for-det-er-registrert"],
  },
];

export const finnTjenesteSide = (slug: TjenesteSlug): TjenesteSide =>
  tjenesteSider.find((s) => s.slug === slug)!;
