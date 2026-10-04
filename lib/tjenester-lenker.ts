// Navn og adresser til tjenestesidene, holdt adskilt fra selve innholdet.
//
// Forsiden, bunntekstene og tjenestepanelet er klientkomponenter. Importerte de
// lib/tjenestesider.ts, ville all teksten på tjenestesidene blitt med i
// JavaScript-pakken til forsiden. Denne fila er det eneste de trenger.

export type TjenesteSlug = "nettside" | "app" | "seo";

export type TjenesteLenke = {
  slug: TjenesteSlug;
  href: `/${TjenesteSlug}`;
  navn: string; // kort, til lenkerader og brødsmuler
  lenketekst: string; // til knapper og lenker i løpende tekst
};

export const tjenesteLenker: TjenesteLenke[] = [
  { slug: "nettside", href: "/nettside", navn: "Nettside", lenketekst: "Slik lager vi nettsider" },
  { slug: "app", href: "/app", navn: "App", lenketekst: "Slik lager vi apper" },
  { slug: "seo", href: "/seo", navn: "SEO og AEO", lenketekst: "Slik jobber vi med SEO" },
];

export const finnTjenesteLenke = (slug: TjenesteSlug): TjenesteLenke =>
  tjenesteLenker.find((l) => l.slug === slug)!;
