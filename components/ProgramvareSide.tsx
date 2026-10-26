import Link from "next/link";
import { BRODTEKST, KNAPP, MERKELAPP, OVERSKRIFT, WRAP } from "@/components/holding-stil";
import { programvare } from "@/lib/programvare";
import { tjenesteSider } from "@/lib/tjenestesider";
import { finnTjenesteLenke } from "@/lib/tjenester-lenker";
import { kontakt } from "@/lib/holding";
import { selskap } from "@/lib/selskap";

// Crest Software, i samme rolige stil som resten av nettstedet.
//
// Den gamle utgaven var den tidligere forsiden: mørk, med video, egen
// musepeker, vannrett karusell og tre overlegg. Den ble bygget da dette var
// hele selskapet. Nå er Crest Software én avdeling, og siden skal handle om
// programvare og ingenting annet — ingen oppkjøp, ingen investorer, ingen
// andre avdelinger.

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

export default function ProgramvareSide() {
  const i = programvare;

  return (
    <>
      <header className="hsek" style={{ ...WRAP, padding: "150px 48px 0" }}>
        <div style={{ ...MERKELAPP, marginBottom: 24 }}>{i.hero.merkelapp}</div>
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
            {i.hero.knappKontakt}
          </a>
          <a
            href="#hva"
            className="hov-outline"
            style={{ ...KNAPP, border: "1px solid rgba(var(--ink-rgb),.4)", color: "var(--ink)" }}
          >
            {i.hero.knappArbeid}
          </a>
        </div>
      </header>

      <section id="hva" className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <div style={{ ...MERKELAPP, marginBottom: 18 }}>{i.hva.merkelapp}</div>
        <h2 style={{ ...OVERSKRIFT, marginBottom: 26 }}>{i.hva.tittel}</h2>
        <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 54px", maxWidth: 720 }}>{i.hva.ingress}</p>
        <div
          className="hgrid3"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "1fr", gap: 26 }}
        >
          {i.hva.punkter.map((p) => (
            <article key={p.navn} style={{ ...KORT, display: "flex", flexDirection: "column", gap: 12 }}>
              <h3 style={H3}>{p.navn}</h3>
              <p style={{ ...BRODTEKST, fontSize: 16, margin: 0 }}>{p.tekst}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tjenester" className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <div style={{ ...MERKELAPP, marginBottom: 18 }}>{i.tjenester.merkelapp}</div>
        <h2 style={{ ...OVERSKRIFT, marginBottom: 26 }}>{i.tjenester.tittel}</h2>
        <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 54px", maxWidth: 720 }}>{i.tjenester.ingress}</p>
        <div
          className="hgrid3"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "1fr", gap: 26 }}
        >
          {tjenesteSider.map((s) => {
            const lenke = finnTjenesteLenke(s.slug);
            return (
              <Link
                key={s.slug}
                href={lenke.href}
                className="hov-outline"
                style={{ ...KORT, display: "flex", flexDirection: "column", gap: 12, color: "var(--ink)" }}
              >
                <div style={{ ...MERKELAPP, fontSize: 11 }}>{lenke.navn}</div>
                <h3 style={H3}>{s.tittel}</h3>
                <p style={{ ...BRODTEKST, fontSize: 16, margin: 0, flex: 1 }}>{s.metaBeskrivelse}</p>
                <span style={{ color: "var(--accent)", fontWeight: 600, fontSize: 15 }}>{lenke.lenketekst} →</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
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

      <section id="bygget" className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <div style={{ ...MERKELAPP, marginBottom: 18 }}>{i.bygget.merkelapp}</div>
        <h2 style={{ ...OVERSKRIFT, marginBottom: 26 }}>{i.bygget.tittel}</h2>
        <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 54px", maxWidth: 720 }}>{i.bygget.ingress}</p>
        <div
          className="hgrid2"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridAutoRows: "1fr", gap: 26 }}
        >
          {i.bygget.punkter.map((p) => (
            <article key={p.navn} style={{ ...KORT, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ ...MERKELAPP, fontSize: 11 }}>{p.rolle}</div>
              <h3 style={{ ...H3, fontSize: 30 }}>{p.navn}</h3>
              <p style={{ ...BRODTEKST, fontSize: 16, margin: 0, flex: 1 }}>{p.tekst}</p>
              <a
                href={p.href}
                target="_blank"
                rel="noopener"
                className="hov-link"
                style={{ alignSelf: "flex-start", color: "var(--accent)", fontWeight: 600, fontSize: 15 }}
              >
                {p.lenketekst} ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <div
          className="hsplit"
          style={{ display: "grid", gridTemplateColumns: "minmax(220px, 340px) 1fr", gap: 60, alignItems: "start" }}
        >
          <div>
            <div style={{ ...MERKELAPP, marginBottom: 16 }}>{i.sporsmaal.merkelapp}</div>
            <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>{i.sporsmaal.tittel}</h2>
          </div>
          <div>
            {i.sporsmaal.punkter.map((p) => (
              <div key={p.spm} style={{ borderTop: "1px solid rgba(var(--ink-rgb),.14)", padding: "22px 0" }}>
                <h3 style={{ margin: "0 0 10px", fontSize: 18.5, fontWeight: 600, color: "var(--ink)" }}>{p.spm}</h3>
                <p style={{ ...BRODTEKST, fontSize: 16.5, margin: 0, maxWidth: 680 }}>{p.svar}</p>
              </div>
            ))}
          </div>
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
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>{i.kontakt.tittel}</h2>
          <div>
            <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 30px", maxWidth: 620 }}>{i.kontakt.tekst}</p>
            <a
              href={`mailto:${selskap.epost}?subject=${encodeURIComponent("Crest Software")}`}
              className="hov-fill"
              style={{ ...KNAPP, padding: "18px 40px", background: "var(--ink)", color: "var(--ground)", fontSize: 16 }}
            >
              {i.kontakt.knapp}
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
