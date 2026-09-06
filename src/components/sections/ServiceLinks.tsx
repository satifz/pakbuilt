import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import type { ServicePageData } from "@/data/services";

/** Internal-link directory pointing at the dedicated service pages. */
export function ServiceLinks({
  services,
  eyebrow,
  heading,
  intro,
}: {
  services: readonly ServicePageData[];
  eyebrow: string;
  heading: string;
  intro?: string;
}) {
  return (
    <section className="border-t border-border bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading eyebrow={eyebrow} title={heading} subtitle={intro} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.path} delay={i * 60}>
              <Link
                to={service.path}
                className="group flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary"
              >
                <h3 className="font-display flex items-center gap-2 text-base font-bold group-hover:text-primary">
                  {service.name}
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
