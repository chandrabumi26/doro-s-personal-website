"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import ScrollWordReveal from "./ScrollWordReveal";

const focusItems = [
  {
    title: "Agentic AI",
    subtitle: "Building intelligent systems",
    gradient: "from-tosca/10 to-tosca-light/5",
    border: "border-tosca/15",
    accent: "text-tosca-dark",
    icon: "🤖",
  },
  {
    title: "World History",
    subtitle: "Stories that shaped our world",
    gradient: "from-peach/20 to-nude-warm/10",
    border: "border-peach/20",
    accent: "text-terracotta",
    icon: "📜",
  },
  {
    title: "Business Scaling",
    subtitle: "AI-driven growth",
    gradient: "from-sage/15 to-sage/5",
    border: "border-sage/25",
    accent: "text-charcoal/70",
    icon: "📈",
  },
  {
    title: "Nuclear Science",
    subtitle: "From fission to Chernobyl",
    gradient: "from-nude/30 to-nude-warm/10",
    border: "border-nude-warm/25",
    accent: "text-nude-warm",
    icon: "⚛️",
  },
  {
    title: "React Architecture",
    subtitle: "Scalable frontend patterns",
    gradient: "from-cream to-soft-white",
    border: "border-charcoal/8",
    accent: "text-charcoal/70",
    icon: "⚡",
  },
  {
    title: "Playing Piano",
    subtitle: "Keys to unwind",
    gradient: "from-tosca-light/10 to-tosca/5",
    border: "border-tosca-light/15",
    accent: "text-tosca-dark",
    icon: "🎹",
  },
];

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#3D3D3D" },
  { name: "Vue.js", color: "#4FC08D" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "React Native", color: "#61DAFB" },
];

export default function SectionWork() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-6"
      style={{ background: "var(--soft-white)" }}
    >
      {/* Decorative */}
      <motion.div
        className="absolute top-1/4 right-0 w-72 h-72 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, var(--peach) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-56 h-56 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, var(--tosca-light) 0%, transparent 70%)" }}
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Tech stack floating pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {techStack.map((tech, i) => (
            <motion.span
              key={tech.name}
              className="px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm"
              style={{
                borderColor: `${tech.color}30`,
                backgroundColor: `${tech.color}08`,
                color: tech.color,
              }}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 20, scale: 0.8 }
              }
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {tech.name}
            </motion.span>
          ))}
        </div>

        {/* Section text */}
        <div className="text-center mb-14">
          <ScrollWordReveal
            text="When I'm not coding, I'm probably deep into one of these."
            as="p"
            className="text-xl md:text-2xl text-charcoal/50 max-w-2xl mx-auto"
            delay={0.2}
            staggerDelay={0.06}
          />
        </div>

        {/* Bento grid */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {focusItems.map((item, i) => (
            <motion.div
              key={item.title}
              className={`relative p-6 rounded-2xl border bg-gradient-to-br ${item.gradient} ${item.border} overflow-hidden group cursor-default`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={
                gridInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.9 }
              }
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 150,
                damping: 18,
              }}
              whileHover={{
                y: -4,
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-tosca/0 to-tosca/0 group-hover:from-tosca/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

              <div className="relative z-10">
                <motion.span
                  className="text-2xl block mb-3"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                >
                  {item.icon}
                </motion.span>
                <h3 className={`text-sm font-bold mb-1 ${item.accent}`}>
                  {item.title}
                </h3>
                <p className="text-xs text-charcoal/50 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
