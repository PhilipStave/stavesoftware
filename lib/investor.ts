// Innholdet på investorsiden — NORSK hovedutgave. Engelsk tvilling i
// lib/investor-en.ts, vist under /en/investors.
//
// Regler, satt 21. oktober 2026:
//  - Ingen verdsettelse, eierandel, prognoser eller avkastningstall. En
//    offentlig side som tilbyr aksjer havner fort i verdipapirreglene, og en
//    pris som står på nett er en pris du har tapt forhandlingen om.
//  - Tallene sendes på forespørsel, ikke publiseres.
//  - Det gjennomregnede eksempelet er det eneste stedet med tall som ikke er
//    hentet fra et regnskap. Derfor sier det selv at bedriften ikke finnes,
//    at hvert tall er konstruert, og hva som kan slå feil.
//
// Merknaden om navnet i registeret følger NAVN_REGISTRERT i lib/selskap.ts.
// Den hører hjemme her og ikke bare i bunnteksten: en investor slår opp
// organisasjonsnummeret, finner det gamle foretaksnavnet, og skal ikke behøve
// å lure på om han har funnet feil selskap.

import { NAVN_REGISTRERT, selskap } from "./selskap";

export const investor = {
  overtittel: "For investorer",
  tittel: "Kapital som kjøper bedrifter, ikke tid.",
  ingress:
    "Crest Holding kjøper lønnsomme norske bedrifter, beholder dem og forbedrer dem med sine egne avdelinger. Vi snakker med et lite antall investorer som vil ha eksponering mot det — ikke mot et selskap som bruker opp penger på vei mot skala.",

  tese: {
    tittel: "Teorien",
    avsnitt: [
      "Norge er fullt av små bedrifter som tjener penger og ikke har noen kjøper. Eieren nærmer seg pensjon, barna overtar ikke, og ingen fond ser på noe i denne størrelsen. De skifter hender til noen få ganger årsoverskuddet.",
      "Grunnen til at prisen er lav, er som regel den samme: overskuddet går ut med eieren. Så vi kjøper dem der det ikke gjør det — der noen andre enn eieren driver dagen, kundene kommer tilbake, og arbeidet aldri er gjort digitalt.",
      "Avkastningen er det årlige overskuddet fra bedrifter vi beholder. Et salg kan skje, men ingenting i modellen avhenger av ett.",
    ],
  },

  mekanisme: {
    tittel: "Hvorfor en bedrift er verdt mer hos oss",
    ingress:
      "En kjøper som bare bytter navnet på døra, tilfører ingenting. Avdelingene er det som endrer tallene etter kjøpet, og de går allerede — for bedriftene vi eier, og for kunder utenfor konsernet, som er det som betaler for dem mellom oppkjøpene.",
    lenketekst: "Avdelingene i sin helhet",
  },

  eksempel: {
    foto: {
      fil: "/uploads/eksempel-lager.jpg",
      alt: "Pallereoler i et lager, sett nedenfra",
      bildetekst: "Illustrasjon. Bedriften i dette eksempelet finnes ikke.",
      fotoOrd: "Foto:",
      fotograf: "Shixart1985",
      lisens: "CC BY 2.0",
      lisensUrl: "https://creativecommons.org/licenses/by/2.0/",
      kilde:
        "https://commons.wikimedia.org/wiki/File:Warehouse_filled_with_stacked_pallets_showcasing_efficient_space_usage_during_daytime_operations.jpg",
    },
    tallforklaring: "Tallene til høyre er virkningen på årlig driftsresultat, i millioner kroner.",
    merkelapp: "Gjennomregnet eksempel · ikke en historikk",
    tittel: "Hva vi ville gjort med en bedrift som denne",
    ingress:
      "Vi har ikke eid en bedrift i fem år ennå, så vi kan ikke vise deg hvordan det så ut. Det vi kan vise deg, er arbeidet, regnet ut på en bedrift av den typen vi kjøper. Hvert tall under er konstruert. Bedriften finnes ikke.",
    oppsett: {
      tittel: "Bedriften",
      punkter: [
        { merkelapp: "Omsetning", verdi: "30 millioner" },
        { merkelapp: "Driftsresultat", verdi: "3,0 millioner" },
        { merkelapp: "Ansatte", verdi: "Syv" },
        { merkelapp: "Eier", verdi: "64 år, vil ut" },
      ],
      tekst:
        "En grossist en time utenfor Oslo. Tjue år med kunder som kommer tilbake, ingen gjeld, 10 millioner bundet i varelager, og ingenting gjort digitalt siden nettsiden ble laget i 2014. Eieren står for salget selv, men en formann driver dagen.",
      pris:
        "Pris: 12 millioner, fire ganger driftsresultatet. 5 millioner i egenkapital fra oss, 7 lånt mot bedriftens egen kontantstrøm. Tretti prosent av prisen betales over atten måneder og avhenger av at kundene blir.",
    },
    faser: [
      {
        naar: "Måned 0",
        avdeling: "Kjøpet",
        tekst:
          "Tre års regnskap, kundelisten, leverandøravtalene og en lagertelling. Daglig leder binder seg i tolv måneder. Vi blir enige om en pris før vi blir enige om et håndtrykk.",
        effekt: null,
      },
      {
        naar: "Måned 1–6",
        avdeling: "Crest Services",
        tekst:
          "Regnskap, forsikring, innkjøpsavtaler og systemer flyttes inn i konsernets egne. Ingen i bedriften merker annet enn at bilagene går et annet sted.",
        effekt: "+0,3",
      },
      {
        naar: "Måned 3–12",
        avdeling: "Crest Software",
        tekst:
          "Tilbud og ordrer som tok to dager tar ti minutter. En nettside som faktisk blir funnet, og delesøk på merke og modell. Timene kommer tilbake, og det gjør forespørslene som pleide å gå til noen andre også.",
        effekt: "+0,4",
      },
      {
        naar: "Måned 6–18",
        avdeling: "Crest Growth",
        tekst:
          "Prislisten gjennomgås — de fleste bedrifter i denne størrelsen har ikke rørt sin på år — og tilbud blir fulgt opp fordi noe nå minner noen på å gjøre det.",
        effekt: "+0,8",
      },
      {
        naar: "År 2",
        avdeling: "Crest Commerce",
        tekst:
          "Et merke uten norsk forhandler tas inn og selges til kundelisten som allerede er der. Ny omsetning gjennom en kanal som ikke koster noe ekstra å drive.",
        effekt: "+0,5",
      },
      {
        naar: "År 2–3",
        avdeling: "Verksted",
        tekst:
          "Service og reparasjon på det bedriften selger, fra konsernets eget verksted. Det er en ny inntektslinje, og det er den som holder kunden fra å se seg om.",
        effekt: "+0,3",
      },
    ],
    resultat: {
      tittel: "Hvor det ender",
      rader: [
        { merkelapp: "Driftsresultat ved kjøp", verdi: "3,0 millioner" },
        { merkelapp: "Driftsresultat i år tre", verdi: "5,3 millioner" },
        { merkelapp: "Verdi ved samme multippel", verdi: "21 millioner" },
        { merkelapp: "Betalt", verdi: "12 millioner" },
      ],
      tekst:
        "Vi bruker samme multippel ut som inn. Mange modeller henter halve avkastningen fra at multippelen vokser, og det er en antakelse om markedet heller enn om arbeidet. Bankgjelden nedbetales av bedriftens egen kontantstrøm underveis.",
      etterord:
        "Og så poenget: et salg er valgfritt. 5,3 millioner i året fra en bedrift som går uten oss, er avkastningen. Vi beholder den heller enn å selge den, og ingenting i modellen trenger en exit for å virke.",
    },
    risiko: {
      tittel: "Hva som kan slå feil",
      punkter: [
        "Den største kunden går. På en bedrift i denne størrelsen er det 0,5–1,0 million i driftsresultat, og det spiser to år av arbeidet over.",
        "En leverandør sier opp ved eierskifte. Da eier vi et lager og ingen rett til å etterfylle det.",
        "Ingen i konsernet eier integrasjonen. Regnskap og innkjøp skjer uansett; vekstarbeidet gjør det ikke, og halve forbedringen kommer aldri.",
        "Lageret viser seg å være eldre enn bøkene sier. Det er betalt for til kjøpspris, ikke til hylleverdi.",
      ],
    },
  },

  kapital: {
    tittel: "Hva kapitalen skal brukes til",
    punkter: [
      "Egenkapitaldelen i et oppkjøp. Banken låner mot kontantstrømmen i bedriften som kjøpes; egenkapitalen er den delen som må være vår.",
      "Varelager og agenturforpliktelser når Crest Commerce tar inn et merke uten norsk forhandler.",
      "Ingenting annet. Ikke lønn, ikke markedsbudsjetter, ikke tid å brenne av.",
    ],
    etterord:
      "Kapital hentes mot et bestemt selskap, på det tidspunktet det finnes noe å kjøpe — ikke på forhånd mot en plan.",
  },

  selskapet: {
    tittel: "Selskapet",
    fakta: [
      { merkelapp: "Foretaksnavn", verdi: selskap.fulltNavn },
      { merkelapp: "Organisasjonsnummer", verdi: selskap.orgnr },
      { merkelapp: "Forretningssted", verdi: "Oslo" },
    ],
    avsnitt: [
      `Alt ligger inne i ${selskap.fulltNavn} i dag — virksomhetene er ikke egne aksjeselskaper. Regnskapene er innsendt og offentlige, så hvem som helst kan lese dem i Brønnøysundregistrene før det første møtet.`,
      ...(NAVN_REGISTRERT
        ? []
        : [
            `Én ting å vente når du ser etter: registeret viser fortsatt det tidligere navnet ${selskap.tidligereNavn}. Det er samme juridiske enhet og samme organisasjonsnummer; navneendringen ble vedtatt 3. september 2026 og er meldt.`,
          ]),
    ],
    lenke: {
      tekst: "Selskapet i registeret",
      href: `https://virksomhet.brreg.no/nb/oppslag/enheter/${selskap.orgnrKompakt}`,
    },
  },

  materiale: {
    tittel: "Hva vi sender på forespørsel",
    punkter: [
      "Regnskap, og tallene bak hver virksomhet.",
      "Selskapene vi ser på, og hva vi mener de er verdt.",
      "Betingelser. De diskuteres, de publiseres ikke.",
    ],
    etterord: "Skriv til oss og si hvem du er. Vi svarer samme uke, også når svaret er nei.",
  },

  kontakt: {
    merkelapp: "Invester med oss",
    tittel: "Bli med på neste kjøp",
    tekst:
      "Vi snakker med et lite antall mennesker som vil eie norske bedrifter som allerede tjener penger, og som ikke har hastverk med å selge dem igjen.",
    punkter: [
      "Du ser selskapet, regnskapet og prisen før noe avgjøres. Ingenting går inn i et blindt fond.",
      "Vi drifter det etterpå. Avdelingene gjør arbeidet, og du ender ikke opp med en jobb til.",
      "Avkastningen er det årlige overskuddet fra bedrifter vi beholder. Et salg kan skje, men ingenting i modellen avhenger av ett.",
    ],
    sporsmaal:
      "Skriv én linje om hvem du er og omtrent hva du ville satt i arbeid. Du får tallene samme uke — og den neste vi ser på, når det finnes en.",
    knapp: "Invester med oss",
  },

  forbehold:
    "Denne siden er informasjon om selskapet. Den er ikke et tilbud om aksjer eller andre verdipapirer, og ingenting på den er investeringsrådgivning.",
};
