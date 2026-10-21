import Link from "next/link";
import { selskap } from "@/lib/selskap";
import {
  avdelinger,
  foto,
  hero,
  kontakt,
  kriterier,
  meny,
  omOss,
  prinsipper,
} from "@/lib/holding";
import { BRODTEKST, HoldingBunn, KNAPP, Lockup, MERKELAPP, OVERSKRIFT, WRAP } from "@/components/holding-stil";

// The holding company's front page.
//
// Deliberately without JavaScript: no cursor, no scroll effects, no video. A
// holding company should look like it is standing still, and the page loads on
// one photograph and some text. The effects live on in Crest Software, where
// they belong.
//
// The page is in English while the rest of the site is Norwegian, so the
// wrapper carries lang="en" — the root layout still declares nb.

export default function HoldingSide() {
  return (
    <div lang="en" className="lys" style={{ minHeight: "100vh" }}>
      <nav
        className="hnav"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          padding: "26px 48px",
          background: "linear-gradient(180deg, rgba(var(--ground-rgb),.75), rgba(var(--ground-rgb),0))",
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
          <a href="#what-we-do" className="hov-nl" style={{ color: "rgba(var(--ink-rgb),.75)" }}>
            {meny.slikJobberVi}
          </a>
          <a href="#departments" className="hov-nl" style={{ color: "rgba(var(--ink-rgb),.75)" }}>
            {meny.avdelinger}
          </a>
          <Link href="/investors" className="hov-nl" style={{ color: "rgba(var(--ink-rgb),.75)" }}>
            {meny.investorer}
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

      <header
        className="hhero"
        style={{ position: "relative", minHeight: "min(94vh, 980px)", display: "flex", alignItems: "flex-end" }}
      >
        {foto.vis && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={foto.fil}
            srcSet={`${foto.filMobil} 900w, ${foto.fil} 2000w`}
            sizes="100vw"
            width={2000}
            height={1333}
            alt={foto.alt}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
        {/* Two layers: one down the page to tie the photo to the site, and one in
            from the left so the text always has a dark surface to sit on, however
            bright the buildings behind it are. The mobile rule in globals.css
            strengthens it further, because the text covers more of the picture on
            a narrow screen. */}
        <div
          className="hslor"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(100deg, rgba(var(--ground-rgb),.97) 0%, rgba(var(--ground-rgb),.88) 40%, rgba(var(--ground-rgb),.42) 80%), linear-gradient(180deg, rgba(var(--ground-rgb),.6) 0%, rgba(var(--ground-rgb),.3) 45%, var(--ground) 100%)",
          }}
        ></div>
        <div style={{ ...WRAP, position: "relative", width: "100%", padding: "160px 48px 72px" }}>
          <div style={{ ...MERKELAPP, color: "rgba(var(--ink-rgb),.8)", marginBottom: 26 }}>{hero.overtittel}</div>
          <h1
            style={{
              fontFamily: "var(--font-garamond), Georgia, serif",
              fontWeight: 600,
              fontSize: "clamp(40px, 6vw, 86px)",
              lineHeight: 1.04,
              letterSpacing: "-.015em",
              margin: "0 0 28px",
              maxWidth: "16ch",
            }}
          >
            {hero.tittel}
          </h1>
          <p style={{ ...BRODTEKST, color: "rgba(var(--ink-rgb),.85)", fontSize: 19, maxWidth: 620, margin: "0 0 40px" }}>
            {hero.ingress}
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#contact" className="hov-fill" style={{ ...KNAPP, background: "var(--ink)", color: "var(--ground)" }}>
              {hero.knappKontakt}
            </a>
            <a
              href="#what-we-do"
              className="hov-outline"
              style={{ ...KNAPP, border: "1px solid rgba(var(--ink-rgb),.4)", color: "var(--ink)" }}
            >
              {hero.knappArbeid}
            </a>
          </div>
        </div>
        {foto.vis && (
        <p
          className="hfoto"
          style={{
            position: "absolute",
            right: 20,
            bottom: 14,
            margin: 0,
            fontSize: 11,
            letterSpacing: ".04em",
            color: "rgba(var(--ink-rgb),.45)",
          }}
        >
          Photo:{" "}
          <a href={foto.kilde} target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "underline" }}>
            {foto.fotograf}
          </a>{" "}
          ·{" "}
          <a href={foto.lisensUrl} target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "underline" }}>
            {foto.lisens}
          </a>
        </p>
        )}
      </header>

      <section className="hsek" style={{ ...WRAP, padding: "120px 48px 0" }}>
        <div
          className="hsplit"
          style={{ display: "grid", gridTemplateColumns: "minmax(220px, 340px) 1fr", gap: 60, alignItems: "start" }}
        >
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>{omOss.tittel}</h2>
          <div>
            {omOss.avsnitt.map((a, i) => (
              <p key={i} style={{ ...BRODTEKST, fontSize: 18, margin: i ? "22px 0 0" : 0, maxWidth: 680 }}>
                {a}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="what-we-do" className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <h2 style={{ ...OVERSKRIFT, marginBottom: 54 }}>{prinsipper.tittel}</h2>
        <div className="hgrid3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
          {prinsipper.punkter.map((p) => (
            <div key={p.nr} style={{ borderTop: "1px solid rgba(var(--ink-rgb),.2)", paddingTop: 24 }}>
              <div style={{ ...MERKELAPP, marginBottom: 14 }}>{p.nr}</div>
              <h3
                style={{
                  fontFamily: "var(--font-garamond), Georgia, serif",
                  fontWeight: 600,
                  fontSize: 30,
                  margin: "0 0 14px",
                  color: "var(--ink)",
                }}
              >
                {p.navn}
              </h3>
              <p style={{ ...BRODTEKST, fontSize: 16, margin: 0 }}>{p.tekst}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="departments" className="hsek" style={{ ...WRAP, padding: "120px 48px 0" }}>
        <div style={{ ...MERKELAPP, marginBottom: 18 }}>{avdelinger.merkelapp}</div>
        <h2 style={{ ...OVERSKRIFT, marginBottom: 26 }}>{avdelinger.tittel}</h2>
        <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 54px", maxWidth: 720 }}>{avdelinger.ingress}</p>
        <div
          className="hgrid2"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridAutoRows: "1fr", gap: 26 }}
        >
          {avdelinger.punkter.map((a) => (
            <article
              key={a.navn}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: 10,
                padding: "34px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div style={{ ...MERKELAPP, fontSize: 11 }}>{a.rolle}</div>
              <h3
                style={{
                  fontFamily: "var(--font-garamond), Georgia, serif",
                  fontWeight: 600,
                  fontSize: 30,
                  margin: 0,
                  color: "var(--ink)",
                }}
              >
                {a.navn}
              </h3>
              <p style={{ ...BRODTEKST, fontSize: 16, margin: 0, flex: 1 }}>{a.tekst}</p>
              <p style={{ margin: 0, fontSize: 14, color: "rgba(var(--ink-rgb),.55)" }}>{a.stikkord.join(" · ")}</p>
              {a.href && (
                <Link
                  href={a.href}
                  className="hov-link"
                  style={{ alignSelf: "flex-start", color: "var(--accent)", fontWeight: 600, fontSize: 15 }}
                >
                  {a.lenketekst} →
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="what-we-look-for" className="hsek" style={{ ...WRAP, padding: "120px 48px 0" }}>
        <div
          className="hsplit"
          style={{ display: "grid", gridTemplateColumns: "minmax(220px, 340px) 1fr", gap: 60, alignItems: "start" }}
        >
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>{kriterier.tittel}</h2>
          <div>
            <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 26px", maxWidth: 680 }}>{kriterier.ingress}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 26px" }}>
              {kriterier.punkter.map((p) => (
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
            <p style={{ ...BRODTEKST, fontSize: 17, margin: 0, color: "rgba(var(--ink-rgb),.6)" }}>{kriterier.etterord}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="hsek" style={{ ...WRAP, padding: "120px 48px 110px" }}>
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
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>{kontakt.tittel}</h2>
          <div>
            <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 30px", maxWidth: 620 }}>{kontakt.tekst}</p>
            <a
              href={`mailto:${selskap.epost}`}
              className="hov-fill"
              style={{ ...KNAPP, padding: "18px 40px", background: "var(--ink)", color: "var(--ground)", fontSize: 16 }}
            >
              {kontakt.knapp}
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
          </div>
        </div>
      </section>

      <HoldingBunn />
    </div>
  );
}
