"use client";

import { motion } from "motion/react";

const focusPills = [
    { name: "AI Integrations", color: "text-tosca-dark border-tosca/20 bg-tosca/5" },
    { name: "Web Architecture", color: "text-charcoal/80 border-charcoal/15 bg-charcoal/5" },
    { name: "Creative Code", color: "text-nude-warm border-nude-warm/20 bg-nude-warm/5" },
];

export default function Hero() {
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

            {/* Floating dots */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-2.5 h-2.5 rounded-full bg-tosca/50"
                animate={{ y: [0, -18, 0], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-nude-warm/50"
                animate={{ y: [0, -22, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
            <motion.div
                className="absolute top-1/3 left-[15%] w-3 h-3 rounded-full bg-tosca-light/60"
                animate={{ y: [0, 18, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
                className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-peach/60"
                animate={{ y: [0, -14, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            />
            <motion.div
                className="absolute top-1/2 right-[15%] w-3.5 h-3.5 rounded-full border-2 border-tosca/40"
                animate={{ y: [0, -25, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
                className="absolute top-[15%] left-[40%] w-2 h-2 rounded-full bg-sage/50"
                animate={{ y: [0, 12, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
            <motion.div
                className="absolute bottom-[15%] right-[20%] w-2.5 h-2.5 rounded-full bg-tosca/45"
                animate={{ y: [0, -16, 0], opacity: [0.35, 0.85, 0.35] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

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
