import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("relative py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-gradient font-semibold">{index}</span>
            <span className="h-px w-8 bg-brand" aria-hidden />
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="text-3xl font-bold leading-tight sm:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
