"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Link from "next/link";

// Constellation dots - reused concept from existing Hero
const constellationDots = [
  { id: 0, x: "12%", y: "20%", color: "#5FBDBD", size: 5 },
  { id: 1, x: "85%", y: "15%", color: "#D4A574", size: 7 },
  { id: 2, x: "70%", y: "75%", color: "#78CAD2", size: 6 },
  { id: 3, x: "20%", y: "80%", color: "#F5D5C8", size: 8 },
  { id: 4, x: "90%", y: "50%", color: "#A8C5B5", size: 5 },
  { id: 5, x: "5%", y: "55%", color: "#5FBDBD", size: 4 },
  { id: 6, x: "50%", y: "10%", color: "#E8D4C4", size: 6 },
  { id: 7, x: "40%", y: "90%", color: "#5FBDBD", size: 5 },
  { id: 8, x: "75%", y: "35%", color: "#F5D5C8", size: 4 },
  { id: 9, x: "30%", y: "45%", color: "#78CAD2", size: 3 },
];

interface LandingProps {
  onEnterJourney: () => void;
}

export default function Landing({ onEnterJourney }: LandingProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Ambient gradient blobs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, var(--tosca-light) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, var(--peach) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, var(--nude-warm) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Constellation dots */}
      <div className="absolute inset-0 pointer-events-none">
        {constellationDots.map((dot, i) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full"
            style={{
              left: dot.x,
              top: dot.y,
              width: dot.size,
              height: dot.size,
              backgroundColor: dot.color,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1],
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
              scale: { duration: 4 + (i % 2), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
              y: { duration: 5 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(var(--charcoal) 1px, transparent 1px),
            linear-gradient(90deg, var(--charcoal) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        {/* Name */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-charcoal leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            Dorojatun
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-tosca leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            Chandrabumi
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-charcoal/60 font-medium tracking-wide mb-12"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          Software Engineer | Lifetime Researcher
        </motion.p>

        {/* Interactive Choice */}
        <motion.div
          className="mt-14 max-w-2xl mx-auto flex flex-col md:flex-row gap-6 justify-center w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Choice A: Story */}
          <motion.button
            onClick={onEnterJourney}
            className="group flex-1 text-left bg-soft-white border border-nude/40 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:shadow-tosca/10 hover:border-tosca/40 transition-all duration-500 cursor-pointer relative overflow-hidden"
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-tosca/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-125" />
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3 flex items-center gap-2">
              The Journey
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="w-5 h-5 text-tosca opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </h3>
            <p className="text-charcoal/60 text-sm leading-relaxed relative z-10">
              Immerse yourself in my story, skills, and projects through an interactive narrative experience.
            </p>
          </motion.button>

          {/* Choice B: Legacy/Simple */}
          <Link href="/legacy" className="flex-1 block">
            <motion.div
              className="h-full text-left bg-transparent border-2 border-charcoal/10 rounded-3xl p-6 sm:p-8 hover:border-charcoal/30 hover:bg-charcoal/5 transition-all duration-500 cursor-pointer"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal/80 mb-3 flex items-center gap-2">
                Quick Overview
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-5 h-5 text-charcoal/40"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </h3>
              <p className="text-charcoal/50 text-sm leading-relaxed">
                Just the facts. View my traditional portfolio format directly without the story flow.
              </p>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
