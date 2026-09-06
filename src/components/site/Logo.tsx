import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

/** Served from the site's own origin so privacy blockers never strip the mark. */
const LOGO_DARK_LETTERING = "/pakbuilt-logo.png";
const LOGO_LIGHT_LETTERING = "/pakbuilt-logo-light.png";

export function Logo({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <Link
      to="/"
      className={cn("group inline-flex flex-col items-start", className)}
      aria-label="PakBuilt — home"
    >
      <span className="inline-flex items-center transition-transform duration-300 group-hover:-translate-y-0.5">
        {failed ? (
          <span
            className={cn(
              "font-display text-xl leading-none font-bold tracking-tight sm:text-2xl",
              tone === "dark" ? "text-charcoal-foreground" : "text-foreground",
            )}
          >
            {company.wordmark}
          </span>
        ) : (
          <img
            src={tone === "dark" ? LOGO_LIGHT_LETTERING : LOGO_DARK_LETTERING}
            alt="PakBuilt logo"
            width={662}
            height={373}
            onError={() => setFailed(true)}
            className="h-9 w-auto sm:h-10"
          />
        )}
      </span>
    </Link>
  );
}
