const GRAIN_BG =
  "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22240%22 height=%22240%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/><feColorMatrix type=%22saturate%22 values=%220%22/><feComponentTransfer><feFuncA type=%22linear%22 slope=%220.14%22/></feComponentTransfer></filter><rect width=%22240%22 height=%22240%22 filter=%22url(%23n)%22/></svg>')";

export default function Chrome() {
  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-ring"></div>
      <div
        id="dotnav"
        style={{
          position: "fixed",
          right: 26,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 60,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <a href="#topp" data-hover="" data-sect="topp" title="Topp">
          <span className="dot"></span>
        </a>
        <a href="#produkter" data-hover="" data-sect="produkter" title="Produkter">
          <span className="dot"></span>
        </a>
        <a href="#tjenester" data-hover="" data-sect="tjenester" title="Hva du får">
          <span className="dot"></span>
        </a>
        <a href="#modellen" data-hover="" data-sect="modellen" title="Modellen">
          <span className="dot"></span>
        </a>
        <a href="#teknologi" data-hover="" data-sect="teknologi" title="Teknologi">
          <span className="dot"></span>
        </a>
        <a href="#kontakt" data-hover="" data-sect="kontakt" title="Kontakt">
          <span className="dot"></span>
        </a>
      </div>
      <div
        id="grain"
        style={{
          position: "fixed",
          inset: "-8%",
          zIndex: 40,
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 1s",
          mixBlendMode: "overlay",
          animation: "grainShift .9s steps(1) infinite",
          backgroundImage: GRAIN_BG,
        }}
      ></div>
      <div
        id="progress"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          width: "0%",
          background: "linear-gradient(90deg, var(--accent), var(--ink))",
          zIndex: 100,
        }}
      ></div>
      <div id="spot" style={{ position: "fixed", inset: 0, zIndex: 45, pointerEvents: "none" }}></div>
    </>
  );
}
