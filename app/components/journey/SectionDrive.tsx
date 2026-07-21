"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import ScrollWordReveal from "./ScrollWordReveal";

const milestones = [
  {
    label: "Responsive Design",
    desc: "Interfaces that feel right on every screen.",
  },
  {
    label: "Performance",
    desc: "Fast loads, small bundles, lazy everything.",
  },
  {
    label: "Clean Code",
    desc: "Readable, structured, built to last.",
  },
  {
    label: "Agile Workflow",
    desc: "Sprints, standups, shipping on schedule.",
  },
  {
    label: "CI/CD",
    desc: "Automated pipelines, reliable releases.",
  },
  {
    label: "Problem Solving",
    desc: "Breaking complex into manageable.",
  },
];

export default function SectionDrive() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-40px" });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-6"
      style={{
        background: "linear-gradient(180deg, var(--cream) 0%, var(--soft-white) 50%, var(--cream) 100%)",
      }}
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/3 left-0 w-60 h-60 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, var(--sage) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-0 w-48 h-48 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, var(--tosca) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Section text */}
        <div className="text-center mb-16">
          <ScrollWordReveal
            text="Practices that shape how I build."
            as="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6"
            delay={0.1}
            staggerDelay={0.1}
          />
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-2xl mx-auto">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-5 sm:left-7 top-0 bottom-0 w-[2px] origin-top"
            style={{
              background: "linear-gradient(180deg, var(--tosca), var(--sage), var(--peach))",
            }}
            initial={{ scaleY: 0 }}
            animate={timelineInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
          />

          <div className="space-y-5">
            {milestones.map((item, i) => (
              <motion.div
                key={item.label}
                className="relative pl-14 sm:pl-18 group"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  timelineInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{
                  delay: 0.3 + i * 0.15,
                  duration: 0.5,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-3 sm:left-5 top-4 w-4 h-4 rounded-full bg-tosca border-[3px] border-soft-white shadow-sm"
                  initial={{ scale: 0 }}
                  animate={
                    timelineInView
                      ? { scale: [0, 1.4, 1] }
                      : { scale: 0 }
                  }
                  transition={{
                    delay: 0.4 + i * 0.15,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                />

                {/* Content card */}
                <motion.div
                  className="bg-cream/80 backdrop-blur-sm rounded-xl p-5 border border-nude/40 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-tosca/15"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <h4 className="font-bold text-charcoal group-hover:text-tosca-dark transition-colors duration-300 text-base">
                    {item.label}
                  </h4>
                  <p className="text-sm text-charcoal/50 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
