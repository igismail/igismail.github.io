import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const ids = navLinks.map((l) => l.id);

export function Navbar() {
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled ? "border-glass-border bg-glass backdrop-blur-xl" : "border-transparent",
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />

        <ul className="hidden items-center gap-1 rounded-full p-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id} className="relative">
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative z-10 block rounded-full px-3.5 py-1.5 text-sm transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="glass absolute inset-0 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="hero" size="pill" className="hidden sm:inline-flex">
            <a href={profile.cvUrl} download>
              <Download aria-hidden /> Download CV
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="glass grid size-9 cursor-pointer place-items-center rounded-full md:hidden"
              >
                <Menu className="size-4" aria-hidden />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="glass w-72 border-l-glass-border">
              <SheetTitle className="font-display">Menu</SheetTitle>
              <ul className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <SheetClose asChild>
                      <a
                        href={`#${link.id}`}
                        className={cn(
                          "block rounded-lg px-3 py-2.5 text-base transition-colors hover:bg-accent",
                          active === link.id ? "text-foreground" : "text-muted-foreground",
                        )}
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" size="xl" className="mt-8 w-full">
                <a href={profile.cvUrl} download>
                  <Download aria-hidden /> Download CV
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
