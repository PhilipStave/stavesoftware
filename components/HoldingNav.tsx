"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Lockup } from "@/components/holding-stil";

// Toppmenyen på holdingsidene. Den ligger fast, blir med et lite stykke ned og
// glir så bort — og kommer tilbake når du er nær toppen igjen.
//
// Oppførselen er målt på helperformance.no 22. oktober 2026: fast plassering,
// gjennomsiktig over bildet, og klassen som skjuler menyen slår inn et sted
// mellom 120 og 200 piksler. Den kommer tilbake på vei opp mellom 300 og 150,
// altså på én terskel og ikke på retning. 160 treffer midt i det.
//
// Dette er det eneste skriptet på holdingsidene, som ellers er ren HTML. Uten
// skript finnes ingen pålitelig måte å skjule en fast meny ved en rulleterskel
// i alle nettlesere; rulledrevne animasjoner mangler fortsatt støtte i Safari.

const GRENSE = 160;

export type NavLenke = { navn: string; href: string };

const lenkeStil = { color: "rgba(var(--ink-rgb),.75)" };

function Lenke({ navn, href }: NavLenke) {
  return href.startsWith("/") ? (
    <Link href={href} className="hov-nl" style={lenkeStil}>
      {navn}
    </Link>
  ) : (
    <a href={href} className="hov-nl" style={lenkeStil}>
      {navn}
    </a>
  );
}

export default function HoldingNav({
  lenker,
  knapp,
  hjem,
  hjemHref = "/",
  overBilde = false,
  sprak,
}: {
  lenker: NavLenke[];
  knapp: NavLenke;
  hjem: string;
  /** Logoen leder til forsiden på samme språk. */
  hjemHref?: string;
  /** Forsiden ligger over fotografiet og trenger slør i stedet for flate. */
  overBilde?: boolean;
  /** Lenke til den andre språkutgaven av samme side. */
  sprak?: { kode: "nb" | "en"; navn: string; href: string };
}) {
  const [borte, setBorte] = useState(false);

  useEffect(() => {
    const paa = () => setBorte(window.scrollY > GRENSE);
    paa();
    window.addEventListener("scroll", paa, { passive: true });
    return () => window.removeEventListener("scroll", paa);
  }, []);

  const velgSprak = () => {
    try {
      document.cookie = `sprak=${sprak?.kode ?? "nb"};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
    } catch {
      // Blokkerte informasjonskapsler skal ikke hindre selve språkbyttet.
    }
  };

  return (
    <nav
      className="hnav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        padding: "26px 48px",
        background: overBilde
          ? "linear-gradient(180deg, rgba(var(--ground-rgb),.85), rgba(var(--ground-rgb),0))"
          : "var(--ground)",
        borderBottom: overBilde ? "none" : "1px solid rgba(var(--ink-rgb),.1)",
        transform: borte ? "translateY(-100%)" : "translateY(0)",
        opacity: borte ? 0 : 1,
        // Synligheten skrus av først etter at menyen har glidd ut, og på med
        // én gang den kommer tilbake. Skjult tar den heller ingen tabulator.
        visibility: borte ? "hidden" : "visible",
        transition: `transform .35s, opacity .35s, visibility 0s linear ${borte ? ".35s" : "0s"}`,
      }}
    >
      <Link href={hjemHref} aria-label={hjem}>
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
        {lenker.map((l) => (
          <Lenke key={l.href} {...l} />
        ))}
        {sprak && (
          <Link
            href={sprak.href}
            onClick={velgSprak}
            hrefLang={sprak.kode}
            className="hov-nl hsprak"
            style={{ color: "rgba(var(--ink-rgb),.55)", letterSpacing: ".14em" }}
          >
            {sprak.navn}
          </Link>
        )}
        <a
          href={knapp.href}
          className="hov-fill"
          style={{
            padding: "12px 26px",
            border: "1px solid rgba(var(--ink-rgb),.35)",
            borderRadius: 999,
            color: "var(--ink)",
            letterSpacing: ".1em",
          }}
        >
          {knapp.navn}
        </a>
      </div>
    </nav>
  );
}
