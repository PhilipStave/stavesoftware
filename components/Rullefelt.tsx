"use client";

import { useEffect, useRef } from "react";

// Eget rullefelt langs høyre kant, likt det på helperformance.no. Målt der
// 22. oktober 2026: 10 px spor med 4 px luft oppe og nede, 7 px tommel i
// rgba(120,126,135,.5) med 8 px radius, som vokser til 10 px og blir mørkere
// når du peker på den eller drar i den.
//
// Nettleserens eget rullefelt er skjult i globals.css. Da forsvinner også
// muligheten til å se hvor langt ned du er og til å dra deg et sted, og dette
// gir begge deler tilbake uten å endre utseendet på siden.
//
// Tommelen tegnes av rullingen, ikke omvendt: høyden er synlig del av
// dokumentet, og posisjonen er hvor langt ned du har kommet. Når innholdet
// endrer høyde — bilder som lastes, seksjoner som folder seg ut — regner en
// ResizeObserver den om.

const LUFT = 4; // samme som top/bottom i CSS-en
const MIN_TOMMEL = 36;

export default function Rullefelt() {
  const sporRef = useRef<HTMLDivElement>(null);
  const tommelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spor = sporRef.current;
    const tommel = tommelRef.current;
    if (!spor || !tommel) return;

    let ventende = 0;
    let tommelHoyde = MIN_TOMMEL;

    const maal = () => {
      const dok = document.documentElement;
      const vindu = window.innerHeight;
      const dokument = Math.max(dok.scrollHeight, document.body.scrollHeight);
      const sporHoyde = Math.max(0, vindu - LUFT * 2);
      return { vindu, dokument, sporHoyde, vei: dokument - vindu };
    };

    const tegn = () => {
      ventende = 0;
      const { vindu, dokument, sporHoyde, vei } = maal();
      if (vei <= 1) {
        spor.hidden = true;
        return;
      }
      spor.hidden = false;
      tommelHoyde = Math.max(MIN_TOMMEL, Math.round((vindu / dokument) * sporHoyde));
      const k = Math.min(1, Math.max(0, window.scrollY / vei));
      tommel.style.height = tommelHoyde + "px";
      tommel.style.transform = `translateY(${(k * (sporHoyde - tommelHoyde)).toFixed(1)}px)`;
    };

    const be = () => {
      if (!ventende) ventende = requestAnimationFrame(tegn);
    };

    tegn();
    window.addEventListener("scroll", be, { passive: true });
    window.addEventListener("resize", be);
    const ro = new ResizeObserver(be);
    ro.observe(document.body);

    // Dra i tommelen. Pekeren fanges, så den slipper ikke taket om du drar
    // utenfor sporet, og rullingen settes direkte — den myke rullingen i
    // globals.css ville ellers ligget et stykke bak fingeren.
    let drar = false;
    let startY = 0;
    let startRull = 0;

    const ned = (e: PointerEvent) => {
      drar = true;
      startY = e.clientY;
      startRull = window.scrollY;
      spor.classList.add("drar");
      tommel.setPointerCapture(e.pointerId);
      e.preventDefault();
    };

    const flytt = (e: PointerEvent) => {
      if (!drar) return;
      const { sporHoyde, vei } = maal();
      const rom = sporHoyde - tommelHoyde;
      if (rom <= 0) return;
      window.scrollTo({ top: startRull + ((e.clientY - startY) / rom) * vei, behavior: "instant" });
    };

    const opp = (e: PointerEvent) => {
      if (!drar) return;
      drar = false;
      spor.classList.remove("drar");
      if (tommel.hasPointerCapture(e.pointerId)) tommel.releasePointerCapture(e.pointerId);
    };

    tommel.addEventListener("pointerdown", ned);
    tommel.addEventListener("pointermove", flytt);
    tommel.addEventListener("pointerup", opp);
    tommel.addEventListener("pointercancel", opp);

    return () => {
      window.removeEventListener("scroll", be);
      window.removeEventListener("resize", be);
      ro.disconnect();
      tommel.removeEventListener("pointerdown", ned);
      tommel.removeEventListener("pointermove", flytt);
      tommel.removeEventListener("pointerup", opp);
      tommel.removeEventListener("pointercancel", opp);
      if (ventende) cancelAnimationFrame(ventende);
    };
  }, []);

  return (
    <div className="rullefelt" aria-hidden="true" ref={sporRef} hidden>
      <div className="rullefelt-tommel" ref={tommelRef}></div>
    </div>
  );
}
