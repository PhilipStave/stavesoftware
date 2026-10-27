import Link from "next/link";
import { BRODTEKST, KNAPP, MERKELAPP, OVERSKRIFT, WRAP } from "@/components/holding-stil";
import { type Avdeling, avdelingssider } from "@/lib/avdelinger";
import { kontakt } from "@/lib/holding";

// Felles oppsett for avdelingssidene: Commerce, Services og Growth.
// Crest Software har sin egen side med egne seksjoner (teknologi, tjenester,
// hva vi har bygget) og bruker ProgramvareSide i stedet.
//
// Samme lyse stil som resten av nettstedet, samme seksjonsrekkefølge, slik at
// det er ett nettsted og ikke fire.

const KORT = {
  background: "var(--surface)",
  border: "1px solid var(--line)",
  borderRadius: 10,
  padding: "32px 32px",
};

const H3 = {
  fontFamily: "var(--font-garamond), Georgia, serif",
  fontWeight: 600,
  fontSize: 26,
  margin: 0,
  lineHeight: 1.2,
  color: "var(--ink)",
};

const ALLE = [
  { slug: "crest-software", navn: "Crest Software", rolle: "Bygger systemene" },
  ...avdelingssider.map((a) => ({ slug: a.slug, navn: a.navn, rolle: a.rolle })),
];

export default function AvdelingSide({ avdeling }: { avdeling: Avdeling }) {
  const i = avdeling;
  const andre = ALLE.filter((a) => a.slug !== i.slug);

  return (
    <>
      <header className="hsek" style={{ ...WRAP, padding: "150px 48px 0" }}>
        <div style={{ ...MERKELAPP, marginBottom: 24 }}>En avdeling i Crest Holding</div>
        <h1
          style={{
            fontFamily: "var(--font-garamond), Georgia, serif",
            fontWeight: 600,
            fontSize: "clamp(38px, 5.4vw, 74px)",
            lineHeight: 1.05,
            letterSpacing: "-.015em",
            margin: "0 0 28px",
            maxWidth: "17ch",
            color: "var(--ink)",
          }}
        >
          {i.hero.tittel}
        </h1>
        <p style={{ ...BRODTEKST, fontSize: 19, maxWidth: 680, margin: "0 0 40px" }}>{i.hero.ingress}</p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#contact" className="hov-fill" style={{ ...KNAPP, background: "var(--ink)", color: "var(--ground)" }}>
            Ta kontakt
          </a>
          <a
            href="#hva"
            className="hov-outline"
            style={{ ...KNAPP, border: "1px solid rgba(var(--ink-rgb),.4)", color: "var(--ink)" }}
          >
            Se hva vi gjør
          </a>
        </div>
      </header>

      <section id="hva" className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <div style={{ ...MERKELAPP, marginBottom: 18 }}>{i.navn}</div>
        <h2 style={{ ...OVERSKRIFT, marginBottom: 26 }}>{i.hva.tittel}</h2>
        <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 54px", maxWidth: 720 }}>{i.hva.ingress}</p>
        <div
          className={i.hva.punkter.length > 4 ? "hgrid3" : "hgrid2"}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${i.hva.punkter.length > 4 ? 3 : 2}, 1fr)`,
            gridAutoRows: "1fr",
            gap: 26,
          }}
        >
          {i.hva.punkter.map((p) => (
            <article key={p.navn} style={{ ...KORT, display: "flex", flexDirection: "column", gap: 12 }}>
              <h3 style={H3}>{p.navn}</h3>
              <p style={{ ...BRODTEKST, fontSize: 16, margin: 0 }}>{p.tekst}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="slik" className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <div
          className="hsplit"
          style={{ display: "grid", gridTemplateColumns: "minmax(220px, 340px) 1fr", gap: 60, alignItems: "start" }}
        >
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>{i.slik.tittel}</h2>
          <div>
            {i.slik.punkter.map((p, n) => (
              <div
                key={p.navn}
                style={{ borderTop: "1px solid rgba(var(--ink-rgb),.14)", padding: n ? "24px 0" : "0 0 24px" }}
              >
                <h3 style={{ margin: "0 0 10px", fontSize: 19, fontWeight: 600, color: "var(--ink)" }}>{p.navn}</h3>
                <p style={{ ...BRODTEKST, fontSize: 17, margin: 0, maxWidth: 680 }}>{p.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {i.bevis && (
        <section className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
          <div style={{ ...KORT, padding: "44px 44px", maxWidth: 820 }}>
            <div style={{ ...MERKELAPP, fontSize: 11, marginBottom: 14 }}>Bevis, ikke løfter</div>
            <h2 style={{ ...H3, fontSize: 32, marginBottom: 16 }}>{i.bevis.tittel}</h2>
            <p style={{ ...BRODTEKST, fontSize: 17, margin: 0 }}>{i.bevis.tekst}</p>
            {i.bevis.href && (
              <p style={{ margin: "22px 0 0" }}>
                {i.bevis.href.startsWith("/") ? (
                  <Link
                    href={i.bevis.href}
                    className="hov-link"
                    style={{ color: "var(--accent)", fontWeight: 600, fontSize: 15 }}
                  >
                    {i.bevis.lenketekst} →
                  </Link>
                ) : (
                  <a
                    href={i.bevis.href}
                    target="_blank"
                    rel="noopener"
                    className="hov-link"
                    style={{ color: "var(--accent)", fontWeight: 600, fontSize: 15 }}
                  >
                    {i.bevis.lenketekst} ↗
                  </a>
                )}
              </p>
            )}
          </div>
        </section>
      )}

      <section id="faq" className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <div
          className="hsplit"
          style={{ display: "grid", gridTemplateColumns: "minmax(220px, 340px) 1fr", gap: 60, alignItems: "start" }}
        >
          <div>
            <div style={{ ...MERKELAPP, marginBottom: 16 }}>Spørsmål og svar</div>
            <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>Det folk spør om</h2>
          </div>
          <div>
            {i.sporsmaal.map((p) => (
              <div key={p.spm} style={{ borderTop: "1px solid rgba(var(--ink-rgb),.14)", padding: "22px 0" }}>
                <h3 style={{ margin: "0 0 10px", fontSize: 18.5, fontWeight: 600, color: "var(--ink)" }}>{p.spm}</h3>
                <p style={{ ...BRODTEKST, fontSize: 16.5, margin: 0, maxWidth: 680 }}>{p.svar}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="andre" className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)", marginBottom: 32 }}>De andre avdelingene</h2>
        <div
          className="hgrid3"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "1fr", gap: 26 }}
        >
          {andre.map((a) => (
            <Link
              key={a.slug}
              href={`/${a.slug}`}
              className="hov-outline"
              style={{ ...KORT, padding: "28px 30px", display: "flex", flexDirection: "column", gap: 10, color: "var(--ink)" }}
            >
              <div style={{ ...MERKELAPP, fontSize: 11 }}>{a.rolle}</div>
              <h3 style={{ ...H3, fontSize: 24, flex: 1 }}>{a.navn}</h3>
              <span style={{ color: "var(--accent)", fontWeight: 600, fontSize: 15 }}>Se avdelingen →</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="hsek" style={{ ...WRAP, padding: "110px 48px 100px" }}>
        <div
          className="hsplit"
          style={{
            borderTop: "1px solid rgba(var(--ink-rgb),.14)",
            paddingTop: 60,
            display: "grid",
            gridTemplateColumns: "minmax(220px, 340px) 1fr",
            gap: 60,
            alignItems: "start",
          }}
        >
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>Ta kontakt</h2>
          <div>
            <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 30px", maxWidth: 620 }}>
              Skriv et par linjer om hva det gjelder, så svarer vi samme uke — også når svaret er at vi ikke er rett
              sted.
            </p>
            <a
              href={`mailto:${kontakt.adresser[0]}?subject=${encodeURIComponent(i.navn)}`}
              className="hov-fill"
              style={{ ...KNAPP, padding: "18px 40px", background: "var(--ink)", color: "var(--ground)", fontSize: 16 }}
            >
              Skriv til oss
            </a>
            <p style={{ margin: "26px 0 0", fontSize: 15, color: "rgba(var(--ink-rgb),.6)" }}>
              {kontakt.adresser.map((e, n) => (
                <span key={e}>
                  {n > 0 && <span aria-hidden="true"> · </span>}
                  <a href={`mailto:${e}`} className="tekstlenke" style={{ color: "rgba(var(--ink-rgb),.72)" }}>
                    {e}
                  </a>
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
