import type { Metadata } from "next";
import Link from "next/link";
import BloggShell from "./BloggShell";
import { artikler } from "@/lib/artikler";
import { selskap } from "@/lib/selskap";
import { medLenker, utenLenker } from "@/lib/tekst";
import { finnTjenesteLenke, tjenesteLenker } from "@/lib/tjenester-lenker";
import type { Seksjon, TjenesteSide as Side } from "@/lib/tjenestesider";

export function tjenesteMetadata(side: Side): Metadata {
  const url = `${selskap.url}/${side.slug}`;
  const tittel = `${side.tittel} — ${selskap.fulltNavn}`;
  return {
    title: tittel,
    description: side.metaBeskrivelse,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: selskap.fulltNavn,
      title: tittel,
      description: side.metaBeskrivelse,
      url,
      locale: "nb_NO",
      images: [
        {
          url: "/og-image.jpg?v=2",
          width: 1200,
          height: 630,
          alt: `${selskap.fulltNavn} — Vi bygger den, drifter den og svarer`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: tittel,
      description: side.metaBeskrivelse,
      images: ["/og-image.jpg?v=2"],
    },
  };
}

// Tjenesten, brødsmulestien og spørsmålene som strukturerte data. FAQ-oppmerkingen
// gir ikke lenger egne søkeresultater hos Google for vanlige nettsteder, men den
// er det tydeligste formatet for AI-assistenter som leter etter et svar — og den
// speiler nøyaktig det som står synlig på siden, slik Google krever.
function jsonLd(side: Side) {
  const url = `${selskap.url}/${side.slug}`;
  const lenke = finnTjenesteLenke(side.slug);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#tjeneste`,
        name: side.tittel,
        serviceType: side.tjenestetype,
        description: side.metaBeskrivelse,
        url,
        inLanguage: "nb-NO",
        areaServed: { "@type": "Country", name: "Norge" },
        provider: { "@id": `${selskap.url}/#organisasjon` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: selskap.navn, item: `${selskap.url}/` },
          { "@type": "ListItem", position: 2, name: lenke.navn, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: side.faq.map((f) => ({
          "@type": "Question",
          name: f.sporsmal,
          acceptedAnswer: { "@type": "Answer", text: utenLenker(f.svar) },
        })),
      },
    ],
  };
}

const liten = {
  fontSize: 12,
  letterSpacing: ".26em",
  textTransform: "uppercase" as const,
};

const mellomtittel = {
  fontFamily: "var(--font-archivo), sans-serif",
  fontWeight: 800,
  fontSize: "clamp(26px, 3.2vw, 40px)",
  letterSpacing: "-.02em",
  lineHeight: 1.1,
  textTransform: "uppercase" as const,
  margin: "80px 0 24px",
  color: "var(--ink)",
};

const brodtekst = {
  color: "rgba(var(--ink-rgb),.78)",
  fontSize: 17,
  lineHeight: 1.8,
  margin: "0 0 22px",
};

function SeksjonBlokk({ s }: { s: Seksjon }) {
  return (
    <section>
      <h2 data-reveal="" style={mellomtittel}>
        {s.tittel}
      </h2>
      {s.avsnitt?.map((a, i) => (
        <p key={i} data-reveal="" style={{ ...brodtekst, maxWidth: 700 }}>
          {medLenker(a)}
        </p>
      ))}
      {s.punkter && (
        <div data-reveal="" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),.12)" }}>
          {s.punkter.map((p, i) => (
            <div
              key={p.navn}
              className="trow"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(180px, 280px) 1fr",
                gap: 30,
                alignItems: "baseline",
                padding: "22px 8px",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 700,
                  fontSize: 19,
                  margin: 0,
                  color: "var(--ink)",
                }}
              >
                {s.nummerert && (
                  <span style={{ color: "var(--accent)", fontWeight: 800, fontSize: 14, marginRight: 12 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                {p.navn}
              </h3>
              <p style={{ color: "rgba(var(--ink-rgb),.7)", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                {p.tekst}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default function TjenesteSide({ side }: { side: Side }) {
  const lenke = finnTjenesteLenke(side.slug);
  const relevante = side.artikler
    .map((slug) => artikler.find((a) => a.slug === slug))
    .filter((a) => a !== undefined);
  const andre = tjenesteLenker.filter((l) => l.slug !== side.slug);

  return (
    <BloggShell>
      <article
        className="bwrap"
        style={{ maxWidth: 900, margin: "0 auto", padding: "170px 48px 40px", boxSizing: "border-box" }}
      >
        <nav
          aria-label="Brødsmulesti"
          style={{ ...liten, letterSpacing: ".16em", fontSize: 13, marginBottom: 30, color: "rgba(var(--ink-rgb),.55)" }}
        >
          <Link href="/" data-hover="" className="hov-link" style={{ color: "rgba(var(--ink-rgb),.55)" }}>
            {selskap.navn}
          </Link>
          <span aria-hidden="true" style={{ margin: "0 10px" }}>
            /
          </span>
          <span aria-current="page" style={{ color: "rgba(var(--ink-rgb),.8)" }}>
            {lenke.navn}
          </span>
        </nav>
        <div style={{ ...liten, letterSpacing: ".3em", color: "var(--accent)", marginBottom: 20 }}>
          {side.overtittel}
        </div>
        <h1
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 900,
            fontSize: "clamp(36px, 6vw, 80px)",
            letterSpacing: "-.03em",
            lineHeight: 0.98,
            margin: "0 0 30px",
            textTransform: "uppercase",
            color: "var(--ink)",
          }}
        >
          {side.h1}
        </h1>
        <p
          style={{
            color: "rgba(var(--ink-rgb),.78)",
            fontSize: 20,
            lineHeight: 1.65,
            maxWidth: 700,
            margin: "0 0 40px",
          }}
        >
          {side.ingress}
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
          <Link
            href="/#kontakt"
            data-hover=""
            className="hov-fill"
            style={{
              display: "inline-block",
              padding: "18px 40px",
              background: "var(--ink)",
              color: "var(--ground)",
              fontWeight: 600,
              fontSize: 15,
              borderRadius: 999,
            }}
          >
            Ta kontakt
          </Link>
          <Link
            href="/#produkter"
            data-hover=""
            className="hov-outline"
            style={{
              display: "inline-block",
              padding: "18px 40px",
              border: "1px solid rgba(var(--ink-rgb),.35)",
              borderRadius: 999,
              color: "var(--ink)",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Se hva vi har laget
          </Link>
        </div>

        {side.seksjoner.map((s) => (
          <SeksjonBlokk key={s.tittel} s={s} />
        ))}

        <section>
          <h2 data-reveal="" style={mellomtittel}>
            Spørsmål og svar
          </h2>
          <div style={{ borderBottom: "1px solid rgba(var(--ink-rgb),.12)" }}>
            {side.faq.map((f) => (
              <div
                key={f.sporsmal}
                data-reveal=""
                style={{ borderTop: "1px solid rgba(var(--ink-rgb),.12)", padding: "26px 8px" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-archivo), sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: 1.3,
                    margin: "0 0 10px",
                    color: "var(--ink)",
                  }}
                >
                  {f.sporsmal}
                </h3>
                <p style={{ color: "rgba(var(--ink-rgb),.72)", fontSize: 16, lineHeight: 1.75, margin: 0, maxWidth: 700 }}>
                  {medLenker(f.svar)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div
          data-reveal=""
          style={{
            marginTop: 80,
            paddingTop: 44,
            borderTop: "1px solid rgba(var(--ink-rgb),.14)",
            textAlign: "center",
          }}
        >
          <p style={{ color: "rgba(var(--ink-rgb),.7)", fontSize: 17, lineHeight: 1.65, margin: "0 0 26px" }}>
            Fortell oss hva du trenger. Vi svarer ærlig, også når svaret er at du ikke trenger oss.
          </p>
          <Link
            href="/#kontakt"
            data-hover=""
            className="hov-fill"
            style={{
              display: "inline-block",
              padding: "18px 44px",
              background: "var(--ink)",
              color: "var(--ground)",
              fontWeight: 600,
              fontSize: 16,
              borderRadius: 999,
            }}
          >
            Ta kontakt
          </Link>
        </div>
      </article>

      <section
        className="bwrap"
        style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 48px 60px", boxSizing: "border-box" }}
      >
        {relevante.length > 0 && (
          <>
            <div data-reveal="" style={{ ...liten, color: "rgba(var(--ink-rgb),.55)", marginBottom: 26 }}>
              (Les mer)
            </div>
            <div style={{ borderTop: "1px solid rgba(var(--ink-rgb),.14)", marginBottom: 70 }}>
              {relevante.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blogg/${a.slug}`}
                  data-reveal=""
                  data-hover=""
                  className="srow"
                  style={{ display: "block", padding: "28px 10px", color: "inherit", textDecoration: "none" }}
                >
                  <span style={{ ...liten, letterSpacing: ".2em", display: "block", color: "var(--accent)", marginBottom: 10 }}>
                    {a.kategori}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-archivo), sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(20px, 2.4vw, 28px)",
                      letterSpacing: "-.01em",
                      textTransform: "uppercase",
                      color: "var(--ink)",
                    }}
                  >
                    {a.tittel}
                  </span>
                </Link>
              ))}
            </div>
          </>
        )}
        <div data-reveal="" style={{ ...liten, color: "rgba(var(--ink-rgb),.55)", marginBottom: 26 }}>
          (Andre tjenester)
        </div>
        <div style={{ borderTop: "1px solid rgba(var(--ink-rgb),.14)" }}>
          {andre.map((l) => (
            <Link
              key={l.slug}
              href={l.href}
              data-reveal=""
              data-hover=""
              className="srow"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "8px 20px",
                padding: "28px 10px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(22px, 3vw, 36px)",
                  letterSpacing: "-.01em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                }}
              >
                {l.navn}
              </span>
              <span style={{ color: "var(--accent)", fontSize: 15, fontWeight: 600, whiteSpace: "nowrap" }}>
                {l.lenketekst} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(side)) }} />
    </BloggShell>
  );
}
