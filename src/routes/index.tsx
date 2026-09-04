import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import aboutImage from "@/assets/about.jpg";
import heroImage from "@/assets/hero.jpg";
import {
  BenefitsSection,
  BoqBanner,
  BrandMessage,
  FaqSection,
  IndustriesSection,
  ProcessSection,
  SolutionsGrid,
  ValueStrip,
} from "@/components/sections/Blocks";
import { CategoryShowcase } from "@/components/sections/CategoryShowcase";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { FounderSection } from "@/components/sections/FounderSection";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";

const title = "PakBuilt | Building Materials & Construction Solutions Pakistan";
const description =
  "PakBuilt supplies building materials, construction products, project procurement, fit-out and HVAC solutions for contractors, builders, businesses and property owners in Pakistan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "PakBuilt",
          slogan: "Build Pukka.",
          description,
          telephone: "+92 300 2843259",
          email: "info@pakbuilt.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop #1535-A, Phool Gali, New Golimar",
            addressLocality: "Karachi",
            addressCountry: "PK",
          },
          areaServed: "Pakistan",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Construction site with building materials being prepared for a project"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40"
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-7xl px-4 pt-28 pb-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-charcoal-foreground">
            <span className="eyebrow rule-accent">Build Pukka.</span>
            <h1 className="font-display mt-5 text-4xl leading-[0.98] font-extrabold text-balance uppercase sm:text-6xl lg:text-7xl">
              Build Better. <span className="text-primary">Source Smarter.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal-foreground/80 sm:text-lg">
              Building materials, construction supplies and practical solutions for contractors,
              builders, businesses and property owners across Pakistan.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="cta" size="xl">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>
            <p className="font-display mt-10 text-xs font-bold tracking-[0.18em] text-charcoal-foreground/60 uppercase">
              Building Materials • Procurement • Fit-Out • HVAC
            </p>
          </div>
        </div>
        <span
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-charcoal-foreground/60"
          aria-hidden="true"
        >
          <ChevronDown className="size-6 animate-bounce" />
        </span>
      </section>

      <ValueStrip />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={aboutImage}
              alt="Stacked building materials in a supply yard"
              loading="lazy"
              className="w-full rounded-xl object-cover shadow-lift"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="About PakBuilt"
              title="Construction supply, without the usual hassle."
            />
            <Reveal delay={80}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                PakBuilt is a construction materials and solutions company built around a simple
                idea: getting the right materials should be easier.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We help contractors, builders, businesses and property owners source construction
                products, fit-out materials, HVAC solutions and other project requirements through a
                more professional and responsive procurement experience.
              </p>
              <Link
                to="/about"
                className="font-display mt-7 inline-flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-primary uppercase hover:gap-3"
              >
                More About PakBuilt
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <SolutionsGrid />
      <CategoryShowcase limit={6} />
      <BoqBanner />
      <ProcessSection />
      <BenefitsSection />
      <FounderSection />
      <IndustriesSection />
      <FeaturedProducts />
      <BrandMessage />
      <FaqSection />
    </>
  );
}
