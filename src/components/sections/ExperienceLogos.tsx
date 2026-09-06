import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { experienceOrgs } from "@/data/experience-orgs";

/**
 * A restrained logo wall for organisations behind the founder's previous
 * professional experience. Deliberately not a client or partner section.
 *
 * Logos sit in uniform white tiles that scroll horizontally in a continuous
 * strip. Each mark is sized by `widthPercent` in `experience-orgs.ts` so every
 * tile carries the same optical weight.
 */
export function ExperienceLogos() {
  const strip = [...experienceOrgs, ...experienceOrgs];

  return (
    <section aria-labelledby="experience-behind-heading" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Experience behind PakBuilt"
          title={
            <span id="experience-behind-heading">
              Built on experience. Driven by practical solutions.
            </span>
          }
          subtitle="Before PakBuilt, our professional experience was built through work with established organizations across facilities management, construction, technology and corporate environments."
          align="center"
        />

        <Reveal variant="fade" delay={80}>
          <div className="group/strip relative mt-14 overflow-hidden motion-reduce:overflow-x-auto">
            {/* Soft edge fades so the strip reads as continuous */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-16"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-16"
            />

            <ul className="animate-marquee flex w-max items-stretch gap-4 group-hover/strip:[animation-play-state:paused] sm:gap-5">
              {strip.map((org, index) => (
                <li key={`${org.name}-${index}`} className="shrink-0">
                  <div
                    title={org.name}
                    className="tile-light tile-hover flex h-20 w-32 items-center justify-center rounded-xl px-4 shadow-card sm:h-24 sm:w-40 sm:px-5"
                  >
                    {org.logo ? (
                      <img
                        src={org.logo}
                        alt={`${org.name} logo`}
                        loading="lazy"
                        decoding="async"
                        style={{ width: `${org.widthPercent ?? 100}%` }}
                        className="max-h-10 object-contain sm:max-h-12"
                        aria-hidden={index >= experienceOrgs.length ? "true" : undefined}
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="font-display text-[0.6rem] font-bold tracking-[0.22em] text-muted-foreground/60 uppercase"
                      >
                        {org.name}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal variant="fade" delay={140}>
          <p className="mx-auto mt-14 max-w-2xl border-t border-foreground/10 pt-6 text-center text-sm leading-relaxed text-muted-foreground">
            Experience across organizations. Expertise brought to PakBuilt.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
