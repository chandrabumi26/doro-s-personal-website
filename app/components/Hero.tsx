"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const focusPills = [
    { name: "AI Integrations", color: "text-tosca-dark border-tosca/20 bg-tosca/5" },
    { name: "Web Architecture", color: "text-charcoal/80 border-charcoal/15 bg-charcoal/5" },
    { name: "Creative Code", color: "text-nude-warm border-nude-warm/20 bg-nude-warm/5" },
];

// For the constellation background animation
const constellationDots = [
    { id: 0, x: "75%", y: "25%", color: "#5FBDBD", size: "6px" }, // tosca
    { id: 1, x: "67%", y: "67%", color: "#D4A574", size: "8px" }, // nude-warm
    { id: 2, x: "15%", y: "33%", color: "#78CAD2", size: "8px" }, // tosca-light
    { id: 3, x: "25%", y: "75%", color: "#F5D5C8", size: "6px" }, // peach
    { id: 4, x: "85%", y: "50%", color: "#5FBDBD", size: "10px", outline: true }, // tosca outline
    { id: 5, x: "40%", y: "15%", color: "#A8C5B5", size: "6px" }, // sage
    { id: 6, x: "80%", y: "85%", color: "#5FBDBD", size: "7px" }, // tosca
];

export default function Hero() {
    const [activeLine, setActiveLine] = useState(0);

    // Advance the constellation line every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveLine((prev) => (prev + 1) % constellationDots.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const currentDot = constellationDots[activeLine];
    const nextDot = constellationDots[(activeLine + 1) % constellationDots.length];

    return (
        <section
            id="home"
            className="scroll-snap-section min-h-screen flex items-center justify-center relative overflow-hidden retro-texture"
        >
            {/* Animated background blobs */}
            <motion.div
                className="absolute top-20 right-10 md:right-32 w-48 h-48 rounded-full bg-tosca-light/20 blur-3xl"
                animate={{ y: [0, 20, 0], x: [0, -10, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 left-10 md:left-20 w-56 h-56 rounded-full bg-peach/20 blur-3xl"
                animate={{ y: [0, -25, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
                className="absolute top-1/3 left-1/3 w-32 h-32 rounded-full bg-nude-warm/15 blur-2xl"
                animate={{ y: [0, 15, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            {/* Constellation: Dots + Traveling Line */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {/* Dots */}
                {constellationDots.map((dot, index) => {
                    const isActive = index === activeLine || index === (activeLine + 1) % constellationDots.length;
                    return (
                        <motion.div
                            key={dot.id}
                            className="absolute rounded-full"
                            style={{
                                left: dot.x,
                                top: dot.y,
                                width: dot.size,
                                height: dot.size,
                                backgroundColor: dot.outline ? "transparent" : dot.color,
                                border: dot.outline ? `2px solid ${dot.color}` : "none",
                            }}
                            animate={{
                                opacity: isActive ? 0.9 : 0.35,
                                y: [0, -8, 0],
                                scale: isActive ? 1.3 : 1,
                            }}
                            transition={{
                                opacity: { duration: 1, ease: "easeInOut" },
                                scale: { duration: 1, ease: "easeInOut" },
                                y: { duration: 4 + (index % 3), repeat: Infinity, ease: "easeInOut" },
                            }}
                        />
                    );
                })}

                {/* Traveling Line (SVG) */}
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <defs>
                        <mask id="center-mask">
                            <rect width="100%" height="100%" fill="white" />
                            <ellipse cx="50%" cy="50%" rx="35%" ry="30%" fill="url(#soft-gradient)" />
                        </mask>
                        <radialGradient id="soft-gradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="black" stopOpacity="1" />
                            <stop offset="60%" stopColor="black" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="black" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <motion.line
                        key={`line-${activeLine}`}
                        x1={currentDot.x}
                        y1={currentDot.y}
                        x2={nextDot.x}
                        y2={nextDot.y}
                        stroke={nextDot.color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        mask="url(#center-mask)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 0.5, 0.5, 0] }}
                        transition={{ duration: 2.8, ease: "easeInOut" }}
                    />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-32 text-center relative z-10">
                {/* Name - Simple fade in, no per-character animation */}
                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                >
                    Dorojatun
                    <br />
                    <span className="text-tosca">Chandrabumi</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-charcoal/70 mb-8 max-w-2xl mx-auto"
                >
                    Frontend Developer with{" "}
                    <span className="text-tosca font-semibold">4+ years</span> of
                    experience crafting beautiful, responsive web experiences
                </motion.p>

                {/* Minimal Keyword Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                    className="flex flex-wrap justify-center gap-4 mb-10"
                >
                    {focusPills.map((pill) => (
                        <motion.span
                            key={pill.name}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className={`px-5 py-1.5 border rounded-full text-sm tracking-wide font-medium backdrop-blur-sm cursor-default transition-colors ${pill.color}`}
                        >
                            {pill.name}
                        </motion.span>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-tosca text-soft-white rounded-full font-semibold shadow-lg shadow-tosca/30 hover:bg-tosca-dark transition-colors duration-200"
                    >
                        View My Work
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-transparent text-charcoal border-2 border-charcoal/20 rounded-full font-semibold hover:border-tosca hover:text-tosca transition-all duration-200"
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
