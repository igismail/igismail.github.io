import { AnimatePresence, motion } from "framer-motion";
import { Check, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { projectFilters, projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ProjectThumb } from "./ProjectThumb";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

type Filter = (typeof projectFilters)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title={
        <>
          Selected <span className="text-gradient">work</span>
        </>
      }
      description="A few things I've designed and built, from AI-powered Flutter apps to embedded prototypes."
    >
      <Reveal className="mb-10">
        <div role="group" aria-label="Filter projects" className="glass inline-flex flex-wrap gap-1 rounded-full p-1">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "relative cursor-pointer rounded-full px-4 py-1.5 text-sm transition-colors",
                filter === f ? "text-brand-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {filter === f && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-brand"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10 font-medium">{f}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="glass glow-hover group flex flex-col overflow-hidden rounded-3xl hover:-translate-y-1.5"
            >
              <ProjectThumb type={project.thumb} title={project.title} />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <ul className="mb-4 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tags.map((t) => (
                    <li key={t} className="rounded-full bg-muted px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
                <h3 className="text-xl font-bold sm:text-2xl">{project.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{project.description}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-foreground/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  <Button asChild variant="glass" size="pill">
                    <a href={project.github} target="_blank" rel="noreferrer noopener" aria-label={`${project.title} on GitHub`}>
                      <Github aria-hidden /> GitHub
                    </a>
                  </Button>
                  {project.demo ? (
                    <Button asChild variant="hero" size="pill">
                      <a href={project.demo} target="_blank" rel="noreferrer noopener" aria-label={`${project.title} live demo`}>
                        <ExternalLink aria-hidden /> Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Button variant="hero" size="pill" disabled aria-label={`${project.title} live demo coming soon`}>
                      <ExternalLink aria-hidden /> Demo soon
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
