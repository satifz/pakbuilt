import { createFileRoute } from "@tanstack/react-router";
import { ContactDetails, FaqSection } from "@/components/sections/Blocks";
import { PageHero } from "@/components/site/PageHero";
import { QuoteWizard } from "@/components/site/QuoteWizard";
import { Reveal } from "@/components/site/Reveal";
import { company } from "@/data/company";

const title = "Contact PakBuilt | Request a Materials Quote in Karachi";
const description =
  "Send your BOQ, material list or requirement to PakBuilt in Karachi. Request a quote for building materials, fit-out, HVAC and MEP supplies across Pakistan.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pakbuilt-build-pukka.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://pakbuilt-build-pukka.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell Us What You Need."
        subtitle="Whether it's one product or a complete project requirement, send us the details."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
          <Reveal>
            <QuoteWizard />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-xl font-bold">Reach us directly</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              WhatsApp is the fastest way to send a BOQ or photograph of a material.
            </p>
            <div className="mt-6">
              <ContactDetails />
            </div>
            <div className="mt-6 rounded-xl border border-border bg-sand p-5 text-sm leading-relaxed text-muted-foreground">
              <p className="font-display text-xs font-bold tracking-[0.16em] text-foreground uppercase">
                Office
              </p>
              <p className="mt-2">
                {company.address.line1}
                <br />
                {company.address.line2}
              </p>
              <p className="mt-3">
                {company.email} · {company.emailAlt}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
