import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import fmHero from "@/assets/fm-hero.jpg";
import { ServiceLinks } from "@/components/sections/ServiceLinks";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { fmConsultancy, hardServices, softServices } from "@/data/services";
import { breadcrumbLd, jsonLd } from "@/lib/seo";
import { fmApproach, fmIndustries, fmServices, fmValue } from "@/data/fm";
import { useParallax } from "@/hooks/use-parallax";
import { cn } from "@/lib/utils";

const title = "Facilities Management Services | PakBuilt";
const description =
  "PakBuilt provides facilities management solutions including FM consultancy, hard services and soft services for commercial and other built environments in Pakistan.";
const url = "https://pakbuilt-build-pukka.lovable.app/facilities-management";

export const Route = createFileRoute("/facilities-management")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Facilities Management",
          serviceType: ["FM Consultancy", "Hard Services", "Soft Services"],
          provider: { "@type": "LocalBusiness", name: "PakBuilt" },
          areaServed: "Pakistan",
          description,
        }),
      },
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Facilities Management", path: "/facilities-management" },
        ]),
      ),
    ],
  }),
  component: FacilitiesManagementPage,
});

function FacilitiesManagementPage() {
  const heroImageRef = useParallax<HTMLImageElement>(0.08);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-charcoal text-charcoal-foreground lg:min-h-[84svh]">
        <div className="animate-hero-image absolute inset-0 overflow-hidden opacity-50">
          <img
            ref={heroImageRef}
            src={fmHero}
            alt="Modern glass commercial office building at golden hour"
            width={1600}
            height={1008}
            className="animate-slow-pan size-full object-cover object-center will-change-transform"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-36 pb-14 sm:px-6 lg:px-8 lg:pt-44 lg:pb-20">
          <span className="eyebrow rule-accent animate-rise" style={{ animationDelay: "120ms" }}>
            Facilities Management
          </span>
          <h1 className="font-display mt-5 max-w-4xl text-[2.5rem] leading-[0.9] font-extrabold tracking-[-0.02em] text-balance uppercase sm:text-6xl lg:text-[5rem]">
            <span className="animate-rise block" style={{ animationDelay: "220ms" }}>
              Keeping Your Facilities
            </span>
            <span className="animate-rise block text-primary" style={{ animationDelay: "340ms" }}>
              Performing.
            </span>
          </h1>
          <p
            className="animate-rise mt-7 max-w-xl text-base leading-relaxed text-charcoal-foreground/75 sm:text-lg"
            style={{ animationDelay: "460ms" }}
          >
            Integrated facilities management solutions for the built environment.
          </p>
          <div
            className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            style={{ animationDelay: "560ms" }}
          >
            <Button asChild variant="cta" size="xl" className="group">
              <Link to="/contact">
                Discuss Your Facility
                <ArrowRight className="transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <a href="#fm-services">Explore Services</a>
            </Button>
          </div>

          <div
            className="animate-rise mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-charcoal-foreground/10 pt-5 text-[0.65rem] font-bold tracking-[0.2em] text-charcoal-foreground/40 uppercase"
            style={{ animationDelay: "700ms" }}
          >
            <span>Build</span>
            <span aria-hidden="true">•</span>
            <span>Supply</span>
            <span aria-hidden="true">•</span>
            <span>Operate</span>
          </div>
        </div>
      </section>

      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Facilities Management", path: "/facilities-management" },
        ]}
      />

      <ServiceLinks
        eyebrow="Facilities management"
        heading="Our facilities management services"
        intro="Each FM service has a dedicated page covering scope and how it is delivered."
        services={[fmConsultancy, hardServices, softServices]}
      />

      {/* Service overview */}
      <section id="fm-services" className="scroll-mt-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Our services"
            title="Three ways we support a building in use"
            subtitle="From setting up how a facility should be run, through the technical systems, to the everyday services people notice."
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {fmServices.map((service, i) => (
              <Reveal key={service.id} delay={i * 90} variant="clip">
                <a
                  href={`#${service.id}-detail`}
                  className="group relative block h-80 overflow-hidden rounded-2xl bg-charcoal text-charcoal-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none lg:h-96"
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover opacity-55 transition-[transform,opacity] duration-700 ease-out group-hover:scale-[1.06] group-hover:opacity-40"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative flex h-full flex-col justify-end p-6">
                    <span className="font-display block text-sm font-extrabold tracking-[0.2em] text-primary">
                      {service.index}
                    </span>
                    <span className="font-display mt-2 block text-2xl font-bold uppercase">
                      {service.title}
                    </span>
                    <span className="mt-3 block text-sm leading-relaxed text-charcoal-foreground/75">
                      {service.tagline}
                    </span>
                    <span className="font-display mt-5 flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-primary uppercase">
                      {service.cta}
                      <ArrowRight className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      {fmServices.map((service, i) => (
        <section
          key={service.id}
          id={`${service.id}-detail`}
          aria-labelledby={`${service.id}-heading`}
          className={cn(
            "scroll-mt-24 border-t border-border",
            i % 2 === 0 ? "bg-background" : "bg-muted/40",
          )}
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div
              className={cn(
                "grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16",
                i % 2 === 1 && "lg:[&>*:first-child]:order-2",
              )}
            >
              <Reveal>
                <span className="font-display text-sm font-extrabold tracking-[0.2em] text-primary">
                  {service.index}
                </span>
                <h2
                  id={`${service.id}-heading`}
                  className="font-display mt-3 text-3xl leading-[0.98] font-extrabold uppercase sm:text-4xl lg:text-5xl"
                >
                  {service.title}
                </h2>
                <p className="font-display mt-5 text-xl leading-snug font-bold sm:text-2xl">
                  {service.tagline}
                </p>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
                <ul className="mt-8 grid gap-x-8 gap-y-0 border-t border-border sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-border py-3 text-sm font-medium text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="cta" size="lg" className="group mt-8">
                  <Link to="/contact">
                    Discuss {service.title}
                    <ArrowRight className="transition-transform duration-200 ease-out group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Reveal>

              <Reveal delay={120} variant="clip">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="h-72 w-full rounded-2xl object-cover sm:h-96 lg:h-[30rem]"
                />
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* Operating approach */}
      <section
        aria-labelledby="fm-approach-heading"
        className="bg-charcoal text-charcoal-foreground"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal className="max-w-3xl">
            <span className="eyebrow rule-accent">Our approach</span>
            <h2
              id="fm-approach-heading"
              className="font-display mt-5 text-3xl leading-[0.98] font-extrabold uppercase sm:text-4xl lg:text-5xl"
            >
              How we work through a facility
            </h2>
          </Reveal>

          <ol className="mt-12 grid gap-0 border-t border-charcoal-foreground/12 lg:grid-cols-5 lg:gap-4 lg:border-t-0">
            {fmApproach.map((step, i) => (
              <Reveal key={step.index} delay={i * 90} as="li">
                <div className="border-b border-charcoal-foreground/12 py-6 lg:border-b-0 lg:border-t lg:pt-6">
                  <span className="font-display block text-sm font-extrabold tracking-[0.2em] text-primary">
                    {step.index}
                  </span>
                  <h3 className="font-display mt-2 text-xl font-bold uppercase">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-foreground/70">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Value proposition */}
      <section aria-labelledby="fm-value-heading" className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Why it matters"
            title={<span id="fm-value-heading">Managed buildings behave better</span>}
            subtitle="Facilities management is mostly about doing ordinary things consistently. That consistency is what keeps a building usable."
          />

          <div className="mt-12 grid gap-x-10 gap-y-0 border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {fmValue.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="group border-b border-border py-7">
                  <h3 className="font-display text-lg font-bold transition-colors duration-300 group-hover:text-primary">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FmIndustriesSection />

      {/* Closing CTA */}
      <section aria-labelledby="fm-cta-heading" className="bg-charcoal text-charcoal-foreground">
        <div className="grid-blueprint">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <Reveal className="max-w-3xl">
              <h2
                id="fm-cta-heading"
                className="font-display text-3xl leading-[0.95] font-extrabold uppercase sm:text-4xl lg:text-5xl"
              >
                Let&apos;s talk about <span className="text-primary">your facility.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-foreground/70 sm:text-lg">
                Tell us about your facility and requirements, and let&apos;s discuss the right
                approach.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild variant="cta" size="xl" className="group">
                  <Link to="/contact">
                    Discuss Your Facility
                    <ArrowRight className="transition-transform duration-200 ease-out group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="onDark" size="xl">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
                <Button asChild variant="whatsapp" size="xl">
                  <a href={company.whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

/** FM-specific industries, with hover on desktop and tap on mobile. */
function FmIndustriesSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section aria-labelledby="fm-industries-heading" className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Sectors"
          title={<span id="fm-industries-heading">Facilities we support</span>}
          subtitle="The same approach, scaled to the type of building and how it is used."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fmIndustries.map((ind, i) => {
            const open = openId === ind.id;
            return (
              <Reveal key={ind.id} delay={i * 80} variant="clip">
                <div
                  onMouseEnter={() => setOpenId(ind.id)}
                  onMouseLeave={() => setOpenId(null)}
                  className="group relative h-80 overflow-hidden rounded-2xl bg-charcoal text-charcoal-foreground"
                >
                  <img
                    src={ind.image}
                    alt={`${ind.title} facility environment`}
                    loading="lazy"
                    className={cn(
                      "absolute inset-0 size-full object-cover transition-[transform,opacity] duration-700 ease-out will-change-transform",
                      open ? "scale-[1.06] opacity-35" : "scale-100 opacity-55",
                    )}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="relative flex h-full flex-col justify-end p-6">
                    <h3
                      className={cn(
                        "font-display text-2xl font-bold transition-transform duration-500 ease-out",
                        open && "-translate-y-0.5",
                      )}
                    >
                      {ind.title}
                    </h3>
                    <div
                      className={cn(
                        "grid overflow-hidden transition-[grid-template-rows,opacity] duration-500",
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <p className="min-h-0 pt-3 text-sm leading-relaxed text-charcoal-foreground/80">
                        {ind.body}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <Link
                        to="/contact"
                        className="link-arrow font-display inline-flex items-center gap-2 rounded-sm text-xs font-bold tracking-[0.16em] text-primary uppercase focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                      >
                        Discuss this
                        <ArrowUpRight className="size-4" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => setOpenId(open ? null : ind.id)}
                        aria-expanded={open}
                        className="font-display min-h-11 rounded-md border border-charcoal-foreground/25 px-4 text-[0.65rem] font-bold tracking-[0.16em] uppercase transition-colors duration-200 ease-out hover:border-primary hover:text-primary lg:hidden"
                      >
                        {open ? "Less" : "Details"}
                      </button>
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary transition-transform duration-500",
                      open ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
