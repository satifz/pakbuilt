import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/Logo";
import { company, navLinks } from "@/data/company";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-charcoal text-charcoal-foreground transition-all duration-300",
        scrolled || open
          ? "border-b border-charcoal-foreground/10 shadow-lift"
          : "border-b border-charcoal-foreground/10",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo tone="dark" className="min-w-0" />

        <div className="flex items-center gap-1.5">
          <nav className="mr-2 hidden items-center gap-0.5 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-charcoal-foreground/70 transition-colors hover:text-charcoal-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>


          <Button asChild variant="ghost" size="icon" className="hidden sm:inline-flex lg:hidden">
            <a href={company.phoneHref} aria-label={`Call ${company.phone}`}>
              <Phone />
            </a>
          </Button>

          <Button asChild variant="cta" size="lg" className="hidden sm:inline-flex">
            <Link to="/contact">Request a Quote</Link>
          </Button>

          <Button
            variant="onLight"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="border-b border-border/70 py-3 text-base font-medium last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 pb-2">
              <Button asChild variant="cta" size="lg">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Request a Quote
                </Link>
              </Button>
              <Button asChild variant="whatsapp" size="lg">
                <a href={company.whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp {company.phone}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
