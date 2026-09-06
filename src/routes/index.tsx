import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import heroArchitecture from "@/assets/hero-architecture.jpg";
import { BrandMessage, ValueStrip } from "@/components/sections/Blocks";
import { BuildingSelector } from "@/components/sections/BuildingSelector";
import { OnePointOfContact } from "@/components/sections/OnePointOfContact";
import { WhyPakbuilt } from "@/components/sections/WhyPakbuilt";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { useParallax } from "@/hooks/use-parallax";



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
      { property: "og:url", content: "https://pakbuilt-build-pukka.lovable.app" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pakbuilt-build-pukka.lovable.app" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "PakBuilt",
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
  const heroImageRef = useParallax<HTMLImageElement>(0.08);

  return (
    <>
      {/* Cinematic hero */}
      <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-charcoal text-charcoal-foreground lg:min-h-[94svh]">
        <div className="animate-hero-image absolute inset-0 overflow-hidden opacity-55">
          <img
            ref={heroImageRef}
            src={heroArchitecture}
            alt="Modern architectural facade of a commercial building"
            className="animate-slow-pan size-full object-cover object-center will-change-transform"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/25"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-36 pb-12 sm:px-6 lg:px-8 lg:pt-44 lg:pb-16">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <span
                className="eyebrow rule-accent animate-rise"
                style={{ animationDelay: "120ms" }}
              >
                Building materials &amp; solutions — Karachi, Pakistan
              </span>
              <h1 className="font-display mt-5 text-[2.75rem] leading-[0.86] font-extrabold tracking-[-0.02em] text-balance uppercase sm:text-[4.5rem] lg:text-[6.5rem]">
                <span className="animate-rise block" style={{ animationDelay: "220ms" }}>
                  Building Better.
                </span>
                <span
                  className="animate-rise block text-primary"
                  style={{ animationDelay: "340ms" }}
                >
                  Building Smarter.
                </span>
              </h1>
              <p
                className="animate-rise mt-7 max-w-xl text-base leading-relaxed text-charcoal-foreground/75 sm:text-lg"
                style={{ animationDelay: "460ms" }}
              >
                Materials, procurement, fit-out and HVAC sourcing for the spaces that matter —
                through one point of contact.
              </p>
              <div
                className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                style={{ animationDelay: "560ms" }}
              >
                <Button asChild variant="cta" size="xl" className="group">
                  <Link to="/contact">
                    Request a Quote
                    <ArrowRight className="transition-transform duration-200 ease-out group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="onDark" size="xl">
                  <Link to="/solutions">Explore Solutions</Link>
                </Button>
                <Button asChild variant="whatsapp" size="xl">
                  <a href={company.whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div
              className="animate-rise hidden border-l border-charcoal-foreground/15 pl-6 lg:block"
              style={{ animationDelay: "660ms" }}
            >
              <span className="font-display text-2xl leading-tight font-bold text-primary lg:text-3xl">
                One point of contact.
              </span>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-foreground/60">
                Materials, procurement and building-services sourcing under one roof.
              </p>
            </div>
          </div>

          <div
            className="animate-rise mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-charcoal-foreground/10 pt-5 text-[0.65rem] font-bold tracking-[0.2em] text-charcoal-foreground/40 uppercase"
            style={{ animationDelay: "760ms" }}
          >
            <span>Building Materials</span>
            <span aria-hidden="true">•</span>
            <span>Procurement</span>
            <span aria-hidden="true">•</span>
            <span>Fit-Out</span>
            <span aria-hidden="true">•</span>
            <span>HVAC</span>
            <a
              href="#one-point-heading"
              className="font-display ml-auto flex items-center gap-2 rounded-sm text-[0.65rem] font-bold tracking-[0.2em] text-charcoal-foreground/50 uppercase transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              Scroll to explore
              <ChevronDown className="size-4 animate-scroll-hint" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <ValueStrip />
      <OnePointOfContact />
      <BuildingSelector />
      <WhyPakbuilt />
      <BrandMessage />
    </>
  );
}

