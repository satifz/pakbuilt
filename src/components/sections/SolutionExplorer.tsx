import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { categories } from "@/data/catalog";
import { cn } from "@/lib/utils";

/**
 * Interactive category explorer.
 *
 * Hovering (desktop) or tapping (touch) a category reveals its description,
 * sub-categories and imagery. The row itself links through to the filtered
 * products page.
 */
export function SolutionExplorer({ limit = 8 }: { limit?: number }) {
  const list = categories.slice(0, limit);
  const [active, setActive] = useState(0);
  const current = list[active] ?? list[0];

  if (!current) return null;

  return (
    <section
      id="solutions-explorer"
      className="bg-background"
      aria-labelledby="explorer-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Explore"
          title={<span id="explorer-heading">Solutions for the Built Environment</span>}
          subtitle="Categories we focus on. Tell us the specification and we source against it."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <ul className="border-t border-border">
            {list.map((c, i) => {
              const isActive = i === active;
              return (
                <li key={c.slug} className="border-b border-border">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    className="group flex w-full items-center gap-4 py-5 text-left transition-colors"
                  >
                    <span
                      className={cn(
                        "font-display text-xs font-bold tracking-[0.2em] tabular-nums transition-colors",
                        isActive ? "text-primary" : "text-muted-foreground/50",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "font-display flex-1 text-xl font-bold transition-all duration-300 sm:text-2xl",
                        isActive ? "translate-x-1 text-foreground" : "text-foreground/60",
                      )}
                    >
                      {c.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "h-8 w-1 transition-all duration-300",
                        isActive ? "bg-primary" : "bg-transparent",
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "grid overflow-hidden transition-[grid-template-rows,opacity] duration-400",
                      isActive
                        ? "grid-rows-[1fr] pb-6 opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="min-h-0">
                      <img
                        src={c.image}
                        alt={`${c.name} supplied by PakBuilt`}
                        loading="lazy"
                        className="mb-4 aspect-[16/9] w-full rounded-xl object-cover lg:hidden"
                      />
                      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                        {c.blurb}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {c.subcategories.map((s) => (
                          <li
                            key={s}
                            className="border border-border bg-sand px-2 py-1 text-[0.7rem] text-muted-foreground"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/products"
                        search={{ category: c.slug }}
                        className="font-display group/link mt-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-primary uppercase"
                      >
                        View {c.name}
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="sticky top-28 hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-charcoal">
              {list.map((c, i) => (
                <img
                  key={c.slug}
                  src={c.image}
                  alt={i === active ? `${c.name} supplied by PakBuilt` : ""}
                  aria-hidden={i === active ? undefined : true}
                  loading="lazy"
                  className={cn(
                    "absolute inset-0 size-full object-cover transition-all duration-700",
                    i === active ? "scale-100 opacity-100" : "scale-105 opacity-0",
                  )}
                />
              ))}
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="font-display text-[0.65rem] font-bold tracking-[0.2em] text-primary uppercase">
                  {current.group}
                </span>
                <p className="font-display mt-2 text-3xl leading-tight font-bold text-charcoal-foreground">
                  {current.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
