import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Varig videresending fra det gamle domenet. Uten denne serverer begge
  // domenene samme innhold med status 200, og da må søkemotorene gjette —
  // canonical-taggen er et hint, en 308 er et svar. Stien tas med videre, så
  // gamle dyplenker lander på riktig side og ikke på forsiden.
  //
  // Domenet beholdes så lenge det finnes lenker til det, altså på ubestemt
  // tid. Dette er ikke en midlertidig ordning.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?stavesoftware\\.no" }],
        destination: "https://crestholding.no/:path*",
        permanent: true,
      },
      // www til apex. Vercel kan gjøre dette selv, men da må domenet legges
      // inn som en videresending i stedet for som et produksjonsdomene — og
      // dialogen der tilbyr som standard å snu det motsatt vei, slik at apex
      // sendes til www. Det ville brutt canonical-taggene og sitemapen, som
      // alle peker på apex. Her er retningen eksplisitt og kan ikke klikkes
      // feil.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www\\.crestholding\\.no" }],
        destination: "https://crestholding.no/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        // Mediafilene endres aldri uten nytt filnavn — trygt å cache i et år
        source: "/uploads/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
