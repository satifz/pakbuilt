import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  path: string;
}

/** Accessible breadcrumb trail. The final crumb is the current page. */
export function Breadcrumbs({ trail }: { trail: readonly Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-muted-foreground">
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {i > 0 ? (
                <ChevronRight className="size-3 shrink-0 opacity-50" aria-hidden="true" />
              ) : null}
              {isLast ? (
                <span aria-current="page" className="font-medium text-foreground">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
