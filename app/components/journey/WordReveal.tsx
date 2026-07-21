"use client";

import { motion } from "motion/react";

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function WordReveal({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  as: Tag = "p",
}: WordRevealProps) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: delay + i * staggerDelay,
            ease: [0, 0, 0.2, 1], // ease-out
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
