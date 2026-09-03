// Vilkår og personvernerklæring. Skrevet som samme blokk-struktur som
// bloggartiklene, slik at ArtikkelInnhold rendrer dem med sidens eget design.
//
// VIKTIG: personvernerklæringen skal alltid beskrive hva nettsiden FAKTISK
// gjør. Legges det til analyse, skjemaer, informasjonskapsler eller en ny
// databehandler, må teksten oppdateres FØR endringen settes i drift.
import type { Blokk } from "./artikler";
import { selskap, selskapsangivelse } from "./selskap";

export const JURIDISK_OPPDATERT = "2026-09-03";

export const personvernIngress =
  "stavesoftware.no samler ikke inn opplysninger om deg. Det finnes ingen skjemaer, ingen innlogging, ingen informasjonskapsler, ingen analyseverktøy og ingen sporing. Det eneste som skjer automatisk, er at webserveren fører en teknisk logg over forespørsler — slik alle webservere gjør. Personopplysninger oppstår først når du selv velger å sende oss en e-post.";

export const personvern: Blokk[] = [
  { type: "mellomtittel", tekst: "Hvem er behandlingsansvarlig" },
  {
    type: "avsnitt",
    tekst: `Behandlingsansvarlig for personopplysningene som beskrives her er ${selskapsangivelse()} Spørsmål om personvern, eller henvendelser om rettighetene dine, sendes til post@stavesoftware.no. Vi har ikke personvernombud, og er ikke pålagt å ha det.`,
  },

  { type: "mellomtittel", tekst: "Hva nettsiden ikke gjør" },
  {
    type: "avsnitt",
    tekst:
      "Det er enklest å begynne med det som ikke skjer. Vi har gått gjennom koden bak nettsiden for å kunne si dette presist, ikke omtrentlig.",
  },
  {
    type: "punktliste",
    punkter: [
      "Vi setter ingen informasjonskapsler (cookies).",
      "Vi lagrer ingenting i nettleseren din — verken localStorage, sessionStorage eller lignende.",
      "Nettsiden inneholder ingen analyse- eller statistikkverktøy: ingen Google Analytics, ingen Plausible, ingen Vercel Analytics, ingen sporingspiksler.",
      "Det finnes ingen kontaktskjema, ingen nyhetsbrevpåmelding, ingen søkefelt og ingen brukerkontoer.",
      "Det finnes ingen betaling og ingen netthandel.",
      "Vi har ingen innebygde tjenester fra tredjeparter — ingen YouTube-vinduer, ingen kart, ingen sosiale medier-widgeter.",
      "Vi laster ikke skrifttyper fra Google. Skriftfilene ligger på vår egen server, så nettleseren din kontakter aldri Google når du er inne på siden.",
      "All video, lyd og alle bilder ligger på vårt eget domene.",
    ],
  },
  {
    type: "avsnitt",
    tekst:
      "Fordi vi verken lagrer noe i eller leser noe fra utstyret ditt, er det ingenting å be om samtykke til. Derfor har siden heller ikke noe samtykkebanner. Skulle vi senere legge inn analyse eller andre verktøy som krever samtykke, oppdaterer vi denne erklæringen og innhenter samtykke på forhånd.",
  },
  {
    type: "avsnitt",
    tekst:
      "Nettsiden reagerer på musepekeren for å lage visuelle effekter — egendefinert markør, lys som følger pekeren, tekst som stokker seg. I tillegg lytter den etter Escape-tasten, slik at du kan lukke et åpent panel med tastaturet. Ingen andre tastetrykk registreres. Verdiene brukes kun til å tegne siden i din egen nettleser. De lagres ikke, og de sendes ingen steder.",
  },

  { type: "mellomtittel", tekst: "Når du besøker nettsiden: serverlogger" },
  {
    type: "avsnitt",
    tekst:
      "Nettsiden driftes hos Vercel Inc. Som en del av driften logger Vercel automatisk hver forespørsel til serveren. Dette skjer på infrastrukturnivå og er nødvendig for at en nettside i det hele tatt skal kunne leveres og beskyttes mot angrep.",
  },
  {
    type: "punktliste",
    punkter: [
      "IP-adressen forespørselen kommer fra.",
      "Hvilken side eller fil som ble hentet.",
      "Tidspunkt for forespørselen.",
      "Nettlesertype og operativsystem (user agent).",
      "Hvilken side du eventuelt kom fra (referrer).",
    ],
  },
  {
    type: "avsnitt",
    tekst:
      "Formålet er drift, feilsøking og sikkerhet — konkret: å levere sidene, oppdage feil, og å avverge tjenestenektangrep og annen misbruk av serveren. Det rettslige grunnlaget er berettiget interesse, personvernforordningen artikkel 6 nr. 1 bokstav f. Den berettigede interessen er å holde nettsiden i drift og beskytte den mot angrep. Vi bruker ikke loggene til å analysere besøkende, lage besøksstatistikk, profilere noen eller markedsføre noe.",
  },
  {
    type: "avsnitt",
    tekst:
      "Vi henter ikke ut, kopierer eller oppbevarer disse loggene selv. De ligger hos Vercel og slettes automatisk etter kort tid — fra noen timer til noen uker, avhengig av logtype og Vercels plattform. Vi ber bare om innsyn i dem hvis vi må feilsøke en konkret hendelse.",
  },

  { type: "mellomtittel", tekst: "Når du sender oss e-post" },
  {
    type: "avsnitt",
    tekst: `Kontaktlenkene på siden åpner ditt eget e-postprogram med adressen post@stavesoftware.no. Nettsiden sender ingenting selv, og vi ser ingenting før du faktisk trykker send. Adressen og domenet er uendret etter at selskapet vedtok å bytte navn til ${selskap.fulltNavn}; det er samme selskap som mottar og svarer.`,
  },
  {
    type: "avsnitt",
    tekst:
      "Når du sender oss en e-post, behandler vi det du selv oppgir: navn, e-postadresse, innholdet i meldingen, eventuelle vedlegg, og teknisk informasjon i meldingshodet. Snakker du med oss om selskapet ditt, kan meldingen inneholde forretningssensitiv informasjon. Vi behandler den deretter.",
  },
  {
    type: "avsnitt",
    tekst:
      "Formålet er å svare deg og følge opp dialogen. Det rettslige grunnlaget er berettiget interesse, artikkel 6 nr. 1 bokstav f — vår og din felles interesse i å kunne kommunisere om en mulig henvendelse eller et mulig samarbeid. Går dialogen over i et konkret samarbeid, er grunnlaget for videre behandling at det er nødvendig for å inngå eller oppfylle en avtale, artikkel 6 nr. 1 bokstav b.",
  },
  {
    type: "avsnitt",
    tekst:
      "E-post til post@stavesoftware.no mottas av Resend Inc., som er vår databehandler for e-post, og som bruker Amazon Web Services som underleverandør for selve e-postinfrastrukturen. Derfra videresendes meldingen til en postkasse hos Microsoft, der vi leser og besvarer den. Ingen av dem bruker innholdet til egne formål.",
  },
  {
    type: "avsnitt",
    tekst:
      "Vi beholder e-post så lenge henvendelsen er aktuell, og rydder i innboksen minst én gang i året. Korrespondanse som dokumenterer en inngått avtale, eller som er bokføringsmateriale, oppbevares i fem år etter bokføringsloven. Du kan når som helst be om at vi sletter e-post fra deg, og vi gjør det med mindre vi er lovpålagt å beholde den.",
  },
  {
    type: "avsnitt",
    tekst:
      "Du er ikke pålagt å oppgi noe til oss. Å ikke sende oss e-post har ingen annen konsekvens enn at vi ikke kan svare deg.",
  },

  { type: "mellomtittel", tekst: "Når vi tar kontakt med deg" },
  {
    type: "avsnitt",
    tekst:
      "Vi jobber med startups, og tar av og til kontakt med selskaper og gründere på eget initiativ. Da har vi funnet navn, rolle, selskap og kontaktopplysninger i offentlig tilgjengelige kilder — typisk Brønnøysundregistrene, selskapets egne nettsider, LinkedIn eller omtale i presse og bransjemedier. Vi behandler bare det som trengs for å ta kontakt: navn, rolle, selskap, e-postadresse og en kort notis om hvorfor vi tok kontakt.",
  },
  {
    type: "avsnitt",
    tekst:
      "Formålet er å presentere oss og undersøke om et samarbeid er interessant. Rettslig grunnlag er berettiget interesse, artikkel 6 nr. 1 bokstav f — vår interesse i å nå frem til selskaper vi kan bidra i. Får vi ikke svar, eller sier du nei, sletter vi opplysningene. Sier du fra at du ikke vil kontaktes, respekterer vi det uten videre diskusjon.",
  },

  { type: "mellomtittel", tekst: "Hvem vi deler opplysninger med" },
  {
    type: "avsnitt",
    tekst:
      "Vi selger aldri personopplysninger, deler dem ikke med tredjeparter for deres egne formål, og bruker dem ikke til markedsføring uten samtykke. Tre leverandører behandler opplysninger på våre vegne, alle etter databehandleravtale:",
  },
  {
    type: "punktliste",
    punkter: [
      "Vercel Inc. — drift og hosting av nettsiden, inkludert serverlogger. Siden serveres i dag fra Vercels datasenter i Stockholm.",
      "Resend Inc. — mottak av e-post til post@stavesoftware.no, med Amazon Web Services som underleverandør. E-posten mottas i Irland.",
      "Microsoft — postkassen der e-posten leses og besvares.",
    ],
  },
  {
    type: "avsnitt",
    tekst:
      "Alle tre er amerikanske selskaper. Driften skjer i stor grad på servere i EU, men opplysninger kan bli tilgjengelige fra USA. Overføringen skjer på grunnlag av databehandleravtale med EUs standard personvernbestemmelser (SCC), supplert av EU–US Data Privacy Framework der leverandøren er sertifisert. Vil du se dokumentasjonen på overføringsgrunnlaget, ber du oss om det på post@stavesoftware.no.",
  },
  {
    type: "avsnitt",
    tekst:
      "Ut over dette deler vi ingenting — med mindre vi er rettslig forpliktet til det, for eksempel ved pålegg fra offentlig myndighet.",
  },

  { type: "mellomtittel", tekst: "Ingen automatiserte avgjørelser" },
  {
    type: "avsnitt",
    tekst:
      "Vi bruker ikke automatiserte avgjørelser eller profilering. Ingen beslutning som angår deg tas av en algoritme.",
  },

  { type: "mellomtittel", tekst: "Sikkerhet" },
  {
    type: "avsnitt",
    tekst:
      "Nettsiden leveres kryptert over TLS, og e-post overføres kryptert mellom leverandørene. Tilgangen til postkassen er begrenset til dem som må ha den. Vi beskriver her de tiltakene som faktisk er på plass, og oppdaterer erklæringen etter hvert som flere kommer til.",
  },

  { type: "mellomtittel", tekst: "Dine rettigheter" },
  {
    type: "avsnitt",
    tekst:
      "Du har rett til innsyn i hvilke opplysninger vi har om deg, retting av feil, sletting, begrensning av behandlingen, dataportabilitet, og til å protestere mot behandling som bygger på berettiget interesse. Noen av rettighetene gjelder bare i bestemte situasjoner — dataportabilitet forutsetter for eksempel at behandlingen bygger på samtykke eller avtale, og retten til sletting viker der vi er lovpålagt å oppbevare noe.",
  },
  {
    type: "avsnitt",
    tekst:
      "Send henvendelsen til post@stavesoftware.no. Vi svarer uten ugrunnet opphold, og senest innen én måned. I sjeldne, sammensatte saker kan fristen forlenges — da sier vi fra innen måneden er gått. Det koster ingenting.",
  },

  { type: "mellomtittel", tekst: "Klage til Datatilsynet" },
  {
    type: "avsnitt",
    tekst:
      "Mener du at vi behandler personopplysninger i strid med regelverket, hører vi gjerne fra deg først — men du har uansett rett til å klage til Datatilsynet. Kontaktinformasjon og klageskjema finner du på datatilsynet.no.",
  },

  { type: "mellomtittel", tekst: "Endringer i erklæringen" },
  {
    type: "avsnitt",
    tekst:
      "Endrer vi hvordan nettsiden fungerer — legger til analyse, et kontaktskjema eller en ny leverandør — oppdaterer vi denne teksten før endringen settes i drift. Gjeldende versjon ligger alltid på stavesoftware.no/personvern.",
  },
];

export const vilkarIngress = `Dette er vilkårene for bruk av stavesoftware.no. Nettstedet er en presentasjon av ${selskap.fulltNavn} og en blogg — det selger ingenting, har ingen innlogging og krever ingen registrering. Vilkårene sier derfor tre ting: hvem som står bak siden, hva du kan gjøre med innholdet her, og hva du ikke kan lese ut av det. De er korte med vilje.`;

export const vilkar: Blokk[] = [
  { type: "mellomtittel", tekst: "Hvem står bak nettstedet" },
  {
    type: "avsnitt",
    tekst: `Nettstedet stavesoftware.no drives av ${selskapsangivelse()} All kontakt går til post@stavesoftware.no.`,
  },
  {
    type: "avsnitt",
    tekst: `${selskap.navn} hjelper tidligfaseselskaper med salg, produkt, teknologi og drift, og tar eierandel i stedet for honorar. Nettstedet er en presentasjon av dette arbeidet. Her finnes ingen brukerkontoer, ingen betaling og ingen tjeneste du logger inn på — bare innhold du kan lese.`,
  },

  { type: "mellomtittel", tekst: "Når vilkårene gjelder" },
  {
    type: "avsnitt",
    tekst:
      "Vilkårene gjelder for alle som besøker stavesoftware.no, inkludert bloggen. Bruker du siden, gjelder de for deg. Er du uenig i dem, er den praktiske løsningen å la være å bruke siden.",
  },
  {
    type: "avsnitt",
    tekst:
      "Vilkårene regulerer bare bruken av selve nettstedet. De er ikke en avtale om at vi skal levere noe til deg, og de erstatter ikke en samarbeidsavtale mellom oss.",
  },

  { type: "mellomtittel", tekst: "Opphavsrett til innholdet" },
  {
    type: "avsnitt",
    tekst: `Tekst, bilder, illustrasjoner, video, lyd, design, grafiske elementer og kode på stavesoftware.no tilhører ${selskap.fulltNavn} eller våre lisensgivere, og er vernet av åndsverkloven. Det samme gjelder navnene og kjennetegnene ${selskap.navn} og Altiv. Oystr-navnet og -logoen brukes med tillatelse fra rettighetshaver.`,
  },
  {
    type: "avsnitt",
    tekst: "Vi liker at innhold blir lest og delt, så vi sier hva som er greit uten å spørre først:",
  },
  {
    type: "punktliste",
    punkter: [
      "Lenke til hvilken som helst side hos oss, fritt og uten avtale.",
      "Sitere korte utdrag fra artiklene med tydelig kildehenvisning og lenke, innenfor sitatretten i åndsverkloven § 29.",
      "Dele artiklene våre i sosiale medier og internt i egen virksomhet.",
    ],
  },
  {
    type: "avsnitt",
    tekst:
      "Det vi ikke tillater uten skriftlig samtykke, er å gjengi hele eller vesentlige deler av artikler på egne flater, å kopiere design eller kode fra siden, å bruke innholdet i egen markedsføring, eller å høste innholdet systematisk med automatiserte verktøy. Dette gjelder ikke søkemotorers vanlige indeksering, som vi uttrykkelig tillater i robots.txt. Bruk av navnene eller logoene våre på en måte som gir inntrykk av samarbeid eller tilslutning, krever også samtykke.",
  },

  { type: "mellomtittel", tekst: "Bloggen er generell informasjon, ikke rådgivning" },
  {
    type: "avsnitt",
    tekst:
      "Artiklene på siden bygger på vår egen erfaring med å bygge og drifte produkter. De er skrevet for å være nyttige på generelt grunnlag, ikke for å passe din situasjon. Vi kjenner ikke selskapet ditt, tallene dine eller avtalene dine.",
  },
  {
    type: "avsnitt",
    tekst:
      "Innholdet er ikke juridisk rådgivning, skatte- eller regnskapsrådgivning, teknisk rådgivning for ditt konkrete prosjekt eller investeringsrådgivning. Priser, estimater og tidsanslag som nevnes i artiklene er eksempler for å forklare et poeng, ikke tilbud eller løfter om hva noe vil koste.",
  },
  {
    type: "avsnitt",
    tekst:
      "Innhold blir også utdatert. Vi gjennomgår ikke gamle artikler systematisk når teknologi, priser eller regelverk endrer seg. Skal du ta en beslutning som betyr noe, gjør en selvstendig vurdering og hent fagkyndig hjelp der det trengs.",
  },

  { type: "mellomtittel", tekst: "Ingenting på siden er et bindende tilbud" },
  {
    type: "avsnitt",
    tekst:
      "Dette punktet er viktigere hos oss enn på de fleste andre nettsider, fordi modellen vår handler om eierandel. Beskrivelsene av hvordan vi jobber — hva vi gjør, hva vi tar, hvordan et samarbeid ser ut — er markedsføring og en invitasjon til å ta kontakt. De er ikke et tilbud du kan akseptere, og de kan ikke leses som et løfte om hva vi vil gjøre for deg eller på hvilke betingelser.",
  },
  {
    type: "punktliste",
    punkter: [
      "Et samarbeid oppstår først når begge parter har signert en skriftlig avtale. Før det finnes ingen forpliktelser i noen retning.",
      "Omfang, varighet, eierandelens størrelse og alt annet avtales individuelt i hvert enkelt tilfelle. Ingen tall eller vilkår på nettsiden er standard eller gitt på forhånd.",
      "At du tar kontakt, gir ingen rett til et samarbeid. Vi sier nei til det meste, og vi skylder ingen begrunnelse.",
      "En e-post, en samtale eller et møte er ikke i seg selv en avtale, uansett hva som blir sagt underveis.",
    ],
  },
  {
    type: "avsnitt",
    tekst: `Innholdet på siden er heller ikke investeringsrådgivning, ikke et tilbud om å kjøpe eller selge finansielle instrumenter, og ikke en oppfordring til å investere i ${selskap.fulltNavn} eller i selskaper vi jobber med. Vi yter ingen investeringstjenester og gir ingen anbefalinger om kjøp eller salg av aksjer. Vi jobber mot eierandel etter individuell avtale — det er noe annet.`,
  },

  { type: "mellomtittel", tekst: "Idéer og materiale du sender oss" },
  {
    type: "avsnitt",
    tekst:
      "Får vi tilsendt en idé, en pitch eller annet materiale uten at vi har bedt om det, behandler vi det med vanlig folkeskikk og deler det ikke videre uten grunn. Men innsendingen i seg selv skaper ingen konfidensialitetsplikt for oss, gir deg ingen rettigheter overfor oss, og gir ingen krav på vederlag dersom vi senere jobber med noe som ligner.",
  },
  {
    type: "avsnitt",
    tekst:
      "Skal du dele noe du mener er sensitivt, si fra på forhånd. Vi signerer taushetserklæring før vi mottar materiale når det er saklig grunn til det. Ikke send forretningshemmeligheter eller personopplysninger om andre på e-post før det er avklart.",
  },

  { type: "mellomtittel", tekst: "Lenker til andre nettsteder" },
  {
    type: "avsnitt",
    tekst:
      "Vi lenker til produkter vi har vært med på å bygge, som oystr.no og altiv.no, og kan lenke til eksterne kilder i artikler. Disse nettstedene har sine egne vilkår og sine egne personvernerklæringer, og det er de som gjelder når du er der.",
  },
  {
    type: "avsnitt",
    tekst:
      "Vi kontrollerer ikke innholdet på eksterne nettsteder og har ikke ansvar for det. At vi lenker til en side, betyr at vi syntes den var relevant — ikke at vi stiller oss bak alt som står der.",
  },

  { type: "mellomtittel", tekst: "Tilgjengelighet og endringer på siden" },
  {
    type: "avsnitt",
    tekst:
      "Vi gjør det vi kan for at siden er oppe og fungerer, men vi garanterer ikke uavbrutt eller feilfri drift. Vi kan endre, flytte, oppdatere eller fjerne innhold når som helst og uten varsel, og vi kan ta ned deler av siden eller hele nettstedet.",
  },

  { type: "mellomtittel", tekst: "Ansvar" },
  {
    type: "avsnitt",
    tekst:
      "Bruk av nettstedet skjer på eget ansvar. Vi svarer ikke for tap som følger av at innhold er ufullstendig, utdatert eller feil, eller av beslutninger noen tar på grunnlag av det de har lest her. Det samme gjelder tap som skyldes at siden er utilgjengelig, eller innhold på nettsteder vi lenker til.",
  },
  {
    type: "avsnitt",
    tekst:
      "Vi svarer uansett ikke for indirekte tap, tapt fortjeneste eller følgeskader. Begrensningene her gjelder ikke ved forsett eller grov uaktsomhet fra vår side, ikke ved personskade, og heller ikke der ufravikelig lovgivning sier noe annet.",
  },

  { type: "mellomtittel", tekst: "Personvern og informasjonskapsler" },
  {
    type: "avsnitt",
    tekst:
      "Nettstedet setter ingen informasjonskapsler og bruker ingen analyse-, statistikk- eller sporingsverktøy. Skrifter og medier lastes fra vår egen server. Det vi likevel behandler av personopplysninger — serverlogger hos hostingleverandøren, og e-post du selv sender oss — er beskrevet i personvernerklæringen på stavesoftware.no/personvern. Den er et eget dokument, og den gjelder foran disse vilkårene i spørsmål om personopplysninger.",
  },

  { type: "mellomtittel", tekst: "Endringer i vilkårene" },
  {
    type: "avsnitt",
    tekst:
      "Vi kan oppdatere disse vilkårene, for eksempel når siden endrer seg eller regelverket gjør det. Gjeldende versjon ligger alltid på stavesoftware.no/vilkar med dato for siste oppdatering øverst. Bruker du siden etter at en endring er publisert, gjelder den nye versjonen.",
  },

  { type: "mellomtittel", tekst: "Lovvalg og verneting" },
  {
    type: "avsnitt",
    tekst:
      "Vilkårene er underlagt norsk rett. Oppstår det en uenighet, prøver vi å løse den i minnelighet først. Fører ikke det frem, kan saken bringes inn for de ordinære domstolene med Oslo tingrett som verneting, med mindre ufravikelig lov gir rett til å velge et annet verneting.",
  },
  {
    type: "avsnitt",
    tekst:
      "Skulle en enkelt bestemmelse i vilkårene være ugyldig eller ikke kunne gjøres gjeldende, står resten av vilkårene ved lag.",
  },

  { type: "mellomtittel", tekst: "Kontakt" },
  {
    type: "avsnitt",
    tekst: `Spørsmål om vilkårene, om innhold på siden eller om bruk av materiale sendes til post@stavesoftware.no. ${selskapsangivelse()}`,
  },
];
