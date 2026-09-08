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
        // Menyen ligger fast over heroen, som er et mørkt bånd. En gradient
        // ut i ingenting virket da alt var mørkt, men på en lys side ville
        // blekket blitt usynlig mot filmen. Derfor en solid lys linje med
        // hårfin kant — lesbar over både video og papir.
        background: "rgba(var(--ground-rgb),.92)",
        backdropFilter: "saturate(1.6) blur(14px)",
        WebkitBackdropFilter: "saturate(1.6) blur(14px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <a
        href="#topp"
        data-hover=""
        className="logo-lockup"
        style={{
          // Grunnlinje, ikke senter: da hviler løvens poter på samme linje som
          // bokstavene, i stedet for at merket rager over og under tekstboksen.
          display: "flex",
          alignItems: "baseline",
          gap: 10,
          fontFamily: "var(--font-garamond), Georgia, serif",
          fontWeight: 700,
          fontSize: 19,
          letterSpacing: ".2em",
          whiteSpace: "nowrap",
          color: "var(--ink)",
        }}
      >
        <img
          src="/logo/crest-symbol.png"
          alt=""
          aria-hidden="true"
          width={869}
          height={662}
          style={{ height: 17, width: "auto", display: "block" }}
        />
        <span>
          CREST HOLDING
            <span style={{ color: "var(--accent)", fontSize: "0.58em", verticalAlign: "0.42em", letterSpacing: 0 }}>
              ®
            </span>
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
          style={{ color: "rgba(var(--ink-rgb),.7)" }}
        >
          Produkter
        </a>
        <a
          href="#tjenester"
          className="nl hov-nl"
          data-scramble=""
          data-hover=""
          style={{ color: "rgba(var(--ink-rgb),.7)" }}
        >
          Hva du får
        </a>
        <a
          href="#teknologi"
          className="nl hov-nl"
          data-scramble=""
          data-hover=""
          style={{ color: "rgba(var(--ink-rgb),.7)" }}
        >
          Teknologi
        </a>
        <a
          href="#modellen"
          className="nl hov-nl"
          data-scramble=""
          data-hover=""
          style={{ color: "rgba(var(--ink-rgb),.7)" }}
        >
          Modellen
        </a>
        <Link
          href="/blogg"
          className="nl hov-nl"
          data-scramble=""
          data-hover=""
          style={{ color: "rgba(var(--ink-rgb),.7)" }}
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
            border: "1px solid rgba(var(--ink-rgb),.3)",
            borderRadius: 999,
            color: "rgba(var(--ink-rgb),.8)",
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
            background: "var(--ink)",
            color: "var(--ground)",
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
