import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import aboutImage from "@/assets/about.jpg";
import boqImage from "@/assets/boq.jpg";
import mepImage from "@/assets/cat-mep.jpg";
import commercialImage from "@/assets/ind-commercial.jpg";
import constructionImage from "@/assets/cat-construction.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { benefits } from "@/data/content";
import { cn } from "@/lib/utils";

const images = [aboutImage, boqImage, mepImage, commercialImage, constructionImage];

/** Editorial "Why PakBuilt?" statement with a selectable list of genuine advantages. */
export function WhyPakbuilt() {
  const [active, setActive] = useState(0);

  return (
    <section
      aria-labelledby="why-pakbuilt-heading"
      className="bg-charcoal text-charcoal-foreground"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          <Reveal>
            <span className="eyebrow rule-accent">Why us</span>
            <h2
              id="why-pakbuilt-heading"
              className="font-display mt-5 text-4xl leading-[0.95] font-extrabold uppercase sm:text-5xl lg:text-6xl"
            >
              Why PakBuilt?
            </h2>
            <p className="font-display mt-8 text-2xl leading-[1.12] font-bold sm:text-3xl lg:text-4xl">
              Less running around.
              <br />
              Less guesswork.
              <br />
              <span className="text-primary">More getting things done.</span>
            </p>

            <div className="mt-10 hidden overflow-hidden rounded-2xl border border-charcoal-foreground/10 lg:block">
              {images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className={cn(
                    "h-72 w-full object-cover transition-opacity duration-[600ms] ease-out",
                    i === active ? "opacity-100" : "hidden opacity-0",
                  )}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="border-t border-charcoal-foreground/12">
              {benefits.map((b, i) => {
                const isActive = i === active;
                return (
                  <li key={b.title} className="border-b border-charcoal-foreground/12">
                    <button
                      type="button"
                      aria-expanded={isActive}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className="group flex w-full items-start gap-5 py-6 text-left transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal focus-visible:outline-none"
                    >
                      <span
                        className={cn(
                          "font-display pt-1 text-sm font-extrabold tracking-[0.2em] transition-colors duration-300",
                          isActive ? "text-primary" : "text-charcoal-foreground/40",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span
                          className={cn(
                            "font-display block text-xl font-bold uppercase transition-colors duration-300 sm:text-2xl",
                            isActive ? "text-charcoal-foreground" : "text-charcoal-foreground/60",
                          )}
                        >
                          {b.title}
                        </span>
                        <span
                          className={cn(
                            "block overflow-hidden text-sm leading-relaxed text-charcoal-foreground/70 transition-all duration-500 ease-out",
                            isActive ? "mt-3 max-h-24 opacity-100" : "mt-0 max-h-0 opacity-0",
                          )}
                        >
                          {b.body}
                        </span>
                      </span>
                      <ArrowRight
                        className={cn(
                          "mt-1 size-4 shrink-0 transition-all duration-300 ease-out",
                          isActive
                            ? "translate-x-0 text-primary opacity-100"
                            : "-translate-x-2 opacity-0",
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="cta" size="xl" className="group">
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/why-pakbuilt">Why PakBuilt</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
