import { createFileRoute } from "@tanstack/react-router";
import { BoqBanner } from "@/components/sections/Blocks";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import heroArchitecture from "@/assets/hero-architecture.jpg";
import { PageHero } from "@/components/site/PageHero";

const title = "Projects | PakBuilt Building Materials & Fit-Out Karachi";
const description =
  "PakBuilt project references are published as they complete. Send us your requirement and see how we handle specification, sourcing and delivery.";
const url = "https://pakbuilt-build-pukka.lovable.app/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Projects & References"
        subtitle="We would rather show you nothing than show you someone else's work. Real references land here as they complete."
        image={heroArchitecture}
        imageAlt="Modern building facade under construction"
      />
      <ProjectShowcase />
      <BoqBanner />
    </>
  );
}
