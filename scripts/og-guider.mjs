import fs from "fs";
import { chromium } from "file:///C:/Users/phili/Projects/sporet/node_modules/playwright/index.mjs";

// Delingsbilder til guidene og verdivurderingen. Lyse, som sidene selv —
// holdingbildet er mørkt med operataket, og det passer ikke over en norsk
// guide om å selge bedriften.
//
// Ingen bilder, bare typografi: tittelen er det eneste som skal leses i en
// forhåndsvisning på telefon, og et fotografi bak ville bare gjort den
// vanskeligere å lese.

const REPO = "C:/Users/phili/Projects/stavesoftware/";
const UT = REPO + "public/og/";
fs.mkdirSync(UT, { recursive: true });

const merke = fs.readFileSync(REPO + "public/logo/crest-symbol-mork.png").toString("base64");

// Titlene hentes rett fra innholdsfila, så bildene ikke kan si noe annet enn
// siden gjør.
const kilde = fs.readFileSync(REPO + "lib/guider.ts", "utf8");
const guider = [...kilde.matchAll(/slug: "([^"]+)",\s*\r?\n\s*tittel: "([^"]+)"/g)].map((m) => ({
  slug: m[1],
  tittel: m[2],
}));
if (guider.length !== 6) throw new Error("fant " + guider.length + " guider, ventet 6");

const sider = [
  ...guider.map((g) => ({ fil: `guide-${g.slug}.jpg`, merkelapp: "Guide", tittel: g.tittel, under: "crestholding.no/guider" })),
  { fil: "guider.jpg", merkelapp: "Guider", tittel: "Skal du selge bedriften?", under: "crestholding.no/guider" },
  {
    fil: "verdivurdering.jpg",
    merkelapp: "Verdivurdering",
    tittel: "Hva er bedriften verdt?",
    under: "Tall fra Brønnøysund · crestholding.no",
  },
];

const storrelse = (t) => (t.length > 44 ? 52 : t.length > 30 ? 58 : 66);

const mal = (s) => `<!doctype html><html lang="nb"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Space+Grotesk:wght@400;500&display=swap" rel="stylesheet">
<style>
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #f4f2ed; color: #161d26;
         font-family: "Space Grotesk", sans-serif; }
  .inn { height: 100%; padding: 64px 72px; display: flex; flex-direction: column; justify-content: space-between; }
  .lockup { display: flex; align-items: baseline; gap: 14px; font-family: "Cormorant Garamond", Georgia, serif;
            font-weight: 700; font-size: 30px; letter-spacing: .2em; }
  .lockup img { height: 27px; width: auto; display: block; }
  .reg { color: #2c6390; font-size: .58em; vertical-align: .42em; letter-spacing: 0; }
  h1 { font-family: "Cormorant Garamond", Georgia, serif; font-weight: 600; font-size: ${storrelse(s.tittel)}px;
       line-height: 1.06; letter-spacing: -.015em; max-width: 17ch; }
  .merkelapp { font-size: 15px; letter-spacing: .26em; text-transform: uppercase; color: #2c6390; }
  .under { display: flex; align-items: baseline; justify-content: space-between; gap: 30px;
           border-top: 1px solid rgba(22,29,38,.18); padding-top: 22px; }
  .under span { font-size: 19px; color: rgba(22,29,38,.6); }
</style></head><body>
<div class="inn">
  <div class="lockup"><img src="data:image/png;base64,${merke}"><span>CREST HOLDING<span class="reg">®</span></span></div>
  <div>
    <div class="merkelapp" style="margin-bottom:22px">${s.merkelapp}</div>
    <h1>${s.tittel.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</h1>
  </div>
  <div class="under"><span>${s.under}</span><span class="merkelapp">Crest Holding AS</span></div>
</div>
</body></html>`;

const nettleser = await chromium.launch();
const side = await nettleser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });

for (const s of sider) {
  await side.setContent(mal(s), { waitUntil: "networkidle" });
  await side.waitForTimeout(700);
  await side.screenshot({ path: UT + s.fil, type: "jpeg", quality: 86 });
  console.log(s.fil, Math.round(fs.statSync(UT + s.fil).size / 1024) + " kB", "·", s.tittel);
}

await nettleser.close();
