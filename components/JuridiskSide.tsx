import Link from "next/link";
import BloggShell from "./BloggShell";
import ArtikkelInnhold from "./ArtikkelInnhold";
import type { Blokk } from "@/lib/artikler";
import { selskap } from "@/lib/selskap";

// Delt ramme for vilkår og personvernerklæring. Gjenbruker bloggens skall og
// blokk-renderer, slik at de juridiske sidene arver designet uten egen styling.
export default function JuridiskSide({
  tittel,
  ingress,
  oppdatert,
  innhold,
}: {
  tittel: string;
  ingress: string;
  oppdatert: string;
  innhold: Blokk[];
}) {
  const dato = new Intl.DateTimeFormat("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(oppdatert));

  return (
    <BloggShell>
      <article
        className="bwrap"
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "170px 48px 60px",
          boxSizing: "border-box",
        }}
      >
        {/* Ingen «← Forsiden» her: skallet har allerede den lenken i toppen. */}
        <div
          style={{
            fontSize: 12,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "rgba(242,239,233,.45)",
            marginBottom: 20,
          }}
        >
          Sist oppdatert {dato}
        </div>
        <h1
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 900,
            fontSize: "clamp(34px, 5.4vw, 68px)",
            letterSpacing: "-.03em",
            lineHeight: 1.02,
            margin: "0 0 26px",
            textTransform: "uppercase",
            color: "#f2efe9",
          }}
        >
          {tittel}
        </h1>
        <p
          style={{
            color: "rgba(242,239,233,.75)",
            fontSize: 20,
            lineHeight: 1.65,
            margin: "0 0 50px",
            paddingBottom: 40,
            borderBottom: "1px solid rgba(242,239,233,.14)",
          }}
        >
          {ingress}
        </p>

        <ArtikkelInnhold innhold={innhold} />

        <div
          data-reveal=""
          style={{
            marginTop: 70,
            paddingTop: 40,
            borderTop: "1px solid rgba(242,239,233,.14)",
            display: "flex",
            gap: 28,
            flexWrap: "wrap",
            fontSize: 14,
          }}
        >
          <Link href="/vilkar" data-hover="" className="hov-link" style={{ color: "rgba(242,239,233,.6)" }}>
            Vilkår
          </Link>
          <Link href="/personvern" data-hover="" className="hov-link" style={{ color: "rgba(242,239,233,.6)" }}>
            Personvern
          </Link>
          <a
            href={`mailto:${selskap.epost}`}
            data-hover=""
            className="hov-link"
            style={{ color: "rgba(242,239,233,.6)" }}
          >
            {selskap.epost}
          </a>
        </div>
      </article>
    </BloggShell>
  );
}
