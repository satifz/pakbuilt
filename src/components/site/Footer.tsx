import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { company, footerLinks, navLinks } from "@/data/company";

const services = [
  { label: "Building Materials", to: "/solutions" as const },
  { label: "Procurement", to: "/solutions" as const },
  { label: "Fit-Out", to: "/solutions" as const },
  { label: "HVAC", to: "/solutions" as const },
  { label: "FM Consultancy", to: "/facilities-management" as const },
  { label: "Hard Services", to: "/facilities-management" as const },
  { label: "Soft Services", to: "/facilities-management" as const },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="grid-blueprint">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo tone="dark" />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-charcoal-foreground/70">
                Build. Supply. Operate. Building solutions and facilities management for projects and facilities across Pakistan.
              </p>
              <div className="mt-6 flex gap-2">
                {[
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Instagram, label: "Instagram" },
                ].map(({ Icon, label }) => (
                  <span
                    key={label}
                    title={`${label} — coming soon`}
                    aria-label={`${label} profile coming soon`}
                    className="grid size-9 place-items-center rounded-md border border-charcoal-foreground/15 text-charcoal-foreground/50 transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </span>
                ))}
              </div>
            </div>

            <nav aria-label="Footer">
              <h3 className="font-display text-xs font-bold tracking-[0.18em] text-primary uppercase">
                Explore
              </h3>
              <ul className="mt-5 space-y-2.5 text-sm">
                {[...navLinks, ...footerLinks].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-charcoal-foreground/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

            </nav>

            <div>
              <h3 className="font-display text-xs font-bold tracking-[0.18em] text-primary uppercase">
                Services
              </h3>
              <ul className="mt-5 space-y-2.5 text-sm text-charcoal-foreground/70">
                {services.map((s) => (
                  <li key={s.label}>
                    <Link to={s.to} className="transition-colors hover:text-primary">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xs font-bold tracking-[0.18em] text-primary uppercase">
                Contact
              </h3>
              <ul className="mt-5 space-y-4 text-sm text-charcoal-foreground/70">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a href={company.phoneHref} className="hover:text-primary">
                    {company.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a href={`mailto:${company.email}`} className="hover:text-primary">
                    {company.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>
                    <span className="font-display text-[0.7rem] font-bold tracking-[0.14em] uppercase">
                      {company.headOffice.label}
                    </span>
                    <br />
                    {company.headOffice.line1}
                    <br />
                    {company.headOffice.line2}
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>
                    <span className="font-display text-[0.7rem] font-bold tracking-[0.14em] uppercase">
                      {company.shop.label}
                    </span>
                    <br />
                    {company.shop.line1}
                    <br />
                    {company.shop.line2}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-charcoal-foreground/10 pt-6 text-xs text-charcoal-foreground/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 PakBuilt. All rights reserved.</p>
            <p>{company.website}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
