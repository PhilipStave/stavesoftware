const GRAIN_BG =
  "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22240%22 height=%22240%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22/><feColorMatrix type=%22saturate%22 values=%220%22/><feComponentTransfer><feFuncA type=%22linear%22 slope=%220.14%22/></feComponentTransfer></filter><rect width=%22240%22 height=%22240%22 filter=%22url(%23n)%22/></svg>')";

export default function Chrome() {
  return (
    <>
      <div
        id="preloader"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 10000,
          background: "#0a0f16",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 48,
          boxSizing: "border-box",
          transition: "transform 1s cubic-bezier(.76,0,.24,1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
            letterSpacing: ".3em",
            textTransform: "uppercase",
            color: "rgba(242,239,233,.5)",
          }}
        >
          <span>Programvarestudio</span>
          <span>Norge</span>
        </div>
        {/* Logoen er det som lastes inn: et svakt spøkelseslag ligger i ro,
            mens #prefill avdekkes nedenfra i takt med prosenten. Samme
            clipPath-mekanikk som ordmerket hadde — useSiteEffects rører bare
            id-en, ikke innholdet. */}
        <div
          id="preword"
          style={{
            position: "relative",
            width: "clamp(210px, 32vw, 440px)",
            lineHeight: 0,
            alignSelf: "center",
          }}
        >
          <img
            src="/logo/crest-lockup.png"
            alt="Crest Holding"
            width={1019}
            height={771}
            style={{ width: "100%", height: "auto", display: "block", opacity: 0.2 }}
          />
          <div
            id="prefill"
            style={{
              position: "absolute",
              inset: 0,
              clipPath: "inset(100% 0 0 0)",
              transition: "clip-path .25s cubic-bezier(.4,0,.2,1)",
            }}
          >
            <img
              src="/logo/crest-lockup.png"
              alt=""
              aria-hidden="true"
              width={1019}
              height={771}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              height: 1,
              background: "rgba(242,239,233,.15)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              id="preline"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "0%",
                background: "linear-gradient(90deg, #8fb8e0, #f2efe9)",
                transition: "width .25s cubic-bezier(.4,0,.2,1)",
              }}
            ></div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: ".3em",
                textTransform: "uppercase",
                color: "rgba(242,239,233,.5)",
              }}
            >
              Laster opplevelsen
            </span>
            <span
              id="preload-num"
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 900,
                fontSize: 56,
              }}
            >
              0%
            </span>
          </div>
        </div>
      </div>
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
          background: "linear-gradient(90deg, #8fb8e0, #f2efe9)",
          zIndex: 100,
        }}
      ></div>
      <div id="spot" style={{ position: "fixed", inset: 0, zIndex: 45, pointerEvents: "none" }}></div>
    </>
  );
}
