import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/catalog";
import { solutions } from "@/data/content";
import { buildingTypes } from "@/data/experience";
import { cn } from "@/lib/utils";

/** "What are you building?" — selecting a type genuinely changes what is shown. */
export function BuildingSelector() {
  const [activeId, setActiveId] = useState(buildingTypes[0]!.id);
  const active = buildingTypes.find((b) => b.id === activeId) ?? buildingTypes[0]!;

  const shownCategories = active.categorySlugs
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter((c): c is (typeof categories)[number] => Boolean(c));

  const shownSolutions = active.solutionIds
    .map((id) => solutions.find((s) => s.id === id))
    .filter((s): s is (typeof solutions)[number] => Boolean(s));

  return (
    <section className="bg-charcoal text-charcoal-foreground" aria-labelledby="building-heading">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <span className="eyebrow rule-accent">Start here</span>
          <h2
            id="building-heading"
            className="font-display mt-4 text-3xl leading-[1.02] font-bold sm:text-4xl lg:text-5xl"
          >
            What are you building?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal-foreground/70">
            Pick the type of project and we'll show the categories and solutions most relevant to
            it.
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Project type"
        >
          {buildingTypes.map((b) => (
            <button
              key={b.id}
              type="button"
              role="tab"
              aria-selected={b.id === activeId}
              onClick={() => setActiveId(b.id)}
              className={cn(
                "font-display min-h-11 rounded-md border px-4 text-xs font-bold tracking-[0.14em] uppercase transition-[color,background-color,border-color,opacity] duration-300 ease-out focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal focus-visible:outline-none",
                b.id === activeId
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-charcoal-foreground/20 text-charcoal-foreground/55 opacity-80 hover:border-primary hover:text-charcoal-foreground hover:opacity-100",
              )}
            >
              {b.title}
            </button>
          ))}
        </div>

        <div key={active.id} className="mt-10 grid animate-fade-in gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-64 overflow-hidden rounded-2xl">
            <img
              src={active.image}
              alt={`${active.title} project environment`}
              loading="lazy"
              className="absolute inset-0 size-full scale-[1.02] object-cover transition-transform duration-700 ease-out"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"
              aria-hidden="true"
            />
            <div className="relative flex h-full flex-col justify-end p-7">
              <p className="font-display text-2xl font-bold sm:text-3xl">{active.title}</p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-charcoal-foreground/75">
                {active.blurb}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="font-display text-[0.65rem] font-bold tracking-[0.2em] text-primary uppercase">
                Recommended categories
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {shownCategories.map((c) => (
                  <Link
                    key={c.slug}
                    to="/products"
                    search={{ category: c.slug }}
                    className="tile tile-hover group flex min-h-14 items-center justify-between gap-3 rounded-md p-4 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                  >
                    <span className="font-display text-sm font-bold">{c.name}</span>
                    <ArrowRight className="size-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="font-display text-[0.65rem] font-bold tracking-[0.2em] text-primary uppercase">
                Relevant solutions
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {shownSolutions.map((s) => (
                  <li
                    key={s.id}
                    className="flex items-center gap-2 border border-charcoal-foreground/15 px-3 py-2 text-xs text-charcoal-foreground/80"
                  >
                    <s.icon className="size-4 text-primary" aria-hidden="true" />
                    {s.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex flex-wrap gap-3">
              <Button asChild variant="cta" size="lg">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="onDark" size="lg">
                <Link to="/solutions">See all solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
