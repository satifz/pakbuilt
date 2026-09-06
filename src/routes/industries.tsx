import { createFileRoute } from "@tanstack/react-router";
import { BrandMessage } from "@/components/sections/Blocks";
import { IndustryCards } from "@/components/sections/IndustryCards";
import { ServiceLinks } from "@/components/sections/ServiceLinks";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero } from "@/components/site/PageHero";
import { buildingMaterials, fitOut, hvac } from "@/data/services";
import { breadcrumbLd, canonical, jsonLd, pageMeta } from "@/lib/seo";

const title = "Industries We Supply in Pakistan | Residential to Industrial — PakBuilt";
const description =
  "PakBuilt supplies residential, commercial, retail, hospitality and industrial requirements with building materials, procurement and facilities support across Pakistan.";

const trail = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
];

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/industries" }),
    links: canonical("/industries"),
    scripts: [jsonLd(breadcrumbLd(trail))],
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
      <Breadcrumbs trail={trail} />
      <IndustryCards />
      <ServiceLinks
        eyebrow="Where to next"
        heading="Services these sectors use most"
        services={[buildingMaterials, fitOut, hvac]}
      />
      <BrandMessage />
    </>
  );
}
