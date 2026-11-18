import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "./Reveal";
import { Section } from "./Section";

const tag = {
  hidden: { opacity: 0, scale: 0.85, y: 6 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35 } },
};

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Skills"
      title={
        <>
          A toolkit built for <span className="text-gradient">shipping</span>
        </>
      }
      description="From pixel-perfect Flutter UIs to sensors and servos, here's what I work with."
    >
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map(({ title, icon: Icon, items, wide }) => (
          <motion.article
            key={title}
            variants={fadeUp}
            className={cn(
              "glass glow-hover group relative overflow-hidden rounded-3xl p-6 hover:-translate-y-1",
              wide && "lg:col-span-2",
            )}
          >
            <div
              className="absolute -right-10 -top-10 size-32 rounded-full bg-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
              aria-hidden
            />
            <header className="relative mb-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-[0.9rem] bg-brand p-px">
                  <span className="grid size-full place-items-center rounded-[calc(0.9rem-1px)] bg-card">
                    <Icon className="size-5 text-primary" aria-hidden />
                  </span>
                </span>
                <h3 className="text-base font-semibold sm:text-lg">{title}</h3>
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                {String(items.length).padStart(2, "0")}
              </span>
            </header>
            <motion.ul variants={stagger(0.05)} className="relative flex flex-wrap gap-2">
              {items.map((item) => (
                <motion.li
                  key={item}
                  variants={tag}
                  className="rounded-full border border-glass-border bg-muted/60 px-3 py-1.5 text-sm text-foreground/85 transition-colors hover:border-brand-to/40 hover:text-foreground"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
