"use client";

import { tjenester } from "@/lib/data";
import { AltivLogo, OystrLogo } from "./BrandLogos";

import { selskap } from "@/lib/selskap";
// Fullskjerms tjenestepanel — samme sirkel-wipe og stagger som teknologi-arkivet.
export default function ServiceOverlay({
  active,
  closeService,
}: {
  active: number;
  closeService: () => void;
}) {
  const t = tjenester[active];
  return (
    <div
      className="band"
      id="serviceoverlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "var(--sunk)",
        color: "var(--ink)",
        overflowY: "auto",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={t.media}
        alt=""
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.22,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(180deg, rgba(var(--ground-rgb),.55) 0%, rgba(var(--ground-rgb),.35) 45%, rgba(var(--ground-rgb),.8) 100%)",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(var(--accent-rgb),.05) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--accent-rgb),.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      ></div>
      <div
        className="ovbar"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "22px 48px",
          background: "linear-gradient(180deg, var(--sunk) 55%, rgba(var(--ground-rgb),0))",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 900,
            fontSize: 15,
            letterSpacing: ".14em",
            textTransform: "uppercase",
          }}
        >
          TJENESTER<span style={{ color: "var(--accent)" }}>/</span>
          {t.tittel}
        </span>
        <button
          data-hover=""
          data-magnet=""
          className="hov-fill"
          onClick={closeService}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 26px",
            background: "var(--ink)",
            color: "var(--ground)",
            border: "none",
            borderRadius: 999,
            fontFamily: "var(--font-grotesk), sans-serif",
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: ".1em",
            textTransform: "uppercase",
          }}
        >
          Lukk ✕
        </button>
      </div>
      <div
        className="ovwrap"
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "40px 48px 120px",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <div
          className="titem"
          style={{
            animationDelay: ".35s",
            fontSize: 12,
            letterSpacing: ".3em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 18,
          }}
        >
          (Tjeneste {t.nr})
        </div>
        <h2
          className="titem"
          style={{
            animationDelay: ".45s",
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 900,
            fontSize: "clamp(40px, 6vw, 92px)",
            letterSpacing: "-.03em",
            margin: "0 0 14px",
            textTransform: "uppercase",
            lineHeight: 0.96,
          }}
        >
          {t.tittel}
          <span style={{ color: "transparent", WebkitTextStroke: "1.5px var(--ink)" }}>.</span>
        </h2>
        <p
          className="titem"
          style={{
            animationDelay: ".55s",
            color: "rgba(var(--ink-rgb),.65)",
            fontSize: 17,
            maxWidth: 520,
            lineHeight: 1.65,
            margin: "0 0 70px",
          }}
        >
          {t.lead}
        </p>
        <div className="titem" style={{ animationDelay: ".65s", marginBottom: 64 }}>
          {t.punkter.map((p) => (
            <div
              key={p.navn}
              className="trow"
              data-hover=""
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(200px, 320px) 1fr",
                gap: 30,
                alignItems: "baseline",
                padding: "20px 8px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 700,
                  fontSize: 19,
                }}
              >
                {p.navn}
              </span>
              <span style={{ color: "rgba(var(--ink-rgb),.65)", fontSize: 15, lineHeight: 1.6 }}>
                {p.tekst}
              </span>
            </div>
          ))}
        </div>
        {t.caseNavn && (
          <div
            className="titem"
            style={{
              animationDelay: ".8s",
              display: "flex",
              alignItems: "baseline",
              gap: 20,
              flexWrap: "wrap",
              borderTop: "1px solid rgba(var(--ink-rgb),.12)",
              paddingTop: 34,
              marginBottom: 64,
            }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: ".26em",
                textTransform: "uppercase",
                color: "rgba(var(--ink-rgb),.55)",
              }}
            >
              (Se det i praksis)
            </span>
            {t.caseNavn === "Oystr" ? (
              <OystrLogo size={22} color="var(--ink)" />
            ) : (
              <AltivLogo size={22} color="var(--ink)" />
            )}
            <span style={{ color: "rgba(var(--ink-rgb),.65)", fontSize: 15 }}>{t.caseTekst}</span>
            <a
              href={t.caseUrl}
              target="_blank"
              data-hover=""
              className="hov-outline"
              style={{
                display: "inline-block",
                padding: "12px 28px",
                border: "1px solid rgba(var(--ink-rgb),.35)",
                borderRadius: 999,
                color: "var(--ink)",
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              Besøk {t.caseNavn?.toLowerCase()}.no ↗
            </a>
          </div>
        )}
        <div
          className="titem"
          style={{
            animationDelay: ".95s",
            display: "flex",
            gap: 16,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            paddingTop: 20,
          }}
        >
          <a
            href={`mailto:${selskap.epost}`}
            data-hover=""
            className="hov-fill"
            style={{
              display: "inline-block",
              padding: "18px 44px",
              background: "var(--ink)",
              color: "var(--ground)",
              fontWeight: 600,
              fontSize: 15,
              borderRadius: 999,
            }}
          >
            Snakk med oss om {t.tittel.toLowerCase()}
          </a>
          <button
            data-hover=""
            className="hov-outline"
            onClick={closeService}
            style={{
              display: "inline-block",
              padding: "18px 44px",
              background: "transparent",
              border: "1px solid rgba(var(--ink-rgb),.35)",
              borderRadius: 999,
              color: "var(--ink)",
              fontFamily: "var(--font-grotesk), sans-serif",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            ← Tilbake til siden
          </button>
        </div>
      </div>
    </div>
  );
}
