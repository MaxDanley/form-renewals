"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** Seed-style: the photo grows or shrinks as it travels through the viewport. */
export default function ScrollScale({
  children,
  className = "",
  from = 1.18,
  to = 1,
}: {
  children: ReactNode;
  className?: string;
  from?: number;
  to?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [from, 1, to]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ scale }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
