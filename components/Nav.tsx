"use client";

import Link from "next/link";

export default function Nav({
  soundLabel,
  toggleSound,
}: {
  soundLabel: string;
  toggleSound: () => void;
}) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 48px",
        background: "linear-gradient(180deg, rgba(10,15,22,.75), rgba(10,15,22,0))",
      }}
    >
      <a
        href="#topp"
        data-hover=""
        style={{
          display: "flex",
          alignItems: "center",
          gap: 11,
          fontFamily: "var(--font-archivo), sans-serif",
          fontWeight: 900,
          fontSize: 16,
          letterSpacing: ".14em",
          color: "#f2efe9",
        }}
      >
        <img
          src="/logo/crest-symbol.png"
          alt=""
          aria-hidden="true"
          width={869}
          height={662}
          style={{ height: 26, width: "auto", display: "block" }}
        />
        <span>
          CREST HOLDING<span style={{ color: "#8fb8e0" }}>®</span>
        </span>
      </a>
      <div
        id="navlinks"
        style={{
          display: "flex",
          gap: 36,
          alignItems: "center",
          fontSize: 13,
          letterSpacing: ".1em",
          textTransform: "uppercase",
        }}
      >
        <a
          href="#produkter"
          className="nl hov-nl"
          data-scramble=""
          data-hover=""
          style={{ color: "rgba(242,239,233,.7)" }}
        >
          Produkter
        </a>
        <a
          href="#tjenester"
          className="nl hov-nl"
          data-scramble=""
          data-hover=""
          style={{ color: "rgba(242,239,233,.7)" }}
        >
          Hva du får
        </a>
        <a
          href="#teknologi"
          className="nl hov-nl"
          data-scramble=""
          data-hover=""
          style={{ color: "rgba(242,239,233,.7)" }}
        >
          Teknologi
        </a>
        <a
          href="#modellen"
          className="nl hov-nl"
          data-scramble=""
          data-hover=""
          style={{ color: "rgba(242,239,233,.7)" }}
        >
          Modellen
        </a>
        <Link
          href="/blogg"
          className="nl hov-nl"
          data-scramble=""
          data-hover=""
          style={{ color: "rgba(242,239,233,.7)" }}
        >
          Blogg
        </Link>
        <button
          id="soundbtn"
          data-hover=""
          onClick={toggleSound}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 18px",
            background: "transparent",
            border: "1px solid rgba(242,239,233,.3)",
            borderRadius: 999,
            color: "rgba(242,239,233,.8)",
            fontFamily: "var(--font-grotesk), sans-serif",
            fontSize: 12,
            letterSpacing: ".14em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ display: "inline-flex", gap: 2.5, alignItems: "flex-end", height: 12 }}>
            <span className="sbar" style={{ width: 2.5, height: 5, background: "currentColor" }}></span>
            <span className="sbar" style={{ width: 2.5, height: 10, background: "currentColor" }}></span>
            <span className="sbar" style={{ width: 2.5, height: 7, background: "currentColor" }}></span>
          </span>
          {soundLabel}
        </button>
        <a
          href="#kontakt"
          data-hover=""
          data-magnet=""
          className="hov-fill"
          style={{
            display: "inline-block",
            padding: "12px 26px",
            background: "#f2efe9",
            color: "#0a0f16",
            fontWeight: 600,
            borderRadius: 999,
            letterSpacing: ".06em",
          }}
        >
          Ta kontakt
        </a>
      </div>
    </nav>
  );
}
