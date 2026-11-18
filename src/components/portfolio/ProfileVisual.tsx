import { motion } from "framer-motion";
import { Cpu, Flame, Layers, Target, type LucideIcon } from "lucide-react";
import { heroBadges, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const badgeIcons: Record<string, LucideIcon> = {
  Flutter: Layers,
  Dart: Target,
  Firebase: Flame,
  Arduino: Cpu,
};

const positions = [
  "left-0 top-6 sm:-left-6",
  "right-0 top-16 sm:-right-8",
  "bottom-16 -left-2 sm:-left-10",
  "bottom-4 right-2 sm:-right-2",
];

export function ProfileVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-square w-full max-w-[22rem]"
    >
      <div className="absolute inset-6 rounded-full bg-brand opacity-30 blur-3xl" aria-hidden />
      <div className="absolute inset-8 animate-spin-slow rounded-full ring-gradient" aria-hidden />
      <div className="absolute inset-[2.15rem] overflow-hidden rounded-full bg-card">
        {profile.photo ? (
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={480}
            height={480}
            fetchPriority="high"
            className="size-full object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={`${profile.name} monogram`}
            className="relative grid size-full place-items-center bg-grid"
          >
            <div className="absolute inset-0 bg-brand opacity-10" aria-hidden />
            <div className="relative text-center">
              <span className="text-gradient block font-display text-7xl font-extrabold sm:text-8xl">
                {profile.initials}
              </span>
              <span className="mt-2 block font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                Flutter · Dart
              </span>
            </div>
          </div>
        )}
      </div>

      {heroBadges.map((badge, i) => {
        const Icon = badgeIcons[badge] ?? Layers;
        return (
          <motion.div
            key={badge}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
            className={cn("absolute", positions[i % positions.length])}
          >
            <div
              className="glass flex animate-float items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium shadow-glow"
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              <span className="grid size-6 place-items-center rounded-full bg-brand text-brand-foreground">
                <Icon className="size-3.5" aria-hidden />
              </span>
              {badge}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
