import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BloggShell from "@/components/BloggShell";
import ArtikkelInnhold from "@/components/ArtikkelInnhold";
import { artikler, artiklerSortert, finnArtikkel } from "@/lib/artikler";
import { selskap } from "@/lib/selskap";

export function generateStaticParams() {
  return artikler.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = finnArtikkel(slug);
  if (!a) return {};
  const url = `${selskap.url}/blogg/${a.slug}`;
  return {
    title: `${a.tittel} — ${selskap.fulltNavn}`,
    description: a.metaBeskrivelse,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: selskap.fulltNavn,
      title: a.tittel,
      description: a.metaBeskrivelse,
      url,
      locale: "nb_NO",
      publishedTime: a.publisert,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${selskap.fulltNavn} — Vi bygger digitale produkter folk faktisk bruker`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: a.tittel,
      description: a.metaBeskrivelse,
      images: ["/og-image.jpg"],
    },
  };
}

const datoFormat = new Intl.DateTimeFormat("nb-NO", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default async function ArtikkelSide({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = finnArtikkel(slug);
  if (!a) notFound();

  const andre = artiklerSortert.filter((x) => x.slug !== a.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.tittel,
    description: a.metaBeskrivelse,
    datePublished: a.publisert,
    dateModified: a.publisert,
    inLanguage: "nb-NO",
    mainEntityOfPage: `${selskap.url}/blogg/${a.slug}`,
    author: { "@type": "Organization", name: selskap.fulltNavn, url: selskap.url },
    publisher: {
      "@type": "Organization",
      name: selskap.fulltNavn,
      url: selskap.url,
    },
  };

  return (
    <BloggShell>
      <article
        className="bwrap"
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "170px 48px 40px",
          boxSizing: "border-box",
        }}
      >
        <Link
          href="/blogg"
          data-hover=""
          className="hov-link"
          style={{
            display: "inline-block",
            marginBottom: 30,
            color: "rgba(242,239,233,.55)",
            fontSize: 13,
            letterSpacing: ".16em",
            textTransform: "uppercase",
          }}
        >
          ← Alle artikler
        </Link>
        <div
          style={{
            display: "flex",
            gap: 18,
            alignItems: "baseline",
            flexWrap: "wrap",
            marginBottom: 20,
            fontSize: 12,
            letterSpacing: ".2em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#8fb8e0" }}>{a.kategori}</span>
          <span style={{ color: "rgba(242,239,233,.45)" }}>
            {datoFormat.format(new Date(a.publisert))}
          </span>
          <span style={{ color: "rgba(242,239,233,.45)" }}>{a.lesetid} min lesing</span>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 900,
            fontSize: "clamp(34px, 5.4vw, 68px)",
            letterSpacing: "-.03em",
            lineHeight: 1.02,
            margin: "0 0 26px",
            textTransform: "uppercase",
            color: "#f2efe9",
          }}
        >
          {a.tittel}
        </h1>
        <p
          style={{
            color: "rgba(242,239,233,.75)",
            fontSize: 20,
            lineHeight: 1.65,
            margin: "0 0 50px",
            paddingBottom: 40,
            borderBottom: "1px solid rgba(242,239,233,.14)",
          }}
        >
          {a.ingress}
        </p>

        <ArtikkelInnhold innhold={a.innhold} />

        <div
          data-reveal=""
          style={{
            marginTop: 70,
            paddingTop: 44,
            borderTop: "1px solid rgba(242,239,233,.14)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "rgba(242,239,233,.7)",
              fontSize: 17,
              lineHeight: 1.65,
              margin: "0 0 26px",
            }}
          >
            Har du et prosjekt du lurer på? Vi svarer ærlig.
          </p>
          <Link
            href="/#kontakt"
            data-hover=""
            className="hov-fill"
            style={{
              display: "inline-block",
              padding: "18px 44px",
              background: "#f2efe9",
              color: "#0a0f16",
              fontWeight: 600,
              fontSize: 16,
              borderRadius: 999,
            }}
          >
            Ta kontakt
          </Link>
        </div>
      </article>

      {andre.length > 0 && (
        <section
          className="bwrap"
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "80px 48px 60px",
            boxSizing: "border-box",
          }}
        >
          <div
            data-reveal=""
            style={{
              fontSize: 12,
              letterSpacing: ".26em",
              textTransform: "uppercase",
              color: "rgba(242,239,233,.55)",
              marginBottom: 26,
            }}
          >
            (Les også)
          </div>
          <div style={{ borderTop: "1px solid rgba(242,239,233,.14)" }}>
            {andre.map((x) => (
              <Link
                key={x.slug}
                href={`/blogg/${x.slug}`}
                data-reveal=""
                data-hover=""
                className="srow"
                style={{
                  display: "block",
                  padding: "28px 10px",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: 12,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "#8fb8e0",
                    marginBottom: 10,
                  }}
                >
                  {x.kategori}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-archivo), sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(20px, 2.4vw, 28px)",
                    letterSpacing: "-.01em",
                    textTransform: "uppercase",
                    color: "#f2efe9",
                  }}
                >
                  {x.tittel}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </BloggShell>
  );
}
