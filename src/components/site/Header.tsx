import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/Logo";
import { company, navLinks } from "@/data/company";
import { cn } from "@/lib/utils";

/**
 * Sticky navigation. Transparent over the hero, solid once the page scrolls.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        "fixed inset-x-0 top-0 z-50 text-charcoal-foreground transition-[background-color,box-shadow,border-color] duration-500",
        scrolled || open
          ? "border-b border-charcoal-foreground/10 bg-charcoal/95 shadow-lift backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 transition-all duration-500 sm:px-6 lg:px-8",
          scrolled ? "py-2.5" : "py-4",
        )}
      >
        <Logo tone="dark" className="min-w-0" />

        <div className="flex items-center gap-1.5">
          <nav className="mr-2 hidden items-center gap-0.5 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-charcoal-foreground [&>span]:scale-x-100" }}
                className="group relative rounded-none px-3 py-2 text-sm font-medium text-charcoal-foreground/65 transition-colors hover:text-charcoal-foreground"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3 bottom-1 block h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                />
              </Link>
            ))}
          </nav>

          <Button asChild variant="onDark" size="icon" className="hidden sm:inline-flex lg:hidden">
            <a href={company.phoneHref} aria-label={`Call ${company.phone}`}>
              <Phone />
            </a>
          </Button>

          <Button asChild variant="cta" size="lg" className="group hidden sm:inline-flex">
            <Link to="/contact">
              Request a Quote
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button
            variant="onDark"
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

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-charcoal-foreground/10 bg-charcoal transition-[max-height,opacity] duration-400 ease-out lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 border-t-transparent opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6" aria-label="Mobile">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-primary" }}
              style={{ transitionDelay: open ? `${60 + i * 35}ms` : "0ms" }}
              className={cn(
                "flex items-center justify-between border-b border-charcoal-foreground/10 py-4 text-lg font-medium transition-all duration-500 last:border-0",
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
              )}
            >
              {link.label}
              <ArrowRight className="size-4 opacity-40" aria-hidden="true" />
            </Link>
          ))}

          <div className="mt-4 flex flex-col gap-2 pb-4">
            <Button asChild variant="cta" size="xl">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Request a Quote
              </Link>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a href={company.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp {company.phone}
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
