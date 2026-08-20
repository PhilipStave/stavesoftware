import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
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
  title: "Stave Software AS — Vi bygger digitale produkter folk faktisk bruker",
  description:
    "Norsk programvarestudio bak sjøkart-appen Oystr og CRM-systemet Altiv. Vi bygger mobilapper, webapplikasjoner og SaaS — fra idé til lansert produkt.",
  keywords:
    "programvareutvikling, apputvikling Norge, SaaS-utvikling, skreddersydd programvare, Oystr, Altiv, CRM, sjøkart-app",
  robots: "index, follow",
  alternates: { canonical: "https://stavesoftware.no/" },
  openGraph: {
    type: "website",
    siteName: "Stave Software AS",
    title: "Stave Software AS — Vi bygger digitale produkter folk faktisk bruker",
    description:
      "Norsk programvarestudio bak sjøkart-appen Oystr og CRM-systemet Altiv. Fra idé til lansert produkt.",
    url: "https://stavesoftware.no/",
    locale: "nb_NO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stave Software AS",
    description:
      "Norsk programvarestudio bak Oystr og Altiv. Vi bygger mobilapper, webapplikasjoner og SaaS.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stave Software AS",
  url: "https://stavesoftware.no",
  email: "post@stavesoftware.no",
  description:
    "Norsk programvarestudio bak sjøkart-appen Oystr og CRM-systemet Altiv.",
  address: { "@type": "PostalAddress", addressCountry: "NO" },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Apputvikling" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Webapplikasjoner og SaaS" } },
  ],
  knowsAbout: ["Programvareutvikling", "iOS-apper", "SaaS", "CRM"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
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
