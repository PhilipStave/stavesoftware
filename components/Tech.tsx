"use client";

import { tekRad1, tekRad2 } from "@/lib/data";
import { mute } from "./mute";

export default function Tech({ openTech }: { openTech: (e: React.MouseEvent) => void }) {
  return (
    <section
      id="teknologi"
      data-skew=""
      style={{
        position: "relative",
        padding: "120px 0 130px",
        borderTop: "1px solid rgba(242,239,233,.08)",
        overflow: "hidden",
      }}
    >
      <video
        src="/uploads/Teknologi_seksjonen_bakgru.mp4"
        poster="/uploads/poster-teknologi.jpg"
        autoPlay
        muted
        loop
        playsInline
        ref={mute}
        style={{
          position: "absolute",
          inset: "-6%",
          width: "112%",
          height: "112%",
          objectFit: "cover",
          opacity: 0.3,
        }}
        data-plx="-0.05"
      ></video>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, #0a0f16 0%, rgba(10,15,22,.55) 50%, #0a0f16 100%)",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          maxWidth: 1360,
          margin: "0 auto",
          padding: "0 48px 50px",
          boxSizing: "border-box",
        }}
      >
        <div
          data-reveal=""
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <h2
            className="tw"
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontWeight: 900,
              fontSize: "clamp(40px, 5.6vw, 88px)",
              letterSpacing: "-.03em",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Teknologien bak<span className="twcaret" style={{ color: "#8fb8e0" }}>_</span>
          </h2>
          <span
            style={{
              fontSize: 12,
              letterSpacing: ".26em",
              color: "rgba(242,239,233,.55)",
              textTransform: "uppercase",
            }}
          >
            (Verktøy vi bygger med)
          </span>
        </div>
      </div>
      <div
        data-reveal=""
        style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(242,239,233,.12)",
          borderBottom: "1px solid rgba(242,239,233,.12)",
          padding: "26px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "marquee 34s linear infinite",
            whiteSpace: "nowrap",
            alignItems: "baseline",
          }}
        >
          {tekRad1.map((tk, i) => (
            <span
              key={i}
              style={{ display: "inline-flex", alignItems: "baseline", gap: 16, padding: "0 44px" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  fontSize: 34,
                  letterSpacing: "-.01em",
                }}
              >
                {tk.navn}
              </span>
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "rgba(242,239,233,.5)",
                }}
              >
                {tk.rolle}
              </span>
            </span>
          ))}
        </div>
      </div>
      <div
        data-reveal=""
        style={{
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(242,239,233,.12)",
          padding: "26px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "marqueeR 38s linear infinite",
            whiteSpace: "nowrap",
            alignItems: "baseline",
          }}
        >
          {tekRad2.map((tk, i) => (
            <span
              key={i}
              style={{ display: "inline-flex", alignItems: "baseline", gap: 16, padding: "0 44px" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  fontSize: 34,
                  letterSpacing: "-.01em",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(242,239,233,.75)",
                }}
              >
                {tk.navn}
              </span>
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "rgba(242,239,233,.5)",
                }}
              >
                {tk.rolle}
              </span>
            </span>
          ))}
        </div>
      </div>
      <div data-reveal="" style={{ position: "relative", textAlign: "center", padding: "70px 48px 0" }}>
        <button
          data-hover=""
          data-magnet=""
          className="hov-tech"
          onClick={openTech}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            padding: "20px 48px",
            background: "transparent",
            border: "1px solid rgba(242,239,233,.35)",
            borderRadius: 999,
            color: "#f2efe9",
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: ".08em",
            textTransform: "uppercase",
          }}
        >
          Utforsk hele stacken <span style={{ color: "#8fb8e0" }}>↗</span>
        </button>
      </div>
    </section>
  );
}
