"use client";

import { tjenester } from "@/lib/data";
import { mute } from "./mute";

export default function Services({
  openService,
}: {
  openService: (e: React.MouseEvent, index: number) => void;
}) {
  return (
    <section
      id="tjenester"
      data-skew=""
      style={{ position: "relative", color: "#f2efe9", overflow: "hidden" }}
    >
      <video
        src="/uploads/hva-vi-kan-bygge-bakgrunn.mp4"
        poster="/uploads/poster-tjenester.jpg"
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
          opacity: 0.45,
        }}
        data-plx="-0.05"
      ></video>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, #0a0f16 0%, rgba(10,15,22,.45) 50%, #0a0f16 100%)",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          maxWidth: 1360,
          margin: "0 auto",
          padding: "130px 48px",
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
            marginBottom: 60,
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
            Hva vi kan bygge<span className="twcaret" style={{ color: "#8fb8e0" }}>_</span>
          </h2>
          <span
            style={{
              fontSize: 12,
              letterSpacing: ".26em",
              color: "rgba(242,239,233,.55)",
              textTransform: "uppercase",
            }}
          >
            (Tjenester)
          </span>
        </div>
        <div style={{ borderBottom: "1px solid rgba(242,239,233,.14)" }}>
          {tjenester.map((t, i) => (
            <div
              key={t.nr}
              data-reveal=""
              data-hover=""
              className="srow"
              onClick={(e) => openService(e, i)}
              style={{
                display: "grid",
                gridTemplateColumns: "90px 1fr 1.3fr 60px",
                gap: 30,
                alignItems: "center",
                padding: "38px 10px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  fontSize: 16,
                  color: "#8fb8e0",
                }}
              >
                {t.nr}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(22px, 2.4vw, 34px)",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "-.01em",
                }}
              >
                {t.tittel}
              </h3>
              <p
                style={{
                  color: "rgba(242,239,233,.65)",
                  lineHeight: 1.6,
                  fontSize: 15,
                  margin: 0,
                }}
              >
                {t.tekst}
              </p>
              <span
                className="srow-arrow"
                style={{ fontSize: 26, color: "#8fb8e0", textAlign: "right" }}
              >
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
