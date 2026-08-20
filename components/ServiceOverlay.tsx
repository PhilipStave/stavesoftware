"use client";

import { tjenester } from "@/lib/data";

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
      id="serviceoverlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "#0d1420",
        color: "#f2efe9",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(143,184,224,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(143,184,224,.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      ></div>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "22px 48px",
          background: "linear-gradient(180deg, #0d1420 55%, rgba(13,20,32,0))",
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
          TJENESTER<span style={{ color: "#8fb8e0" }}>/</span>
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
            background: "#f2efe9",
            color: "#0a0f16",
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
            color: "#8fb8e0",
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
          <span style={{ color: "transparent", WebkitTextStroke: "1.5px #f2efe9" }}>.</span>
        </h2>
        <p
          className="titem"
          style={{
            animationDelay: ".55s",
            color: "rgba(242,239,233,.65)",
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
              <span style={{ color: "rgba(242,239,233,.65)", fontSize: 15, lineHeight: 1.6 }}>
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
              borderTop: "1px solid rgba(242,239,233,.12)",
              paddingTop: 34,
              marginBottom: 64,
            }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: ".26em",
                textTransform: "uppercase",
                color: "rgba(242,239,233,.55)",
              }}
            >
              (Se det i praksis)
            </span>
            <span
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 900,
                fontSize: 24,
                textTransform: "uppercase",
                letterSpacing: "-.01em",
              }}
            >
              {t.caseNavn}
            </span>
            <span style={{ color: "rgba(242,239,233,.65)", fontSize: 15 }}>{t.caseTekst}</span>
            <a
              href={t.caseUrl}
              target="_blank"
              data-hover=""
              className="hov-outline"
              style={{
                display: "inline-block",
                padding: "12px 28px",
                border: "1px solid rgba(242,239,233,.35)",
                borderRadius: 999,
                color: "#f2efe9",
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
            href="mailto:post@stavesoftware.no"
            data-hover=""
            className="hov-fill"
            style={{
              display: "inline-block",
              padding: "18px 44px",
              background: "#f2efe9",
              color: "#0a0f16",
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
              border: "1px solid rgba(242,239,233,.35)",
              borderRadius: 999,
              color: "#f2efe9",
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
