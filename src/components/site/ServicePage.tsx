import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/site/Breadcrumbs";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import type { ServicePageData } from "@/data/services";

export function serviceTrail(service: ServicePageData): Crumb[] {
  return [
    { name: "Home", path: "/" },
    ...(service.parent ? [service.parent] : []),
    { name: service.name, path: service.path },
  ];
}

/** Shared layout for the dedicated service pages: H1 hero, H2 sections, FAQs, internal links, CTA. */
export function ServicePage({ service }: { service: ServicePageData }) {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.h1}
        subtitle={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
      />
      <Breadcrumbs trail={serviceTrail(service)} />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-12">
            {service.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 80}>
                <h2 className="font-display text-2xl font-bold tracking-tight">
                  {section.heading}
                </h2>
                {section.body ? (
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {section.body}
                  </p>
                ) : null}
                {section.items ? (
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            ))}

            {service.faqs.length > 0 ? (
              <Reveal>
                <h2 className="font-display text-2xl font-bold tracking-tight">
                  {service.name} questions
                </h2>
                <dl className="mt-5 divide-y divide-border border-y border-border">
                  {service.faqs.map((faq) => (
                    <div key={faq.q} className="py-5">
                      <dt className="font-display text-sm font-bold">{faq.q}</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ) : null}
          </div>

          <aside className="space-y-6">
            <Reveal delay={80}>
              <div className="rounded-xl border border-border bg-sand p-6">
                <h2 className="font-display text-lg font-bold">Request a quote</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Send your requirement, material list or BOQ and we will revert with practical
                  options.
                </p>
                <div className="mt-5 flex flex-col gap-2.5">
                  <Button asChild variant="cta" className="group">
                    <Link to="/contact">
                      Request a Quote
                      <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="whatsapp">
                    <a href={company.whatsappHref} target="_blank" rel="noreferrer">
                      <MessageCircle />
                      WhatsApp us
                    </a>
                  </Button>
                </div>
                <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                  {company.headOffice.label}: {company.headOffice.short} ·{" "}
                  <a href={company.phoneHref} className="hover:text-primary">
                    {company.phone}
                  </a>
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <h2 className="font-display text-lg font-bold">Related services</h2>
              <ul className="mt-4 space-y-3">
                {service.related.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="group block rounded-lg border border-border p-4 transition-colors hover:border-primary"
                    >
                      <span className="font-display flex items-center gap-2 text-sm font-bold group-hover:text-primary">
                        {item.label}
                        <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                      <span className="mt-1.5 block text-xs leading-relaxed text-muted-foreground">
                        {item.note}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
