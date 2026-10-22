import type { Metadata } from "next";
import Link from "next/link";
import NorskRamme from "@/components/NorskRamme";
import { BRODTEKST, MERKELAPP, OVERSKRIFT, WRAP } from "@/components/holding-stil";
import { guider, GUIDER_OPPDATERT } from "@/lib/guider";
import { selskap } from "@/lib/selskap";

const beskrivelse =
  "Guider for deg som vurderer å selge bedriften: hva den er verdt, hvordan et salg går, aksjesalg mot innmatsalg, og hva kjøperen ser etter i regnskapet.";

export const metadata: Metadata = {
  title: `Guider for deg som skal selge bedriften — ${selskap.navn}`,
  description: beskrivelse,
  keywords:
    "selge bedrift, hva er bedriften verdt, generasjonsskifte, aksjesalg, innmatsalg, bedriftsmegler, selge AS",
  alternates: { canonical: `${selskap.url}/guider` },
  openGraph: {
    type: "website",
    siteName: selskap.fulltNavn,
    title: "Guider for deg som skal selge bedriften",
    description: beskrivelse,
    url: `${selskap.url}/guider`,
    locale: "nb_NO",
    images: [{ url: "/og-holding.jpg?v=2", width: 1200, height: 630, alt: "Guider om salg av bedrift" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${selskap.url}/guider#siden`,
      url: `${selskap.url}/guider`,
      name: "Guider for deg som skal selge bedriften",
      description: beskrivelse,
      inLanguage: "nb-NO",
      dateModified: GUIDER_OPPDATERT,
      about: { "@id": `${selskap.url}/#organisasjon` },
    },
    {
      "@type": "ItemList",
      itemListElement: guider.map((g, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: g.tittel,
        url: `${selskap.url}/guider/${g.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: selskap.navn, item: `${selskap.url}/` },
        { "@type": "ListItem", position: 2, name: "Guider", item: `${selskap.url}/guider` },
      ],
    },
  ],
};

export default function Guider() {
  return (
    <NorskRamme>
      <header className="hsek" style={{ ...WRAP, padding: "150px 48px 0" }}>
        <div style={{ ...MERKELAPP, marginBottom: 24 }}>Guider</div>
        <h1
          style={{
            fontFamily: "var(--font-garamond), Georgia, serif",
            fontWeight: 600,
            fontSize: "clamp(38px, 5.4vw, 74px)",
            lineHeight: 1.05,
            letterSpacing: "-.015em",
            margin: "0 0 28px",
            maxWidth: "16ch",
            color: "var(--ink)",
          }}
        >
          Skal du selge bedriften?
        </h1>
        <p style={{ ...BRODTEKST, fontSize: 19, maxWidth: 680, margin: 0 }}>
          Vi kjøper bedrifter og driver dem videre, så disse rådene kommer fra den andre siden av bordet. Det er
          grunnen til at de er konkrete: alt vi skriver her, er det samme vi ser etter når vi selv vurderer et kjøp.
        </p>
      </header>

      <section className="hsek" style={{ ...WRAP, padding: "70px 48px 0" }}>
        <div className="hgrid2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridAutoRows: "1fr", gap: 26 }}>
          {guider.map((g) => (
            <Link
              key={g.slug}
              href={`/guider/${g.slug}`}
              className="hov-outline"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: 10,
                padding: "32px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                color: "var(--ink)",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-garamond), Georgia, serif",
                  fontWeight: 600,
                  fontSize: 26,
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {g.tittel}
              </h2>
              <p style={{ ...BRODTEKST, fontSize: 16, margin: 0, flex: 1 }}>{g.ingress}</p>
              <span style={{ color: "var(--accent)", fontWeight: 600, fontSize: 15 }}>Les guiden →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="hsek" style={{ ...WRAP, padding: "70px 48px 0" }}>
        <div
          className="hsplit"
          style={{ display: "grid", gridTemplateColumns: "minmax(220px, 340px) 1fr", gap: 60, alignItems: "start" }}
        >
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>Regn på din egen</h2>
          <div>
            <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 26px", maxWidth: 680 }}>
              Verdivurderingen henter de tre siste innsendte årsregnskapene fra Brønnøysund og regner ut et spenn, med
              hele regnestykket synlig. Du trenger bare organisasjonsnummeret.
            </p>
            <Link
              href="/verdivurdering"
              className="hov-fill"
              style={{
                display: "inline-block",
                padding: "16px 36px",
                background: "var(--ink)",
                color: "var(--ground)",
                fontWeight: 600,
                fontSize: 15,
                borderRadius: 999,
              }}
            >
              Prøv verdivurderingen
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </NorskRamme>
  );
}
