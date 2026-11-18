import { motion, useScroll, useSpring } from "framer-motion";
import { Award, CalendarDays, GraduationCap, MapPin } from "lucide-react";
import { useRef } from "react";
import { education } from "@/data/portfolio";
import { Section } from "./Section";

export function Education() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <Section
      id="education"
      index="04"
      eyebrow="Education"
      title={
        <>
          Learning, <span className="text-gradient">always</span>
        </>
      }
    >
      <ol ref={ref} className="relative mx-auto max-w-3xl space-y-8 pl-10 sm:pl-14">
        <span className="absolute bottom-2 left-[0.9rem] top-2 w-px bg-border sm:left-[1.4rem]" aria-hidden />
        <motion.span
          style={{ scaleY }}
          className="absolute bottom-2 left-[0.9rem] top-2 w-px origin-top bg-brand sm:left-[1.4rem]"
          aria-hidden
        />
        {education.map((item, i) => (
          <motion.li
            key={item.school}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <span className="absolute -left-10 top-6 grid size-8 place-items-center rounded-full bg-brand p-px shadow-glow sm:-left-14 sm:size-11">
              <span className="grid size-full place-items-center rounded-full bg-background">
                <GraduationCap className="size-4 text-primary sm:size-5" aria-hidden />
              </span>
            </span>
            <article className="glass glow-hover rounded-3xl p-6 hover:-translate-y-1 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <CalendarDays className="size-3.5" aria-hidden /> {item.period}
                </p>
                {item.score ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
                    <Award className="size-3.5" aria-hidden /> {item.score}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-3 text-lg font-bold sm:text-xl">{item.degree}</h3>
              <p className="mt-1 text-foreground/85">{item.school}</p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5" aria-hidden /> {item.place}
              </p>
            </article>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
