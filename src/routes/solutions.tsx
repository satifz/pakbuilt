import { createFileRoute } from "@tanstack/react-router";
import { BoqBanner, ProcessSection } from "@/components/sections/Blocks";
import { SolutionCards } from "@/components/sections/SolutionCards";
import { PageHero } from "@/components/site/PageHero";

const title = "Solutions | Procurement, Fit-Out & HVAC Supply — PakBuilt";
const description =
  "Project procurement, building materials, fit-out solutions, HVAC and MEP supplies from PakBuilt for construction projects across Pakistan.";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pakbuilt-build-pukka.lovable.app/solutions" },
    ],
    links: [{ rel: "canonical", href: "https://pakbuilt-build-pukka.lovable.app/solutions" }],
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
      <SolutionCards heading="Six ways we support your project" />
      <BoqBanner />
      <ProcessSection />
    </>
  );
}
