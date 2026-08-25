import type { Metadata } from "next";
import { Archivo, Instrument_Serif, Michroma, Space_Grotesk } from "next/font/google";
import "./globals.css";

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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stavesoftware.no"),
  title: "Stave Software AS — Vi bygger startups mot eierandel, ikke faktura",
  description:
    "Vi hjelper startups med salg, produkt og teknologi — uten å fakturere. I stedet tar vi en eierandel, så vi tjener først når du gjør det.",
  keywords:
    "startup Norge, hjelp til startup, salg og teknologi, utvikling mot eierandel, venture studio Norge, Oystr, Altiv",
  robots: "index, follow",
  alternates: { canonical: "https://stavesoftware.no/" },
  openGraph: {
    type: "website",
    siteName: "Stave Software AS",
    title: "Stave Software AS — Vi bygger startups mot eierandel, ikke faktura",
    description:
      "Vi hjelper startups med salg, produkt og teknologi — uten å fakturere. I stedet tar vi en eierandel, så vi tjener først når du gjør det.",
    url: "https://stavesoftware.no/",
    locale: "nb_NO",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stave Software AS — Vi tar ikke betalt for å bygge',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stave Software AS",
    description:
      "Vi hjelper startups med salg, produkt og teknologi mot eierandel — ikke mot faktura.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stave Software AS",
  url: "https://stavesoftware.no",
  email: "post@stavesoftware.no",
  description:
    "Norsk studio som hjelper startups med salg, produkt og teknologi mot eierandel i stedet for honorar.",
  address: { "@type": "PostalAddress", addressCountry: "NO" },
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
      className={`${archivo.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} ${michroma.variable}`}
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
