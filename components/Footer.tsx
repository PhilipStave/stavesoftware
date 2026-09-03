import Link from "next/link";
import { mute } from "./mute";
import { selskapslinje } from "@/lib/selskap";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid rgba(242,239,233,.1)",
        overflow: "hidden",
      }}
    >
      <video
        src="/uploads/Footer_video_bak_den_store.mp4"
        poster="/uploads/poster-footer.jpg"
        autoPlay
        muted
        loop
        playsInline
        ref={mute}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.4,
        }}
      ></video>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, #0a0f16 0%, rgba(10,15,22,.35) 60%, rgba(10,15,22,.55) 100%)",
        }}
      ></div>
      <div
        className="fwrap"
        style={{
          position: "relative",
          maxWidth: 1360,
          margin: "0 auto",
          padding: "40px 48px 0",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", gap: 28, fontSize: 14, flexWrap: "wrap" }}>
          <Link href="/blogg" data-hover="" className="hov-link" style={{ color: "rgba(242,239,233,.6)" }}>
            Blogg
          </Link>
          <Link href="/vilkar" data-hover="" className="hov-link" style={{ color: "rgba(242,239,233,.6)" }}>
            Vilkår
          </Link>
          <Link href="/personvern" data-hover="" className="hov-link" style={{ color: "rgba(242,239,233,.6)" }}>
            Personvern
          </Link>
          <a
            href="https://www.oystr.no"
            target="_blank"
            data-hover=""
            className="hov-link"
            style={{ color: "rgba(242,239,233,.6)" }}
          >
            oystr.no ↗
          </a>
          <a
            href="https://altiv.no"
            target="_blank"
            data-hover=""
            className="hov-link"
            style={{ color: "rgba(242,239,233,.6)" }}
          >
            altiv.no ↗
          </a>
        </div>
        <span style={{ color: "rgba(242,239,233,.4)", fontSize: 13 }}>
          {selskapslinje}
        </span>
      </div>
      {/* Løvemerket over ordet, slik selve logoen er bygget opp. Merket tåler
          litt mer tyngde enn ordet under, ellers forsvinner manken. */}
      <img
        src="/logo/crest-symbol.png"
        alt=""
        aria-hidden="true"
        width={869}
        height={662}
        style={{
          position: "relative",
          display: "block",
          margin: "44px auto 0",
          width: "clamp(78px, 9vw, 132px)",
          height: "auto",
          opacity: 0.3,
          userSelect: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          fontFamily: "var(--font-archivo), sans-serif",
          fontWeight: 900,
          fontSize: "clamp(70px, 12.5vw, 220px)",
          letterSpacing: "-.02em",
          lineHeight: 0.8,
          textAlign: "center",
          textTransform: "uppercase",
          color: "rgba(242,239,233,.22)",
          marginTop: 16,
          paddingBottom: "0.08em",
          userSelect: "none",
        }}
      >
        Crest
      </div>
    </footer>
  );
}
