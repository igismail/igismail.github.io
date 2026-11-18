import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socials.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer noopener"
            aria-label={label}
            className="glass glow-hover grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:-translate-y-0.5 hover:text-foreground"
          >
            <Icon className="size-[18px]" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
