import { Link } from "@tanstack/react-router";
import logo from "@/assets/pakbuilt-logo.png.asset.json";
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
    <Link
      to="/"
      className={cn("group inline-flex flex-col items-start gap-1.5", className)}
      aria-label="PakBuilt — home"
    >
      <span
        className={cn(
          "inline-flex items-center transition-transform duration-300 group-hover:-translate-y-0.5",
          tone === "dark" && "rounded-md bg-card px-2.5 py-1.5",
        )}
      >
        <img
          src={logo.url}
          alt="PakBuilt logo"
          width={668}
          height={385}
          className="h-9 w-auto sm:h-10"
        />
      </span>
      {withTagline ? (
        <span className="font-display block text-[0.65rem] font-bold tracking-[0.22em] text-primary uppercase">
          {company.tagline}
        </span>
      ) : null}
    </Link>
  );
}
