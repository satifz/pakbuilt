import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";

/** Compact interior-page hero on the dark brand surface. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <section className="bg-charcoal text-charcoal-foreground">
      <div className="grid-blueprint">
        <div className="mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6 lg:px-8 lg:pt-40 lg:pb-24">
          <Reveal className="max-w-3xl">
            <span className="eyebrow rule-accent">{eyebrow}</span>
            <h1 className="font-display mt-5 text-4xl leading-[1] font-extrabold text-balance sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-charcoal-foreground/70 sm:text-lg">
                {subtitle}
              </p>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
