export const SITE_URL = "https://pakbuilt-build-pukka.lovable.app";

export const absoluteUrl = (path: string) =>
  path === "/" ? SITE_URL : `${SITE_URL}${path}`;

/** Standard per-page meta tags (title, description, Open Graph, Twitter). */
export function pageMeta({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
}) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: absoluteUrl(path) },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

export const canonical = (path: string) => [
  { rel: "canonical" as const, href: absoluteUrl(path) },
];

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqLd(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: absoluteUrl(path),
    areaServed: [
      { "@type": "City", name: "Karachi" },
      { "@type": "AdministrativeArea", name: "Sindh" },
      { "@type": "Country", name: "Pakistan" },
    ],
    provider: {
      "@type": "Organization",
      name: "PakBuilt",
      url: SITE_URL,
      telephone: "+92 300 2843259",
      email: "info@pakbuilt.com",
    },
  };
}

export const jsonLd = (data: unknown) => ({
  type: "application/ld+json",
  children: JSON.stringify(data),
});
