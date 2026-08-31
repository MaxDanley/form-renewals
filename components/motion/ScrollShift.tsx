"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** Seed-style: the photo drifts left or right as you scroll. */
export default function ScrollShift({
  children,
  className = "",
  from = -48,
  to = 48,
  axis = "x",
}: {
  children: ReactNode;
  className?: string;
  from?: number;
  to?: number;
  axis?: "x" | "y";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const value = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={axis === "x" ? { x: value } : { y: value }}
        className="h-full w-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
