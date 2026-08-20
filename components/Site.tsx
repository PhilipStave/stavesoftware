"use client";

import { useCallback, useState } from "react";
import { useSound } from "@/lib/useSound";
import { useSiteEffects } from "@/lib/useSiteEffects";
import Chrome from "./Chrome";
import Nav from "./Nav";
import Hero from "./Hero";
import MarqueeBand from "./MarqueeBand";
import Products from "./Products";
import Services from "./Services";
import Tech from "./Tech";
import TechOverlay from "./TechOverlay";
import ServiceOverlay from "./ServiceOverlay";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Site() {
  const { sound, toggleSound, setOystrVisible } = useSound();
  useSiteEffects({ onOystrVisible: setOystrVisible });

  const openTech = useCallback((e: React.MouseEvent) => {
    const ov = document.getElementById("techoverlay");
    if (!ov) return;
    ov.style.setProperty("--cx", e.clientX + "px");
    ov.style.setProperty("--cy", e.clientY + "px");
    ov.scrollTop = 0;
    ov.classList.add("open");
    document.documentElement.style.overflow = "hidden";
  }, []);

  const closeTech = useCallback(() => {
    const ov = document.getElementById("techoverlay");
    if (ov) ov.classList.remove("open");
    document.documentElement.style.overflow = "";
  }, []);

  const [activeService, setActiveService] = useState(0);

  const openService = useCallback((e: React.MouseEvent, index: number) => {
    setActiveService(index);
    const ov = document.getElementById("serviceoverlay");
    if (!ov) return;
    ov.style.setProperty("--cx", e.clientX + "px");
    ov.style.setProperty("--cy", e.clientY + "px");
    ov.scrollTop = 0;
    ov.classList.add("open");
    document.documentElement.style.overflow = "hidden";
  }, []);

  const closeService = useCallback(() => {
    const ov = document.getElementById("serviceoverlay");
    if (ov) ov.classList.remove("open");
    document.documentElement.style.overflow = "";
  }, []);

  return (
    <div
      id="pagebg"
      style={{
        minHeight: "100vh",
        position: "relative",
        background: "#0a0f16",
        transition: "background 1s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <Chrome />
      <Nav soundLabel={sound ? "Lyd på" : "Lyd av"} toggleSound={toggleSound} />
      <Hero />
      <MarqueeBand />
      <Products />
      <Services openService={openService} />
      <Tech openTech={openTech} />
      <TechOverlay closeTech={closeTech} />
      <ServiceOverlay active={activeService} closeService={closeService} />
      <Contact />
      <Footer />
    </div>
  );
}
