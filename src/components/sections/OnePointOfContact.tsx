import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import boqImage from "@/assets/boq.jpg";
import fitoutImage from "@/assets/cat-fitout.jpg";
import hvacImage from "@/assets/cat-hvac.jpg";
import materialsImage from "@/assets/cat-construction.jpg";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const panels = [
  {
    index: "01",
    title: "Materials",
    body: "Construction and finishing materials for residential, commercial and project requirements.",
    image: materialsImage,
    alt: "Construction materials stacked on a building site",
  },
  {
    index: "02",
    title: "Procurement",
    body: "Source materials based on your BOQ, specifications, quantities and budget.",
    image: boqImage,
    alt: "A bill of quantities laid out on a desk for pricing",
  },
  {
    index: "03",
    title: "Fit-Out",
    body: "Materials and solutions for commercial, residential and interior fit-out requirements.",
    image: fitoutImage,
    alt: "Interior fit-out of a modern commercial space",
  },
  {
    index: "04",
    title: "HVAC",
    body: "HVAC equipment, accessories, materials and related building-services requirements.",
    image: hvacImage,
    alt: "HVAC ductwork and equipment in a building",
  },
] as const;

/** Editorial four-panel statement of the single-point-of-contact promise. */
export function OnePointOfContact() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="one-point-heading"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <span className="eyebrow rule-accent">The PakBuilt way</span>
          <h2
            id="one-point-heading"
            className="font-display mt-5 text-4xl leading-[0.95] font-extrabold uppercase sm:text-5xl lg:text-6xl"
          >
            One Point <span className="text-primary">of Contact</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Instead of chasing separate suppliers and service providers, you send your requirement
            once — and we handle the sourcing across the areas below.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-4">
          {panels.map((panel, i) => {
            const isActive = active === i;
            const dimmed = active !== null && !isActive;
            return (
              <Reveal key={panel.index} delay={i * 90} variant="clip">
                <button
                  type="button"
                  aria-expanded={isActive}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(isActive ? null : i)}
                  className={cn(
                    "group relative block w-full overflow-hidden rounded-xl border border-border text-left transition-all duration-500 ease-out focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none",
                    isActive && "border-primary/50 shadow-lift lg:-translate-y-1",
                    dimmed && "opacity-70",
                  )}
                >
                  <img
                    src={panel.image}
                    alt={panel.alt}
                    loading="lazy"
                    className={cn(
                      "h-56 w-full object-cover transition-transform duration-[700ms] ease-out lg:h-[26rem]",
                      isActive ? "scale-[1.06]" : "scale-100",
                    )}
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/10"
                    aria-hidden="true"
                  />

                  <span className="absolute inset-x-0 bottom-0 block p-5 text-charcoal-foreground lg:p-6">
                    <span
                      className={cn(
                        "font-display block text-sm font-extrabold tracking-[0.2em] transition-colors duration-300",
                        isActive ? "text-primary" : "text-charcoal-foreground/50",
                      )}
                    >
                      {panel.index}
                    </span>
                    <span className="font-display mt-2 block text-2xl font-bold uppercase lg:text-[1.7rem]">
                      {panel.title}
                    </span>
                    <span
                      className={cn(
                        "block overflow-hidden text-sm leading-relaxed text-charcoal-foreground/75 transition-all duration-500 ease-out",
                        isActive ? "mt-3 max-h-32 opacity-100" : "mt-0 max-h-0 opacity-0",
                      )}
                    >
                      {panel.body}
                    </span>
                    <span
                      className={cn(
                        "font-display mt-4 flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase transition-colors duration-300",
                        isActive ? "text-primary" : "text-charcoal-foreground/60",
                      )}
                    >
                      Explore
                      <ArrowRight
                        className={cn(
                          "size-3.5 transition-transform duration-300 ease-out",
                          isActive && "translate-x-1",
                        )}
                      />
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} className="mt-10">
          <Link
            to="/solutions"
            className="font-display link-arrow inline-flex items-center gap-2 rounded-md text-sm font-bold tracking-[0.16em] text-primary uppercase focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            See all solutions
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
