import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import founderImage from "@/assets/founder-placeholder.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { company } from "@/data/company";

export function FounderSection() {
  return (
    <section className="bg-charcoal text-charcoal-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8 lg:py-28">
        <Reveal variant="clip">
          <div className="relative overflow-hidden rounded-xl border border-charcoal-foreground/10">
            <img
              src={founderImage}
              alt="Placeholder portrait to be replaced with a photograph of founder Atif Zaidi"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal to-transparent p-5">
              <p className="font-display text-lg font-bold">{company.founder.name}</p>
              <p className="text-xs tracking-[0.16em] text-primary uppercase">{company.founder.role}</p>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading eyebrow="Leadership" title="Built on Experience." tone="dark" />
          <Reveal delay={80}>
            <p className="mt-5 text-base leading-relaxed text-charcoal-foreground/75">
              PakBuilt is founded by Atif Zaidi, a professional with extensive international
              experience across Facilities Management, construction, fit-out, project management,
              operations and building services across Saudi Arabia, Pakistan and Canada.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal-foreground/75">
              His professional background brings a practical understanding of projects, procurement,
              contractors, building systems and operational requirements to PakBuilt.
            </p>
            <Link
              to="/contact"
              className="font-display mt-7 inline-flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-primary uppercase hover:gap-3"
            >
              Connect With PakBuilt
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
