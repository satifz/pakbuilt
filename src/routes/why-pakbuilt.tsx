import { createFileRoute } from "@tanstack/react-router";
import { BenefitsSection, BoqBanner, FaqSection } from "@/components/sections/Blocks";
import { PageHero } from "@/components/site/PageHero";

const title = "Why PakBuilt | Practical Construction Procurement in Pakistan";
const description =
  "Practical advice, professional procurement, technical understanding and reliable communication — how PakBuilt approaches construction material supply in Pakistan.";

export const Route = createFileRoute("/why-pakbuilt")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/why-pakbuilt" },
    ],
    links: [{ rel: "canonical", href: "/why-pakbuilt" }],
  }),
  component: WhyPage,
});

function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why us"
        title="Why PakBuilt?"
        subtitle="No exaggerated claims. A clear, technical, responsive way of handling material requirements."
      />
      <BenefitsSection />
      <BoqBanner />
      <FaqSection />
    </>
  );
}
