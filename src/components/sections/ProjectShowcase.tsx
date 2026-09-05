import { Link } from "@tanstack/react-router";
import { ArrowUpRight, HardHat, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { projectFilters, projects } from "@/data/experience";
import { cn } from "@/lib/utils";

/**
 * Project showcase. PakBuilt is a new company, so no project references are
 * invented — the filter UI and empty state are in place ready for real work.
 */
export function ProjectShowcase() {
  const [filter, setFilter] = useState<string>("All");

  const shown = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Projects"
        title="Work in progress"
        subtitle="We publish project references only once they are complete and the client is happy for us to name them."
      />

      <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "font-display border px-3.5 py-1.5 text-xs font-bold tracking-wide uppercase transition-colors",
              filter === f
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground/70 hover:border-primary hover:text-primary",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {shown.length > 0 ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <article className="group relative h-80 overflow-hidden bg-charcoal text-charcoal-foreground">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <span className="font-display text-[0.65rem] font-bold tracking-[0.2em] text-primary uppercase">
                    {p.category}
                  </span>
                  <h3 className="font-display mt-2 text-xl font-bold">{p.title}</h3>
                  <p className="mt-1 flex items-center gap-3 text-xs text-charcoal-foreground/70">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3.5" aria-hidden="true" />
                      {p.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <HardHat className="size-3.5" aria-hidden="true" />
                      {p.type}
                    </span>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal>
          <div className="mt-10 border border-dashed border-border bg-card p-10 text-center sm:p-16">
            <span className="font-display text-[0.65rem] font-bold tracking-[0.2em] text-primary uppercase">
              Projects coming soon
            </span>
            <h3 className="font-display mx-auto mt-4 max-w-xl text-2xl leading-tight font-bold sm:text-3xl">
              Our first project references are being built right now.
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              PakBuilt is a new company, so rather than fill this page with stock photographs we
              will publish real supply and fit-out references as they complete. In the meantime, the
              fastest way to judge us is to send a requirement and see how we handle it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="cta" size="lg">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="onLight" size="lg">
                <Link to="/solutions">
                  See our solutions
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      )}
    </section>
  );
}
