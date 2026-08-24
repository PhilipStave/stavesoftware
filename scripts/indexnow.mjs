// Varsler Bing (og Yandex/Seznam/Naver) om at sidene er oppdatert, via IndexNow.
// Nøkkelen er offentlig med vilje — den ligger som en fil på domenet og er
// beviset på at vi eier det. Ingen hemmeligheter her.
const KEY = "4eb8f8c4ac15dc3a105dcc3d3cd06e72";
const HOST = "stavesoftware.no";
const ORIGIN = `https://${HOST}`;

// Hent alle URL-er fra den publiserte sitemapen, så nye sider blir med av seg selv
const res = await fetch(`${ORIGIN}/sitemap.xml`, { headers: { "User-Agent": "indexnow-script" } });
if (!res.ok) {
  console.error(`Fikk ikke tak i sitemap.xml (HTTP ${res.status})`);
  process.exit(1);
}
const xml = await res.text();
const urlList = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) {
  console.error("Fant ingen URL-er i sitemap.xml");
  process.exit(1);
}
console.log(`Sender inn ${urlList.length} URL(er):`);
urlList.forEach((u) => console.log(`  ${u}`));

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: `${ORIGIN}/${KEY}.txt`,
  urlList,
});

const endpoints = ["https://api.indexnow.org/indexnow", "https://www.bing.com/indexnow"];
let ok = false;
for (const url of endpoints) {
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body,
    });
    // 200 = godkjent, 202 = mottatt (nøkkelvalidering pågår)
    console.log(`${url} -> HTTP ${r.status}`);
    if (r.status === 200 || r.status === 202) ok = true;
  } catch (e) {
    console.log(`${url} -> feilet: ${e.message}`);
  }
}
if (!ok) {
  console.error("Ingen endepunkter godtok innsendingen");
  process.exit(1);
}
console.log("Ferdig.");
