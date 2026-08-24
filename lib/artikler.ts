// Innholdet i bloggen. Artiklene skrives som strukturerte blokker i stedet for
// markdown, slik at hver blokktype kan styles nøyaktig som resten av siden.
export type Blokk =
  | { type: "avsnitt"; tekst: string }
  | { type: "mellomtittel"; tekst: string }
  | { type: "punktliste"; punkter: string[] }
  | { type: "faktaboks"; tittel: string; tekst: string };

export type Artikkel = {
  slug: string;
  tittel: string;
  ingress: string;
  // Kort beskrivelse for søkeresultater og deling
  metaBeskrivelse: string;
  publisert: string; // ISO-dato
  lesetid: number; // minutter
  kategori: string;
  innhold: Blokk[];
};

export const artikler: Artikkel[] = [
  {
    slug: "hva-koster-det-a-lage-en-app",
    tittel: "Hva koster det å lage en app i Norge?",
    ingress:
      "Det ærlige svaret er «det kommer an på» — men det er et ubrukelig svar. Her er hva prisen faktisk består av, og hva som avgjør om du havner i nedre eller øvre ende.",
    metaBeskrivelse:
      "Hva koster det å utvikle en app i Norge? Vi går gjennom hva prisen består av, hva som driver den opp, og hvordan du får mest ut av budsjettet.",
    publisert: "2026-08-24",
    lesetid: 7,
    kategori: "Apputvikling",
    innhold: [
      {
        type: "avsnitt",
        tekst:
          "Spør du tre utviklingshus om hva appen din koster, får du tre vidt forskjellige tall — og alle tre kan være riktige. Det er ikke fordi noen prøver å lure deg. Det er fordi «en app» kan bety alt fra et skjema med en database bak, til et system som håndterer kart, sanntidsdata og offline-drift på en telefon uten dekning.",
      },
      {
        type: "avsnitt",
        tekst:
          "Vi har bygget begge deler. Her er hva vi har lært om hvor pengene faktisk går, slik at du kan stille bedre spørsmål — også til oss.",
      },
      { type: "mellomtittel", tekst: "Prisen er timer, ikke lisenser" },
      {
        type: "avsnitt",
        tekst:
          "Nesten hele kostnaden ved å lage en app er mennesketimer. Selve teknologien er i praksis gratis: rammeverkene er åpen kildekode, og driften av en app med noen tusen brukere koster typisk mindre i måneden enn et middagsbesøk. Det du betaler for, er tiden det tar å bestemme hva appen skal gjøre, bygge det, teste det, og fikse det som ikke virker.",
      },
      {
        type: "avsnitt",
        tekst:
          "Det betyr at det viktigste kostnadsspørsmålet ikke er «hvilken teknologi», men «hvor mye skal den gjøre». Hver funksjon du legger til koster ikke bare tiden det tar å bygge den — den koster også tid i testing, i vedlikehold, og i alle de fremtidige funksjonene som må ta hensyn til den.",
      },
      { type: "mellomtittel", tekst: "De fire tingene som driver prisen" },
      {
        type: "avsnitt",
        tekst:
          "Erfaringsmessig er det fire faktorer som avgjør om et prosjekt lander lavt eller høyt. De henger sammen, men de er verdt å vurdere hver for seg.",
      },
      {
        type: "punktliste",
        punkter: [
          "Antall plattformer. En app kun for iPhone er vesentlig rimeligere enn iPhone og Android samtidig. Skal den også finnes i nettleseren, er det en tredje jobb. Det er ofte klokt å starte med én plattform, lære av ekte brukere, og utvide etterpå.",
          "Hvor data kommer fra. Bruker appen bare sine egne data, er det enkelt. Skal den hente fra eksterne kilder — kartverk, værtjenester, regnskapssystemer, betalingsløsninger — må hver kilde tolkes, feilhåndteres og holdes i live når kilden endrer seg.",
          "Om den må virke uten nett. Offline-støtte er den enkeltfunksjonen som oftest undervurderes. Det betyr at data må lagres lokalt, synkroniseres når nettet er tilbake, og håndtere at to enheter har endret det samme mens de var frakoblet.",
          "Om andre skal logge inn. Så snart flere brukere og bedrifter deler samme system, må du håndtere roller, tilganger og at ingen ser andres data. Det er sikkerhetsarbeid som ikke synes i grensesnittet, men som er helt avgjørende.",
        ],
      },
      {
        type: "faktaboks",
        tittel: "Et konkret eksempel",
        tekst:
          "Oystr, sjøkart-appen vår, treffer tre av de fire punktene: eksterne datakilder fra Kartverket, Kystverket og Meteorologisk institutt, full offline-funksjonalitet, og ruteberegning som må ta hensyn til land og grunner. Det er derfor den tok lengre tid enn en app som «bare» viser innhold fra en database.",
      },
      { type: "mellomtittel", tekst: "Hva du får for pengene i hver ende" },
      {
        type: "avsnitt",
        tekst:
          "Grovt sagt finnes det tre nivåer. I den nedre enden ligger en fokusert app som gjør én ting godt: den henter data fra ett sted, viser det pent, og lar brukeren gjøre noen få handlinger. Den kan bygges på uker, ikke måneder, og er ofte den riktige måten å teste om ideen din holder.",
      },
      {
        type: "avsnitt",
        tekst:
          "I midten ligger de fleste reelle produkter: innlogging, flere brukertyper, data som skal synkroniseres, betaling, og et grensesnitt som tåler at folk bruker det hver dag. Her snakker vi måneder med utvikling.",
      },
      {
        type: "avsnitt",
        tekst:
          "I den øvre enden ligger systemer som Oystr — der selve kjernen i produktet er teknisk krevende, og der feil har konsekvenser ute i den virkelige verden. Slike prosjekter måles i kvartaler, og de blir aldri helt ferdige, fordi datakildene og plattformene under dem er i konstant bevegelse.",
      },
      { type: "mellomtittel", tekst: "Kostnaden folk glemmer: drift" },
      {
        type: "avsnitt",
        tekst:
          "Den vanligste feilen vi ser, er at hele budsjettet går til å bygge appen, og ingenting settes av til å ha den. En app er ikke et bilde du henger på veggen. Apple slipper ny iOS hvert år, datakilder endrer format, sikkerhetshull dukker opp i biblioteker du bruker, og brukerne dine finner ting du ikke tenkte på.",
      },
      {
        type: "avsnitt",
        tekst:
          "Regn med at drift og videreutvikling koster en betydelig andel av den opprinnelige utviklingen, hvert år. Det høres dyrt ut helt til du sammenligner det med alternativet: en app som gradvis slutter å virke, og som til slutt må bygges på nytt fra bunnen.",
      },
      { type: "mellomtittel", tekst: "Slik får du mest for budsjettet" },
      {
        type: "punktliste",
        punkter: [
          "Start smalt. Finn den ene tingen appen absolutt må gjøre, bygg den skikkelig, og la resten vente til ekte brukere har fortalt deg hva de savner.",
          "Vær tydelig på hvem den er for. En app for alle blir en app for ingen — og den blir dyr, fordi hver ny brukergruppe drar med seg nye krav.",
          "Velg ett team som eier hele løpet. Splittes design, utvikling og drift på flere leverandører, går mye tid til koordinering i stedet for produkt.",
          "Be om å se noe tidlig. Fungerende programvare etter noen uker sier mer enn en kravspesifikasjon på femti sider.",
        ],
      },
      { type: "mellomtittel", tekst: "Hva vi gjør annerledes" },
      {
        type: "avsnitt",
        tekst:
          "Vi bygger våre egne produkter. Det betyr at vi drifter det vi lager, i årevis, og lever med hver eneste snarvei vi tar. Det gjør noe med hvordan vi bygger for andre også: vi velger kjedelig og holdbart fremfor imponerende og skjørt, fordi vi vet hvem som får telefonen når noe knekker.",
      },
      {
        type: "avsnitt",
        tekst:
          "Lurer du på hva ideen din realistisk koster, er det bare å ta kontakt. Vi svarer ærlig — også når svaret er at du bør bygge noe mindre enn du hadde tenkt.",
      },
    ],
  },
  {
    slug: "sjokart-som-virker-uten-dekning",
    tittel: "Slik bygde vi sjøkart som virker uten dekning",
    ingress:
      "Ute på fjorden forsvinner mobilnettet. Det er akkurat da du trenger kartet mest. Her er hvordan Oystr er bygget for å virke der dekningen svikter.",
    metaBeskrivelse:
      "Hvordan vi bygde offline sjøkart for norskekysten i Oystr — kartdata fra Kartverket, sjøveisruting rundt grunner, og en app som virker uten mobilnett.",
    publisert: "2026-08-24",
    lesetid: 8,
    kategori: "Kart & data",
    innhold: [
      {
        type: "avsnitt",
        tekst:
          "De fleste kart-apper har en stilltiende forutsetning: at du har nett. De laster kartfliser fra en server mens du beveger deg, og fungerer utmerket i byen. Ute på sjøen faller den forutsetningen fra hverandre — og den faller fra hverandre nøyaktig der konsekvensen av å miste kartet er størst.",
      },
      {
        type: "avsnitt",
        tekst:
          "Da vi begynte på Oystr, var det derfor det første designvalget vi tok: appen skal virke like godt uten nett som med. Alt annet er bygget rundt den beslutningen.",
      },
      { type: "mellomtittel", tekst: "Offline er ikke en funksjon, det er en arkitektur" },
      {
        type: "avsnitt",
        tekst:
          "Det er fristende å tenke på offline-støtte som noe man legger til etterpå — en hurtigbuffer på toppen av en app som ellers henter alt fra nettet. Det fungerer sjelden. Du ender med to forskjellige måter appen kan oppføre seg på, og all logikk må hele tiden ta hensyn til hvilken av dem som gjelder akkurat nå.",
      },
      {
        type: "avsnitt",
        tekst:
          "Vi snudde det på hodet. I Oystr er den lokale kopien av dataene sannheten. Appen leser alltid fra det som ligger på telefonen, og nettet brukes utelukkende til å oppdatere den kopien når det er tilgjengelig. Dermed finnes det ikke en «offline-modus» som kan slås av og på — det er bare én modus, og den virker alltid.",
      },
      {
        type: "faktaboks",
        tittel: "Konsekvensen for brukeren",
        tekst:
          "Du merker ikke når dekningen forsvinner. Kartet panorerer like fort, ruten ligger der, og dybdetallene vises som før. Det eneste som slutter å oppdatere seg er ting som faktisk krever nett — som AIS-posisjoner for andre båter.",
      },
      { type: "mellomtittel", tekst: "Kartdataene: fra offentlig kilde til telefonen" },
      {
        type: "avsnitt",
        tekst:
          "Sjøkartene i Oystr bygger på data fra Kartverket og Kystverket, og værdataene kommer fra Meteorologisk institutt. Dette er offentlige data av høy kvalitet — men de er laget for fagfolk og systemer, ikke for en telefonskjerm i sollys mens båten beveger seg.",
      },
      {
        type: "avsnitt",
        tekst:
          "Jobben ligger i oversettelsen. Rådataene beskriver dybdekoter, grunner, staker, lykter, sektorer og fartsgrenser med en presisjon og et detaljnivå som ville gjort kartet uleselig hvis vi viste alt samtidig. Så vi måtte bestemme hva som skal vises når: hvilke dybdetall som er relevante på hvilket zoomnivå, når en grunne skal skrike etter oppmerksomhet, og når den bare skal ligge der.",
      },
      {
        type: "avsnitt",
        tekst:
          "Det er den slags avgjørelser som ikke kan tas i en kravspesifikasjon. De må tas ute i båt, i ekte lys, med ekte fart, og justeres til kartet føles riktig.",
      },
      { type: "mellomtittel", tekst: "Ruting som forstår at land er i veien" },
      {
        type: "avsnitt",
        tekst:
          "Å beregne en rute på veien er et velkjent problem: veiene danner et nettverk, og du finner korteste vei gjennom nettverket. På sjøen finnes det ikke noe nettverk. Det finnes bare vann — og alt som ikke er vann, må du unngå.",
      },
      {
        type: "avsnitt",
        tekst:
          "Sjøveisruting i Oystr handler derfor om å finne en farbar linje gjennom et landskap av holmer, skjær og grunner, med en dybde båten din faktisk tåler. Det er beregninger som må gjøres på telefonen, uten server å spørre, og raskt nok til at det føles umiddelbart mens du står med rattet i den ene hånden.",
      },
      {
        type: "avsnitt",
        tekst:
          "Det var her mesteparten av den vanskelige ingeniørkunsten lå. Ikke i grensesnittet, ikke i designet — i å få en telefon til å svare på «hvordan kommer jeg trygt dit» før brukeren rekker å bli utålmodig.",
      },
      { type: "mellomtittel", tekst: "Hvorfor native, og ikke nettside" },
      {
        type: "avsnitt",
        tekst:
          "Vi bygger gjerne i nettleseren når det er riktig — CRM-systemet vårt, Altiv, er en ren webapplikasjon. Men for Oystr var native iOS det eneste fornuftige valget, av tre grunner.",
      },
      {
        type: "punktliste",
        punkter: [
          "Kartet må tegnes hundrevis av ganger i sekundet mens du panorerer. Native gir oss direkte tilgang til grafikkmaskinvaren i telefonen.",
          "Offline-lagring av store kartmengder er noe operativsystemet håndterer langt bedre enn nettleseren, som har strengere begrensninger og kan slette data den mener er gammel.",
          "Posisjon og strømforbruk henger sammen. En navigasjonsapp som tømmer batteriet på to timer er ubrukelig, og finkontroll på hvor ofte vi spør om posisjon krever native.",
        ],
      },
      { type: "mellomtittel", tekst: "Det vi tar med oss videre" },
      {
        type: "avsnitt",
        tekst:
          "Den viktigste lærdommen fra Oystr er at de vanskelige valgene tas tidlig, og at de handler om hva produktet skal tåle — ikke om hvilke funksjoner det skal ha. Beslutningen om at appen alltid skal virke uten nett kostet mer i starten, og har spart oss for uendelig mye siden.",
      },
      {
        type: "avsnitt",
        tekst:
          "Bygger du noe som skal virke ute i felt — på sjøen, i fjellet, på en byggeplass uten dekning — er det gjerne den samme øvelsen som venter. Ta gjerne kontakt, så deler vi erfaringene.",
      },
    ],
  },
  {
    slug: "fra-ide-til-lansert-crm",
    tittel: "Fra idé til lansert CRM: slik bygde vi Altiv",
    ingress:
      "De fleste CRM-systemer er laget for store organisasjoner og tilpasset ned. Vi gjorde det motsatte. Her er valgene bak Altiv — og hva vi ville gjort annerledes.",
    metaBeskrivelse:
      "Historien bak Altiv, vårt norske CRM for salgsoppfølging i B2B: hvorfor vi bygde det, hvilke tekniske valg vi tok, og hva vi lærte underveis.",
    publisert: "2026-08-24",
    lesetid: 7,
    kategori: "Web & SaaS",
    innhold: [
      {
        type: "avsnitt",
        tekst:
          "Det finnes allerede mange CRM-systemer. Noen av dem er svært gode. Så hvorfor bygge et til?",
      },
      {
        type: "avsnitt",
        tekst:
          "Svaret handler mindre om funksjoner enn om utgangspunkt. De store systemene er bygget for organisasjoner med egne CRM-ansvarlige, implementeringsprosjekter og opplæringsbudsjett. Når en bedrift med femten selgere tar dem i bruk, skrur de av nitti prosent og sitter igjen med noe som er dyrere og mer tungvint enn regnearket de kom fra.",
      },
      {
        type: "avsnitt",
        tekst:
          "Altiv startet med et enklere spørsmål: hva om systemet var klart på minutter, og gjorde de få tingene et salgsteam faktisk trenger, uten at noen måtte lære det bort?",
      },
      { type: "mellomtittel", tekst: "Vi bestemte oss for hva det ikke skulle være" },
      {
        type: "avsnitt",
        tekst:
          "Den mest verdifulle øvelsen tidlig var å skrive ned hva vi ikke skulle bygge. Ikke markedsføringsautomatisering. Ikke kundeservice-moduler. Ikke et rapportverktøy man må ta kurs i. Ikke tilpasningsmuligheter som gjør at to bedrifter ender med to helt forskjellige systemer.",
      },
      {
        type: "avsnitt",
        tekst:
          "Det som ble igjen var kjernen: hvem har vi kontaktet, hvor langt er vi kommet, hva er neste steg, og hva tjener vi. Fire spørsmål. Alt i Altiv finnes fordi det svarer på ett av dem.",
      },
      {
        type: "faktaboks",
        tittel: "Prinsippet bak",
        tekst:
          "Hver funksjon du legger til gjør produktet litt vanskeligere å forstå for alle som ikke trenger den. I et system som skal være i bruk fra første dag, er det en kostnad som fort blir større enn gevinsten.",
      },
      { type: "mellomtittel", tekst: "Sikkerhet i databasen, ikke i koden" },
      {
        type: "avsnitt",
        tekst:
          "Når flere bedrifter deler samme system, er det ett krav som betyr mer enn alle andre: ingen skal noen gang se andres data. Den vanlige måten å løse det på er å filtrere i applikasjonskoden — hver spørring får et tillegg om at den bare gjelder din bedrift.",
      },
      {
        type: "avsnitt",
        tekst:
          "Problemet er at det holder å glemme det én gang. Ett endepunkt uten filteret, og data lekker mellom kunder. Vi la derfor reglene i selve databasen, med Row Level Security i PostgreSQL. Da er det databasen som nekter, ikke koden som husker — og en glemt sjekk i applikasjonen fører til at spørringen returnerer ingenting, ikke at den returnerer noe den ikke skulle.",
      },
      {
        type: "avsnitt",
        tekst:
          "Det er tregere å komme i gang med, og det er verdt hver time. Sikkerhetsmodellen er ikke noe man reparerer i etterkant.",
      },
      { type: "mellomtittel", tekst: "Kjedelig teknologi, med vilje" },
      {
        type: "avsnitt",
        tekst:
          "Stacken bak Altiv er bevisst udramatisk: Next.js og React i grensesnittet, TypeScript gjennom hele, PostgreSQL via Supabase, Stripe til abonnement, Resend til e-post, og Vercel til drift.",
      },
      {
        type: "avsnitt",
        tekst:
          "Ingen av valgene er spennende, og det er poenget. Vi skal drifte dette i mange år. Da er det viktigere at teknologien har god dokumentasjon, mange som kan den, og en tydelig oppgraderingsvei, enn at den er ny og elegant. Den mest undervurderte egenskapen ved et rammeverk er hvor lett det er å forstå koden din to år etter at du skrev den.",
      },
      { type: "mellomtittel", tekst: "Det å lansere er ikke å bli ferdig" },
      {
        type: "avsnitt",
        tekst:
          "Vi trodde, som alle gjør, at lansering var målstreken. Den er startstreken. Første gang ekte selgere brukte Altiv en hel arbeidsdag, lærte vi mer på åtte timer enn på ukene før — ikke om feil, men om hva folk faktisk gjør. Hvor de klikker først. Hva de leter etter og ikke finner. Hvilke felt de fyller ut og hvilke de hopper over.",
      },
      {
        type: "avsnitt",
        tekst:
          "Det er derfor vi bygger ting som er små nok til å endres. Er du sikker på at du har rett, bygger du stort. Vet du at du kommer til å lære noe, bygger du noe du tør å kaste.",
      },
      { type: "mellomtittel", tekst: "Hva vi ville gjort annerledes" },
      {
        type: "punktliste",
        punkter: [
          "Sluppet noen inn tidligere. Vi brukte for lang tid på å polere før noen utenfor fikk se det. Tilbakemeldingene vi ventet på, hadde vi kunnet få uker før.",
          "Tatt betalingsløsningen først. Vi utsatte Stripe fordi det ikke føltes som produktarbeid. Det viste seg å påvirke hvordan hele kontostrukturen måtte se ut.",
          "Skrevet ned avgjørelsene. Ikke dokumentasjon av koden, men av hvorfor vi valgte som vi gjorde. Et halvår senere husker ingen begrunnelsen, bare resultatet.",
        ],
      },
      {
        type: "avsnitt",
        tekst:
          "Vurderer du å bygge et system for din egen bransje, er du velkommen til å ta kontakt. Vi deler gjerne det vi lærte — også de delene som var dyre.",
      },
    ],
  },
  {
    slug: "apne-offentlige-data-i-norge",
    tittel: "Åpne offentlige data i Norge: hva finnes, og hva kan du bygge med det",
    ingress:
      "Kartverket, Kystverket og Meteorologisk institutt gir fra seg data det har tatt tiår å samle inn. Her er hva som ligger der — og hva jobben faktisk består i når du skal gjøre det om til et produkt.",
    metaBeskrivelse:
      "Kartverket, Kystverket og MET gir fri tilgang til kart-, sjø- og værdata. Vi går gjennom hva som finnes, hvordan lisensene fungerer, og hva arbeidet består i.",
    publisert: "2026-08-24",
    lesetid: 6,
    kategori: "Kart & data",
    innhold: [
      {
        type: "avsnitt",
        tekst:
          "Norge har en av verdens mest åpne datapolitikker, og forbløffende få vet det. Sjøkartene som dekker hele kysten, høydemodellen som beskriver hvert fjell, værvarslene som oppdateres time for time — alt sammen er samlet inn for offentlige midler gjennom flere tiår, og alt sammen kan du bruke gratis. Også i et produkt du tar betalt for.",
      },
      {
        type: "avsnitt",
        tekst:
          "Det høres ut som halve jobben er gjort. Da vi bygde Oystr, viste dataene seg å være det enkleste å skaffe og det vanskeligste å bruke.",
      },
      { type: "mellomtittel", tekst: "Hva som faktisk ligger der" },
      {
        type: "avsnitt",
        tekst:
          "For alt som har med kyst og natur å gjøre, er det i praksis tre kilder som betyr noe. De overlapper på kantene, men de løser hver sin oppgave.",
      },
      {
        type: "punktliste",
        punkter: [
          "Kartverket forvalter det nasjonale kartgrunnlaget — landkart, sjøkart, dybdedata og høydemodeller. Dette er stammen i ethvert kartprodukt, og detaljnivået er langt høyere enn det de fleste kommersielle karttjenestene tilbyr for norske forhold.",
          "Kystverket dekker det som gjør sjøen farbar: navigasjonsinstallasjoner som lykter og staker, farleder, og AIS-data om skipstrafikk. Det er dette laget som skiller et sjøkart fra et bilde av havbunnen.",
          "Meteorologisk institutt tilbyr værvarsler gjennom et åpent grensesnitt som er blant de bedre offentlige API-ene som finnes — velbygget, godt dokumentert og gratis, mot at du identifiserer deg og oppfører deg pent med forespørslene.",
        ],
      },
      { type: "mellomtittel", tekst: "Gratis er den billigste delen" },
      {
        type: "avsnitt",
        tekst:
          "Dataene koster ingenting. Å gjøre dem brukbare koster alt. Offentlige datasett er laget for fagmiljøer og systemer, ikke for en telefonskjerm som holdes i sollys mens båten beveger seg — og oversettelsen mellom de to verdenene er hele arbeidet.",
      },
      {
        type: "avsnitt",
        tekst:
          "Formatene er det første møtet. Kartdata kommer i standarder som er bygget for presisjon og fullstendighet, ikke for at en app skal kunne lese dem raskt. De må konverteres, forenkles og pakkes om til noe en telefon kan tegne mange ganger i sekundet. Den jobben gjøres én gang per datakilde, og så må den gjøres igjen hver gang kilden endrer seg.",
      },
      {
        type: "avsnitt",
        tekst:
          "Så kommer den redaksjonelle jobben, som er den undervurderte. Rådataene inneholder alt: hver dybdekote, hver stake, hver sektorgrense. Viser du alt samtidig, får du et uleselig rot. Noen må bestemme hva som er relevant på hvilket zoomnivå, hva som skal rope etter oppmerksomhet og hva som bare skal ligge der. Det er ikke en teknisk avgjørelse, og den kan ikke tas foran en skjerm — den må tas ute i båt.",
      },
      { type: "mellomtittel", tekst: "Et API er ikke nok når appen skal virke uten nett" },
      {
        type: "avsnitt",
        tekst:
          "Her er en konsekvens som overrasker mange: har du bestemt at produktet skal virke uten dekning, kan du ikke bare hente data fra en tjeneste når du trenger dem. Alt må pakkes og sendes med enheten på forhånd.",
      },
      {
        type: "avsnitt",
        tekst:
          "Det gjør datamengden til et designproblem i seg selv. Hvor mye av kysten skal ligge klart? Hvor detaljert? Hvor ofte skal det oppdateres, og hva skjer med brukeren som ikke har oppdatert på et halvår? For Oystr er dette avveininger vi fortsatt justerer på — de har ikke ett riktig svar, bare et sett med konsekvenser du velger mellom.",
      },
      {
        type: "faktaboks",
        tittel: "Lisensen er fri, men ikke uten plikter",
        tekst:
          "Det meste av dette ligger under Norsk lisens for offentlige data, som tillater kommersiell bruk mot at du oppgir kilden. Det er en billig pris, men den skal betales — og for karttjenester er det verdt å lese vilkårene nøye, siden noen datasett har egne betingelser. Vi oppgir Kartverket, Kystverket og Meteorologisk institutt i Oystr, både fordi vi skal og fordi det er et kvalitetsstempel.",
      },
      { type: "mellomtittel", tekst: "Hva du kan bygge med det" },
      {
        type: "avsnitt",
        tekst:
          "Det interessante er ikke dataene i seg selv, men kombinasjonene. Kart alene finnes overalt. Kart pluss dybde pluss vannstand pluss vær pluss skipstrafikk, tolket for en bestemt bruker i en bestemt situasjon — det er et produkt. Verdien ligger i sammenstillingen og i utvalget, ikke i tilgangen.",
      },
      {
        type: "avsnitt",
        tekst:
          "Og fordi tilgangen er fri for alle, er det heller ikke der konkurransefortrinnet ditt ligger. Det ligger i at du har brukt tid på å forstå hva brukeren faktisk trenger å se i det øyeblikket hen ser på skjermen.",
      },
      {
        type: "avsnitt",
        tekst:
          "Sitter du på en idé som bygger på offentlige data og lurer på hvor stor jobben er, har vi sannsynligvis gjort noe lignende. Ta gjerne kontakt.",
      },
    ],
  },
  {
    slug: "row-level-security-i-praksis",
    tittel: "Row Level Security: derfor hører sikkerheten hjemme i databasen",
    ingress:
      "Det holder å glemme filteret én gang. Da lekker data mellom kunder. Her er hvordan vi flyttet tilgangsreglene ned i PostgreSQL i Altiv — og hvilke feller som ligger der.",
    metaBeskrivelse:
      "Slik bruker vi Row Level Security i PostgreSQL for å skille kundedata i Altiv, hvorfor filtrering i applikasjonskoden er skjørt, og hvilke feller som finnes.",
    publisert: "2026-08-24",
    lesetid: 7,
    kategori: "Web & SaaS",
    innhold: [
      {
        type: "avsnitt",
        tekst:
          "Tenk deg et system der femti bedrifter deler samme database. Hver av dem ser sin egen pipeline, sine egne kunder, sine egne tall. Så skriver noen et nytt endepunkt en fredag ettermiddag, henter ut en liste, og glemmer den ene betingelsen som begrenser spørringen til riktig bedrift.",
      },
      {
        type: "avsnitt",
        tekst:
          "Ingenting krasjer. Ingen feilmelding. Testene passerer, for i testdataene finnes det bare én bedrift. Feilen oppdages først den dagen en kunde ser et navn i systemet sitt som ikke hører hjemme der — og da er det for sent å si at det var et uhell.",
      },
      {
        type: "avsnitt",
        tekst:
          "Dette er grunnen til at vi ikke lot applikasjonskoden være ansvarlig for datainndelingen i Altiv.",
      },
      { type: "mellomtittel", tekst: "Problemet med å huske" },
      {
        type: "avsnitt",
        tekst:
          "Den vanlige tilnærmingen er å legge et filter i hver spørring: hent bare rader der bedrifts-IDen stemmer med den innloggede brukerens. Det fungerer utmerket — så lenge alle husker det, hver gang, for alltid.",
      },
      {
        type: "avsnitt",
        tekst:
          "Og det er nettopp der modellen svikter. Sikkerheten avhenger av at ingen noensinne glemmer noe. Antallet steder som kan gå galt vokser med hvert endepunkt, hver rapport, hver eksportfunksjon og hvert bakgrunnsjobb noen skriver et halvår senere. En sikkerhetsmodell som krever perfekt hukommelse fra alle som noen gang skal ta på kodebasen, er ikke en sikkerhetsmodell.",
      },
      { type: "mellomtittel", tekst: "Hva som skjer når regelen flyttes ned" },
      {
        type: "avsnitt",
        tekst:
          "Row Level Security snur ansvaret. I stedet for at koden må huske å begrense, er det databasen som nekter. Du skrur det på per tabell og definerer en regel som beskriver hvilke rader den innloggede får se — og fra det øyeblikket returnerer PostgreSQL bare de radene, uansett hvilken spørring som kommer inn.",
      },
      {
        type: "avsnitt",
        tekst:
          "Forskjellen er hva som skjer ved en feil. Glemmer du filteret i applikasjonskoden med RLS på, får du tilbake ingenting eller for lite. Det er en feil du oppdager umiddelbart, fordi noe mangler i grensesnittet. Uten RLS får du tilbake for mye — og det er en feil ingen oppdager, fordi alt ser ut til å virke.",
      },
      {
        type: "avsnitt",
        tekst:
          "Det er hele poenget: å gjøre den farlige feilen umulig og den ufarlige feilen synlig.",
      },
      { type: "mellomtittel", tekst: "Fellene" },
      {
        type: "avsnitt",
        tekst:
          "RLS er ikke gratis magi, og det er tre ting som overrasker folk som tar det i bruk for første gang.",
      },
      {
        type: "punktliste",
        punkter: [
          "Reglene gjelder per tabell, og bare de du har skrudd dem på for. En ny tabell er som utgangspunkt uten beskyttelse. Det må inn i rutinen, ellers oppstår hullet nettopp der ingen tenkte over det.",
          "Nøkler med utvidede rettigheter går rundt hele mekanismen. Servernøkkelen som brukes til administrative oppgaver ignorerer RLS med vilje — det er slik den skal virke. Havner den nøkkelen et sted den ikke skal, er alt du bygde borte på et øyeblikk.",
          "Reglene koster ytelse hvis du er uforsiktig. Betingelsen evalueres mot radene, så kolonnene den bruker må være indeksert. Uten det merker du det ikke i utvikling, men du merker det når en kunde har titusen rader.",
        ],
      },
      {
        type: "faktaboks",
        tittel: "Det RLS ikke løser",
        tekst:
          "Regelen svarer på om en bruker får se en rad — ikke om brukeren burde vært innlogget i det hele tatt, om passordet er sterkt nok, eller om noen har fått tilgang de ikke skulle hatt. RLS er det siste forsvaret, ikke det eneste. Vi bruker det sammen med vanlig innloggingskontroll, ikke i stedet for.",
      },
      { type: "mellomtittel", tekst: "Prisen, og hvorfor vi betalte den" },
      {
        type: "avsnitt",
        tekst:
          "Å sette opp dette tar lengre tid enn å skrive et filter i koden. Du må tenke gjennom datamodellen ordentlig før du begynner, fordi reglene bygger på at det finnes en tydelig kobling mellom hver rad og hvem som eier den. Det tvinger fram avklaringer tidlig som ellers hadde blitt utsatt.",
      },
      {
        type: "avsnitt",
        tekst:
          "Til gjengjeld er det gjort. I Altiv trenger vi ikke vurdere sikkerheten på nytt hver gang vi legger til en funksjon, for grensen ligger et sted funksjonen ikke kan røre. Det er den typen arbeid som ikke synes i grensesnittet, aldri blir nevnt i en salgspresentasjon, og som er helt avgjørende den dagen noen spør hva som skjer hvis en utvikler gjør en feil.",
      },
      {
        type: "avsnitt",
        tekst:
          "Og det er ikke noe du reparerer i etterkant. Skal flere kunder dele et system, hører denne avgjørelsen hjemme før den første tabellen opprettes — ikke etter den første lekkasjen.",
      },
    ],
  },
];

export function finnArtikkel(slug: string): Artikkel | undefined {
  return artikler.find((a) => a.slug === slug);
}

// Nyeste først
export const artiklerSortert: Artikkel[] = [...artikler].sort((a, b) =>
  b.publisert.localeCompare(a.publisert)
);
