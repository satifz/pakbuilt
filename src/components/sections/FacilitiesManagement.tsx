import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { fmServices } from "@/data/fm";
import { cn } from "@/lib/utils";

/**
 * Homepage Facilities Management division: three expanding editorial panels.
 * Desktop uses hover/focus expansion; mobile uses tap to expand.
 */
export function FacilitiesManagement() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="facilities-management-heading"
      className="border-t border-charcoal-foreground/10 bg-charcoal text-charcoal-foreground"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <span className="eyebrow rule-accent">02 — Facilities Management</span>
          <h2
            id="facilities-management-heading"
            className="font-display mt-5 text-4xl leading-[0.95] font-extrabold uppercase sm:text-5xl lg:text-6xl"
          >
            From Building <span className="text-primary">to Operations.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-foreground/70 sm:text-lg">
            Practical facilities management solutions designed to help keep your assets safe,
            efficient and operational.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-4 lg:mt-16 lg:flex-row lg:gap-4">
          {fmServices.map((service, i) => {
            const isActive = active === i;
            const dimmed = active !== null && !isActive;
            return (
              <Reveal
                key={service.id}
                delay={i * 90}
                variant="clip"
                className={cn(
                  "transition-[flex-grow] duration-500 ease-out lg:min-w-0",
                  isActive ? "lg:grow-[1.6]" : "lg:grow",
                )}
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(isActive ? null : i)}
                  className={cn(
                    "group relative block h-full w-full overflow-hidden rounded-xl border border-charcoal-foreground/12 text-left transition-[border-color,opacity,box-shadow] duration-500 ease-out focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal focus-visible:outline-none",
                    isActive && "border-primary/55 shadow-lift",
                    dimmed && "opacity-65",
                  )}
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className={cn(
                      "h-64 w-full object-cover transition-transform duration-[700ms] ease-out will-change-transform lg:h-[28rem]",
                      isActive ? "scale-[1.06]" : "scale-100",
                    )}
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/15"
                    aria-hidden="true"
                  />

                  <span className="absolute inset-x-0 bottom-0 block p-5 lg:p-7">
                    <span
                      className={cn(
                        "font-display block text-sm font-extrabold tracking-[0.2em] transition-colors duration-300",
                        isActive ? "text-primary" : "text-charcoal-foreground/45",
                      )}
                    >
                      {service.index}
                    </span>
                    <span className="font-display mt-2 block text-2xl leading-tight font-bold uppercase lg:text-3xl">
                      {service.title}
                    </span>
                    <span
                      className={cn(
                        "grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out",
                        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <span className="block min-h-0">
                        <span className="mt-3 block text-sm leading-relaxed text-charcoal-foreground/75">
                          {service.body}
                        </span>
                        <span className="mt-4 flex flex-wrap gap-1.5">
                          {service.items.slice(0, 4).map((item) => (
                            <span
                              key={item}
                              className="border border-charcoal-foreground/20 px-2 py-1 text-[0.7rem] text-charcoal-foreground/70"
                            >
                              {item}
                            </span>
                          ))}
                        </span>
                      </span>
                    </span>
                    <span
                      className={cn(
                        "font-display mt-5 flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase transition-colors duration-300",
                        isActive ? "text-primary" : "text-charcoal-foreground/60",
                      )}
                    >
                      {service.cta}
                      <ArrowRight
                        className={cn(
                          "size-3.5 transition-transform duration-300 ease-out",
                          isActive && "translate-x-1",
                        )}
                      />
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary transition-transform duration-500",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} className="mt-10">
          <Link
            to="/facilities-management"
            className="font-display link-arrow inline-flex items-center gap-2 rounded-md text-sm font-bold tracking-[0.16em] text-primary uppercase focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal focus-visible:outline-none"
          >
            Explore facilities management
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
