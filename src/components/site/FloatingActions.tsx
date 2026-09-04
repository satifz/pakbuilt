import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

/** Persistent WhatsApp CTA plus a back-to-top button that appears after scroll. */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "grid size-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-card transition-all duration-300 hover:text-primary",
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="size-4" />
      </button>

      <a
        href={company.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="font-display group flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-bold tracking-wide text-whatsapp-foreground uppercase shadow-lift transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="size-5" />
        <span className="hidden sm:inline">WhatsApp Us</span>
        <span className="sr-only sm:hidden">WhatsApp PakBuilt</span>
      </a>
    </div>
  );
}
