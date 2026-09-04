import { createFileRoute } from "@tanstack/react-router";
import aboutImage from "@/assets/about.jpg";
import { BenefitsSection, ProcessSection } from "@/components/sections/Blocks";
import { FounderSection } from "@/components/sections/FounderSection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

const title = "About PakBuilt | Construction Materials Supplier in Karachi";
const description =
  "PakBuilt is a Karachi-based construction materials and procurement company helping contractors, builders and property owners source building products across Pakistan.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About PakBuilt"
        title="Construction supply, without the usual hassle."
        subtitle="A new company built on established construction, fit-out and facilities-management experience."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={aboutImage}
              alt="Building materials organised in a supply yard"
              loading="lazy"
              className="w-full rounded-xl object-cover shadow-lift"
            />
          </Reveal>
          <div>
            <SectionHeading eyebrow="Who we are" title="Materials, sourced properly." />
            <Reveal delay={80}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                PakBuilt is a construction materials and solutions company built around a simple
                idea: getting the right materials should be easier. We help contractors, builders,
                businesses and property owners source construction products, fit-out materials, HVAC
                solutions and other project requirements.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We are a new business, and we would rather say so than invent a history. What is not
                new is the experience behind the company — years spent on projects, sites, fit-outs
                and building operations, now applied to procurement.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Based in New Golimar, Karachi, we work with requirements of every size: a single
                material for a home renovation, or a full BOQ for a commercial project.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <FounderSection />
      <ProcessSection />
      <BenefitsSection />
    </>
  );
}
