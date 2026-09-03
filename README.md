# Crest Holding AS — nettside

Én-sides nettside for [Crest Holding](https://stavesoftware.no), et norsk studio
som hjelper startups med salg, produkt og teknologi — mot eierandel i stedet for
honorar. Siden presenterer modellen, hva studioet tilbyr, og egenproduktene
[Oystr](https://www.oystr.no) og [Altiv](https://altiv.no) som bevis på håndverket.

**Live:** https://stavesoftware.no

## Om prosjektet

Siden er en pikselnøyaktig port av en ferdig designet HTML-prototype til
produksjonsklar Next.js. Design, tekst, farger, avstander og animasjonstiming
er endelige — endringer i uttrykket skal gå gjennom designet, ikke improviseres
i koden.

Uttrykket er «award site»: mørkt, kinematisk og videodrevet, med preloader,
egendefinert markør, pinnet horisontal scroll, sirkel-wipe-overlays og et
syntetisert lydbilde.

## Teknologi

- **Next.js 16** (App Router) og **React** med **TypeScript**
- Styling med inline-styles og ett globalt stilark — verdiene er hentet direkte
  fra prototypen
- Fonter via `next/font`: Archivo (display), Space Grotesk (brødtekst),
  Michroma og Instrument Serif (produktlogoer)
- Animasjoner og scroll-effekter i egne klientkomponenter med
  `requestAnimationFrame` og `IntersectionObserver` — ingen animasjonsbibliotek
- Lyd via **Web Audio API**: syntetisert ambient pad kombinert med CC0-opptak
- Hosting på **Vercel**, med automatisk publisering fra `main`

## Kom i gang

```bash
npm install
npm run dev
```

Siden kjører da på http://localhost:3000.

| Kommando | Hva den gjør |
| --- | --- |
| `npm run dev` | Utviklingsserver |
| `npm run build` | Produksjonsbygg |
| `npm run lint` | ESLint |
| `npm run indexnow` | Varsler Bing om oppdaterte sider |

## Struktur

```
app/          Layout, metadata, sitemap, robots og ikoner
components/   Seksjonene på siden, samt overlays og produktlogoer
lib/          Innhold (data.ts) og effektene (useSiteEffects, useSound)
public/       Video, bilder og lyd
scripts/      IndexNow-varsling
```

Alt tekstinnhold ligger samlet i [`lib/data.ts`](lib/data.ts) — tjenester,
teknologilister og innholdet i tjenestepanelene.

## Drift

Hver push til `main` bygges og publiseres automatisk av Vercel. To workflows
kjører ved siden av:

- **CI** — lint, typesjekk og bygg på hver push og pull request
- **IndexNow** — varsler Bing og andre søkemotorer om oppdaterte sider

SEO-oppsettet (metadata, Open Graph, JSON-LD, `sitemap.xml` og `robots.txt`)
genereres av Next.js og ligger i `app/`.

---

© 2026 Crest Holding AS
