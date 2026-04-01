"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealWrapperProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export default function RevealWrapper({
  children,
  delay = 0,
  duration = 0.65,
  y = 24,
  className = "",
  once = true,
}: RevealWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
