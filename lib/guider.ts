// Guider for den som vurderer å selge bedriften sin.
//
// Dette er innhold for søk, men det er ikke skrevet for søkemotorer: hver
// guide svarer på et spørsmål en eier faktisk stiller, og svaret er det vi
// selv ville gitt i et møte. Vi kjøper bedrifter, så vi sitter på den andre
// siden av bordet — det står i hver guide, fordi en leser som oppdager det
// selv slutter å tro på resten.
//
// Regler:
//  - Ingen oppdiktede tall eller andeler. Satser skrives med årstall, og
//    leseren bes sjekke dem.
//  - Ingen løfter om pris eller om at vi kjøper.
//  - Juss og skatt beskrives som hovedregler, med beskjed om å hente råd.

export type Avsnitt = string;

export type Seksjon = {
  overskrift: string;
  avsnitt: Avsnitt[];
};

export type Guide = {
  slug: string;
  tittel: string;
  metaBeskrivelse: string;
  ingress: string;
  oppdatert: string;
  seksjoner: Seksjon[];
  faq: { spm: string; svar: string }[];
};

export const GUIDER_OPPDATERT = "2026-10-22";

export const guider: Guide[] = [
  {
    slug: "hva-er-bedriften-min-verdt",
    tittel: "Hva er bedriften min verdt?",
    metaBeskrivelse:
      "Slik regner en kjøper seg fram til prisen på en liten norsk bedrift: normalisert driftsresultat, multippel, kontanter og gjeld — og hva som flytter prisen.",
    ingress:
      "Prisen settes ikke av omsetningen, og sjelden av hva du selv har lagt ned. Den settes av hva som blir igjen når du ikke lenger jobber der.",
    oppdatert: "2026-10-22",
    seksjoner: [
      {
        overskrift: "Det er overskuddet som prises, ikke omsetningen",
        avsnitt: [
          "En kjøper begynner med driftsresultatet — det som står igjen etter varer, lønn og alle kostnadene ved å drive, men før renter og skatt. Omsetningen forteller hvor mye som går gjennom selskapet, ikke hvor mye som blir igjen. To bedrifter med 30 millioner i omsetning kan være verdt 3 og 15 millioner.",
          "Ett år alene sier lite. Vi bruker et vektet snitt av de tre siste årene, med det nyeste året tyngst. Var i fjor et unntaksår i begge retninger, jevner det seg ut; er trenden tydelig, slår den gjennom.",
        ],
      },
      {
        overskrift: "Multippelen, og hva som flytter den",
        avsnitt: [
          "Små norske selskaper skifter som regel hender til noen få ganger driftsresultatet. Hvor i det spennet du havner, avhenger av tre ting en kjøper kan lese rett ut av regnskapet: hvor stor bedriften er, hvor god marginen er, og om omsetningen går opp eller ned.",
          "Størrelse betyr noe fordi risikoen faller med den. En bedrift med fem millioner i omsetning er ett kundetap unna et dårlig år. En med femti er det ikke.",
          "Margin betyr noe fordi den sier hvor mye slingringsmonn du har. Tjener du to prosent, spiser et prispress på fem prosent hele overskuddet. Tjener du tolv, tåler du et tungt år uten å gå i minus.",
        ],
      },
      {
        overskrift: "Så legges kontanter til og gjeld trekkes fra",
        avsnitt: [
          "Multippelen gir verdien av selve driften. Den som kjøper aksjene, overtar også bankkontoen og gjelden. Derfor legges bankinnskuddet til og den rentebærende gjelden trekkes fra før du har en pris på aksjene.",
          "Har du tatt ut et stort utbytte like før salget, er pengene borte fra kontoen og prisen faller tilsvarende. Det er ikke urimelig — du har allerede fått dem.",
        ],
      },
      {
        overskrift: "De fire tingene som ikke står i regnskapet",
        avsnitt: [
          "Kundekonsentrasjon. Er tre kunder halve omsetningen, kjøper man en kontrakt og ikke en bedrift. Det er det første en kjøper spør om, og det eneste som ikke kan leses ut av tallene.",
          "Eieravhengighet. Hvis du er selgeren, innkjøperen og den kundene ringer, forsvinner mye av overskuddet den dagen du slutter. Da kjøper man en jobb, og det prises lavere. Finnes det en som driver dagen uten deg, er bedriften verdt mer — og du kan dokumentere det ved å ta ferie.",
          "Avtalene. Leverandør- og agenturavtaler har ofte en klausul om eierskifte. Kan en leverandør si opp den dagen du selger, er halve verdien borte for kjøperen.",
          "Varelageret. Et lager på ti millioner er ti millioner bare hvis varene kan selges. Er en fjerdedel ukurant, er det en kostnad som venter. Tell, og kjenn aldersfordelingen før noen spør.",
        ],
      },
      {
        overskrift: "Normaliser før du viser tallene",
        avsnitt: [
          "Mange eiere tar ut lav lønn og lar overskuddet stå, eller tar ut høy lønn i stedet for utbytte. Begge deler gir et driftsresultat som ikke beskriver driften. En kjøper justerer uansett for det, så gjør det selv først, og forklar hvorfor.",
          "Det samme gjelder kostnader som ikke følger med: bilen som egentlig er privat, hytta som står i selskapet, kundeturen som var en ferie. Ta dem ut av regnestykket og vær åpen om dem. Det er forskjellen på en normalisering og en pynting — og en kjøper som oppdager det andre, slutter å tro på det første.",
        ],
      },
    ],
    faq: [
      {
        spm: "Hvor mange ganger overskuddet selges en liten bedrift for?",
        svar: "Som regel noen få ganger driftsresultatet. Størrelse, margin og retning på omsetningen avgjør hvor i spennet du havner, og eieravhengighet eller få kunder trekker ned uansett hvor god marginen er.",
      },
      {
        spm: "Teller varelageret i tillegg til prisen?",
        svar: "Kjøper du aksjene, følger lageret med i balansen og er en del av prisen. Ved innmatsalg avtales lageret ofte for seg, etter telling. Uansett bør det verdsettes etter hva som faktisk kan selges.",
      },
      {
        spm: "Hvor finner jeg tallene mine?",
        svar: "Regnskapsregisteret i Brønnøysund har de tre siste innsendte årsregnskapene, og de er offentlige. Verdivurderingen på denne siden henter dem automatisk når du skriver inn organisasjonsnummeret.",
      },
    ],
  },

  {
    slug: "selge-bedrift-uten-megler",
    tittel: "Slik selger du bedriften uten megler",
    metaBeskrivelse:
      "Hva en bedriftsmegler faktisk gjør, hva det koster, og hvordan et salg gjennomføres uten. Med de fire dokumentene du trenger før første samtale.",
    ingress:
      "En megler er ikke nødvendig. Men det megleren gjør, må noen gjøre — og det meste av det kan du gjøre selv.",
    oppdatert: "2026-10-22",
    seksjoner: [
      {
        overskrift: "Hva megleren gjør",
        avsnitt: [
          "Megleren skriver prospektet, finner kjøpere, holder prosessen i gang og står mellom partene når det blir ubehagelig. Honoraret er vanligvis en prosentandel av salgssummen, ofte med et minstehonorar som betyr mest for de minste selskapene.",
          "Den delen som er verdt mest, er sjelden kjøperlisten. Den er at noen holder tempoet oppe, og at du har en å sende de vanskelige spørsmålene til. Det siste kan en advokat eller regnskapsfører også gjøre, til timepris.",
        ],
      },
      {
        overskrift: "Kontroller annonsen mot registeret",
        avsnitt: [
          "Er bedriften din allerede annonsert et sted, sjekk at tallene stemmer med det som er sendt inn til Brønnøysund. Vi har gått gjennom en rekke annonser på norske salgsportaler der omsetning og resultat ikke stemte med registeret — noen fordi annonsen var flere år gammel, noen fordi tallene aldri hadde vært der.",
          "Det er ditt problem, ikke annonsørens. En kjøper som finner avviket selv, trekker ikke bare fra på prisen. Han begynner å lete etter hva mer som ikke stemmer.",
        ],
      },
      {
        overskrift: "De fire dokumentene du trenger",
        avsnitt: [
          "Tre års regnskap med noter, som du uansett har sendt inn. Legg ved en kort forklaring på engangsposter og på hva du selv har tatt ut.",
          "En kundeliste med omsetning per kunde, tre år tilbake. Navnene kan sladdes til det er signert taushetserklæring, men fordelingen må vises. Dette er det kjøperen vil ha først.",
          "Oversikt over avtalene: leverandører, agenturer, leie, leasing og de største kundene — med oppsigelsestid og eventuelle klausuler om eierskifte.",
          "En side om driften. Hvem gjør hva, hva skjer når du ikke er der, og hva som må løses de neste to årene. Skriv det ærlig. Det du skjuler nå, finner kjøperen i gjennomgangen, og da koster det mer enn det ville gjort i dag.",
        ],
      },
      {
        overskrift: "Finn kjøperen der han allerede er",
        avsnitt: [
          "De mest aktuelle kjøperne er sjelden fremmede. Det er en konkurrent som vil inn i ditt område, en leverandør som vil nærmere sluttkunden, en kunde som vil sikre leveransen, eller en ansatt som kan tenke seg å overta. Alle fire finnes i ditt eget telefonregister.",
          "Så finnes det selskaper som kjøper og driver videre, oss selv inkludert. Vi er en av dem, og det er grunnen til at vi har skrevet dette — du skal vite hvilken side av bordet rådene kommer fra.",
        ],
      },
      {
        overskrift: "Ta betalt for tempo",
        avsnitt: [
          "Det som koster mest i et salg uten megler, er ikke honoraret du sparer. Det er månedene som går mens ingen driver prosessen. En kjøper som venter i tre måneder på en kundeliste, mister interessen eller bruker tiden til å finne noe annet.",
          "Sett en enkel plan: hvem får materialet, når skal de svare, og når tar du en beslutning. Et nei i uke to er bedre enn et kanskje i måned fire.",
        ],
      },
    ],
    faq: [
      {
        spm: "Hva koster en bedriftsmegler?",
        svar: "Vanligvis en prosentandel av salgssummen, med et minstehonorar. For små selskaper er det minstehonoraret som avgjør, og det kan bli en stor andel av en liten salgssum. Be om honorarstrukturen skriftlig før du signerer et oppdrag.",
      },
      {
        spm: "Trenger jeg advokat?",
        svar: "Til selve avtalen, ja. Aksjekjøpsavtalen bestemmer hva du garanterer for og hvor lenge, og det er den som avgjør om du sover godt etterpå. Resten av prosessen kan du gjøre selv.",
      },
      {
        spm: "Må jeg fortelle de ansatte?",
        svar: "Ved salg av innmat utløses reglene om virksomhetsoverdragelse, med informasjons- og drøftingsplikt. Ved aksjesalg skifter bare eieren, men i praksis bør nøkkelpersonene vite det før de hører det fra noen andre. Ta det med rådgiveren din i god tid.",
      },
    ],
  },

  {
    slug: "generasjonsskifte-uten-arvinger",
    tittel: "Generasjonsskifte når ingen i familien vil overta",
    metaBeskrivelse:
      "Når barna ikke tar over: alternativene til salg, hva som skjer med bedriften hvis du venter for lenge, og hvordan du gjør den klar for noen andre.",
    ingress:
      "De fleste eiere oppdager det samme omtrent samtidig: bedriften er verdt mest nå, og ingen i familien vil ha den.",
    oppdatert: "2026-10-22",
    seksjoner: [
      {
        overskrift: "Å utsette er også en beslutning",
        avsnitt: [
          "En bedrift som drives av en eier som nærmer seg slutten, blir sjelden mer verdt av å vente. Investeringene utsettes, de yngste ansatte slutter fordi de ikke ser en retning, og kundene merker det før du gjør det.",
          "Det farligste utfallet er ikke at du selger for billig. Det er at du ikke rekker å selge i det hele tatt, og at familien sitter igjen med et selskap de verken kan drive eller avvikle uten tap.",
        ],
      },
      {
        overskrift: "Fire veier ut",
        avsnitt: [
          "Salg til en industriell kjøper. En konkurrent, leverandør eller kunde betaler ofte mest, fordi de får noe mer enn overskuddet — kundene dine, geografien din eller leveransen sin sikret.",
          "Salg til de ansatte. Rimeligere for kjøperen og tryggere for bedriften, men krever finansiering. Ofte løses det med selgerkreditt, altså at du får deler av prisen betalt over tid av overskuddet de skaper.",
          "Salg til et selskap som eier og driver videre. Da blir bedriften stående som den er, med samme navn og samme folk, og du får gjort opp.",
          "Avvikling. Det siste alternativet, og nesten alltid det dyreste: du sitter igjen med lagerverdi og en eiendom, og ingenting for det du faktisk har bygget.",
        ],
      },
      {
        overskrift: "Gjør bedriften uavhengig av deg",
        avsnitt: [
          "Det ene grepet som hever prisen mest, er også det som tar lengst tid: at driften går uten deg. Finn eller ansett en som styrer dagen, flytt kunderelasjonene over på flere personer, og skriv ned det som bare finnes i hodet ditt.",
          "To år er realistisk. Ett år er mulig. Null år betyr at kjøperen priser inn at han må erstatte deg, og at en del av oppgjøret blir gjort avhengig av at du blir værende en stund.",
        ],
      },
      {
        overskrift: "Skatt og familie",
        avsnitt: [
          "Arveavgiften ble fjernet i Norge i 2014. En overføring til neste generasjon utløser derfor ikke avgift, men den utløser heller ikke et oppjustert inngangsverdigrunnlag — mottakeren overtar som hovedregel dine skattemessige verdier. Skal noen i familien først overta og så selge videre, er det et poeng som er verdt å regne på med en rådgiver først.",
          "Og det vanskeligste er sjelden skatten. Det er samtalen om at ingen av barna vil ha den. Ta den før du begynner å lete etter kjøper, ikke etter at et bud ligger på bordet.",
        ],
      },
    ],
    faq: [
      {
        spm: "Hvor lang tid bør jeg regne med?",
        svar: "Et salg tar typisk et halvt år fra første samtale til oppgjør. Å gjøre bedriften uavhengig av eieren først tar ett til to år, og det er den delen som betaler seg best.",
      },
      {
        spm: "Er det arveavgift ved generasjonsskifte?",
        svar: "Nei, arveavgiften ble avviklet i 2014. Men mottakeren overtar som hovedregel de skattemessige verdiene dine, noe som har betydning hvis bedriften senere skal selges videre. Sjekk med regnskapsfører eller advokat for din situasjon.",
      },
      {
        spm: "Kan jeg selge og fortsette å jobbe der?",
        svar: "Ofte er det ønsket. En kjøper vil gjerne ha deg i tolv måneder for overlevering, og mange eiere blir lenger enn det fordi de liker jobben når ansvaret er borte.",
      },
    ],
  },

  {
    slug: "hva-kjoperen-leser-i-regnskapet",
    tittel: "Hva kjøperen leser i regnskapet ditt",
    metaBeskrivelse:
      "Hvilke linjer en kjøper ser på først i et norsk årsregnskap, hva de avslører, og hvilke spørsmål du bør ha svar på før noen stiller dem.",
    ingress:
      "Regnskapet ditt er offentlig. Før noen ringer deg, har de lest tre år av det — og de leter etter noe annet enn det du tror.",
    oppdatert: "2026-10-22",
    seksjoner: [
      {
        overskrift: "Marginen over tre år",
        avsnitt: [
          "Det første er ikke størrelsen, men stabiliteten. En margin som ligger jevnt tre år på rad forteller at du har priset riktig og klarer å sende kostnadsøkninger videre. En som svinger kraftig, betyr enten et svakt marked eller at noe ble gjort annerledes ett av årene — og da blir det et spørsmål.",
        ],
      },
      {
        overskrift: "Lønn delt på antall ansatte",
        avsnitt: [
          "Lønnskostnaden delt på antall ansatte sier om eieren tar ut vanlig lønn. Ligger snittet langt under det bransjen betaler, er en del av overskuddet egentlig ubetalt arbeid, og det forsvinner den dagen eieren slutter.",
          "Det går også motsatt vei. Tar du ut mye mer enn en ansatt daglig leder ville kostet, er det reelle overskuddet høyere enn linjen viser — og det er en justering i din favør, så lenge du kan forklare den.",
        ],
      },
      {
        overskrift: "Lageret mot varekostnaden",
        avsnitt: [
          "Varelager delt på varekostnad gir hvor mange dagers forbruk som står i hyllene. Vokser lageret raskere enn omsetningen, er det ett av to: enten fylles det opp for vekst som kommer, eller så samler det støv.",
          "Dette er ofte den største enkeltposten i balansen til en grossist eller forhandler, og den eneste som kan være verdt vesentlig mindre enn det som står i bøkene. Regn med at en kjøper vil ha telling og aldersfordeling.",
        ],
      },
      {
        overskrift: "Kundefordringer og leverandørgjeld",
        avsnitt: [
          "Fordringer som vokser raskere enn omsetningen betyr at kundene betaler seinere — eller at noen ikke betaler i det hele tatt. Begge deler er penger som er bokført som inntekt og ikke er kommet inn.",
          "Leverandørgjelden leses motsatt vei. Lang kreditt er gode betingelser, og gode betingelser er ofte personlige: de følger deg, ikke selskapet. En kjøper regner derfor med at kreditten kan bli strammet inn etter eierskiftet, og at han må ha arbeidskapital klar.",
        ],
      },
      {
        overskrift: "Revisjonsberetningen",
        avsnitt: [
          "Den tar tjue sekunder å lese og er det første en erfaren kjøper slår opp. En ren beretning uten forbehold eller presiseringer er et godt tegn. En presisering om fortsatt drift er et stoppskilt.",
          "Er selskapet for lite til å ha revisor, gjelder det samme for regnskapsførerens arbeid — og da blir kvaliteten på bilagene et tema i gjennomgangen i stedet.",
        ],
      },
    ],
    faq: [
      {
        spm: "Kan hvem som helst se regnskapet mitt?",
        svar: "Ja. Årsregnskap for aksjeselskaper er offentlige, og de tre siste årene ligger strukturert og gratis tilgjengelig fra Brønnøysundregistrene. Den som vurderer å kjøpe, har lest dem før første samtale.",
      },
      {
        spm: "Hvor mange år ser en kjøper på?",
        svar: "Tre, fordi det er det som ligger åpent. Blir det alvor, ber han om fem, sammen med hovedbok og kontospesifikasjoner.",
      },
      {
        spm: "Hva om fjoråret var dårlig?",
        svar: "Da forklarer du hvorfor, med tall. Et svakt år med en forklaring som stemmer med bransjen koster lite. Et svakt år uten forklaring prises som en begynnende trend.",
      },
    ],
  },

  {
    slug: "aksjesalg-eller-innmatsalg",
    tittel: "Aksjesalg eller innmatsalg — hva lønner seg for deg",
    metaBeskrivelse:
      "Forskjellen på å selge aksjene og å selge virksomheten, hvorfor selger og kjøper vil hver sin vei, og hva det betyr for skatten.",
    ingress:
      "De to måtene å selge på gir ofte samme bedrift til ny eier, men svært ulikt oppgjør etter skatt. Dette er den vanligste dragkampen i en salgsprosess.",
    oppdatert: "2026-10-22",
    seksjoner: [
      {
        overskrift: "Aksjesalg: alt følger med",
        avsnitt: [
          "Selger du aksjene, skifter selskapet eier og alt annet står stille. Avtaler, ansatte, kundeforhold, konsesjoner og organisasjonsnummer fortsetter som før. Det er enklest å gjennomføre, og minst merkbart for kundene.",
          "Baksiden for kjøperen er at historien følger med. Et skattekrav, en gammel reklamasjon eller en arbeidsrettssak fra før overtakelsen havner i hans fang. Derfor krever kjøperen garantier i avtalen, og ofte at en del av oppgjøret holdes tilbake en stund.",
        ],
      },
      {
        overskrift: "Innmatsalg: kjøperen plukker",
        avsnitt: [
          "Ved innmatsalg kjøper han eiendelene og virksomheten, men lar selskapet stå igjen hos deg med historien sin. Han velger hva han vil ha, og får et nytt avskrivningsgrunnlag på det han betaler for.",
          "For deg betyr det at gevinsten oppstår inne i selskapet ditt, og at pengene må ut derfra etterpå. Og overdragelsen utløser reglene om virksomhetsoverdragelse for de ansatte, med informasjons- og drøftingsplikt.",
        ],
      },
      {
        overskrift: "Skatten, i hovedtrekk",
        avsnitt: [
          "Eier du aksjene gjennom et holdingselskap, er gevinst ved aksjesalg som hovedregel fritatt for skatt etter fritaksmetoden. Pengene kan da bli stående i holdingselskapet og brukes videre, og skatten kommer først når du tar dem ut privat.",
          "Eier du aksjene privat, skattlegges gevinsten som aksjeinntekt. Satsen var 37,84 prosent i 2026, etter fradrag for skjerming. Kontroller gjeldende sats før du regner på det — den er endret flere ganger.",
          "Ved innmatsalg beskattes gevinsten i selskapet med selskapsskatt, 22 prosent i 2026, og så kommer skatt på utbytte når du tar pengene ut. Det er grunnen til at selger som regel vil selge aksjer, mens kjøper vil kjøpe innmat.",
          "Dette er hovedreglene, ikke et skatteråd. Rekkefølgen på disposisjonene betyr mye, og det er billigere å spørre en rådgiver et år før salget enn uken etter.",
        ],
      },
      {
        overskrift: "Hvordan uenigheten løses",
        avsnitt: [
          "I praksis ender de fleste små salg som aksjesalg, fordi det er enklere og fordi avtaler og konsesjoner ellers må flyttes én for én. Kjøperen kompenseres i stedet med garantier, tilbakehold og noen ganger en lavere pris.",
          "Er du i tvil, regn på begge. Forskjellen etter skatt kan være større enn det du ville oppnådd ved å forhandle prisen opp, og den er lettere å påvirke.",
        ],
      },
    ],
    faq: [
      {
        spm: "Hva er forskjellen på aksjesalg og innmatsalg?",
        svar: "Ved aksjesalg selger du selskapet med alt det inneholder, inkludert historien. Ved innmatsalg selger selskapet ditt eiendelene og virksomheten, og selskapet blir igjen hos deg.",
      },
      {
        spm: "Hvorfor vil kjøperen ha innmat?",
        svar: "Han slipper å overta ukjent historikk, og han får et nytt avskrivningsgrunnlag på det han betaler. Det gir ham en skattefordel som du betaler for.",
      },
      {
        spm: "Bør jeg legge aksjene i et holdingselskap før salget?",
        svar: "Det er en vanlig tilpasning, men den må gjøres i god tid og etter råd. Gjøres den rett før et salg som allerede er avtalt, kan den bli satt til side. Snakk med en rådgiver tidlig.",
      },
    ],
  },

  {
    slug: "slik-gaar-et-bedriftssalg",
    tittel: "Fra første samtale til oppgjør: slik går et bedriftssalg",
    metaBeskrivelse:
      "Rekkefølgen i et norsk bedriftssalg: taushetserklæring, indikativt bud, gjennomgang, avtale og oppgjør — og hvor prosessene vanligvis stopper opp.",
    ingress:
      "Et salg har en fast rekkefølge. Kjenner du den, vet du både hva som kommer og når du har forhandlingskortene.",
    oppdatert: "2026-10-22",
    seksjoner: [
      {
        overskrift: "Første samtale og taushetserklæring",
        avsnitt: [
          "Den første samtalen handler om du og kjøperen i det hele tatt vil det samme. Før tall og kundelister skifter hender, signeres en taushetserklæring. Den er kort, den er standard, og den bør være på plass før du sender noe som helst.",
        ],
      },
      {
        overskrift: "Materialet ut, indikativt bud inn",
        avsnitt: [
          "Deretter får kjøperen regnskap, kundefordeling og en oversikt over avtalene. Ut fra det kommer et indikativt bud: en pris med forbehold om at tallene stemmer.",
          "Her ligger forhandlingskortet ditt. Etter gjennomgangen har kjøperen funnet ting som trekker ned, og da forhandles det nedover. Jo bedre materialet er i denne fasen, jo færre overraskelser er det å trekke fra for senere.",
        ],
      },
      {
        overskrift: "Gjennomgangen",
        avsnitt: [
          "Kjøperen går gjennom regnskap, avtaler, ansatte, forsikringer og tvister. For en liten bedrift tar det noen uker, ikke måneder — hvis materialet er klart.",
          "Dette er fasen der de fleste salg stopper opp, og nesten alltid av samme grunn: noe som ikke var nevnt, dukker opp. En kunde som har varslet at de slutter, en avtale med eierskifteklausul, et lager som ikke lar seg selge. Si det selv, tidlig. Prisen tåler det. Tilliten tåler det ikke å komme fram senere.",
        ],
      },
      {
        overskrift: "Avtalen",
        avsnitt: [
          "Aksjekjøpsavtalen regulerer pris, oppgjør, hva du garanterer for, og hvor lenge garantiene står. Den inneholder gjerne et tilbakehold eller en betaling som avhenger av resultatet et par år fram, og en konkurranseklausul som hindrer deg i å starte opp igjen ved siden av.",
          "Les garantikapittelet nøye, og ha en advokat på det. Det er her du bestemmer hvor mye av risikoen du beholder etter at pengene er på konto.",
        ],
      },
      {
        overskrift: "Oppgjør og overlevering",
        avsnitt: [
          "På overtakelsesdagen betales oppgjøret, aksjeeierboken oppdateres og endringen meldes. Så begynner den delen som avgjør om kjøperen blir fornøyd: overleveringen.",
          "Regn med å være tilgjengelig i tolv måneder. Det er ofte avtalt, det er alltid forventet, og det er dessuten den perioden eventuelle resultatavhengige deler av oppgjøret måles i.",
        ],
      },
    ],
    faq: [
      {
        spm: "Hvor lang tid tar et bedriftssalg?",
        svar: "For en liten bedrift er tre til seks måneder fra første samtale til oppgjør vanlig når materialet er klart. Er det ikke klart, blir det ni.",
      },
      {
        spm: "Hva er et indikativt bud?",
        svar: "Et bud med forbehold om at gjennomgangen bekrefter tallene. Det er ikke bindende, men det setter rammen for forhandlingen — og det er lettere å forsvare en pris enn å forhandle den opp igjen etterpå.",
      },
      {
        spm: "Må jeg bli værende etter salget?",
        svar: "Som regel i en overgangsperiode på rundt tolv måneder. Det avtales, og det er ofte knyttet til den delen av oppgjøret som avhenger av resultatet.",
      },
    ],
  },
];

export const finnGuide = (slug: string): Guide | undefined => guider.find((g) => g.slug === slug);
