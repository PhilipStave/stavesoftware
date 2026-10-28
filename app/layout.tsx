import type { Metadata } from "next";
import { Archivo, Cormorant_Garamond, Instrument_Serif, Michroma, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { avdelingssider } from "@/lib/avdelinger";
import { selskap, NAVN_REGISTRERT } from "@/lib/selskap";
import { tjenesteSider } from "@/lib/tjenestesider";
import Rullefelt from "@/components/Rullefelt";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

// Oystr-logoens ordmerke (bred, teknisk display-font)
const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
  display: "swap",
});

// Altiv-logoens ordmerke (fra altiv.no)
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

// Crest Holding-logoens eget ordmerke. Valgt ved måling, ikke øyemål: jeg
// segmenterte bokstavene i logofila og regnet ut bredde delt på versalhøyde
// for hver av dem (H 1,11 · O 1,05 · E 0,82 · S 0,70 — det romerske modulerte
// breddesystemet), og målte de samme forholdstallene i atten serifer.
// Cormorant Garamond traff nærmest, og har i tillegg de doble nebbterminalene
// på C og det spilte R-benet som logoen viser. Vekt 700 fordi logoens
// grunnstrek er tung — 21 % av versalhøyden — og fordi Cormorants hårstreker
// ellers blir for tynne i menystørrelse.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-garamond",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(selskap.url),
  // Søkeordene først og navnet sist: tittelen er det Google viser som overskrift
  // i treffet, og den kuttes bakfra.
  title: `${selskap.fulltNavn} — vi kjøper bedrifter og driver dem videre`,
  description:
    "Crest Holding AS kjøper lønnsomme norske bedrifter. De fleste beholder vi og driver videre, og det årlige overskuddet er avkastningen.",
  keywords:
    "oppkjøp av bedrifter, kjøpe bedrift, selge bedrift, generasjonsskifte, holdingselskap Oslo, Crest Software, Altiv, Oystr",
  robots: "index, follow",
  openGraph: {
    type: "website",
    siteName: selskap.fulltNavn,
    title: `${selskap.fulltNavn} — vi kjøper bedrifter og driver dem videre`,
    description:
      "Crest Holding AS kjøper lønnsomme norske bedrifter, beholder dem og forbedrer dem med sine egne avdelinger.",
    url: `${selskap.url}/`,
    locale: "nb_NO",
    images: [
      {
        url: '/og-image.jpg?v=2',
        width: 1200,
        height: 630,
        alt: `${selskap.fulltNavn} — Vi bygger den, drifter den og svarer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: selskap.fulltNavn,
    description:
      "Vi kjøper lønnsomme norske bedrifter, driver dem videre og får dem til å vokse.",
    images: ["/og-image.jpg?v=2"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  // Tjenestesidene peker hit som leverandør i stedet for å gjenta selskapet
  "@id": `${selskap.url}/#organisasjon`,
  name: selskap.fulltNavn,
  // Foretaksregisteret er fasit for legalName. Til navneendringen er registrert
  // er det gamle navnet fortsatt det registrerte; da meldes det nye som
  // alternateName. Snus NAVN_REGISTRERT, snur begge feltene med.
  legalName: NAVN_REGISTRERT ? selskap.juridiskNavn : selskap.tidligereNavn,
  alternateName: NAVN_REGISTRERT ? selskap.tidligereNavn : selskap.fulltNavn,
  identifier: selskap.orgnrKompakt,
  url: selskap.url,
  // Oppslaget i Enhetsregisteret er den offentlige bekreftelsen på at selskapet
  // finnes, og knytter org.nr. til nettstedet
  sameAs: [
    `https://virksomhet.brreg.no/nb/oppslag/enheter/${selskap.orgnrKompakt}`,
    "https://altiv.no",
    "https://oystr.no",
    "https://helperformance.no",
  ],
  // Logoen Google viser i søkeresultater og kunnskapspanelet. Den må være
  // absolutt, indekserbar og minst 112 piksler — derfor en egen kvadratisk
  // fil med løven på merkevarens navy, ikke den gjennomsiktige varianten:
  // et utskåret merke i krem forsvinner mot Googles hvite flater.
  logo: {
    "@type": "ImageObject",
    url: `${selskap.url}/logo/crest-logo-512.png`,
    width: 512,
    height: 512,
  },
  image: `${selskap.url}/logo/crest-logo-512.png`,
  email: selskap.epost,
  description:
    "Norsk selskap i Oslo som kjøper lønnsomme småbedrifter og driver dem videre. Fire egne avdelinger — programvare, handel, ryggrad og vekst — jobber inne i bedriftene konsernet eier.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Oslo",
    addressCountry: "NO",
  },
  areaServed: { "@type": "Country", name: "Norge" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: selskap.epost,
    areaServed: "NO",
    availableLanguage: ["nb", "en"],
  },
  // Avdelingene. schema.org/department beskriver nettopp en avdeling av en
  // organisasjon, med egen side — ikke et eget selskap. Uten dette er de fire
  // sidene bare løse sider for en søkemotor.
  department: [
    {
      "@type": "Organization",
      name: "Crest Software",
      url: `${selskap.url}/crest-software`,
      parentOrganization: { "@id": `${selskap.url}/#organisasjon` },
    },
    ...avdelingssider.map((a) => ({
      "@type": "Organization",
      name: a.navn,
      url: `${selskap.url}/${a.slug}`,
      description: a.rolle,
      parentOrganization: { "@id": `${selskap.url}/#organisasjon` },
    })),
  ],
  makesOffer: [
    ...tjenesteSider.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "@id": `${selskap.url}/${s.slug}#tjeneste`,
        name: s.tittel,
        url: `${selskap.url}/${s.slug}`,
      },
    })),
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drift og løpende endringer, med fast kontaktperson" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Design og merkevare" } },
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "NOK",
      itemOffered: {
        "@type": "Service",
        name: "Verdivurdering av bedrift",
        url: `${selskap.url}/verdivurdering`,
      },
    },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oppkjøp av lønnsomme norske bedrifter" } },
  ],
  knowsAbout: [
    "Oppkjøp av bedrifter",
    "Generasjonsskifte",
    "Verdsettelse av bedrifter",
    "Salg av bedrift",
    "Nettsider",
    "Apputvikling",
    "Søkemotoroptimalisering",
    "AEO",
    "SaaS",
    "CRM",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nb"
      className={`${archivo.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} ${michroma.variable} ${cormorant.variable}`}
    >
      <body>
        {children}
        <Rullefelt />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
