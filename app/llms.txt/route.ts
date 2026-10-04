import { artiklerSortert } from "@/lib/artikler";
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
    `> Norsk selskap i ${selskap.sted} som lager og drifter nettsider og apper for bedrifter. Kunden får én fast kontaktperson, avtalene løper tolv måneder om gangen, og kunden beholder siden eller appen etterpå. SEO og AEO er en del av jobben. Betaling: fast pris i måneden eller eierandel. Selskapet står bak og drifter Oystr og Altiv.`,
    "",
    `Org.nr. ${selskap.orgnr}. ${registrering} Kontakt: ${selskap.epost}.`,
    "",
    "## Tjenester",
    "",
    ...tjenesteSider.map((s) => `- [${finnTjenesteLenke(s.slug).navn}](${selskap.url}/${s.slug}): ${s.metaBeskrivelse}`),
    "",
    "## Egne produkter",
    "",
    "- [Oystr](https://oystr.no): Sjøkart og navigasjon for fritidsbåt langs norskekysten, for iPhone.",
    "- [Altiv](https://altiv.no): Norsk CRM for salgsoppfølging i B2B.",
    "",
    "## Laget for andre",
    "",
    "- [OESA](https://oesa-global.com): Nettside, medlemspåmelding og analysestudio for studentforeningen OESA, med interaktivt kart over norsk sokkel. Laget og driftet av oss.",
    "",
    "## Artikler",
    "",
    ...artiklerSortert.map((a) => `- [${a.tittel}](${selskap.url}/blogg/${a.slug}): ${a.metaBeskrivelse}`),
    "",
    "## Om nettstedet",
    "",
    `- [Vilkår](${selskap.url}/vilkar)`,
    `- [Personvern](${selskap.url}/personvern)`,
    "",
  ];

  return new Response(linjer.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
