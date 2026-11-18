import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/** Soft glow that trails the mouse. Desktop (fine pointer) only, off for reduced motion. */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 25 });
  const sy = useSpring(y, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;
    setEnabled(true);
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-0 -ml-[260px] -mt-[260px] size-[520px] rounded-full bg-cursor-glow"
    />
  );
}
