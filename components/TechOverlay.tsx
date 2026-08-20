"use client";

import { tekGrupper } from "@/lib/data";

export default function TechOverlay({ closeTech }: { closeTech: () => void }) {
  return (
    <div
      id="techoverlay"
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
          }}
        >
          STACKEN<span style={{ color: "#8fb8e0" }}>/</span>ALTIV &amp; OYSTR
        </span>
        <button
          data-hover=""
          data-magnet=""
          className="hov-fill"
          onClick={closeTech}
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
          (Teknologi-arkivet)
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
          Alt vi bygger{" "}
          <span style={{ color: "transparent", WebkitTextStroke: "1.5px #f2efe9" }}>med.</span>
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
          Hele verktøykassen bak Altiv og Oystr — fra koden i bunn til driften som holder alt i
          lufta.
        </p>
        {tekGrupper.map((g) => (
          <div key={g.nr} className="titem" style={{ animationDelay: g.delay, marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 8 }}>
              <span
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 900,
                  fontSize: 15,
                  color: "#8fb8e0",
                }}
              >
                {g.nr}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(24px, 3vw, 40px)",
                  letterSpacing: "-.01em",
                  margin: 0,
                  textTransform: "uppercase",
                }}
              >
                {g.tittel}
              </h3>
            </div>
            {g.rader.map((r) => (
              <div
                key={r.navn}
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
                  {r.navn}
                </span>
                <span style={{ color: "rgba(242,239,233,.65)", fontSize: 15, lineHeight: 1.6 }}>
                  {r.tekst}
                </span>
              </div>
            ))}
          </div>
        ))}
        <div className="titem" style={{ animationDelay: "1.3s", textAlign: "center", paddingTop: 20 }}>
          <button
            data-hover=""
            data-magnet=""
            className="hov-outline"
            onClick={closeTech}
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
