"use client";

import { motion } from "motion/react";

const techStack = [
    { name: "React", color: "bg-tosca" },
    { name: "Next.js", color: "bg-charcoal" },
    { name: "Vue.js", color: "bg-sage" },
    { name: "TypeScript", color: "bg-tosca-dark" },
    { name: "Tailwind", color: "bg-terracotta" },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden retro-texture"
        >
            {/* Decorative elements - 50s style */}
            <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-tosca-light/20 blur-3xl" />
            <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-peach/30 blur-3xl" />
            <div className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full bg-nude-warm/20 blur-2xl" />

            <div className="max-w-6xl mx-auto px-6 py-32 text-center relative z-10">
                {/* Greeting */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                >
                    <span className="inline-block px-4 py-2 bg-nude/50 rounded-full text-sm font-medium text-charcoal border border-nude-warm/30">
                        👋 Welcome to my portfolio
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {"Dorojatun".split("").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.3 + index * 0.05,
                                ease: [0.25, 0.4, 0.25, 1],
                            }}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                    <br />
                    <span className="text-tosca">
                        {"Chandrabumi".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.6 + index * 0.05,
                                    ease: [0.25, 0.4, 0.25, 1],
                                }}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="text-xl md:text-2xl text-charcoal/70 mb-8 max-w-2xl mx-auto"
                >
                    Frontend Developer with{" "}
                    <span className="text-tosca font-semibold">4+ years</span> of
                    experience crafting beautiful, responsive web experiences
                </motion.p>

                {/* Tech Stack Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                >
                    {techStack.map((tech, index) => (
                        <motion.span
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5 + index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className={`px-4 py-2 ${tech.color} text-soft-white rounded-full text-sm font-medium shadow-md cursor-default`}
                        >
                            {tech.name}
                        </motion.span>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
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

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 rounded-full border-2 border-charcoal/30 flex items-start justify-center p-2"
                    >
                        <motion.div className="w-1.5 h-1.5 rounded-full bg-tosca" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
