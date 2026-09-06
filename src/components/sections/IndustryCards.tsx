import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { categories } from "@/data/catalog";
import { buildingTypes } from "@/data/experience";
import { cn } from "@/lib/utils";

/**
 * Industry cards. Hovering (or tapping on touch) reveals the relevant
 * solutions, a short description and a call to action.
 */
export function IndustryCards() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Industries"
          title="Built for how you work"
          subtitle="The same structured sourcing process, scaled from a single home renovation to an ongoing facilities contract."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {buildingTypes
            .filter((b) => b.id !== "other")
            .map((b, i) => {
              const open = openId === b.id;
              const related = b.categorySlugs
                .map((slug) => categories.find((c) => c.slug === slug)?.name)
                .filter(Boolean) as string[];

              return (
                <Reveal key={b.id} delay={i * 80} variant="clip">
                  <div
                    onMouseEnter={() => setOpenId(b.id)}
                    onMouseLeave={() => setOpenId(null)}
                    className="group relative h-96 overflow-hidden rounded-2xl bg-charcoal text-charcoal-foreground"
                  >
                    <img
                      src={b.image}
                      alt={`${b.title} building environment`}
                      loading="lazy"
                      className={cn(
                        "absolute inset-0 size-full object-cover transition-[transform,opacity] duration-700 ease-out",
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
                        {b.title}
                      </h3>

                      <div
                        className={cn(
                          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-500",
                          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="min-h-0 pt-3">
                          <p className="text-sm leading-relaxed text-charcoal-foreground/80">
                            {b.blurb}
                          </p>
                          <ul className="mt-3 flex flex-wrap gap-1.5">
                            {related.map((name) => (
                              <li
                                key={name}
                                className="border border-charcoal-foreground/20 px-2 py-1 text-[0.7rem] text-charcoal-foreground/70"
                              >
                                {name}
                              </li>
                            ))}
                          </ul>
                        </div>
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
                          onClick={() => setOpenId(open ? null : b.id)}
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
