import { mute } from "./mute";

export default function Hero() {
  return (
    <header
      id="topp"
      style={{ position: "relative", height: "100vh", overflow: "hidden", background: "#0a0f16" }}
    >
      <video
        src="/uploads/Hero_video_Veo_-_sek_.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/uploads/hero-poster.png"
        ref={mute}
        style={{
          position: "absolute",
          inset: "-6%",
          width: "112%",
          height: "112%",
          objectFit: "cover",
        }}
        data-plx="-0.08"
      ></video>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(10,15,22,.5) 0%, rgba(10,15,22,.1) 45%, rgba(10,15,22,.92) 100%)",
        }}
      ></div>
      <div
        id="heroinner"
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          maxWidth: 1360,
          margin: "0 auto",
          width: "100%",
          padding: "96px 48px 48px",
          boxSizing: "border-box",
          willChange: "transform, opacity",
        }}
      >
        <div
          className="heroFade"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 12,
            letterSpacing: ".3em",
            textTransform: "uppercase",
            color: "rgba(242,239,233,.75)",
            animationDelay: ".2s",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 44,
              height: 1,
              background: "rgba(242,239,233,.5)",
            }}
          ></span>
          Programvarestudio · Norge
        </div>
        <h1
          id="herotitle"
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 900,
            fontSize: "clamp(44px, 6.6vw, 112px)",
            lineHeight: 0.96,
            letterSpacing: "-.03em",
            margin: "22px 0 0",
            textTransform: "uppercase",
            willChange: "transform",
          }}
        >
          <span className="wordmask">
            <span style={{ animationDelay: ".25s" }}>Vi</span>
          </span>{" "}
          <span className="wordmask">
            <span style={{ animationDelay: ".33s" }}>bygger</span>
          </span>
          <br />
          <span className="wordmask">
            <span style={{ animationDelay: ".41s" }}>digitale</span>
          </span>{" "}
          <span className="wordmask">
            <span
              style={{
                animationDelay: ".49s",
                color: "transparent",
                WebkitTextStroke: "1.5px #f2efe9",
              }}
            >
              produkter
            </span>
          </span>
          <br />
          <span className="wordmask">
            <span style={{ animationDelay: ".57s" }}>folk</span>
          </span>{" "}
          <span className="wordmask">
            <span style={{ animationDelay: ".65s" }}>faktisk</span>
          </span>{" "}
          <span className="wordmask">
            <span style={{ animationDelay: ".73s", color: "#8fb8e0" }}>bruker.</span>
          </span>
        </h1>
        <div
          className="heroFade"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 30,
            flexWrap: "wrap",
            marginTop: 44,
            animationDelay: ".9s",
          }}
        >
          <p
            style={{
              maxWidth: 460,
              fontSize: 17,
              lineHeight: 1.65,
              color: "rgba(242,239,233,.8)",
              margin: 0,
            }}
          >
            Fra idé til lansert produkt. Vi står bak sjøkart-appen Oystr og CRM-systemet Altiv — og
            vi er allerede i gang med det neste.
          </p>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a
              href="#produkter"
              data-hover=""
              data-magnet=""
              className="hov-fill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "18px 36px",
                background: "#f2efe9",
                color: "#0a0f16",
                fontWeight: 600,
                fontSize: 15,
                borderRadius: 999,
                whiteSpace: "nowrap",
              }}
            >
              Se hva vi har laget
            </a>
            <a
              href="#kontakt"
              data-hover=""
              data-magnet=""
              className="hov-circle"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                border: "1px solid rgba(242,239,233,.4)",
                borderRadius: "50%",
                color: "#f2efe9",
                fontSize: 18,
              }}
            >
              ↓
            </a>
          </div>
        </div>
        <div
          id="herostats"
          className="heroFade"
          style={{
            borderTop: "1px solid rgba(242,239,233,.15)",
            marginTop: 50,
            animationDelay: "1.1s",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 40,
          }}
        >
          <div style={{ padding: "22px 0", display: "flex", alignItems: "baseline", gap: 14 }}>
            <span
              data-count="2"
              data-pad="2"
              style={{ fontFamily: "var(--font-archivo), sans-serif", fontWeight: 800, fontSize: 30 }}
            >
              00
            </span>
            <span
              style={{
                fontSize: 13,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "rgba(242,239,233,.6)",
              }}
            >
              Egne produkter i drift
            </span>
          </div>
          <div
            style={{
              padding: "22px 0",
              display: "flex",
              alignItems: "baseline",
              gap: 14,
              borderLeft: "1px solid rgba(242,239,233,.15)",
              paddingLeft: 40,
            }}
          >
            <span
              data-count="100"
              data-suffix="%"
              style={{ fontFamily: "var(--font-archivo), sans-serif", fontWeight: 800, fontSize: 30 }}
            >
              0%
            </span>
            <span
              style={{
                fontSize: 13,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "rgba(242,239,233,.6)",
              }}
            >
              Norskutviklet
            </span>
          </div>
          <div
            style={{
              padding: "22px 0",
              display: "flex",
              alignItems: "baseline",
              gap: 14,
              borderLeft: "1px solid rgba(242,239,233,.15)",
              paddingLeft: 40,
            }}
          >
            <span style={{ fontFamily: "var(--font-archivo), sans-serif", fontWeight: 800, fontSize: 30 }}>
              Idé<span style={{ color: "#8fb8e0" }}>→</span>Drift
            </span>
            <span
              style={{
                fontSize: 13,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "rgba(242,239,233,.6)",
              }}
            >
              Hele løpet, ett team
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
