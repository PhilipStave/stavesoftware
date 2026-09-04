import type { Metadata } from "next";
import Link from "next/link";
import BloggShell from "@/components/BloggShell";
import { artiklerSortert } from "@/lib/artikler";
import { selskap } from "@/lib/selskap";

export const metadata: Metadata = {
  title: `Blogg — ${selskap.fulltNavn}`,
  description:
    "Vi skriver om det vi kan: salg, produkt og teknologi. Hva ting koster, hvordan vi bygger, og hva vi ville gjort annerledes.",
  alternates: { canonical: `${selskap.url}/blogg` },
  openGraph: {
    type: "website",
    siteName: selskap.fulltNavn,
    title: `Blogg — ${selskap.fulltNavn}`,
    description:
      "Vi skriver om det vi kan: salg, produkt og teknologi. Hva ting koster, hvordan vi bygger, og hva vi ville gjort annerledes.",
    url: `${selskap.url}/blogg`,
    locale: "nb_NO",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${selskap.fulltNavn} — Vi bygger digitale produkter folk faktisk bruker`,
      },
    ],
  },
};

const datoFormat = new Intl.DateTimeFormat("nb-NO", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BloggOversikt() {
  return (
    <BloggShell>
      <div
        className="bwrap"
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "170px 48px 60px",
          boxSizing: "border-box",
        }}
      >
        <div
          data-reveal=""
          style={{
            fontSize: 12,
            letterSpacing: ".3em",
            textTransform: "uppercase",
            color: "#8fb8e0",
            marginBottom: 20,
          }}
        >
          (Blogg)
        </div>
        <h1
          data-reveal=""
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 900,
            fontSize: "clamp(44px, 7vw, 108px)",
            letterSpacing: "-.03em",
            lineHeight: 0.96,
            margin: "0 0 26px",
            textTransform: "uppercase",
            color: "#f2efe9",
          }}
        >
          Det vi lærer{" "}
          <span style={{ color: "transparent", WebkitTextStroke: "1.5px #f2efe9" }}>
            underveis.
          </span>
        </h1>
        <p
          data-reveal=""
          style={{
            color: "rgba(242,239,233,.7)",
            fontSize: 18,
            lineHeight: 1.7,
            maxWidth: 560,
            margin: 0,
          }}
        >
          Vi skriver om det vi kan: salg, produkt og teknologi. Hva ting faktisk koster, hvordan
          vi bygger, og hva vi ville gjort annerledes.
        </p>
      </div>

      <div
        className="bwrap"
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "0 48px 100px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ borderTop: "1px solid rgba(242,239,233,.14)" }}>
          {artiklerSortert.map((a) => (
            <Link
              key={a.slug}
              href={`/blogg/${a.slug}`}
              data-reveal=""
              data-hover=""
              className="srow"
              style={{
                display: "block",
                padding: "40px 10px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 18,
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  marginBottom: 14,
                  fontSize: 12,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                }}
              >
                <span style={{ color: "#8fb8e0" }}>{a.kategori}</span>
                <span style={{ color: "rgba(242,239,233,.45)" }}>
                  {datoFormat.format(new Date(a.publisert))}
                </span>
                <span style={{ color: "rgba(242,239,233,.45)" }}>{a.lesetid} min lesing</span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(24px, 3.4vw, 42px)",
                  letterSpacing: "-.02em",
                  lineHeight: 1.08,
                  textTransform: "uppercase",
                  margin: "0 0 14px",
                  color: "#f2efe9",
                }}
              >
                {a.tittel}
              </h2>
              <p
                style={{
                  color: "rgba(242,239,233,.65)",
                  fontSize: 16,
                  lineHeight: 1.7,
                  margin: 0,
                  maxWidth: 640,
                }}
              >
                {a.ingress}
              </p>
              <span
                style={{
                  display: "inline-block",
                  marginTop: 18,
                  color: "#8fb8e0",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                Les artikkelen →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </BloggShell>
  );
}
