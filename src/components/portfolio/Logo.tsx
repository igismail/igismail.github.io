import { profile } from "@/data/portfolio";

export function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-2.5" aria-label={`${profile.name}, back to top`}>
      <span className="relative grid size-9 shrink-0 place-items-center rounded-[0.75rem] bg-brand p-px shadow-glow transition-transform duration-300 group-hover:rotate-6">
        <span className="grid size-full place-items-center rounded-[calc(0.75rem-1px)] bg-background font-display text-sm font-extrabold">
          <span className="text-gradient">{profile.initials}</span>
        </span>
      </span>
      <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">{profile.name}</span>
    </a>
  );
}
