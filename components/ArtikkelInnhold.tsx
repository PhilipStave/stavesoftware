import type { Blokk } from "@/lib/artikler";

// Rendrer innholdsblokkene i en artikkel. Hver blokktype har sin egen styling,
// hentet fra de samme verdiene som resten av siden bruker.
export default function ArtikkelInnhold({ innhold }: { innhold: Blokk[] }) {
  return (
    <>
      {innhold.map((b, i) => {
        if (b.type === "mellomtittel") {
          return (
            <h2
              key={i}
              data-reveal=""
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(26px, 3.2vw, 40px)",
                letterSpacing: "-.02em",
                lineHeight: 1.1,
                textTransform: "uppercase",
                margin: "64px 0 22px",
                color: "#f2efe9",
              }}
            >
              {b.tekst}
            </h2>
          );
        }
        if (b.type === "punktliste") {
          return (
            <ul
              key={i}
              data-reveal=""
              style={{ listStyle: "none", padding: 0, margin: "0 0 26px" }}
            >
              {b.punkter.map((p, j) => (
                <li
                  key={j}
                  style={{
                    position: "relative",
                    paddingLeft: 30,
                    marginBottom: 18,
                    color: "rgba(242,239,233,.78)",
                    fontSize: 17,
                    lineHeight: 1.75,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "0.72em",
                      width: 12,
                      height: 1,
                      background: "#8fb8e0",
                    }}
                  ></span>
                  {p}
                </li>
              ))}
            </ul>
          );
        }
        if (b.type === "faktaboks") {
          return (
            <aside
              key={i}
              data-reveal=""
              style={{
                borderLeft: "2px solid #8fb8e0",
                background: "rgba(143,184,224,.06)",
                padding: "26px 30px",
                margin: "36px 0",
                borderRadius: "0 6px 6px 0",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: ".26em",
                  textTransform: "uppercase",
                  color: "#8fb8e0",
                  marginBottom: 12,
                }}
              >
                {b.tittel}
              </div>
              <p
                style={{
                  margin: 0,
                  color: "rgba(242,239,233,.8)",
                  fontSize: 16,
                  lineHeight: 1.7,
                }}
              >
                {b.tekst}
              </p>
            </aside>
          );
        }
        return (
          <p
            key={i}
            data-reveal=""
            style={{
              color: "rgba(242,239,233,.78)",
              fontSize: 17,
              lineHeight: 1.8,
              margin: "0 0 24px",
            }}
          >
            {b.tekst}
          </p>
        );
      })}
    </>
  );
}
