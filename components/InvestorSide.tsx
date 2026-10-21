import Link from "next/link";
import { avdelinger, kontakt, meny } from "@/lib/holding";
import { investor } from "@/lib/investor";
import { selskap } from "@/lib/selskap";
import { BRODTEKST, HoldingBunn, KNAPP, Lockup, MERKELAPP, OVERSKRIFT, WRAP } from "@/components/holding-stil";

// Investorsiden. Samme lyse tema og samme typografi som forsiden, men uten
// bilde: toppen er ren tekst, fordi en side som ber om penger ikke skal
// begynne med et postkort.
//
// Det som bevisst IKKE står her: verdsettelse, eierandel, prognoser og
// avkastningstall. Begrunnelsen står i lib/investor.ts. Avdelingene gjentas i
// kort form fra forsidens innhold — én kilde, så de ikke kan si to ting.

export default function InvestorSide() {
  return (
    <div lang="en" className="lys" style={{ minHeight: "100vh" }}>
      <nav
        className="hnav"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          padding: "26px 48px",
          borderBottom: "1px solid rgba(var(--ink-rgb),.1)",
        }}
      >
        <Link href="/" aria-label={meny.hjem}>
          <Lockup />
        </Link>
        <div
          className="hnav-lenker"
          style={{
            display: "flex",
            gap: 34,
            alignItems: "center",
            fontSize: 13,
            letterSpacing: ".14em",
            textTransform: "uppercase",
          }}
        >
          <Link href="/#what-we-do" className="hov-nl" style={{ color: "rgba(var(--ink-rgb),.75)" }}>
            {meny.slikJobberVi}
          </Link>
          <Link href="/#departments" className="hov-nl" style={{ color: "rgba(var(--ink-rgb),.75)" }}>
            {meny.avdelinger}
          </Link>
          <a
            href="#contact"
            className="hov-fill"
            style={{
              padding: "12px 26px",
              border: "1px solid rgba(var(--ink-rgb),.35)",
              borderRadius: 999,
              color: "var(--ink)",
              letterSpacing: ".1em",
            }}
          >
            {meny.kontakt}
          </a>
        </div>
      </nav>

      <header className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <div style={{ ...MERKELAPP, marginBottom: 26 }}>{investor.overtittel}</div>
        <h1
          style={{
            fontFamily: "var(--font-garamond), Georgia, serif",
            fontWeight: 600,
            fontSize: "clamp(38px, 5.4vw, 74px)",
            lineHeight: 1.05,
            letterSpacing: "-.015em",
            margin: "0 0 28px",
            maxWidth: "18ch",
            color: "var(--ink)",
          }}
        >
          {investor.tittel}
        </h1>
        <p style={{ ...BRODTEKST, fontSize: 19, maxWidth: 680, margin: 0 }}>{investor.ingress}</p>
      </header>

      <section className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <div
          className="hsplit"
          style={{ display: "grid", gridTemplateColumns: "minmax(220px, 340px) 1fr", gap: 60, alignItems: "start" }}
        >
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>{investor.tese.tittel}</h2>
          <div>
            {investor.tese.avsnitt.map((a, i) => (
              <p key={i} style={{ ...BRODTEKST, fontSize: 18, margin: i ? "22px 0 0" : 0, maxWidth: 680 }}>
                {a}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Avdelingene i kort form: rollen og stikkordene, ikke hele teksten.
          Den som vil ha mer, går til forsiden. */}
      <section className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <h2 style={{ ...OVERSKRIFT, marginBottom: 26 }}>{investor.mekanisme.tittel}</h2>
        <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 54px", maxWidth: 720 }}>{investor.mekanisme.ingress}</p>
        <div className="hgrid2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40 }}>
          {avdelinger.punkter.map((a) => (
            <div key={a.navn} style={{ borderTop: "1px solid rgba(var(--ink-rgb),.2)", paddingTop: 22 }}>
              <div style={{ ...MERKELAPP, fontSize: 11, marginBottom: 12 }}>{a.rolle}</div>
              <h3
                style={{
                  fontFamily: "var(--font-garamond), Georgia, serif",
                  fontWeight: 600,
                  fontSize: 26,
                  margin: "0 0 10px",
                  color: "var(--ink)",
                }}
              >
                {a.navn}
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "rgba(var(--ink-rgb),.6)" }}>
                {a.stikkord.join(" · ")}
              </p>
            </div>
          ))}
        </div>
        <Link
          href="/#departments"
          className="hov-link"
          style={{ display: "inline-block", marginTop: 40, color: "var(--accent)", fontWeight: 600, fontSize: 15 }}
        >
          {investor.mekanisme.lenketekst} →
        </Link>
      </section>

      <section className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <div
          className="hsplit"
          style={{ display: "grid", gridTemplateColumns: "minmax(220px, 340px) 1fr", gap: 60, alignItems: "start" }}
        >
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>{investor.kapital.tittel}</h2>
          <div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 26px" }}>
              {investor.kapital.punkter.map((p) => (
                <li
                  key={p}
                  style={{
                    position: "relative",
                    paddingLeft: 30,
                    marginBottom: 16,
                    ...BRODTEKST,
                    fontSize: 17,
                    maxWidth: 680,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", left: 0, top: "0.78em", width: 14, height: 1, background: "var(--accent)" }}
                  ></span>
                  {p}
                </li>
              ))}
            </ul>
            <p style={{ ...BRODTEKST, fontSize: 17, margin: 0, color: "rgba(var(--ink-rgb),.6)" }}>
              {investor.kapital.etterord}
            </p>
          </div>
        </div>
      </section>

      <section className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)", marginBottom: 46 }}>
          {investor.selskapet.tittel}
        </h2>
        <dl
          className="hfakta"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 30,
            margin: "0 0 44px",
            borderTop: "1px solid rgba(var(--ink-rgb),.14)",
            paddingTop: 26,
          }}
        >
          {investor.selskapet.fakta.map((f) => (
            <div key={f.merkelapp}>
              <dt style={{ ...MERKELAPP, fontSize: 11, marginBottom: 10 }}>{f.merkelapp}</dt>
              <dd
                style={{
                  margin: 0,
                  fontFamily: "var(--font-garamond), Georgia, serif",
                  fontSize: 22,
                  color: "var(--ink)",
                }}
              >
                {f.verdi}
              </dd>
            </div>
          ))}
        </dl>
        <div style={{ maxWidth: 700 }}>
          {investor.selskapet.avsnitt.map((a, i) => (
            <p key={i} style={{ ...BRODTEKST, fontSize: 17, margin: i ? "18px 0 0" : 0 }}>
              {a}
            </p>
          ))}
          <a
            href={investor.selskapet.lenke.href}
            target="_blank"
            rel="noopener"
            className="hov-link"
            style={{ display: "inline-block", marginTop: 22, color: "var(--accent)", fontWeight: 600, fontSize: 15 }}
          >
            {investor.selskapet.lenke.tekst} ↗
          </a>
        </div>
      </section>

      <section className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <div
          className="hsplit"
          style={{ display: "grid", gridTemplateColumns: "minmax(220px, 340px) 1fr", gap: 60, alignItems: "start" }}
        >
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>{investor.materiale.tittel}</h2>
          <div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 26px" }}>
              {investor.materiale.punkter.map((p) => (
                <li
                  key={p}
                  style={{
                    position: "relative",
                    paddingLeft: 30,
                    marginBottom: 16,
                    ...BRODTEKST,
                    fontSize: 17,
                    maxWidth: 680,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", left: 0, top: "0.78em", width: 14, height: 1, background: "var(--accent)" }}
                  ></span>
                  {p}
                </li>
              ))}
            </ul>
            <p style={{ ...BRODTEKST, fontSize: 17, margin: 0, color: "rgba(var(--ink-rgb),.6)" }}>
              {investor.materiale.etterord}
            </p>
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
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>{investor.kontakt.tittel}</h2>
          <div>
            <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 30px", maxWidth: 620 }}>{investor.kontakt.tekst}</p>
            <a
              href={`mailto:${selskap.epost}`}
              className="hov-fill"
              style={{ ...KNAPP, padding: "18px 40px", background: "var(--ink)", color: "var(--ground)", fontSize: 16 }}
            >
              {investor.kontakt.knapp}
            </a>
            <p style={{ margin: "26px 0 0", fontSize: 15, color: "rgba(var(--ink-rgb),.6)" }}>
              {kontakt.adresser.map((e, i) => (
                <span key={e}>
                  {i > 0 && <span aria-hidden="true"> · </span>}
                  <a href={`mailto:${e}`} className="tekstlenke" style={{ color: "rgba(var(--ink-rgb),.72)" }}>
                    {e}
                  </a>
                </span>
              ))}
            </p>
            <p style={{ margin: "34px 0 0", fontSize: 12.5, lineHeight: 1.7, color: "rgba(var(--ink-rgb),.45)", maxWidth: 620 }}>
              {investor.forbehold}
            </p>
          </div>
        </div>
      </section>

      <HoldingBunn />
    </div>
  );
}
