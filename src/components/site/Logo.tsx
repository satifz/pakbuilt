import { Link } from "@tanstack/react-router";
import mark from "@/assets/pakbuilt-mark.png.asset.json";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

export function Logo({
  tone = "light",
  withTagline = false,
  className,
}: {
  tone?: "light" | "dark";
  withTagline?: boolean;
  className?: string;
}) {
  return (
    <Link to="/" className={cn("group flex items-center gap-2.5", className)} aria-label="PakBuilt — home">
      <img
        src={mark.url}
        alt="PakBuilt logo"
        width={28}
        height={45}
        className="h-8 w-auto transition-transform duration-300 group-hover:-translate-y-0.5"
      />
      <span className="leading-none">
        <span
          className={cn(
            "font-display block text-lg font-extrabold tracking-[0.02em]",
            tone === "dark" ? "text-charcoal-foreground" : "text-foreground",
          )}
        >
          {company.wordmark}
        </span>
        {withTagline ? (
          <span className="font-display mt-1 block text-[0.65rem] font-bold tracking-[0.22em] text-primary uppercase">
            {company.tagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
