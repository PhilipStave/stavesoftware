import { artiklerSortert } from "@/lib/artikler";
import { avdelingssider } from "@/lib/avdelinger";
import { guider } from "@/lib/guider";
import { NAVN_REGISTRERT, selskap } from "@/lib/selskap";
import { tjenesteSider } from "@/lib/tjenestesider";
import { finnTjenesteLenke } from "@/lib/tjenester-lenker";

// llms.txt: en kort, lesbar oversikt over nettstedet for språkmodeller og
// AI-assistenter. Det er ingen etablert standard som Google bruker, men den er
// billig å ha og bygges fra de samme kildene som sidene, så den kan ikke bli
// stående med gammelt innhold.
export const dynamic = "force-static";

export function GET() {
  const registrering = NAVN_REGISTRERT
    ? `Tidligere ${selskap.tidligereNavn}.`
    : `Registrert i Foretaksregisteret under det tidligere navnet ${selskap.tidligereNavn} til navneendringen er registrert.`;

  const linjer = [
    `# ${selskap.fulltNavn}`,
    "",
    `> Norsk selskap i ${selskap.sted} som kjøper lønnsomme småbedrifter og driver dem videre. De fleste beholder vi, og avkastningen er det årlige overskuddet — ikke et salg. Fire egne avdelinger jobber inne i bedriftene, og tar arbeid for kunder utenfor konsernet: Crest Software bygger systemene, Crest Commerce henter merker til Norge, Crest Services driver ryggraden, og Crest Growth markedsfører og selger.`,
    "",
    `Org.nr. ${selskap.orgnr}. ${registrering} Kontakt: ${selskap.epost}.`,
    "",
    "## Avdelinger",
    "",
    `- [Crest Software](${selskap.url}/crest-software): Lager og drifter nettsider, apper og interne verktøy for norske bedrifter. Én fast kontaktperson, tolv måneder om gangen, fast pris eller eierandel. Bygget på Next.js, React, TypeScript, Supabase, Stripe og Vercel.`,
    ...avdelingssider.map((a) => `- [${a.navn}](${selskap.url}/${a.slug}): ${a.metaBeskrivelse}`),
    "",
    "## Virksomheter vi eier og driver",
    "",
    "- [HEL Performance Norge](https://helperformance.no): Offisiell norsk forhandler av HEL-bremseslanger og kalipere til motorsykkel. Delene lages av HEL i England.",
    "- [Altiv](https://altiv.no): Norsk CRM for salgsoppfølging i B2B.",
    "- [Oystr](https://oystr.no): Sjøkart og navigasjon for fritidsbåt langs norskekysten, for iPhone. Utviklet og driftet sammen med Embretr.",
    "",
    "## Tjenester fra Crest Software",
    "",
    ...tjenesteSider.map((s) => `- [${finnTjenesteLenke(s.slug).navn}](${selskap.url}/${s.slug}): ${s.metaBeskrivelse}`),
    "",
    "## Laget for andre",
    "",
    "- [OESA](https://oesa-global.com): Nettside, medlemspåmelding og analysestudio for studentforeningen OESA, med interaktivt kart over norsk sokkel. Laget og driftet av oss.",
    "",
    "## For deg som vurderer å selge bedriften",
    "",
    `- [Verdivurdering](${selskap.url}/verdivurdering): Verktøy som henter de tre siste innsendte årsregnskapene fra Brønnøysund og regner ut et indikativt verdispenn. Metoden står på siden.`,
    ...guider.map((g) => `- [${g.tittel}](${selskap.url}/guider/${g.slug}): ${g.metaBeskrivelse}`),
    "",
    "## Artikler",
    "",
    ...artiklerSortert.map((a) => `- [${a.tittel}](${selskap.url}/blogg/${a.slug}): ${a.metaBeskrivelse}`),
    "",
    "## Om nettstedet",
    "",
    `- [For investorer](${selskap.url}/investor): Hva kapitalen går til, hvordan avdelingene hever verdien etter et kjøp, og hva vi sender på forespørsel. Siden har ingen verdsettelse eller avkastningstall.`,
    `- [Vilkår](${selskap.url}/vilkar)`,
    `- [Personvern](${selskap.url}/personvern)`,
    `- [English](${selskap.url}/en): Forsiden og investorsiden finnes på engelsk under /en. Resten av nettstedet er på norsk.`,
    "",
  ];

  return new Response(linjer.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
