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
      <section className="bg-charcoal text-charcoal-foreground">
        <div className="mx-auto max-w-7xl px-4 pt-24 pb-14 sm:px-6 lg:px-8 lg:pt-28">
          <div className="grid gap-3 md:grid-cols-12 lg:h-[620px]">
            {/* Headline block */}
            <div className="tile relative flex flex-col justify-end overflow-hidden p-8 md:col-span-8 md:row-span-2 lg:p-12">
              <img
                src={heroImage}
                alt="Construction site with building materials being prepared for a project"
                className="absolute inset-0 size-full object-cover opacity-30"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/20"
                aria-hidden="true"
              />
              <div className="relative">
                <h1 className="font-display text-4xl leading-[0.9] font-bold text-balance sm:text-6xl lg:text-7xl">
                  Build Better.
                  <br />
                  <span className="text-primary">Source Smarter.</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-foreground/75">
                  Building materials, construction supplies and practical solutions for contractors,
                  builders, businesses and property owners across Pakistan.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild variant="cta" size="xl">
                    <Link to="/contact">Request a Quote</Link>
                  </Button>
                  <Button asChild variant="onDark" size="xl">
                    <Link to="/products">Explore Products</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Tagline block */}
            <div className="flex flex-col justify-between bg-primary p-8 text-primary-foreground md:col-span-4">
              <span className="font-display text-[0.65rem] font-bold tracking-[0.3em] uppercase opacity-80">
                Karachi, Pakistan
              </span>
              <span className="font-display mt-8 text-4xl leading-none font-bold tracking-tight lg:text-5xl">
                Build Pukka.
              </span>
            </div>

            {/* Service tiles */}
            {[
              { n: "01", label: "Building Materials", to: "/products" },
              { n: "02", label: "Procurement", to: "/solutions" },
            ].map((s) => (
              <Link
                key={s.n}
                to={s.to}
                className="tile tile-hover flex flex-col items-center justify-center p-6 text-center hover:bg-primary md:col-span-2"
              >
                <span className="font-display text-[0.6rem] font-bold tracking-[0.2em] uppercase opacity-60">
                  Service {s.n}
                </span>
                <span className="font-display mt-2 text-sm leading-tight font-bold">{s.label}</span>
              </Link>
            ))}

            {/* Capability block */}
            <div className="tile flex flex-col justify-between p-8 md:col-span-4">
              <div className="flex items-start justify-between">
                <span className="block h-12 w-1 bg-primary" aria-hidden="true" />
                <span className="text-[0.6rem] tracking-widest opacity-40">24.9° N, 67.0° E</span>
              </div>
              <div className="mt-8">
                <span className="font-display text-[0.65rem] font-bold tracking-[0.2em] text-primary uppercase">
                  Capability
                </span>
                <p className="mt-1 text-sm text-charcoal-foreground/60">
                  Materials, procurement and building-services sourcing through one point of
                  contact.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:col-span-4">
              {[
                { n: "03", label: "Fit-Out", to: "/solutions" },
                { n: "04", label: "HVAC", to: "/solutions" },
              ].map((s) => (
                <Link
                  key={s.n}
                  to={s.to}
                  className="tile tile-hover flex flex-col items-center justify-center p-6 text-center hover:bg-primary"
                >
                  <span className="font-display text-[0.6rem] font-bold tracking-[0.2em] uppercase opacity-60">
                    Service {s.n}
                  </span>
                  <span className="font-display mt-2 text-sm leading-tight font-bold">
                    {s.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-charcoal-foreground/10 pt-5 text-[0.65rem] font-bold tracking-[0.2em] text-charcoal-foreground/40 uppercase">
            <span>Building Materials</span>
            <span aria-hidden="true">•</span>
            <span>Procurement</span>
            <span aria-hidden="true">•</span>
            <span>Fit-Out</span>
            <span aria-hidden="true">•</span>
            <span>HVAC</span>
            <ChevronDown className="ml-auto size-5 animate-scroll-hint" aria-hidden="true" />
          </div>
        </div>
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
