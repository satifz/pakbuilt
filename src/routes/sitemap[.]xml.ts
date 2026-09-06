import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://pakbuilt-build-pukka.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/solutions", changefreq: "monthly", priority: "0.9" },
  { path: "/building-materials", changefreq: "monthly", priority: "0.9" },
  { path: "/procurement", changefreq: "monthly", priority: "0.9" },
  { path: "/fit-out", changefreq: "monthly", priority: "0.9" },
  { path: "/hvac", changefreq: "monthly", priority: "0.9" },
  { path: "/mep", changefreq: "monthly", priority: "0.8" },
  { path: "/facilities-management", changefreq: "monthly", priority: "0.9" },
  { path: "/fm-consultancy", changefreq: "monthly", priority: "0.8" },
  { path: "/hard-services", changefreq: "monthly", priority: "0.8" },
  { path: "/soft-services", changefreq: "monthly", priority: "0.8" },
  { path: "/products", changefreq: "monthly", priority: "0.8" },
  { path: "/industries", changefreq: "monthly", priority: "0.7" },
  { path: "/projects", changefreq: "monthly", priority: "0.6" },
  { path: "/why-pakbuilt", changefreq: "yearly", priority: "0.6" },
  { path: "/about", changefreq: "yearly", priority: "0.7" },
  { path: "/contact", changefreq: "yearly", priority: "0.8" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
