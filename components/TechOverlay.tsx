"use client";

import { tekGrupper } from "@/lib/data";

export default function TechOverlay({ closeTech }: { closeTech: () => void }) {
  return (
    <div
      className="band"
      id="techoverlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "var(--sunk)",
        color: "var(--ink)",
        overflowY: "auto",
      }}
    >
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
          }}
        >
          STACKEN<span style={{ color: "var(--accent)" }}>/</span>ALTIV &amp; OYSTR
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
          <span style={{ color: "transparent", WebkitTextStroke: "1.5px var(--ink)" }}>med.</span>
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
                  color: "var(--accent)",
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
                <span style={{ color: "rgba(var(--ink-rgb),.65)", fontSize: 15, lineHeight: 1.6 }}>
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
