import { artiklerSortert } from "@/lib/artikler";
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
    `> Norsk selskap i ${selskap.sted} som starter, driver og utvikler egne virksomheter. Alt eies og drives av ${selskap.fulltNavn}; virksomhetene er ikke egne aksjeselskaper. Programvarevirksomheten heter Crest Software og lager og drifter nettsider og apper for bedrifter, med én fast kontaktperson, avtaler på tolv måneder om gangen, og SEO og AEO som del av jobben. Betaling: fast pris i måneden eller eierandel.`,
    "",
    `Org.nr. ${selskap.orgnr}. ${registrering} Kontakt: ${selskap.epost}.`,
    "",
    "## Virksomheter",
    "",
    `- [Crest Software](${selskap.url}/crest-software): Nettsider og apper for bedrifter, driftet videre med én fast kontaktperson.`,
    "- [HEL Performance Norge](https://helperformance.no): Offisiell norsk forhandler av HEL-bremseslanger og kalipere til motorsykkel.",
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
    `- [For investorer](${selskap.url}/investors): Hva kapitalen går til, hvordan avdelingene hever verdien etter et kjøp, og hva vi sender på forespørsel. Siden har ingen verdsettelse eller avkastningstall.`,
    `- [Vilkår](${selskap.url}/vilkar)`,
    `- [Personvern](${selskap.url}/personvern)`,
    "",
  ];

  return new Response(linjer.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
