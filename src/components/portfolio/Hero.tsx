import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { fadeUp, stagger } from "./Reveal";
import { ProfileVisual } from "./ProfileVisual";
import { SocialLinks } from "./SocialLinks";
import { TypingText } from "./TypingText";

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-grid mask-fade" />
      <div className="absolute -left-32 -top-24 size-[32rem] animate-blob rounded-full bg-brand-from opacity-25 blur-[120px]" />
      <div
        className="absolute -right-24 top-24 size-[28rem] animate-blob rounded-full bg-brand-to opacity-20 blur-[120px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 size-[22rem] animate-blob rounded-full bg-primary opacity-15 blur-[120px]"
        style={{ animationDelay: "-12s" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative isolate flex min-h-[100svh] items-center pb-20 pt-28">
      <HeroBackground />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div variants={stagger(0.1)} initial="hidden" animate="show">
          <motion.div variants={fadeUp} className="mb-7 flex flex-wrap items-center gap-3">
            <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium">
              <span className="relative flex size-2 shrink-0">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              {profile.availability}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3.5" aria-hidden /> {profile.location}
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="font-mono text-sm text-muted-foreground sm:text-base">
            {profile.greeting}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-2 text-[2.75rem] font-extrabold leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.25rem]"
          >
            {profile.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 min-h-[2.25rem] font-display text-xl font-semibold sm:text-3xl">
            <TypingText words={profile.roles} />
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl" className="group">
              <a href="#projects">
                View Projects
                <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href={profile.cvUrl} download>
                <Download aria-hidden /> Download CV
              </a>
            </Button>
            <Button asChild variant="ghost" size="xl" className="group">
              <a href="#contact">
                <Send className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                Contact Me
              </a>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
            <SocialLinks />
          </motion.div>
        </motion.div>

        <ProfileVisual />
      </div>
    </section>
  );
}
