"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
                type: "spring",
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
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8,
            },
        },
    };

    const statsVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.6 + i * 0.1,
            },
        }),
    };

    const stats = [
        { icon: "🚀", value: "50+", label: "Projects" },
        { icon: "⭐", value: "4+", label: "Years Exp." },
        { icon: "☕", value: "∞", label: "Coffee" },
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-24 bg-nude/30 relative overflow-hidden"
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
                            className="absolute -inset-4 bg-gradient-to-br from-tosca/20 to-peach/20 rounded-3xl"
                            animate={{
                                rotate: [3, 5, 3],
                                scale: [1, 1.02, 1],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute -inset-4 bg-gradient-to-br from-nude-warm/30 to-sage/20 rounded-3xl"
                            animate={{
                                rotate: [-2, -4, -2],
                                scale: [1, 1.01, 1],
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />

                        {/* Main image container */}
                        <motion.div
                            className="relative bg-gradient-to-br from-cream to-nude rounded-2xl aspect-square flex items-center justify-center overflow-hidden shadow-xl"
                            whileHover={{
                                scale: 1.02,
                                rotate: 1,
                                transition: { type: "spring", stiffness: 300 },
                            }}
                        >
                            <Image
                                src="/profile.png"
                                alt="Dorojatun Chandrabumi"
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
                        </motion.div>
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
                            When I'm not coding, you'll find me exploring new design trends,
                            experimenting with animations, or enjoying a good cup of coffee
                            while sketching UI ideas.
                        </motion.p>

                        {/* Stats */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    custom={index}
                                    variants={statsVariants}
                                    whileHover={{
                                        scale: 1.08,
                                        y: -4,
                                        boxShadow: "0 10px 30px rgba(95, 189, 189, 0.2)",
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 px-4 py-2 bg-soft-white rounded-lg shadow-sm cursor-default border border-transparent hover:border-tosca/20 transition-colors"
                                >
                                    <motion.span
                                        className="text-2xl"
                                        animate={{
                                            rotate: [0, 10, -10, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 3 + index,
                                        }}
                                    >
                                        {stat.icon}
                                    </motion.span>
                                    <div>
                                        <motion.p
                                            className="font-bold text-charcoal"
                                            initial={{ opacity: 0 }}
                                            animate={isInView ? { opacity: 1 } : {}}
                                            transition={{ delay: 0.8 + index * 0.1 }}
                                        >
                                            {stat.value}
                                        </motion.p>
                                        <p className="text-xs text-charcoal/60">{stat.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
