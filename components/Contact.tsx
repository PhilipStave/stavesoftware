import { mute } from "./mute";

export default function Contact() {
  return (
    <section
      id="kontakt"
      data-skew=""
      style={{
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        padding: "150px 48px",
        borderTop: "1px solid rgba(242,239,233,.08)",
      }}
    >
      <video
        src="/uploads/Kontakt_seksjonen_Dark_moody_p.mp4"
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
          opacity: 0.28,
        }}
        data-plx="-0.05"
      ></video>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 50%, rgba(10,15,22,.55), #0a0f16 78%)",
        }}
      ></div>
      <div style={{ position: "relative" }}>
        <div
          data-reveal=""
          style={{
            fontSize: 12,
            letterSpacing: ".3em",
            textTransform: "uppercase",
            color: "rgba(242,239,233,.6)",
            marginBottom: 30,
          }}
        >
          (Kontakt)
        </div>
        <h2
          data-reveal=""
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 900,
            fontSize: "clamp(44px, 7vw, 120px)",
            letterSpacing: "-.03em",
            margin: "0 0 26px",
            textTransform: "uppercase",
            lineHeight: 0.98,
          }}
        >
          Gode produkter
          <br />
          <span style={{ color: "transparent", WebkitTextStroke: "1.5px #f2efe9" }}>
            tar tid å bygge.
          </span>
        </h2>
        <p
          data-reveal=""
          style={{
            color: "rgba(242,239,233,.75)",
            fontSize: 18,
            maxWidth: 480,
            margin: "0 auto 44px",
            lineHeight: 1.65,
          }}
        >
          Vi bruker den tiden på våre egne produkter — og på å gjøre dem skikkelig bra. Lurer du på
          noe, er det bare å si hei.
        </p>
        <a
          data-reveal=""
          data-hover=""
          data-magnet=""
          className="hov-fill"
          href="mailto:post@stavesoftware.no"
          style={{
            display: "inline-block",
            padding: "20px 50px",
            background: "#f2efe9",
            color: "#0a0f16",
            fontWeight: 600,
            fontSize: 17,
            borderRadius: 999,
          }}
        >
          post@stavesoftware.no
        </a>
        <p
          data-reveal=""
          style={{ color: "rgba(242,239,233,.5)", fontSize: 14, margin: "28px 0 0" }}
        >
          Utvikler eller designer som vil bygge produkter som betyr noe? Vi vil gjerne høre fra deg
          også.
        </p>
      </div>
    </section>
  );
}
