import { createFileRoute } from "@tanstack/react-router";
import { BoqBanner, ProcessSection } from "@/components/sections/Blocks";
import { ServiceLinks } from "@/components/sections/ServiceLinks";
import { SolutionCards } from "@/components/sections/SolutionCards";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero } from "@/components/site/PageHero";
import { buildingMaterials, fitOut, hvac, mep, procurement } from "@/data/services";
import { breadcrumbLd, canonical, jsonLd, pageMeta } from "@/lib/seo";

const title = "Building Solutions in Pakistan | Procurement, Fit-Out & HVAC — PakBuilt";
const description =
  "Project procurement, building materials, fit-out solutions, HVAC and MEP supplies from PakBuilt for construction projects in Karachi and across Pakistan.";

const trail = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/solutions" },
];

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/solutions" }),
    links: canonical("/solutions"),
    scripts: [jsonLd(breadcrumbLd(trail))],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="What We Do"
        subtitle="From individual requirements to project-based procurement, we help you find the right products and solutions."
      />
      <Breadcrumbs trail={trail} />
      <SolutionCards heading="Six ways we support your project" />
      <ServiceLinks
        eyebrow="Building solutions"
        heading="Explore each service in detail"
        intro="Every solution has its own page covering scope, process and how it connects to the rest of your project."
        services={[buildingMaterials, procurement, fitOut, hvac, mep]}
      />
      <BoqBanner />
      <ProcessSection />
    </>
  );
}
