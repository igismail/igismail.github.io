import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/** Animates the leading number of a value like "3+" or "3.53"; non-numeric values render as-is. */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!match || !inView) return;
    const target = parseFloat(match[1]);
    const decimals = match[1].split(".")[1]?.length ?? 0;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(`${v.toFixed(decimals)}${match[2]}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}
