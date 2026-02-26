"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";

type TechItem = {
    name: string;
    color: string;
    hexColor: string;
};

type TechGroup = {
    title: string;
    subtitle: string;
    icon: string;
    accentColor: string;
    accentBg: string;
    items: TechItem[];
};

const techGroups: TechGroup[] = [
    {
        title: "Frontend",
        subtitle: "Building beautiful interfaces",
        icon: "🎨",
        accentColor: "text-tosca",
        accentBg: "bg-tosca",
        items: [
            { name: "React", color: "text-[#61DAFB]", hexColor: "#61DAFB" },
            { name: "Next.js", color: "text-charcoal", hexColor: "#3D3D3D" },
            { name: "Vue.js", color: "text-[#42B883]", hexColor: "#42B883" },
            { name: "TypeScript", color: "text-[#3178C6]", hexColor: "#3178C6" },
            { name: "JavaScript", color: "text-[#F7DF1E]", hexColor: "#F7DF1E" },
            { name: "jQuery", color: "text-[#0769AD]", hexColor: "#0769AD" },
            { name: "Tailwind CSS", color: "text-[#06B6D4]", hexColor: "#06B6D4" },
            { name: "SCSS", color: "text-[#CC6699]", hexColor: "#CC6699" },
        ],
    },
    {
        title: "Backend",
        subtitle: "Powering the server side",
        icon: "⚙️",
        accentColor: "text-sage",
        accentBg: "bg-sage",
        items: [
            { name: "PHP", color: "text-[#777BB4]", hexColor: "#777BB4" },
            { name: "Python", color: "text-[#3776AB]", hexColor: "#3776AB" },
            { name: "MySQL", color: "text-[#4479A1]", hexColor: "#4479A1" },
            { name: "PostgreSQL", color: "text-[#4169E1]", hexColor: "#4169E1" },
            { name: "REST APIs", color: "text-tosca-dark", hexColor: "#4A9E9E" },
        ],
    },
    {
        title: "Mobile",
        subtitle: "Cross-platform experiences",
        icon: "📱",
        accentColor: "text-peach",
        accentBg: "bg-peach",
        items: [
            { name: "React Native", color: "text-[#61DAFB]", hexColor: "#61DAFB" },
        ],
    },
];

// Deterministic pseudo-random based on string seed for consistent animation offsets
function seededRandom(seed: string) {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        const char = seed.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }
    return Math.abs(hash % 100) / 100;
}

const tagStyle = {
    padding: "px-5 py-2.5 sm:px-7 sm:py-3",
    text: "text-sm sm:text-base font-semibold",
    dot: "w-2 h-2",
};

// Floating particle component
function FloatingParticle({ index, accentHex }: { index: number; accentHex: string }) {
    const rand = seededRandom(`particle-${index}`);
    const size = 3 + rand * 4;
    const left = (index * 17 + rand * 30) % 100;
    const top = (index * 23 + rand * 40) % 100;
    const duration = 4 + rand * 6;
    const delay = rand * 3;

    return (
        <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
                backgroundColor: accentHex,
                opacity: 0.15,
            }}
            animate={{
                y: [0, -12, 0, 8, 0],
                x: [0, 6, -4, 2, 0],
                opacity: [0.1, 0.25, 0.1, 0.2, 0.1],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
}

const growthItems = [
    { label: "Responsive Design", desc: "Building interfaces that adapt seamlessly across all screen sizes — from mobile to ultra-wide displays — ensuring a consistent user experience everywhere." },
    { label: "Performance Optimization", desc: "Reducing load times, minimizing bundle sizes, and implementing lazy loading strategies to deliver fast, efficient web applications." },
    { label: "Clean Code", desc: "Writing readable, well-structured, and maintainable code with clear naming conventions, solid architecture patterns, and thorough documentation." },
    { label: "Agile / Scrum", desc: "Working effectively in sprint-based teams with daily standups, retrospectives, and iterative delivery to ship features on schedule." },
    { label: "CI/CD", desc: "Setting up automated build pipelines, continuous integration workflows, and streamlined deployment processes to ensure reliable releases." },
    { label: "Git", desc: "Managing complex branching strategies, conducting code reviews, resolving merge conflicts, and maintaining clean commit histories across teams." },
    { label: "Problem Solving", desc: "Breaking down complex challenges into manageable pieces, debugging tricky issues, and finding creative solutions under tight deadlines." },
];

export default function Skills() {
    const [activeGroup, setActiveGroup] = useState(0);

    // Generate stable particle positions per group
    const particles = useMemo(() => {
        return Array.from({ length: 12 }, (_, i) => i);
    }, []);

    return (
        <section id="skills" className="scroll-snap-section py-24 bg-soft-white relative overflow-hidden">
            {/* Subtle decorative elements */}
            <motion.div
                className="absolute top-1/4 right-0 w-72 h-72 bg-peach/15 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.15, 0.2, 0.15],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 left-0 w-56 h-56 bg-tosca-light/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <ScrollReveal className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-tosca/10 rounded-full text-tosca-dark text-sm font-medium mb-4">
                        My Skills
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
                        Technologies I <span className="text-tosca">work with</span>
                    </h2>
                    <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
                        A curated collection of technologies and tools I use to bring ideas to life
                    </p>
                </ScrollReveal>

                {/* ===== TECHNOLOGIES SECTION ===== */}
                <ScrollReveal delay={0.1}>
                    {/* Tab Navigation */}
                    <div className="flex justify-center gap-2 sm:gap-4 mb-8">
                        {techGroups.map((group, index) => (
                            <motion.button
                                key={group.title}
                                onClick={() => setActiveGroup(index)}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className={`
                                    relative px-4 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer
                                    ${activeGroup === index
                                        ? "bg-tosca text-soft-white shadow-xl shadow-tosca/20"
                                        : "bg-cream text-charcoal/70 hover:bg-nude/50 hover:text-charcoal border border-nude/50"
                                    }
                                `}
                            >
                                <span className="mr-2">{group.icon}</span>
                                {group.title}
                                {activeGroup === index && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-soft-white/60 rounded-full"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Active Group Content — Floating Tag Cloud */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeGroup}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="relative rounded-3xl p-8 sm:p-12 min-h-[220px] overflow-hidden"
                                style={{
                                    background: "linear-gradient(135deg, rgba(253,248,243,0.8) 0%, rgba(232,212,196,0.3) 50%, rgba(245,213,200,0.2) 100%)",
                                    backdropFilter: "blur(20px)",
                                    border: "1px solid rgba(232,212,196,0.4)",
                                }}
                            >
                                {/* Background floating particles */}
                                {particles.map((i) => (
                                    <FloatingParticle
                                        key={`${activeGroup}-${i}`}
                                        index={i}
                                        accentHex={techGroups[activeGroup].items[0]?.hexColor || "#5FBDBD"}
                                    />
                                ))}

                                {/* Subtitle */}
                                <motion.p
                                    className="text-center text-charcoal/40 text-sm font-medium tracking-wider uppercase mb-8"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.15 }}
                                >
                                    {techGroups[activeGroup].subtitle}
                                </motion.p>

                                {/* Floating tag cloud */}
                                <div className="relative flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                                    {techGroups[activeGroup].items.map((item, itemIndex) => {
                                        const rand = seededRandom(item.name);
                                        const floatDuration = 3 + rand * 4;
                                        const floatDelay = rand * 2;
                                        const floatY = 3 + rand * 5;

                                        return (
                                            <motion.div
                                                key={item.name}
                                                initial={{ opacity: 0, scale: 0, rotate: -10 + rand * 20 }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                    rotate: 0,
                                                }}
                                                transition={{
                                                    delay: itemIndex * 0.06,
                                                    type: "spring",
                                                    stiffness: 260,
                                                    damping: 20,
                                                }}
                                                className="relative"
                                            >
                                                <motion.div
                                                    animate={{
                                                        y: [-floatY, floatY, -floatY],
                                                    }}
                                                    transition={{
                                                        duration: floatDuration,
                                                        delay: floatDelay,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                    }}
                                                    whileHover={{
                                                        scale: 1.05,
                                                        y: -6,
                                                    }}
                                                    className={`
                                                        group relative ${tagStyle.padding} rounded-full cursor-default
                                                        transition-all duration-300
                                                        flex items-center gap-2
                                                    `}
                                                    style={{
                                                        background: `linear-gradient(135deg, rgba(254,254,250,0.7), ${item.hexColor}10)`,
                                                        backdropFilter: "blur(12px)",
                                                        border: `1.5px solid ${item.hexColor}25`,
                                                        boxShadow: `0 2px 8px rgba(0,0,0,0.04)`,
                                                    }}
                                                >
                                                    {/* Colored dot indicator */}
                                                    <span
                                                        className={`${tagStyle.dot} rounded-full shrink-0`}
                                                        style={{ backgroundColor: item.hexColor }}
                                                    />
                                                    <span className={`${tagStyle.text} ${item.color} whitespace-nowrap`}>
                                                        {item.name}
                                                    </span>
                                                </motion.div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </ScrollReveal>

                {/* ===== GROWTH LINE ===== */}
                <ScrollReveal delay={0.3} className="mt-16">
                    <div className="text-center mb-10">
                        <span className="inline-block px-3 py-1 bg-tosca/10 rounded-full text-tosca-dark text-xs font-medium tracking-wider uppercase mb-3">
                            Growth Line
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-charcoal">
                            Practices I <span className="text-tosca">live by</span>
                        </h3>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-3xl mx-auto">
                        {/* Vertical line */}
                        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-tosca via-sage to-peach opacity-40" />

                        <div className="space-y-4">
                            {growthItems.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.08, duration: 0.4 }}
                                    viewport={{ once: true }}
                                    className="relative pl-12 sm:pl-16 group"
                                >
                                    {/* Dot on timeline */}
                                    <motion.div
                                        className="absolute left-2.5 sm:left-4.5 top-3 w-3 h-3 rounded-full bg-tosca border-2 border-soft-white shadow-sm group-hover:scale-150 transition-transform duration-300"
                                        whileInView={{ scale: [0, 1.3, 1] }}
                                        transition={{ delay: index * 0.08 + 0.2, duration: 0.4 }}
                                        viewport={{ once: true }}
                                    />

                                    {/* Content card */}
                                    <motion.div
                                        whileHover={{ x: 4 }}
                                        className="bg-cream rounded-xl p-4 border border-nude/50 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-tosca/20"
                                    >
                                        <h4 className="font-bold text-charcoal group-hover:text-tosca-dark transition-colors duration-300">
                                            {item.label}
                                        </h4>
                                        <p className="text-sm text-charcoal/60 mt-1 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
