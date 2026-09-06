import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import catConstruction from "@/assets/cat-construction.jpg";
import catFinishes from "@/assets/cat-finishes.jpg";
import catFitout from "@/assets/cat-fitout.jpg";
import catFlooring from "@/assets/cat-flooring.jpg";
import catHvac from "@/assets/cat-hvac.jpg";
import catMep from "@/assets/cat-mep.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { solutions } from "@/data/content";

const imageFor: Record<string, string> = {
  "building-materials": catConstruction,
  "project-procurement": catFinishes,
  "fit-out": catFitout,
  hvac: catHvac,
  mep: catMep,
  trading: catFlooring,
};

/** Large image solution cards with a hover/focus reveal. */
export function SolutionCards({
  heading = "What We Do",
  eyebrow = "Solutions",
  subtitle = "From a single material to project-based procurement, we help you find the right products and solutions.",
}: {
  heading?: string;
  eyebrow?: string;
  subtitle?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading eyebrow={eyebrow} title={heading} subtitle={subtitle} />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s, i) => (
          <Reveal key={s.id} delay={i * 80} variant="clip">
            <Link
              to="/solutions"
              className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-2xl bg-charcoal p-6 text-charcoal-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              <img
                src={imageFor[s.id] ?? catConstruction}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 size-full object-cover opacity-35 transition-[transform,opacity] duration-700 ease-out group-hover:scale-[1.06] group-hover:opacity-45 group-focus-visible:scale-[1.06]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/20"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <s.icon className="size-6 text-primary" aria-hidden="true" />
                  <span className="font-display text-xs font-bold tracking-[0.2em] text-charcoal-foreground/40">
                    {s.index}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-2xl leading-tight font-bold">{s.title}</h3>

                <div className="grid grid-rows-[0fr] overflow-hidden opacity-0 transition-[grid-template-rows,opacity] duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100">
                  <p className="min-h-0 pt-3 text-sm leading-relaxed text-charcoal-foreground/75">
                    {s.body}
                  </p>
                </div>

                <span className="font-display mt-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-primary uppercase">
                  Explore
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>

              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
              />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
