import Link from "next/link";
import { bunntekst } from "@/lib/holding";

// Felles stil og felles bunntekst for de engelske holdingsidene — forsiden og
// /investors. Konstantene lå inne i HoldingSide.tsx til investorsiden trengte
// nøyaktig de samme; de ligger her nå så de to sidene ikke kan gli fra
// hverandre. Juridisk-linjen i bunnteksten er den samme opplysningen som
// selskapsangivelse() gir på de norske sidene, og den må stå likt overalt.

export const WRAP = {
  maxWidth: 1240,
  margin: "0 auto",
  padding: "0 48px",
  boxSizing: "border-box" as const,
};

export const MERKELAPP = {
  fontFamily: "var(--font-archivo), sans-serif",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: ".26em",
  textTransform: "uppercase" as const,
  color: "var(--accent)",
};

export const OVERSKRIFT = {
  fontFamily: "var(--font-garamond), Georgia, serif",
  fontWeight: 600,
  fontSize: "clamp(34px, 4.4vw, 60px)",
  lineHeight: 1.08,
  letterSpacing: "-.01em",
  margin: 0,
  color: "var(--ink)",
};

export const BRODTEKST = {
  color: "rgba(var(--ink-rgb),.72)",
  fontSize: 17,
  lineHeight: 1.75,
};

export const KNAPP = {
  display: "inline-block",
  padding: "17px 38px",
  fontWeight: 600,
  fontSize: 15,
  borderRadius: 999,
};

export function Lockup() {
  return (
    <span
      className="logo-lockup"
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 10,
        fontFamily: "var(--font-garamond), Georgia, serif",
        fontWeight: 700,
        fontSize: 19,
        letterSpacing: ".2em",
        whiteSpace: "nowrap",
        color: "var(--ink)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/crest-symbol-mork.png"
        alt=""
        aria-hidden="true"
        width={869}
        height={662}
        style={{ height: 17, width: "auto", display: "block" }}
      />
      <span>
        CREST HOLDING
        <span style={{ color: "var(--accent)", fontSize: "0.58em", verticalAlign: "0.42em", letterSpacing: 0 }}>®</span>
      </span>
    </span>
  );
}

export function HoldingBunn() {
  return (
    <footer className="hfoot" style={{ borderTop: "1px solid rgba(var(--ink-rgb),.1)", padding: "40px 0 54px" }}>
      <div
        style={{
          ...WRAP,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", gap: 26, flexWrap: "wrap", fontSize: 14 }}>
          {bunntekst.lenker.map((l) =>
            l.ekstern ? (
              <a
                key={l.navn}
                href={l.href}
                target="_blank"
                rel="noopener"
                className="hov-link"
                style={{ color: "rgba(var(--ink-rgb),.6)" }}
              >
                {l.navn}
              </a>
            ) : (
              <Link key={l.navn} href={l.href} className="hov-link" style={{ color: "rgba(var(--ink-rgb),.6)" }}>
                {l.navn}
              </Link>
            )
          )}
        </div>
        <span style={{ color: "rgba(var(--ink-rgb),.4)", fontSize: 13 }}>{bunntekst.linje}</span>
      </div>
      <p
        style={{
          ...WRAP,
          margin: "26px auto 0",
          fontSize: 12.5,
          lineHeight: 1.7,
          color: "rgba(var(--ink-rgb),.38)",
          maxWidth: 1240,
        }}
      >
        {bunntekst.juridisk} {bunntekst.norskeSider}
      </p>
    </footer>
  );
}
