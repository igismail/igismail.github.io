import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Education } from "@/components/portfolio/Education";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { Projects } from "@/components/portfolio/Projects";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Skills } from "@/components/portfolio/Skills";

const title = "Mohammed Ismail | Flutter App Developer";
const description =
  "Portfolio of Mohammed Ismail, a Flutter & Dart developer from Chattogram, Bangladesh building fast, responsive cross-platform mobile apps.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mohammed Ismail",
          jobTitle: "Flutter App Developer",
          email: "mailto:mohammodismail2020@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Chattogram", addressCountry: "BD" },
          sameAs: ["https://github.com/igismail", "https://www.linkedin.com/in/mohammed-ismail-b2009022b/"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main id="main" className="relative z-10 overflow-x-clip">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
