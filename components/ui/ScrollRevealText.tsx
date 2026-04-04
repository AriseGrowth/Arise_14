"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  /** Colour of unrevealed words. Default: var(--neutral-faint) */
  dimColor?: string;
  /** Colour of revealed words. Default: var(--neutral) */
  brightColor?: string;
  /** How far into the viewport the animation starts (0–1). Default 0.85 */
  startOffset?: number;
  /** How far the animation finishes. Default 0.15 */
  endOffset?: number;
  /** Extra inline styles on the wrapper */
  style?: React.CSSProperties;
  /** Tag for each word span wrapper – default span */
  as?: "p" | "h1" | "h2" | "h3" | "span" | "div";
}

export default function ScrollRevealText({
  text,
  className = "",
  dimColor = "rgba(107,99,96,0.55)",
  brightColor = "#E9E6E3",
  startOffset = 0.85,
  endOffset = 0.15,
  style,
  as: Tag = "p",
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${startOffset}`, `end ${endOffset}`],
  });

  // Split into words preserving whitespace tokens
  const words = useMemo(() => text.split(" ").filter(Boolean), [text]);
  const total = words.length;

  return (
    // @ts-expect-error – dynamic tag
    <Tag ref={ref} className={className} style={{ ...style, lineHeight: "inherit" }}>
      {words.map((word, i) => (
        <Word
          key={i}
          word={word}
          index={i}
          total={total}
          scrollYProgress={scrollYProgress}
          dimColor={dimColor}
          brightColor={brightColor}
        />
      ))}
    </Tag>
  );
}

interface WordProps {
  word: string;
  index: number;
  total: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scrollYProgress: any;
  dimColor: string;
  brightColor: string;
}

function Word({ word, index, total, scrollYProgress, dimColor, brightColor }: WordProps) {
  // Each word occupies an equal slice of the scroll range,
  // with a small overlap so the reveal feels smooth and continuous.
  const overlap = 0.4;
  const sliceSize = 1 / total;
  const wordStart = Math.max(0, index * sliceSize - overlap * sliceSize);
  const wordEnd = Math.min(1, (index + 1) * sliceSize + overlap * sliceSize);

  const color = useTransform(scrollYProgress, [wordStart, wordEnd], [dimColor, brightColor]);
  const opacity = useTransform(scrollYProgress, [wordStart, wordEnd * 0.6], [0.35, 1]);

  return (
    <motion.span
      style={{ color, opacity, display: "inline" }}
    >
      {word}{" "}
    </motion.span>
  );
}
