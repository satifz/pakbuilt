import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { experienceOrgs } from "@/data/experience-orgs";

/**
 * A restrained logo wall for organisations behind the founder's previous
 * professional experience. Deliberately not a client or partner section.
 */
export function ExperienceLogos() {
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
          <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-10">
            {experienceOrgs.map((org) => (
              <li key={org.name} className="group flex flex-col items-center gap-3">
                <div className="flex h-16 w-full items-center justify-center sm:h-20">
                  {org.logo ? (
                    <img
                      src={org.logo}
                      alt={`${org.name} logo`}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full w-auto max-w-[80%] object-contain opacity-95 transition duration-300 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="font-display flex h-full w-full items-center justify-center border border-dashed border-foreground/15 text-[0.6rem] font-bold tracking-[0.22em] text-muted-foreground/60 uppercase transition-colors duration-300 group-hover:border-primary/40 group-hover:text-foreground/70"
                    >
                      Logo
                    </span>
                  )}
                </div>
                <span className="text-center text-[0.7rem] leading-tight tracking-[0.1em] text-muted-foreground/70 uppercase transition-colors duration-300 group-hover:text-foreground">
                  {org.name}
                </span>
              </li>
            ))}
          </ul>
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
