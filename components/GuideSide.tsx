import Link from "next/link";
import { BRODTEKST, MERKELAPP, OVERSKRIFT, WRAP } from "@/components/holding-stil";
import { guider, type Guide } from "@/lib/guider";

// Én guide. Ren tekst i én spalte — det er en artikkel, ikke et oppslagsverk,
// og den leses like ofte på telefon som på skjerm.

const datoNorsk = (iso: string) =>
  new Intl.DateTimeFormat("nb-NO", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));

export default function GuideSide({ guide }: { guide: Guide }) {
  const andre = guider.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="hsek" style={{ ...WRAP, padding: "150px 48px 0", maxWidth: 820 }}>
          <div style={{ ...MERKELAPP, marginBottom: 22 }}>
            <Link href="/guider" className="hov-link" style={{ color: "inherit" }}>
              Guider
            </Link>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-garamond), Georgia, serif",
              fontWeight: 600,
              fontSize: "clamp(34px, 4.6vw, 60px)",
              lineHeight: 1.08,
              letterSpacing: "-.015em",
              margin: "0 0 24px",
              color: "var(--ink)",
            }}
          >
            {guide.tittel}
          </h1>
          <p style={{ ...BRODTEKST, fontSize: 20, lineHeight: 1.65, margin: "0 0 18px" }}>{guide.ingress}</p>
          <p style={{ margin: 0, fontSize: 13.5, color: "rgba(var(--ink-rgb),.5)" }}>
            Oppdatert {datoNorsk(guide.oppdatert)}
          </p>
        </header>

        <div className="hsek" style={{ ...WRAP, padding: "54px 48px 0", maxWidth: 820 }}>
          {guide.seksjoner.map((s) => (
            <section key={s.overskrift} style={{ marginBottom: 46 }}>
              <h2
                style={{
                  fontFamily: "var(--font-garamond), Georgia, serif",
                  fontWeight: 600,
                  fontSize: "clamp(24px, 2.6vw, 32px)",
                  lineHeight: 1.2,
                  margin: "0 0 18px",
                  color: "var(--ink)",
                }}
              >
                {s.overskrift}
              </h2>
              {s.avsnitt.map((a, i) => (
                <p key={i} style={{ ...BRODTEKST, fontSize: 17.5, margin: i ? "18px 0 0" : 0 }}>
                  {a}
                </p>
              ))}
            </section>
          ))}
        </div>

        <section className="hsek" style={{ ...WRAP, padding: "10px 48px 0", maxWidth: 820 }}>
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(24px, 2.6vw, 32px)", marginBottom: 26 }}>Spørsmål og svar</h2>
          {guide.faq.map((f) => (
            <div key={f.spm} style={{ borderTop: "1px solid rgba(var(--ink-rgb),.14)", padding: "22px 0" }}>
              <h3 style={{ margin: "0 0 10px", fontSize: 18, fontWeight: 600, color: "var(--ink)" }}>{f.spm}</h3>
              <p style={{ ...BRODTEKST, fontSize: 16.5, margin: 0 }}>{f.svar}</p>
            </div>
          ))}
        </section>
      </article>

      <section className="hsek" style={{ ...WRAP, padding: "70px 48px 0", maxWidth: 820 }}>
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: 10,
            padding: "34px 36px",
          }}
        >
          <div style={{ ...MERKELAPP, fontSize: 11, marginBottom: 12 }}>Regn på din egen</div>
          <h2
            style={{
              fontFamily: "var(--font-garamond), Georgia, serif",
              fontWeight: 600,
              fontSize: 28,
              margin: "0 0 12px",
              color: "var(--ink)",
            }}
          >
            Hva er bedriften verdt?
          </h2>
          <p style={{ ...BRODTEKST, fontSize: 16.5, margin: "0 0 22px" }}>
            Skriv inn organisasjonsnummeret, så henter vi de tre siste innsendte årsregnskapene fra Brønnøysund og
            viser et spenn — med hele regnestykket synlig.
          </p>
          <Link
            href="/verdivurdering"
            className="hov-fill"
            style={{
              display: "inline-block",
              padding: "15px 32px",
              background: "var(--ink)",
              color: "var(--ground)",
              fontWeight: 600,
              fontSize: 15,
              borderRadius: 999,
            }}
          >
            Prøv verdivurderingen
          </Link>
        </div>
      </section>

      <section className="hsek" style={{ ...WRAP, padding: "70px 48px 0", maxWidth: 820 }}>
        <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(24px, 2.6vw, 32px)", marginBottom: 24 }}>Flere guider</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {andre.map((g) => (
            <li key={g.slug} style={{ borderTop: "1px solid rgba(var(--ink-rgb),.14)", padding: "20px 0" }}>
              <Link href={`/guider/${g.slug}`} className="hov-link" style={{ color: "var(--ink)" }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 600 }}>{g.tittel}</h3>
                <p style={{ ...BRODTEKST, fontSize: 16, margin: 0 }}>{g.ingress}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
