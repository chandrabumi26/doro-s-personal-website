"use client";

import { motion } from "motion/react";

interface ScrollProgressProps {
  sections: number;
  activeSection: number;
}

export default function ScrollProgress({ sections, activeSection }: ScrollProgressProps) {
  return (
    <motion.div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 items-center"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {Array.from({ length: sections }).map((_, i) => (
        <motion.div
          key={i}
          className="relative"
          animate={{
            scale: activeSection === i ? 1 : 0.7,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div
            className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-500 ${
              activeSection === i
                ? "bg-tosca border-tosca shadow-[0_0_8px_rgba(95,189,189,0.4)]"
                : activeSection > i
                ? "bg-tosca/40 border-tosca/40"
                : "bg-transparent border-charcoal/20"
            }`}
          />
          {activeSection === i && (
            <motion.div
              className="absolute inset-0 rounded-full bg-tosca/30"
              animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
