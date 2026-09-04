"use client";

import Link from "next/link";
import { useEffect } from "react";
import { selskapslinje } from "@/lib/selskap";

const GRAIN_BG =
  "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22240%22 height=%22240%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/><feColorMatrix type=%22saturate%22 values=%220%22/><feComponentTransfer><feFuncA type=%22linear%22 slope=%220.14%22/></feComponentTransfer></filter><rect width=%22240%22 height=%22240%22 filter=%22url(%23n)%22/></svg>')";

// Lettere utgave av effektene fra forsiden: markør, spotlight, korn,
// fremdriftslinje og reveal-animasjoner. Ingen preloader eller scroll-pinning.
function useBloggEffects() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-reveal]:not(.in)").forEach((el) => io.observe(el));

    const dot = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    const spot = document.getElementById("spot");
    let mx = -100,
      my = -100,
      rx = -100,
      ry = -100;
    const mm = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot) dot.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
      const t = e.target as Element | null;
      if (ring) ring.classList.toggle("big", !!(t && t.closest && t.closest("[data-hover]")));
      if (spot)
        spot.style.background = `radial-gradient(520px at ${mx}px ${my}px, rgba(143,184,224,.075), transparent 70%)`;
    };
    window.addEventListener("mousemove", mm);

    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      if (ring) ring.style.transform = `translate(${rx - 22}px, ${ry - 22}px)`;
      const h = document.documentElement;
      const prog = document.getElementById("progress");
      if (prog) {
        const max = h.scrollHeight - h.clientHeight;
        prog.style.width = `${max > 0 ? ((h.scrollTop / max) * 100).toFixed(2) : 0}%`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      io.disconnect();
      window.removeEventListener("mousemove", mm);
      cancelAnimationFrame(raf);
    };
  }, []);
}

export default function BloggShell({ children }: { children: React.ReactNode }) {
  useBloggEffects();
  return (
    <div style={{ minHeight: "100vh", position: "relative", background: "#0a0f16" }}>
      <div id="cursor"></div>
      <div id="cursor-ring"></div>
      <div
        id="progress"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          width: "0%",
          background: "linear-gradient(90deg, #8fb8e0, #f2efe9)",
          zIndex: 100,
        }}
      ></div>
      <div id="spot" style={{ position: "fixed", inset: 0, zIndex: 45, pointerEvents: "none" }}></div>
      <div
        style={{
          position: "fixed",
          inset: "-8%",
          zIndex: 40,
          pointerEvents: "none",
          opacity: 0.4,
          mixBlendMode: "overlay",
          animation: "grainShift .9s steps(1) infinite",
          backgroundImage: GRAIN_BG,
        }}
      ></div>

      <nav
        className="bnav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 48px",
          background: "linear-gradient(180deg, rgba(10,15,22,.85), rgba(10,15,22,0))",
        }}
      >
        <Link
          href="/"
          data-hover=""
          className="logo-lockup"
          style={{
            // Samme lockup som forsiden — se Nav.tsx for hvorfor grunnlinje.
            display: "flex",
            alignItems: "baseline",
            gap: 10,
            fontFamily: "var(--font-garamond), Georgia, serif",
            fontWeight: 600,
            fontSize: 19,
            letterSpacing: ".2em",
            whiteSpace: "nowrap",
            color: "#f2efe9",
          }}
        >
          <img
            src="/logo/crest-symbol.png"
            alt=""
            aria-hidden="true"
            width={869}
            height={662}
            style={{ height: 17, width: "auto", display: "block" }}
          />
          <span>
            CREST HOLDING
            <span style={{ color: "#8fb8e0", fontSize: "0.58em", verticalAlign: "0.42em", letterSpacing: 0 }}>
              ®
            </span>
          </span>
        </Link>
        <div style={{ display: "flex", gap: 30, alignItems: "center", fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase" }}>
          <Link href="/" data-hover="" className="hov-nl bnav-back" style={{ color: "rgba(242,239,233,.7)" }}>
            ← Forsiden
          </Link>
          <Link
            href="/#kontakt"
            data-hover=""
            className="hov-fill"
            style={{
              display: "inline-block",
              padding: "12px 26px",
              background: "#f2efe9",
              color: "#0a0f16",
              fontWeight: 600,
              borderRadius: 999,
              letterSpacing: ".06em",
            }}
          >
            Ta kontakt
          </Link>
        </div>
      </nav>

      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>

      <footer
        className="bfoot"
        style={{
          position: "relative",
          borderTop: "1px solid rgba(242,239,233,.1)",
          marginTop: 40,
          padding: "40px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          maxWidth: 1360,
          margin: "40px auto 0",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", gap: 28, fontSize: 14, flexWrap: "wrap" }}>
          <Link href="/" data-hover="" className="hov-link" style={{ color: "rgba(242,239,233,.6)" }}>
            Crest Holding
          </Link>
          <Link href="/vilkar" data-hover="" className="hov-link" style={{ color: "rgba(242,239,233,.6)" }}>
            Vilkår
          </Link>
          <Link href="/personvern" data-hover="" className="hov-link" style={{ color: "rgba(242,239,233,.6)" }}>
            Personvern
          </Link>
          <a
            href="https://www.oystr.no"
            target="_blank"
            data-hover=""
            className="hov-link"
            style={{ color: "rgba(242,239,233,.6)" }}
          >
            oystr.no ↗
          </a>
          <a
            href="https://altiv.no"
            target="_blank"
            data-hover=""
            className="hov-link"
            style={{ color: "rgba(242,239,233,.6)" }}
          >
            altiv.no ↗
          </a>
        </div>
        <span style={{ color: "rgba(242,239,233,.4)", fontSize: 13 }}>
          {selskapslinje}
        </span>
      </footer>
    </div>
  );
}
