import Link from "next/link";
import type { HoldingInnhold } from "@/lib/holding";
import type { investor as InvestorInnhold } from "@/lib/investor";
import { selskap } from "@/lib/selskap";
import { BRODTEKST, HoldingBunn, KNAPP, MERKELAPP, OVERSKRIFT, WRAP } from "@/components/holding-stil";
import HoldingNav from "@/components/HoldingNav";

// Investorsiden. Samme lyse tema og samme typografi som forsiden, men uten
// bilde: toppen er ren tekst, fordi en side som ber om penger ikke skal
// begynne med et postkort.
//
// Det som bevisst IKKE står her: verdsettelse, eierandel, prognoser og
// avkastningstall. Begrunnelsen står i lib/i.ts. Avdelingene gjentas i
// kort form fra forsidens innhold — én kilde, så de ikke kan si to ting.

export default function InvestorSide({
  i,
  h,
  sprak,
}: {
  i: typeof InvestorInnhold;
  h: HoldingInnhold;
  sprak: { kode: "nb" | "en"; navn: string; href: string };
}) {
  return (
    <div lang={sprak.kode === "en" ? "nb" : "en"} className="lys" style={{ minHeight: "100vh" }}>
      <HoldingNav
        sprak={sprak}
        hjemHref={h.stier.hjem}
        hjem={h.meny.hjem}
        lenker={[
          { navn: h.meny.slikJobberVi, href: `${h.stier.forside}#what-we-do` },
          { navn: h.meny.virksomheter, href: `${h.stier.forside}#businesses` },
          { navn: h.meny.avdelinger, href: `${h.stier.forside}#departments` },
          { navn: h.meny.verdi, href: h.stier.verdi },
        ]}
        knapp={{ navn: h.meny.kontakt, href: "#contact" }}
      />

      <header className="hsek" style={{ ...WRAP, padding: "150px 48px 0" }}>
        <div style={{ ...MERKELAPP, marginBottom: 26 }}>{i.overtittel}</div>
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
          {i.tittel}
        </h1>
        <p style={{ ...BRODTEKST, fontSize: 19, maxWidth: 680, margin: 0 }}>{i.ingress}</p>
      </header>

      <section className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <div
          className="hsplit"
          style={{ display: "grid", gridTemplateColumns: "minmax(220px, 340px) 1fr", gap: 60, alignItems: "start" }}
        >
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>{i.tese.tittel}</h2>
          <div>
            {i.tese.avsnitt.map((a, i) => (
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
        <h2 style={{ ...OVERSKRIFT, marginBottom: 26 }}>{i.mekanisme.tittel}</h2>
        <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 54px", maxWidth: 720 }}>{i.mekanisme.ingress}</p>
        <div className="hgrid2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40 }}>
          {h.avdelinger.punkter.map((a) => (
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
          href={`${h.stier.forside}#departments`}
          className="hov-link"
          style={{ display: "inline-block", marginTop: 40, color: "var(--accent)", fontWeight: 600, fontSize: 15 }}
        >
          {i.mekanisme.lenketekst} →
        </Link>
      </section>

      <section id="example" className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <div style={{ ...MERKELAPP, marginBottom: 18 }}>{i.eksempel.merkelapp}</div>
        <h2 style={{ ...OVERSKRIFT, marginBottom: 26 }}>{i.eksempel.tittel}</h2>
        <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 50px", maxWidth: 720 }}>{i.eksempel.ingress}</p>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={i.eksempel.foto.fil}
          alt={i.eksempel.foto.alt}
          width={2000}
          height={560}
          style={{
            display: "block",
            width: "100%",
            height: "clamp(180px, 22vw, 280px)",
            objectFit: "cover",
            borderRadius: 10,
            border: "1px solid var(--line)",
          }}
        />
        <p style={{ margin: "12px 0 44px", fontSize: 13, color: "rgba(var(--ink-rgb),.45)" }}>
          {i.eksempel.foto.bildetekst} {i.eksempel.foto.fotoOrd}{" "}
          <a
            href={i.eksempel.foto.kilde}
            target="_blank"
            rel="noopener"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            {i.eksempel.foto.fotograf}
          </a>{" "}
          ·{" "}
          <a
            href={i.eksempel.foto.lisensUrl}
            target="_blank"
            rel="noopener"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            {i.eksempel.foto.lisens}
          </a>
        </p>

        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: 10,
            padding: "34px 36px",
            marginBottom: 54,
          }}
        >
          <div style={{ ...MERKELAPP, fontSize: 11, marginBottom: 20 }}>{i.eksempel.oppsett.tittel}</div>
          <dl
            className="hfakta"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 26, margin: "0 0 26px" }}
          >
            {i.eksempel.oppsett.punkter.map((p) => (
              <div key={p.merkelapp}>
                <dt style={{ ...MERKELAPP, fontSize: 11, marginBottom: 8 }}>{p.merkelapp}</dt>
                <dd
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-garamond), Georgia, serif",
                    fontSize: 22,
                    color: "var(--ink)",
                  }}
                >
                  {p.verdi}
                </dd>
              </div>
            ))}
          </dl>
          <p style={{ ...BRODTEKST, fontSize: 16.5, margin: "0 0 14px", maxWidth: 720 }}>
            {i.eksempel.oppsett.tekst}
          </p>
          <p style={{ ...BRODTEKST, fontSize: 16.5, margin: 0, maxWidth: 720, color: "rgba(var(--ink-rgb),.6)" }}>
            {i.eksempel.oppsett.pris}
          </p>
        </div>

        {/* Tidslinjen: året til venstre, arbeidet i midten, virkningen på
            driftsresultatet til høyre. Streken er det eneste pyntet. */}
        <div style={{ borderLeft: "1px solid rgba(var(--ink-rgb),.2)", paddingLeft: 0 }}>
          {i.eksempel.faser.map((f) => (
            <div
              key={f.naar}
              className="hfase"
              style={{
                display: "grid",
                gridTemplateColumns: "150px 1fr 120px",
                gap: 30,
                padding: "26px 0 26px 30px",
                position: "relative",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: -5,
                  top: 34,
                  width: 9,
                  height: 9,
                  borderRadius: 999,
                  background: "var(--accent)",
                }}
              ></span>
              <div>
                <div style={{ ...MERKELAPP, fontSize: 11, marginBottom: 6 }}>{f.naar}</div>
                <div
                  style={{
                    fontFamily: "var(--font-garamond), Georgia, serif",
                    fontWeight: 600,
                    fontSize: 21,
                    color: "var(--ink)",
                    lineHeight: 1.15,
                  }}
                >
                  {f.avdeling}
                </div>
              </div>
              <p style={{ ...BRODTEKST, fontSize: 16.5, margin: 0 }}>{f.tekst}</p>
              <div
                style={{
                  fontFamily: "var(--font-garamond), Georgia, serif",
                  fontSize: 24,
                  color: f.effekt ? "var(--ink)" : "rgba(var(--ink-rgb),.3)",
                  textAlign: "right",
                  whiteSpace: "nowrap",
                }}
              >
                {f.effekt ?? "—"}
              </div>
            </div>
          ))}
        </div>
        <p style={{ margin: "14px 0 0", fontSize: 13.5, color: "rgba(var(--ink-rgb),.5)" }}>
          {i.eksempel.tallforklaring}
        </p>

        <div
          className="hsplit"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(220px, 340px) 1fr",
            gap: 60,
            alignItems: "start",
            marginTop: 70,
          }}
        >
          <h3 style={{ ...OVERSKRIFT, fontSize: "clamp(24px, 2.6vw, 32px)" }}>{i.eksempel.resultat.tittel}</h3>
          <div>
            <div style={{ maxWidth: 520, marginBottom: 26 }}>
              {i.eksempel.resultat.rader.map((r) => (
                <div
                  key={r.merkelapp}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 20,
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(var(--ink-rgb),.1)",
                  }}
                >
                  <span style={{ fontSize: 16, color: "rgba(var(--ink-rgb),.65)" }}>{r.merkelapp}</span>
                  <span style={{ fontSize: 16, fontWeight: 600, color: "var(--ink)" }}>{r.verdi}</span>
                </div>
              ))}
            </div>
            <p style={{ ...BRODTEKST, fontSize: 17, margin: "0 0 18px", maxWidth: 680 }}>
              {i.eksempel.resultat.tekst}
            </p>
            <p style={{ ...BRODTEKST, fontSize: 17, margin: 0, maxWidth: 680 }}>
              {i.eksempel.resultat.etterord}
            </p>
          </div>
        </div>

        <div
          className="hsplit"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(220px, 340px) 1fr",
            gap: 60,
            alignItems: "start",
            marginTop: 70,
          }}
        >
          <h3 style={{ ...OVERSKRIFT, fontSize: "clamp(24px, 2.6vw, 32px)" }}>{i.eksempel.risiko.tittel}</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {i.eksempel.risiko.punkter.map((p) => (
              <li
                key={p}
                style={{ position: "relative", paddingLeft: 30, marginBottom: 16, ...BRODTEKST, fontSize: 17, maxWidth: 680 }}
              >
                <span
                  aria-hidden="true"
                  style={{ position: "absolute", left: 0, top: "0.78em", width: 14, height: 1, background: "var(--accent)" }}
                ></span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <div
          className="hsplit"
          style={{ display: "grid", gridTemplateColumns: "minmax(220px, 340px) 1fr", gap: 60, alignItems: "start" }}
        >
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>{i.kapital.tittel}</h2>
          <div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 26px" }}>
              {i.kapital.punkter.map((p) => (
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
              {i.kapital.etterord}
            </p>
          </div>
        </div>
      </section>

      <section className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)", marginBottom: 46 }}>
          {i.selskapet.tittel}
        </h2>
        <dl
          className="hfakta"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${i.selskapet.fakta.length}, 1fr)`,
            gap: 30,
            margin: "0 0 44px",
            borderTop: "1px solid rgba(var(--ink-rgb),.14)",
            paddingTop: 26,
          }}
        >
          {i.selskapet.fakta.map((f) => (
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
          {i.selskapet.avsnitt.map((a, i) => (
            <p key={i} style={{ ...BRODTEKST, fontSize: 17, margin: i ? "18px 0 0" : 0 }}>
              {a}
            </p>
          ))}
          <a
            href={i.selskapet.lenke.href}
            target="_blank"
            rel="noopener"
            className="hov-link"
            style={{ display: "inline-block", marginTop: 22, color: "var(--accent)", fontWeight: 600, fontSize: 15 }}
          >
            {i.selskapet.lenke.tekst} ↗
          </a>
        </div>
      </section>

      <section className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <div
          className="hsplit"
          style={{ display: "grid", gridTemplateColumns: "minmax(220px, 340px) 1fr", gap: 60, alignItems: "start" }}
        >
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>{i.materiale.tittel}</h2>
          <div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 26px" }}>
              {i.materiale.punkter.map((p) => (
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
              {i.materiale.etterord}
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
          <div>
            <div style={{ ...MERKELAPP, marginBottom: 16 }}>{i.kontakt.merkelapp}</div>
            <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>{i.kontakt.tittel}</h2>
          </div>
          <div>
            <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 26px", maxWidth: 620 }}>{i.kontakt.tekst}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px" }}>
              {i.kontakt.punkter.map((p) => (
                <li
                  key={p}
                  style={{ position: "relative", paddingLeft: 30, marginBottom: 14, ...BRODTEKST, fontSize: 17, maxWidth: 640 }}
                >
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", left: 0, top: "0.78em", width: 14, height: 1, background: "var(--accent)" }}
                  ></span>
                  {p}
                </li>
              ))}
            </ul>
            <p style={{ ...BRODTEKST, fontSize: 17, margin: "0 0 30px", maxWidth: 620 }}>{i.kontakt.sporsmaal}</p>
            <a
              href={`mailto:${selskap.epost}?subject=${encodeURIComponent(`Investor — ${selskap.fulltNavn}`)}`}
              className="hov-fill"
              style={{ ...KNAPP, padding: "18px 40px", background: "var(--ink)", color: "var(--ground)", fontSize: 16 }}
            >
              {i.kontakt.knapp}
            </a>
            <p style={{ margin: "26px 0 0", fontSize: 15, color: "rgba(var(--ink-rgb),.6)" }}>
              {h.kontakt.adresser.map((e, i) => (
                <span key={e}>
                  {i > 0 && <span aria-hidden="true"> · </span>}
                  <a href={`mailto:${e}`} className="tekstlenke" style={{ color: "rgba(var(--ink-rgb),.72)" }}>
                    {e}
                  </a>
                </span>
              ))}
            </p>
            <p style={{ margin: "34px 0 0", fontSize: 12.5, lineHeight: 1.7, color: "rgba(var(--ink-rgb),.45)", maxWidth: 620 }}>
              {i.forbehold}
            </p>
          </div>
        </div>
      </section>

      <HoldingBunn bunntekst={h.bunntekst} />
    </div>
  );
}
