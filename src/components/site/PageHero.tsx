import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Editorial interior-page hero on the dark brand surface, with optional imagery. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
  imageAlt?: string;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal text-charcoal-foreground">
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            aria-hidden={imageAlt ? undefined : true}
            className="animate-slow-pan absolute inset-0 size-full object-cover opacity-25"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40"
            aria-hidden="true"
          />
        </>
      ) : null}

      <div className={cn(!image && "grid-blueprint")}>
        <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6 lg:px-8 lg:pt-44 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div className="max-w-3xl">
              <span
                className="eyebrow rule-accent animate-rise"
                style={{ animationDelay: "100ms" }}
              >
                {eyebrow}
              </span>
              <h1
                className="font-display animate-rise mt-5 text-4xl leading-[0.95] font-bold text-balance sm:text-5xl lg:text-6xl"
                style={{ animationDelay: "200ms" }}
              >
                {title}
              </h1>
              {subtitle ? (
                <p
                  className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-charcoal-foreground/70 sm:text-lg"
                  style={{ animationDelay: "320ms" }}
                >
                  {subtitle}
                </p>
              ) : null}
            </div>
            {aside ? (
              <div className="animate-rise lg:pb-2" style={{ animationDelay: "440ms" }}>
                {aside}
              </div>
            ) : null}

          </div>
        </div>
      </div>
    </section>
  );
}
