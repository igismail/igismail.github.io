import { ArrowUp } from "lucide-react";
import { footer } from "@/data/portfolio";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="relative border-t border-glass-border">
      <div className="absolute inset-x-0 top-0 h-px bg-brand opacity-40" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:px-8 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-5">
          <Logo />
          <p className="text-center text-sm text-muted-foreground">{footer.text}</p>
        </div>
        <div className="flex items-center gap-3">
          <SocialLinks />
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex h-10 cursor-pointer items-center gap-2 rounded-full bg-brand px-4 text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <ArrowUp className="size-4 transition-transform group-hover:-translate-y-0.5" aria-hidden />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
