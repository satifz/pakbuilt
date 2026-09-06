import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger in ms */
  delay?: number;
  as?: ElementType;
  /**
   * Motion flavour:
   * - "up"   slide + fade (default, for content blocks)
   * - "clip" clip-path image reveal (for large imagery)
   * - "fade" opacity only (for dense text groups)
   */
  variant?: "up" | "clip" | "fade";
}

/** Reveals its children into view once, using IntersectionObserver. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const base = variant === "clip" ? "reveal-clip" : variant === "fade" ? "reveal-fade" : "reveal";

  return (
    <Tag
      ref={ref}
      className={cn(base, visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
