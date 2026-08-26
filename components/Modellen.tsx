// Pitch-seksjonen for eierandelsmodellen. Kjernen er én animert kurve som
// tegner seg selv ved scroll — din verdi og vår verdi er samme linje.
export default function Modellen() {
  return (
    <section
      id="modellen"
      data-skew=""
      style={{
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(242,239,233,.08)",
      }}
    >
      <div
        className="mwrap"
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
            marginBottom: 26,
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
            Vi vinner når{" "}
            <span style={{ color: "transparent", WebkitTextStroke: "1.5px #f2efe9" }}>du</span>{" "}
            <span style={{ color: "#8fb8e0" }}>vinner.</span>
            <span className="twcaret" style={{ color: "#8fb8e0" }}>_</span>
          </h2>
          <span
            style={{
              fontSize: 12,
              letterSpacing: ".26em",
              color: "rgba(242,239,233,.55)",
              textTransform: "uppercase",
            }}
          >
            (Modellen)
          </span>
        </div>
        <p
          data-reveal=""
          style={{
            color: "rgba(242,239,233,.75)",
            fontSize: 18,
            lineHeight: 1.7,
            maxWidth: 600,
            margin: "0 0 60px",
          }}
        >
          Ingen faktura å betale. Ingen timer å telle. Vi gjør jobben, tar en eierandel — og
          tjener først den dagen selskapet ditt er verdt mer. Det er hele forretningsmodellen
          vår, og den får oss til å oppføre oss deretter.
        </p>

        <div data-reveal="" style={{ position: "relative" }}>
          <svg
            viewBox="0 0 1000 380"
            style={{ display: "block", width: "100%", height: "auto" }}
            aria-label="Én kurve som stiger — din verdi og vår verdi følger hverandre"
            role="img"
          >
            <defs>
              <linearGradient id="mfill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8fb8e0" stopOpacity=".22" />
                <stop offset="100%" stopColor="#8fb8e0" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="mline" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(242,239,233,.55)" />
                <stop offset="100%" stopColor="#8fb8e0" />
              </linearGradient>
            </defs>
            {[80, 160, 240, 320].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="1000"
                y2={y}
                stroke="rgba(242,239,233,.07)"
                strokeWidth="1"
              />
            ))}
            <path
              className="growfill"
              d="M 20 340 C 160 334, 250 322, 350 300 C 460 276, 540 236, 650 178 C 760 120, 870 74, 968 46 L 968 380 L 20 380 Z"
              fill="url(#mfill)"
            />
            <path
              className="growpath"
              pathLength={1}
              d="M 20 340 C 160 334, 250 322, 350 300 C 460 276, 540 236, 650 178 C 760 120, 870 74, 968 46"
              fill="none"
              stroke="url(#mline)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {[
              { x: 210, y: 327, t: "Vi bygger" },
              { x: 500, y: 253, t: "Vi selger" },
              { x: 790, y: 108, t: "Du vokser" },
            ].map((p) => (
              <g key={p.t} className="growmark">
                <circle cx={p.x} cy={p.y} r="5" fill="#0a0f16" stroke="#8fb8e0" strokeWidth="2" />
                <text
                  x={p.x}
                  y={p.y + 34}
                  textAnchor="middle"
                  fill="rgba(242,239,233,.55)"
                  style={{
                    fontFamily: "var(--font-grotesk), sans-serif",
                    fontSize: 13,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                  }}
                >
                  {p.t}
                </text>
              </g>
            ))}
            <g className="growdot">
              <circle className="growpulse" cx="968" cy="46" r="7" fill="rgba(143,184,224,.35)" />
              <circle cx="968" cy="46" r="6" fill="#8fb8e0" />
            </g>
          </svg>
          <p
            style={{
              textAlign: "center",
              fontSize: 13,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "rgba(242,239,233,.55)",
              margin: "26px 0 0",
            }}
          >
            Din verdi og vår verdi er <span style={{ color: "#8fb8e0" }}>samme kurve</span>
          </p>
        </div>

        <div
          className="mgrid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 40,
            marginTop: 80,
          }}
        >
          {[
            {
              nr: "/01",
              tittel: "Samme side av bordet",
              tekst:
                "Et byrå tjener på timene dine — jo lenger det tar, jo bedre for dem. Vi tjener på resultatet ditt. Det endrer hvilke råd du får.",
            },
            {
              nr: "/02",
              tittel: "Du bygger selskapet",
              tekst:
                "Kundene, retningen og beslutningene er dine. Vi tar salg, produkt, teknologi og alt det praktiske — så tiden din går til det bare du kan gjøre.",
            },
            {
              nr: "/03",
              tittel: "Risikoen er vår også",
              tekst:
                "Leverer vi dårlig, er eierandelen vår verdiløs. Ingen leverandør som fakturerer deg har det insentivet. Derfor sier vi også nei til det vi ikke tror på.",
            },
          ].map((p) => (
            <div
              key={p.nr}
              data-reveal=""
              style={{ borderTop: "1px solid rgba(242,239,233,.15)", paddingTop: 24 }}
            >
              <div
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  fontSize: 15,
                  color: "#8fb8e0",
                  marginBottom: 14,
                }}
              >
                {p.nr}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  fontSize: 22,
                  letterSpacing: "-.01em",
                  textTransform: "uppercase",
                  margin: "0 0 12px",
                }}
              >
                {p.tittel}
              </h3>
              <p
                style={{
                  color: "rgba(242,239,233,.65)",
                  lineHeight: 1.7,
                  fontSize: 15,
                  margin: 0,
                }}
              >
                {p.tekst}
              </p>
            </div>
          ))}
        </div>

        <div data-reveal="" style={{ textAlign: "center", marginTop: 70 }}>
          <a
            href="#kontakt"
            data-hover=""
            data-magnet=""
            className="hov-fill"
            style={{
              display: "inline-block",
              padding: "20px 48px",
              background: "#f2efe9",
              color: "#0a0f16",
              fontWeight: 600,
              fontSize: 16,
              borderRadius: 999,
            }}
          >
            Fortell oss hva du bygger
          </a>
        </div>
      </div>
    </section>
  );
}
