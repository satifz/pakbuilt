import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, FileSpreadsheet, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import boqImage from "@/assets/boq.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/catalog";
import { company } from "@/data/company";
import { benefits, industries, processSteps, solutions, valueStrip } from "@/data/content";

/** Animated horizontal trust strip. */
export function ValueStrip() {
  const items = [...valueStrip, ...valueStrip];
  return (
    <section aria-label="What PakBuilt offers" className="border-y border-border bg-sand py-4">
      <div className="flex overflow-hidden">
        <ul className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {items.map((item, i) => (
            <li
              key={`${item}-${i}`}
              className="font-display flex items-center gap-3 text-sm font-bold tracking-[0.14em] whitespace-nowrap uppercase"
            >
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SolutionsGrid({ heading = "What We Do" }: { heading?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Solutions"
        title={heading}
        subtitle="From individual requirements to project-based procurement, we help you find the right products and solutions."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s, i) => (
          <Reveal key={s.id} delay={i * 60}>
            <Link
              to="/solutions"
              className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="size-5" />
                </span>
                <span className="font-display text-2xl font-extrabold text-foreground/10">
                  {s.index}
                </span>
              </div>
              <h3 className="font-display mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <span className="font-display mt-5 inline-flex items-center gap-1 text-xs font-bold tracking-[0.14em] text-primary uppercase">
                Explore
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function BoqBanner() {
  return (
    <section className="bg-charcoal text-charcoal-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <Reveal>
          <span className="eyebrow rule-accent">Procurement</span>
          <h2 className="font-display mt-4 text-3xl leading-[1.05] font-extrabold sm:text-4xl lg:text-5xl">
            Got a BOQ? Send It.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal-foreground/70 sm:text-lg">
            Have a project list, BOQ or simply a material requirement? Send it to PakBuilt and we'll
            help you source it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="cta" size="xl">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a href={company.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle />
                WhatsApp Us
              </a>
            </Button>
          </div>
          <p className="font-display mt-6 text-xs font-bold tracking-[0.18em] text-charcoal-foreground/50 uppercase">
            Residential • Commercial • Industrial • Fit-Out
          </p>
        </Reveal>

        <Reveal delay={120} variant="clip" className="relative">
          <img
            src={boqImage}
            alt="A bill of quantities and drawings laid out on a desk for pricing"
            loading="lazy"
            className="w-full rounded-xl border border-charcoal-foreground/10 object-cover shadow-lift"
          />
          <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-foreground shadow-lift sm:left-6">
            <FileSpreadsheet className="size-5 text-primary" />
            <span className="font-display text-xs font-bold tracking-[0.14em] uppercase">
              Line-by-line quotation
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading eyebrow="How it works" title="From Requirement to Delivery" align="center" />
      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <Reveal key={step.index} delay={i * 90} as="li">
            <div className="h-full rounded-xl border border-border bg-card p-6 shadow-card">
              <span className="font-display text-3xl font-extrabold text-primary">{step.index}</span>
              <h3 className="font-display mt-4 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Why us"
          title="Why PakBuilt?"
          subtitle="No inflated claims — just a clear way of working that makes sourcing less painful."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 60}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-card transition-transform duration-300 hover:-translate-y-1">
                <span className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">
                  <b.icon className="size-5" />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Industries"
        title="Who We Supply"
        subtitle="Homeowners, contractors and project teams — the same process, scaled to the requirement."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind, i) => (
          <Reveal key={ind.id} delay={i * 60}>
            <div className="group h-full overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
              <span className="grid size-11 place-items-center rounded-lg bg-charcoal text-charcoal-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <ind.icon className="size-5" />
              </span>
              <h3 className="font-display mt-5 text-lg font-bold">{ind.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.body}</p>
              <Link
                to="/contact"
                className="font-display mt-5 inline-flex items-center gap-1 text-xs font-bold tracking-[0.14em] text-primary uppercase"
              >
                Send a requirement
                <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function BrandMessage() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-24">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1] font-extrabold uppercase sm:text-5xl lg:text-6xl">
            You Build. We Source.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Send us your requirement and we'll take it from there.

          </p>
          <div className="mt-8">
            <Button asChild variant="onLight" size="xl">
              <Link to="/contact">Talk to PakBuilt</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeading eyebrow="FAQ" title="Questions, Answered" align="center" />
      <Reveal className="mt-10 max-w-none">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}

const contactItems = [
  {
    label: "WhatsApp",
    value: company.phone,
    href: company.whatsappHref,
    icon: MessageCircle,
    external: true,
  },
  { label: "Call", value: company.phone, href: company.phoneHref, icon: Phone },
  { label: "Email", value: company.email, href: `mailto:${company.email}`, icon: Mail },
  { label: "Location", value: company.address.short, icon: MapPin },
];

export function ContactDetails({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {contactItems.map(({ label, value, href, icon: Icon, external }) => (
        <li
          key={label}
          className={
            dark
              ? "rounded-xl border border-charcoal-foreground/12 bg-charcoal-muted p-5"
              : "rounded-xl border border-border bg-card p-5 shadow-card"
          }
        >
          <span className="flex items-center gap-2 text-primary">
            <Icon className="size-4" />
            <span className="font-display text-xs font-bold tracking-[0.16em] uppercase">
              {label}
            </span>
          </span>
          {href ? (
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="mt-2 block text-sm font-medium hover:text-primary"
            >
              {value}
            </a>
          ) : (
            <p className="mt-2 text-sm font-medium">{value}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
