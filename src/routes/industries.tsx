import { createFileRoute } from "@tanstack/react-router";
import { BrandMessage, IndustriesSection } from "@/components/sections/Blocks";
import { PageHero } from "@/components/site/PageHero";

const title = "Industries We Supply | Residential to Industrial — PakBuilt";
const description =
  "PakBuilt supplies residential, commercial, construction, fit-out, industrial and facilities-management requirements with materials and procurement support in Pakistan.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for how you work."
        subtitle="The same structured sourcing process, scaled from a single home renovation to an ongoing facilities contract."
      />
      <IndustriesSection />
      <BrandMessage />
    </>
  );
}
