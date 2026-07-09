"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const focusItems = [
        { title: "Agentic AI", subtitle: "Building intelligent systems", bg: "bg-tosca/8", border: "border-tosca/20", accent: "text-tosca-dark" },
        { title: "World History", subtitle: "Stories that shaped our world", bg: "bg-peach/15", border: "border-peach/20", accent: "text-terracotta" },
        { title: "Business Scaling", subtitle: "AI-driven growth", bg: "bg-sage/15", border: "border-sage/30", accent: "text-charcoal/70" },
        { title: "Nuclear Science", subtitle: "From fission to Chernobyl", bg: "bg-nude/30", border: "border-nude-warm/30", accent: "text-nude-warm" },
        { title: "React Architecture", subtitle: "Scalable frontend patterns", bg: "bg-cream", border: "border-charcoal/10", accent: "text-charcoal/70" },
        { title: "Playing Piano", subtitle: "Keys to unwind", bg: "bg-tosca-light/10", border: "border-tosca-light/20", accent: "text-tosca-dark" },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 120,
                damping: 18,
                delay: 0.5 + i * 0.08,
            },
        }),
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15,
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -10 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 20,
                duration: 0.8,
            },
        },
    };

    return (
        <section
            id="about"
            ref={sectionRef}
            className="scroll-snap-section py-24 bg-nude/30 relative overflow-hidden"
        >
            {/* Animated decorative shapes */}
            <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-tosca-light/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-48 h-48 bg-peach/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.25, 0.2],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Image/Illustration */}
                    <motion.div variants={imageVariants} className="relative group">
                        {/* Animated background frames */}
                        <motion.div
                            className="absolute -inset-4 bg-linear-to-br from-tosca/20 to-peach/20 rounded-3xl"
                            animate={{
                                rotate: [3, 5, 3],
                                scale: [1, 1.02, 1],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute -inset-4 bg-linear-to-br from-nude-warm/30 to-sage/20 rounded-3xl"
                            animate={{
                                rotate: [-2, -4, -2],
                                scale: [1, 1.01, 1],
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />

                        {/* Main image container with flip effect */}
                        <div 
                            className="relative aspect-square cursor-pointer"
                            style={{ perspective: "1000px" }}
                        >
                            <motion.div
                                className="relative w-full h-full"
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Front - Pixel Art */}
                                <div 
                                    className="absolute inset-0 bg-linear-to-br from-cream to-nude rounded-2xl flex items-center justify-center overflow-hidden shadow-xl"
                                    style={{ backfaceVisibility: "hidden" }}
                                >
                                    <Image
                                        src="/profile.png"
                                        alt="Dorojatun Chandrabumi - Pixel Art"
                                        width={400}
                                        height={400}
                                        className="object-contain p-4"
                                        priority
                                    />

                                    {/* Floating decorative elements */}
                                    <motion.div
                                        className="absolute top-4 left-4 w-8 h-8 border-2 border-tosca/30 rounded-full"
                                        animate={{
                                            y: [0, -10, 0],
                                            opacity: [0.3, 0.6, 0.3],
                                        }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <motion.div
                                        className="absolute bottom-6 right-6 w-12 h-12 border-2 border-peach/40 rounded-full"
                                        animate={{
                                            y: [0, 10, 0],
                                            opacity: [0.4, 0.7, 0.4],
                                        }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    />
                                    <motion.div
                                        className="absolute top-1/2 right-4 w-4 h-4 bg-tosca/30 rounded-full"
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.3, 0.6, 0.3],
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    />
                                </div>

                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-6">
                        <motion.span
                            variants={itemVariants}
                            className="inline-block px-4 py-2 bg-tosca/10 rounded-full text-tosca-dark text-sm font-medium"
                        >
                            About Me
                        </motion.span>

                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-bold text-charcoal"
                        >
                            Passionate about crafting{" "}
                            <motion.span
                                className="text-tosca inline-block"
                                whileHover={{
                                    scale: 1.05,
                                    rotate: [-1, 1, -1],
                                    transition: { duration: 0.3 },
                                }}
                            >
                                beautiful
                            </motion.span>{" "}
                            interfaces
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-charcoal/70 text-lg leading-relaxed"
                        >
                            With over 4 years of experience in frontend development, I
                            specialize in building modern, responsive web applications using
                            React, Next.js, Vue.js, and TypeScript. I believe in writing
                            clean, maintainable code that delivers exceptional user
                            experiences.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-charcoal/70 text-lg leading-relaxed"
                        >
                            When I&apos;m not coding, you&apos;ll find me exploring new things,
                            diving deep into fascinating topics like World War II history,
                            Chernobyl, and other intriguing stories from the past.
                        </motion.p>

                        {/* Beautiful Bento Grid Focus */}
                        <motion.div className="pt-4 mt-2 border-t border-charcoal/10">
                            <motion.h3
                                variants={itemVariants}
                                className="text-xs font-bold tracking-[0.2em] uppercase text-charcoal/40 mb-5 ml-1"
                            >
                                Current Focus & Interests
                            </motion.h3>

                            <motion.div
                                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                            >
                                {focusItems.map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        custom={i}
                                        variants={cardVariants}
                                        whileHover={{
                                            y: -3,
                                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)",
                                            transition: { duration: 0.2, ease: "easeOut" }
                                        }}
                                        className={`p-4 rounded-2xl border ${item.bg} ${item.border} transition-colors duration-300 flex flex-col justify-center cursor-default`}
                                    >
                                        <span className={`text-xs font-bold mb-1 ${item.accent}`}>
                                            {item.title}
                                        </span>
                                        <span className="text-[10px] sm:text-xs text-charcoal/60 leading-tight">
                                            {item.subtitle}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
