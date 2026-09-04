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
  metadataBase: new URL("https://stavesoftware.no"),
  title: `${selskap.fulltNavn} — Vi bygger startups mot eierandel, ikke faktura`,
  description:
    "Vi hjelper startups med salg, produkt og teknologi — uten å fakturere. I stedet tar vi en eierandel, så vi tjener først når du gjør det.",
  keywords:
    "startup Norge, hjelp til startup, salg og teknologi, utvikling mot eierandel, venture studio Norge, Oystr, Altiv",
  robots: "index, follow",
  alternates: { canonical: "https://stavesoftware.no/" },
  openGraph: {
    type: "website",
    siteName: selskap.fulltNavn,
    title: `${selskap.fulltNavn} — Vi bygger startups mot eierandel, ikke faktura`,
    description:
      "Vi hjelper startups med salg, produkt og teknologi — uten å fakturere. I stedet tar vi en eierandel, så vi tjener først når du gjør det.",
    url: "https://stavesoftware.no/",
    locale: "nb_NO",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${selskap.fulltNavn} — Vi tar ikke betalt for å bygge`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: selskap.fulltNavn,
    description:
      "Vi hjelper startups med salg, produkt og teknologi mot eierandel — ikke mot faktura.",
    images: ["/og-image.jpg"],
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
  url: "https://stavesoftware.no",
  email: "post@stavesoftware.no",
  description:
    "Norsk studio som hjelper startups med salg, produkt og teknologi mot eierandel i stedet for honorar.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Oslo",
    addressCountry: "NO",
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Salg og forretningsutvikling for startups" } },
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
