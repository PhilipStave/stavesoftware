import Link from "next/link";
import { AltivLogo, OystrLogo } from "@/components/BrandLogos";
import type { HoldingInnhold } from "@/lib/holding";
import { selskap } from "@/lib/selskap";
import { BRODTEKST, HoldingBunn, KNAPP, MERKELAPP, OVERSKRIFT, WRAP } from "@/components/holding-stil";
import HoldingNav from "@/components/HoldingNav";

// The holding company's front page.
//
// Deliberately without JavaScript: no cursor, no scroll effects, no video. A
// holding company should look like it is standing still, and the page loads on
// one photograph and some text. The effects live on in Crest Software, where
// they belong.
//
// The page is in English while the rest of the site is Norwegian, so the
// wrapper carries lang="en" — the root layout still declares nb.

// The businesses' own logos, as they use them on their own sites. HEL's is the
// lockup the dealer site uses: the oval with "Performance Norge" beside it.
function BedriftLogo({ logo }: { logo: "hel" | "altiv" | "oystr" }) {
  if (logo === "altiv") return <AltivLogo size={36} />;
  if (logo === "oystr") return <OystrLogo size={32} />;
  return (
    <span aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: 12 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo/hel-logo.png" alt="" width={505} height={245} style={{ display: "block", height: 42, width: "auto" }} />
      <span
        style={{
          fontFamily: "var(--font-archivo), sans-serif",
          fontWeight: 900,
          fontSize: 16,
          letterSpacing: ".06em",
          lineHeight: 1.1,
          textTransform: "uppercase",
        }}
      >
        Performance
        <br />
        Norge
      </span>
    </span>
  );
}

export default function HoldingSide({
  i,
  sprak,
}: {
  i: HoldingInnhold;
  /** Hvilket språk siden tegnes på, og hvor den andre utgaven ligger. */
  sprak: { kode: "nb" | "en"; navn: string; href: string };
}) {
  return (
    <div lang={sprak.kode === "en" ? "nb" : "en"} className="lys" style={{ minHeight: "100vh" }}>
      <HoldingNav
        sprak={sprak}
        hjemHref={i.stier.hjem}
        hjem={i.meny.hjem}
        overBilde
        lenker={[
          { navn: i.meny.slikJobberVi, href: "#what-we-do" },
          { navn: i.meny.virksomheter, href: "#businesses" },
          { navn: i.meny.avdelinger, href: "#departments" },
          { navn: i.meny.verdi, href: i.stier.verdi },
          { navn: i.meny.investorer, href: i.stier.investorer },
        ]}
        knapp={{ navn: i.meny.kontakt, href: "#contact" }}
      />

      <header
        className="hhero"
        style={{ position: "relative", minHeight: "min(94vh, 980px)", display: "flex", alignItems: "flex-end" }}
      >
        {i.foto.vis && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={i.foto.fil}
            srcSet={`${i.foto.filMobil} 900w, ${i.foto.fil} 2000w`}
            sizes="100vw"
            width={2000}
            height={1333}
            alt={i.foto.alt}
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
          <div style={{ ...MERKELAPP, color: "rgba(var(--ink-rgb),.8)", marginBottom: 26 }}>{i.hero.overtittel}</div>
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
            {i.hero.tittel}
          </h1>
          <p style={{ ...BRODTEKST, color: "rgba(var(--ink-rgb),.85)", fontSize: 19, maxWidth: 620, margin: "0 0 40px" }}>
            {i.hero.ingress}
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#contact" className="hov-fill" style={{ ...KNAPP, background: "var(--ink)", color: "var(--ground)" }}>
              {i.hero.knappKontakt}
            </a>
            <a
              href="#what-we-do"
              className="hov-outline"
              style={{ ...KNAPP, border: "1px solid rgba(var(--ink-rgb),.4)", color: "var(--ink)" }}
            >
              {i.hero.knappArbeid}
            </a>
          </div>
        </div>
        {i.foto.vis && (
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
          {i.foto.fotoOrd}{" "}
          <a href={i.foto.kilde} target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "underline" }}>
            {i.foto.fotograf}
          </a>{" "}
          ·{" "}
          <a href={i.foto.lisensUrl} target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "underline" }}>
            {i.foto.lisens}
          </a>
        </p>
        )}
      </header>

      <section className="hsek" style={{ ...WRAP, padding: "120px 48px 0" }}>
        <div
          className="hsplit"
          style={{ display: "grid", gridTemplateColumns: "minmax(220px, 340px) 1fr", gap: 60, alignItems: "start" }}
        >
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>{i.omOss.tittel}</h2>
          <div>
            {i.omOss.avsnitt.map((a, i) => (
              <p key={i} style={{ ...BRODTEKST, fontSize: 18, margin: i ? "22px 0 0" : 0, maxWidth: 680 }}>
                {a}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="what-we-do" className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <h2 style={{ ...OVERSKRIFT, marginBottom: 54 }}>{i.prinsipper.tittel}</h2>
        <div className="hgrid3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
          {i.prinsipper.punkter.map((p) => (
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

      <section id="businesses" className="hsek" style={{ ...WRAP, padding: "120px 48px 0" }}>
        <div style={{ ...MERKELAPP, marginBottom: 18 }}>{i.virksomhetene.merkelapp}</div>
        <h2 style={{ ...OVERSKRIFT, marginBottom: 26 }}>{i.virksomhetene.tittel}</h2>
        <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 54px", maxWidth: 720 }}>{i.virksomhetene.ingress}</p>
        <div
          className="hgrid3"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "1fr", gap: 26 }}
        >
          {i.virksomheter.map((v) => (
            <article
              key={v.navn}
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
              {v.rolle && <div style={{ ...MERKELAPP, fontSize: 11 }}>{v.rolle}</div>}
              <h3 aria-label={v.navn} style={{ margin: 0, minHeight: 46, display: "flex", alignItems: "center", color: "var(--ink)" }}>
                <BedriftLogo logo={v.logo} />
              </h3>
              <p style={{ ...BRODTEKST, fontSize: 16, margin: 0, flex: 1 }}>{v.tekst}</p>
              {v.merknad && (
                <p style={{ margin: 0, fontSize: 14, color: "rgba(var(--ink-rgb),.55)" }}>{v.merknad}</p>
              )}
              <a
                href={v.href}
                target="_blank"
                rel="noopener"
                className="hov-link"
                style={{ alignSelf: "flex-start", color: "var(--accent)", fontWeight: 600, fontSize: 15 }}
              >
                {v.lenketekst} ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="departments" className="hsek" style={{ ...WRAP, padding: "120px 48px 0" }}>
        <div style={{ ...MERKELAPP, marginBottom: 18 }}>{i.avdelinger.merkelapp}</div>
        <h2 style={{ ...OVERSKRIFT, marginBottom: 26 }}>{i.avdelinger.tittel}</h2>
        <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 54px", maxWidth: 720 }}>{i.avdelinger.ingress}</p>
        <div
          className="hgrid2"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridAutoRows: "1fr", gap: 26 }}
        >
          {i.avdelinger.punkter.map((a) => (
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
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>{i.kriterier.tittel}</h2>
          <div>
            <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 26px", maxWidth: 680 }}>{i.kriterier.ingress}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 26px" }}>
              {i.kriterier.punkter.map((p) => (
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
            <p style={{ ...BRODTEKST, fontSize: 17, margin: 0, color: "rgba(var(--ink-rgb),.6)" }}>{i.kriterier.etterord}</p>
          </div>
        </div>
      </section>

      <section className="hsek" style={{ ...WRAP, padding: "110px 48px 0" }}>
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: 10,
            padding: "46px 48px",
          }}
        >
          <div className="hsplit" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 50, alignItems: "center" }}>
            <div>
              <div style={{ ...MERKELAPP, fontSize: 11, marginBottom: 14 }}>{i.verktoy.merkelapp}</div>
              <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3.2vw, 44px)", marginBottom: 18 }}>{i.verktoy.tittel}</h2>
              <p style={{ ...BRODTEKST, fontSize: 17, margin: "0 0 10px", maxWidth: 640 }}>{i.verktoy.tekst}</p>
              <p style={{ margin: 0, fontSize: 14, color: "rgba(var(--ink-rgb),.5)" }}>{i.verktoy.merknad}</p>
            </div>
            <Link
              href={i.stier.verdi}
              className="hov-fill"
              style={{
                ...KNAPP,
                padding: "18px 40px",
                background: "var(--ink)",
                color: "var(--ground)",
                fontSize: 16,
                whiteSpace: "nowrap",
              }}
            >
              {i.verktoy.knapp}
            </Link>
          </div>
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
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>{i.kontakt.tittel}</h2>
          <div>
            <p style={{ ...BRODTEKST, fontSize: 18, margin: "0 0 30px", maxWidth: 620 }}>{i.kontakt.tekst}</p>
            <a
              href={`mailto:${selskap.epost}`}
              className="hov-fill"
              style={{ ...KNAPP, padding: "18px 40px", background: "var(--ink)", color: "var(--ground)", fontSize: 16 }}
            >
              {i.kontakt.knapp}
            </a>
            <p style={{ margin: "26px 0 0", fontSize: 15, color: "rgba(var(--ink-rgb),.6)" }}>
              {i.kontakt.adresser.map((e, i) => (
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

      <HoldingBunn bunntekst={i.bunntekst} />
    </div>
  );
}
