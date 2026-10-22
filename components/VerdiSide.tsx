"use client";

import { useState } from "react";
import Link from "next/link";
import { BRODTEKST, MERKELAPP, OVERSKRIFT, WRAP } from "@/components/holding-stil";
import { kr, mill, pst, rensOrgnr, vurder, type Selskapstall, type Vurdering } from "@/lib/verdi";
import { guider } from "@/lib/guider";
import { kontakt } from "@/lib/holding";

// Verdivurderingen. Du skriver inn navn eller organisasjonsnummer, vi henter
// de tre siste innsendte årsregnskapene fra Brønnøysund og viser et spenn.
//
// Søket på navn går rett til Enhetsregisteret fra nettleseren — det svarer på
// kall utenfra. Regnskapstallene går gjennom /api/regnskap, fordi
// Regnskapsregisteret ikke gjør det.
//
// Siden lover ikke en verdi. Den viser et regnestykke, og sier hva som ikke
// er med i det.

type Treff = { orgnr: string; navn: string; sted?: string; form?: string };

const KORT = {
  background: "var(--surface)",
  border: "1px solid var(--line)",
  borderRadius: 10,
  padding: "28px 30px",
};

export default function VerdiSide() {
  const [tekst, setTekst] = useState("");
  const [treff, setTreff] = useState<Treff[] | null>(null);
  const [tall, setTall] = useState<Selskapstall | null>(null);
  const [feil, setFeil] = useState<string | null>(null);
  const [laster, setLaster] = useState(false);

  const hentSelskap = async (orgnr: string) => {
    setLaster(true);
    setFeil(null);
    setTreff(null);
    try {
      const r = await fetch(`/api/regnskap?orgnr=${orgnr}`);
      const d = await r.json();
      if (!r.ok) {
        setFeil(d.feil ?? "Noe gikk galt.");
        setTall(null);
      } else {
        setTall(d);
      }
    } catch {
      setFeil("Fikk ikke kontakt med registeret. Prøv igjen om litt.");
    } finally {
      setLaster(false);
    }
  };

  const sok = async (e: React.FormEvent) => {
    e.preventDefault();
    const spørring = tekst.trim();
    if (!spørring) return;

    const orgnr = rensOrgnr(spørring);
    if (orgnr) return hentSelskap(orgnr);

    setLaster(true);
    setFeil(null);
    setTall(null);
    try {
      const r = await fetch(
        `https://data.brreg.no/enhetsregisteret/api/enheter?navn=${encodeURIComponent(spørring)}&size=8`
      );
      const d = await r.json();
      const liste: Treff[] = (d?._embedded?.enheter ?? []).map(
        (x: {
          organisasjonsnummer: string;
          navn: string;
          forretningsadresse?: { poststed?: string };
          organisasjonsform?: { beskrivelse?: string };
        }) => ({
          orgnr: x.organisasjonsnummer,
          navn: x.navn,
          sted: x.forretningsadresse?.poststed,
          form: x.organisasjonsform?.beskrivelse,
        })
      );
      if (!liste.length) setFeil(`Fant ingen selskaper som heter «${spørring}».`);
      setTreff(liste);
    } catch {
      setFeil("Fikk ikke kontakt med registeret. Prøv igjen om litt.");
    } finally {
      setLaster(false);
    }
  };

  const svar: Vurdering | null = tall ? vurder(tall) : null;

  return (
    <>
      <header className="hsek" style={{ ...WRAP, padding: "150px 48px 0" }}>
        <div style={{ ...MERKELAPP, marginBottom: 24 }}>Verdivurdering</div>
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
          Hva er bedriften verdt?
        </h1>
        <p style={{ ...BRODTEKST, fontSize: 19, maxWidth: 680, margin: "0 0 40px" }}>
          Skriv inn navnet eller organisasjonsnummeret. Vi henter de tre siste innsendte årsregnskapene fra
          Brønnøysund og regner ut et spenn — med regnestykket synlig, så du kan etterprøve det.
        </p>

        <form onSubmit={sok} style={{ display: "flex", gap: 12, flexWrap: "wrap", maxWidth: 620 }}>
          <input
            value={tekst}
            onChange={(e) => setTekst(e.target.value)}
            placeholder="Bedriftsnavn eller org.nr."
            aria-label="Bedriftsnavn eller organisasjonsnummer"
            style={{
              flex: "1 1 280px",
              padding: "16px 20px",
              fontSize: 16,
              fontFamily: "inherit",
              color: "var(--ink)",
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: 999,
              outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={laster}
            className="hov-fill"
            style={{
              padding: "16px 36px",
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "inherit",
              borderRadius: 999,
              border: "none",
              background: "var(--ink)",
              color: "var(--ground)",
              cursor: laster ? "wait" : "pointer",
            }}
          >
            {laster ? "Henter …" : "Regn ut"}
          </button>
        </form>

        <p style={{ margin: "14px 0 0", fontSize: 13.5, color: "rgba(var(--ink-rgb),.5)" }}>
          Tall fra Enhetsregisteret og Regnskapsregisteret, Brønnøysundregistrene (NLOD). Ingenting lagres hos oss.
        </p>

        {feil && (
          <p style={{ margin: "26px 0 0", fontSize: 16, color: "var(--accent)", fontWeight: 600 }}>{feil}</p>
        )}

        {treff && treff.length > 0 && (
          <div style={{ margin: "30px 0 0", maxWidth: 620 }}>
            <div style={{ ...MERKELAPP, fontSize: 11, marginBottom: 14 }}>Velg selskap</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
              {treff.map((t) => (
                <li key={t.orgnr}>
                  <button
                    onClick={() => hentSelskap(t.orgnr)}
                    className="hov-outline"
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "14px 18px",
                      fontSize: 15.5,
                      fontFamily: "inherit",
                      color: "var(--ink)",
                      background: "var(--surface)",
                      border: "1px solid var(--line)",
                      borderRadius: 8,
                      cursor: "pointer",
                    }}
                  >
                    <strong style={{ fontWeight: 600 }}>{t.navn}</strong>
                    <span style={{ color: "rgba(var(--ink-rgb),.55)" }}>
                      {" "}
                      · {t.orgnr}
                      {t.sted ? ` · ${t.sted}` : ""}
                      {t.form ? ` · ${t.form}` : ""}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {tall && svar && <Resultat tall={tall} svar={svar} />}

      <section className="hsek" style={{ ...WRAP, padding: "100px 48px 0" }}>
        <div
          className="hsplit"
          style={{ display: "grid", gridTemplateColumns: "minmax(220px, 340px) 1fr", gap: 60, alignItems: "start" }}
        >
          <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)" }}>Slik regner vi</h2>
          <div>
            <p style={{ ...BRODTEKST, fontSize: 17, margin: "0 0 18px", maxWidth: 680 }}>
              Vi tar et vektet snitt av driftsresultatet de tre siste årene — det nyeste året teller mest — og ganger
              det med en multippel. Multippelen starter på 2,5 til 4 og justeres for størrelse, lønnsomhet og om
              omsetningen går opp eller ned. Så legger vi til bankinnskuddet og trekker fra den langsiktige gjelden,
              fordi den som kjøper overtar begge deler.
            </p>
            <p style={{ ...BRODTEKST, fontSize: 17, margin: "0 0 18px", maxWidth: 680 }}>
              Det er hele regnestykket. Det du ikke ser i tallene, kan flytte prisen mer enn multippelen gjør: om tre
              kunder er halve omsetningen, om overskuddet forsvinner den dagen eieren slutter, om
              leverandøravtalene kan sies opp ved eierskifte, og om varelageret er varer eller hyllevarmere.
            </p>
            <p style={{ ...BRODTEKST, fontSize: 17, margin: 0, maxWidth: 680, color: "rgba(var(--ink-rgb),.6)" }}>
              Dette er et regnestykke, ikke en verdivurdering. Det erstatter ikke en gjennomgang, og det er ikke et
              bud.
            </p>
          </div>
        </div>
      </section>

      <section className="hsek" style={{ ...WRAP, padding: "90px 48px 0" }}>
        <h2 style={{ ...OVERSKRIFT, fontSize: "clamp(28px, 3vw, 40px)", marginBottom: 30 }}>Les videre</h2>
        <div className="hgrid3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}>
          {guider.slice(0, 3).map((g) => (
            <Link
              key={g.slug}
              href={`/guider/${g.slug}`}
              className="hov-outline"
              style={{ ...KORT, display: "block", color: "var(--ink)" }}
            >
              <div style={{ ...MERKELAPP, fontSize: 11, marginBottom: 12 }}>Guide</div>
              <h3
                style={{
                  fontFamily: "var(--font-garamond), Georgia, serif",
                  fontWeight: 600,
                  fontSize: 23,
                  margin: "0 0 10px",
                  lineHeight: 1.2,
                }}
              >
                {g.tittel}
              </h3>
              <p style={{ ...BRODTEKST, fontSize: 15, margin: 0 }}>{g.ingress}</p>
            </Link>
          ))}
        </div>
        <Link
          href="/guider"
          className="hov-link"
          style={{ display: "inline-block", marginTop: 30, color: "var(--accent)", fontWeight: 600, fontSize: 15 }}
        >
          Alle guidene →
        </Link>
      </section>
    </>
  );
}

function Rad({ merkelapp, verdi }: { merkelapp: string; verdi: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 20, padding: "11px 0", borderBottom: "1px solid rgba(var(--ink-rgb),.08)" }}>
      <span style={{ fontSize: 15, color: "rgba(var(--ink-rgb),.65)" }}>{merkelapp}</span>
      <span style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)", textAlign: "right" }}>{verdi}</span>
    </div>
  );
}

function Resultat({ tall, svar }: { tall: Selskapstall; svar: Vurdering }) {
  const aar = [...tall.aar].sort((a, b) => b.aar.localeCompare(a.aar));
  const emne = encodeURIComponent(`Verdivurdering: ${tall.navn}`);
  const brodtekst = encodeURIComponent(
    `Hei,\n\nJeg har sett på verdivurderingen for ${tall.navn} (org.nr. ${tall.orgnr}) på crestholding.no.\n\n`
  );

  return (
    <section className="hsek" style={{ ...WRAP, padding: "70px 48px 0" }}>
      <div style={{ ...KORT, padding: "38px 40px" }}>
        <div style={{ ...MERKELAPP, fontSize: 11, marginBottom: 12 }}>
          {tall.orgnr}
          {tall.sted ? ` · ${tall.sted}` : ""}
          {tall.organisasjonsform ? ` · ${tall.organisasjonsform}` : ""}
        </div>
        <h2
          style={{
            fontFamily: "var(--font-garamond), Georgia, serif",
            fontWeight: 600,
            fontSize: "clamp(28px, 3.4vw, 44px)",
            margin: "0 0 8px",
            color: "var(--ink)",
            lineHeight: 1.1,
          }}
        >
          {tall.navn}
        </h2>
        {tall.naering && (
          <p style={{ ...BRODTEKST, fontSize: 15, margin: "0 0 26px" }}>
            {tall.naering}
            {typeof tall.ansatte === "number" ? ` · ${tall.ansatte} ansatte` : ""}
          </p>
        )}

        {(tall.konkurs || tall.avvikling) && (
          <p style={{ margin: "0 0 24px", fontSize: 15.5, fontWeight: 600, color: "var(--accent)" }}>
            Registeret oppgir at selskapet er under {tall.konkurs ? "konkursbehandling" : "avvikling"}.
          </p>
        )}

        {svar.slag === "spenn" && (
          <>
            <div style={{ ...MERKELAPP, fontSize: 11, marginTop: 10, marginBottom: 10 }}>Indikativt spenn</div>
            <p
              style={{
                fontFamily: "var(--font-garamond), Georgia, serif",
                fontWeight: 600,
                fontSize: "clamp(32px, 4.4vw, 58px)",
                lineHeight: 1.05,
                margin: "0 0 26px",
                color: "var(--ink)",
              }}
            >
              {mill(svar.lav)} – {mill(svar.hoy)} kr
            </p>

            <p style={{ ...BRODTEKST, fontSize: 16, margin: "0 0 30px", maxWidth: 620, color: "rgba(var(--ink-rgb),.6)" }}>
              Spennet er hva en godt motivert kjøper kan tenkes å betale. Et bud fra oss ligger normalt i nedre del
              av det — vi kjøper for å eie og drive videre, ikke for å by høyest.
            </p>
            <div className="hgrid2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
              <div>
                <div style={{ ...MERKELAPP, fontSize: 11, marginBottom: 10 }}>Regnestykket</div>
                <Rad merkelapp="Normalisert driftsresultat" verdi={kr(svar.normalEbit)} />
                <Rad
                  merkelapp="Multippel"
                  verdi={`${svar.multippelLav.toLocaleString("nb-NO")} – ${svar.multippelHoy.toLocaleString("nb-NO")} ×`}
                />
                <Rad merkelapp="Pluss bankinnskudd" verdi={kr(svar.kontanter)} />
                <Rad merkelapp="Minus langsiktig gjeld" verdi={kr(svar.gjeld)} />
                <Rad merkelapp="Bokført egenkapital" verdi={kr(svar.substans)} />
                <Rad merkelapp="Driftsmargin" verdi={pst(svar.margin)} />
                <Rad merkelapp="Vekst siste år" verdi={pst(svar.vekst)} />
              </div>
              <div>
                <div style={{ ...MERKELAPP, fontSize: 11, marginBottom: 10 }}>Slik ble multippelen satt</div>
                <Rad merkelapp="Utgangspunkt" verdi="3,0 – 4,5 ×" />
                {svar.justeringer.map((j) => (
                  <Rad
                    key={j.tekst}
                    merkelapp={j.tekst}
                    verdi={(j.verdi > 0 ? "+" : "") + j.verdi.toLocaleString("nb-NO")}
                  />
                ))}
                {!svar.justeringer.length && (
                  <p style={{ ...BRODTEKST, fontSize: 15, margin: "12px 0 0" }}>
                    Ingen justeringer: størrelse, margin og retning ligger alle i det midtre sjiktet.
                  </p>
                )}
              </div>
            </div>
          </>
        )}

        {svar.slag !== "spenn" && (
          <>
            <p style={{ ...BRODTEKST, fontSize: 17, margin: "10px 0 20px", maxWidth: 680 }}>{svar.begrunnelse}</p>
            {svar.slag === "taper-penger" && (
              <div style={{ maxWidth: 420 }}>
                <Rad merkelapp="Bokført egenkapital" verdi={kr(svar.substans)} />
                <Rad merkelapp="Normalisert driftsresultat" verdi={kr(svar.normalEbit)} />
              </div>
            )}
          </>
        )}

        {aar.length > 0 && (
          <div style={{ marginTop: 40, overflowX: "auto" }}>
            <div style={{ ...MERKELAPP, fontSize: 11, marginBottom: 14 }}>Innsendte tall</div>
            <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 520, fontSize: 15 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "8px 10px 8px 0", color: "rgba(var(--ink-rgb),.55)", fontWeight: 500 }}>
                    &nbsp;
                  </th>
                  {aar.map((a) => (
                    <th
                      key={a.aar}
                      style={{ textAlign: "right", padding: "8px 0 8px 18px", color: "rgba(var(--ink-rgb),.55)", fontWeight: 600 }}
                    >
                      {a.aar}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(
                  [
                    ["Driftsinntekter", (a: (typeof aar)[number]) => a.driftsinntekter],
                    ["Driftsresultat", (a: (typeof aar)[number]) => a.driftsresultat],
                    ["Årsresultat", (a: (typeof aar)[number]) => a.aarsresultat],
                    ["Lønnskostnad", (a: (typeof aar)[number]) => a.lonnskostnad],
                    ["Varelager", (a: (typeof aar)[number]) => a.lager],
                    ["Egenkapital", (a: (typeof aar)[number]) => a.egenkapital],
                    ["Langsiktig gjeld", (a: (typeof aar)[number]) => a.langsiktigGjeld],
                  ] as const
                ).map(([navn, hent]) => (
                  <tr key={navn}>
                    <td style={{ padding: "9px 10px 9px 0", borderTop: "1px solid rgba(var(--ink-rgb),.08)", color: "rgba(var(--ink-rgb),.7)" }}>
                      {navn}
                    </td>
                    {aar.map((a) => (
                      <td
                        key={a.aar}
                        style={{
                          padding: "9px 0 9px 18px",
                          borderTop: "1px solid rgba(var(--ink-rgb),.08)",
                          textAlign: "right",
                          fontVariantNumeric: "tabular-nums",
                          color: "var(--ink)",
                        }}
                      >
                        {new Intl.NumberFormat("nb-NO").format(Math.round(hent(a)))}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          <a
            href={`mailto:${kontakt.adresser.join(",")}?subject=${emne}&body=${brodtekst}`}
            className="hov-fill"
            style={{
              display: "inline-block",
              padding: "16px 34px",
              background: "var(--ink)",
              color: "var(--ground)",
              fontWeight: 600,
              fontSize: 15,
              borderRadius: 999,
            }}
          >
            Få vår vurdering
          </a>
          <span style={{ fontSize: 14.5, color: "rgba(var(--ink-rgb),.55)" }}>
            Vi svarer samme uke, også når svaret er nei.
          </span>
        </div>
      </div>
    </section>
  );
}
