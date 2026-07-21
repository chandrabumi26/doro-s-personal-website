"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface ScrollWordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function ScrollWordReveal({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.08,
  as: Tag = "p",
}: ScrollWordRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 24, filter: "blur(6px)" }
          }
          transition={{
            duration: 0.55,
            delay: delay + i * staggerDelay,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
