import type { Metadata } from "next";
import { Archivo, Cormorant_Garamond, Instrument_Serif, Michroma, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { selskap, NAVN_REGISTRERT } from "@/lib/selskap";

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
  title: `${selskap.fulltNavn} — Vi bygger nettsider og apper, og drifter dem`,
  description:
    "Vi lager nettsiden eller appen, drifter den, og du får én fast person som gjør endringene du trenger. Fast pris eller eierandel — du velger.",
  keywords:
    "nettside Norge, drift av nettside, apputvikling Norge, SEO, fast kontaktperson, utvikling mot eierandel, Oystr, Altiv",
  robots: "index, follow",
  alternates: { canonical: `${selskap.url}/` },
  openGraph: {
    type: "website",
    siteName: selskap.fulltNavn,
    title: `${selskap.fulltNavn} — Vi bygger nettsider og apper, og drifter dem`,
    description:
      "Vi lager nettsiden eller appen, drifter den, og du får én fast person som gjør endringene du trenger. Fast pris eller eierandel — du velger.",
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
      "Vi bygger nettsider og apper, drifter dem, og du får én fast person. Fast pris eller eierandel.",
    images: ["/og-image.jpg?v=2"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: selskap.fulltNavn,
  // Foretaksregisteret er fasit for legalName. Til navneendringen er registrert
  // er det gamle navnet fortsatt det registrerte; da meldes det nye som
  // alternateName. Snus NAVN_REGISTRERT, snur begge feltene med.
  legalName: NAVN_REGISTRERT ? selskap.juridiskNavn : selskap.tidligereNavn,
  alternateName: NAVN_REGISTRERT ? selskap.tidligereNavn : selskap.fulltNavn,
  identifier: selskap.orgnrKompakt,
  foundingDate: "2026-08-19",
  url: selskap.url,
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
    "Norsk studio som lager og drifter nettsider og apper, med fast kontaktperson. Betales med fast pris eller eierandel.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Oslo",
    addressCountry: "NO",
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Utvikling av nettside og app" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drift og løpende endringer, med fast kontaktperson" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Søkemotoroptimalisering" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Produkt- og teknologiutvikling" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Design og merkevare" } },
  ],
  knowsAbout: ["Programvareutvikling", "Salg og forretningsutvikling", "Startups", "iOS-apper", "SaaS", "CRM"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
