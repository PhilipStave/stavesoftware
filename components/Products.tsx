import { mute } from "./mute";

export default function Products() {
  return (
    <section id="produkter" style={{ position: "relative", height: "340vh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          id="htrack"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6vw",
            padding: "0 48px",
            willChange: "transform",
          }}
        >
          <div style={{ flex: "0 0 auto", width: "34vw", minWidth: 340, color: "#10161f" }}>
            <div
              style={{
                fontSize: 12,
                letterSpacing: ".26em",
                textTransform: "uppercase",
                color: "#2f5d8a",
                marginBottom: 24,
              }}
            >
              (Egne produkter i drift)
            </div>
            <h2
              className="tw"
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 900,
                fontSize: "clamp(40px, 4.6vw, 78px)",
                letterSpacing: "-.03em",
                margin: 0,
                textTransform: "uppercase",
                lineHeight: 0.98,
              }}
            >
              Hva vi har laget<span className="twcaret" style={{ color: "#2f5d8a" }}>_</span>
            </h2>
            <p
              style={{
                color: "#3d4550",
                lineHeight: 1.7,
                fontSize: 16,
                margin: "26px 0 0",
                maxWidth: 380,
              }}
            >
              Scroll videre — produktene kommer til deg. Bygget, lansert og driftet av oss.
            </p>
            <div
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 800,
                fontSize: 15,
                letterSpacing: ".1em",
                color: "#2f5d8a",
                marginTop: 30,
              }}
            >
              SCROLL →
            </div>
          </div>
          <article style={{ flex: "0 0 auto", width: "66vw", minWidth: 620, perspective: 1200 }}>
            <div
              data-tilt3d=""
              className="pcard"
              style={{
                display: "grid",
                gridTemplateColumns: "1.15fr 1fr",
                gap: 0,
                background: "#ffffff",
                color: "#10161f",
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: "0 60px 120px -40px rgba(16,22,31,.55)",
              }}
            >
              <a
                data-zoom=""
                data-hover=""
                href="https://www.oystr.no"
                target="_blank"
                style={{ display: "block" }}
              >
                <video
                  id="oystrvid"
                  src="/uploads/Oystr_kortet_Photorealistic_ae.mp4"
                  poster="/uploads/poster-oystr.jpg"
                  muted
                  loop
                  playsInline
                  preload="auto"
                  ref={mute}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    minHeight: 460,
                    objectFit: "cover",
                  }}
                ></video>
              </a>
              <div
                className="ptxt"
                style={{
                  padding: "50px 44px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: ".26em",
                    textTransform: "uppercase",
                    color: "#2f5d8a",
                    marginBottom: 18,
                  }}
                >
                  01 / iOS-app · Kart &amp; navigasjon
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-archivo), sans-serif",
                    fontWeight: 900,
                    fontSize: 50,
                    letterSpacing: "-.02em",
                    margin: "0 0 18px",
                    textTransform: "uppercase",
                  }}
                >
                  Oystr
                </h3>
                <p style={{ color: "#3d4550", lineHeight: 1.7, fontSize: 16, margin: "0 0 12px" }}>
                  Sjøkart og navigasjon for hele norskekysten, bygget for fritidsbåt. Sjøveisruting
                  rundt land og grunner, offline-kart, AIS, vannstand og vær — rett i lomma.
                </p>
                <p style={{ color: "#3d4550", lineHeight: 1.7, fontSize: 16, margin: "0 0 28px" }}>
                  Kartdata fra Kartverket og Kystverket, vær fra Meteorologisk institutt.
                </p>
                <a
                  href="https://www.oystr.no"
                  target="_blank"
                  data-hover=""
                  data-magnet=""
                  className="hov-navy"
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    padding: "14px 32px",
                    background: "#10161f",
                    color: "#f2efe9",
                    fontWeight: 600,
                    fontSize: 15,
                    borderRadius: 999,
                  }}
                >
                  Besøk oystr.no →
                </a>
              </div>
            </div>
          </article>
          <article style={{ flex: "0 0 auto", width: "66vw", minWidth: 620, perspective: 1200 }}>
            <div
              data-tilt3d=""
              className="pcard"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.15fr",
                gap: 0,
                background: "#ffffff",
                color: "#10161f",
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: "0 60px 120px -40px rgba(16,22,31,.55)",
              }}
            >
              <div
                className="ptxt"
                style={{
                  padding: "50px 44px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: ".26em",
                    textTransform: "uppercase",
                    color: "#2f5d8a",
                    marginBottom: 18,
                  }}
                >
                  02 / SaaS · CRM for B2B
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-archivo), sans-serif",
                    fontWeight: 900,
                    fontSize: 50,
                    letterSpacing: "-.02em",
                    margin: "0 0 18px",
                    textTransform: "uppercase",
                  }}
                >
                  Altiv
                </h3>
                <p style={{ color: "#3d4550", lineHeight: 1.7, fontSize: 16, margin: "0 0 12px" }}>
                  Norsk CRM for salgsoppfølging i B2B. Pipeline på tvers av avdelinger, automatisk
                  e-postlogging, oppfølginger i kalenderen og omsetning og margin per selger.
                </p>
                <p style={{ color: "#3d4550", lineHeight: 1.7, fontSize: 16, margin: "0 0 28px" }}>
                  Ingen installasjon — fungerer i nettleseren, klart på minutter.
                </p>
                <a
                  href="https://altiv.no"
                  target="_blank"
                  data-hover=""
                  data-magnet=""
                  className="hov-navy"
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    padding: "14px 32px",
                    background: "#10161f",
                    color: "#f2efe9",
                    fontWeight: 600,
                    fontSize: 15,
                    borderRadius: 999,
                  }}
                >
                  Besøk altiv.no →
                </a>
              </div>
              <a
                data-zoom=""
                data-hover=""
                href="https://altiv.no"
                target="_blank"
                style={{ display: "block", position: "relative" }}
              >
                <video
                  id="altivvid"
                  src="/uploads/altiv-kort.mp4"
                  poster="/uploads/poster-altiv.jpg"
                  muted
                  loop
                  playsInline
                  preload="auto"
                  ref={mute}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    minHeight: 460,
                    objectFit: "cover",
                  }}
                ></video>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/uploads/altiv-dashboard.png"
                  alt="Altiv CRM – oversikt over salgspipeline"
                  style={{
                    position: "absolute",
                    left: "6%",
                    bottom: "6%",
                    width: "62%",
                    borderRadius: 8,
                    boxShadow: "0 24px 60px -18px rgba(10,15,22,.65)",
                    border: "1px solid rgba(255,255,255,.25)",
                  }}
                />
              </a>
            </div>
          </article>
          <div style={{ flex: "0 0 auto", width: "10vw" }}></div>
        </div>
      </div>
    </section>
  );
}
