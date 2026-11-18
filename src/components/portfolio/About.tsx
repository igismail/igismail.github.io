import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { about, profile } from "@/data/portfolio";
import { CountUp } from "./CountUp";
import { Reveal, fadeUp, stagger } from "./Reveal";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title={
        <>
          Turning ideas into <span className="text-gradient">polished mobile apps</span>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
        <Reveal className="glass glow-hover relative overflow-hidden rounded-3xl p-7 sm:p-10">
          <div className="absolute -right-20 -top-20 size-56 rounded-full bg-brand opacity-10 blur-3xl" aria-hidden />
          <p className="relative text-lg leading-relaxed text-foreground/90 sm:text-xl sm:leading-relaxed">
            {about.text}
          </p>
          <div className="relative mt-8 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-muted/50 px-3.5 py-1.5 text-muted-foreground">
              <MapPin className="size-4 text-primary" aria-hidden /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-muted/50 px-3.5 py-1.5 text-muted-foreground">
              <GraduationCap className="size-4 text-primary" aria-hidden /> B.Sc. CSE, Port City Int'l University
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-muted/50 px-3.5 py-1.5 text-muted-foreground">
              <Sparkles className="size-4 text-primary" aria-hidden /> Remote & team friendly
            </span>
          </div>
        </Reveal>

        <motion.ul
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
        >
          {about.stats.map((stat) => (
            <motion.li
              key={stat.label}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="glass glow-hover group flex flex-col justify-center rounded-3xl p-6"
            >
              <p className="flex items-baseline gap-2 font-display">
                <span className="text-gradient text-4xl font-extrabold">
                  <CountUp value={stat.value} />
                </span>
                <span className="text-lg font-semibold">{stat.label}</span>
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{stat.caption}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
