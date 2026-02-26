"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import {
    ReactOriginal,
    NextjsOriginal,
    VuejsOriginal,
    TypescriptOriginal,
    JavascriptOriginal,
    JqueryOriginal,
    TailwindcssOriginal,
    SassOriginal,
    PhpOriginal,
    PythonOriginal,
    MysqlOriginal,
    PostgresqlOriginal,
    ReactnativeOriginal,
} from "devicons-react";
import type { ComponentType } from "react";

type TechItem = {
    name: string;
    Icon: ComponentType<{ size?: number | string; className?: string }>;
};

type TechGroup = {
    title: string;
    icon: string;
    items: TechItem[];
};

const techGroups: TechGroup[] = [
    {
        title: "Frontend",
        icon: "🎨",
        items: [
            { name: "React", Icon: ReactOriginal },
            { name: "Next.js", Icon: NextjsOriginal },
            { name: "Vue.js", Icon: VuejsOriginal },
            { name: "TypeScript", Icon: TypescriptOriginal },
            { name: "JavaScript", Icon: JavascriptOriginal },
            { name: "jQuery", Icon: JqueryOriginal },
            { name: "Tailwind CSS", Icon: TailwindcssOriginal },
            { name: "SCSS", Icon: SassOriginal },
        ],
    },
    {
        title: "Backend",
        icon: "⚙️",
        items: [
            { name: "PHP", Icon: PhpOriginal },
            { name: "Python", Icon: PythonOriginal },
            { name: "MySQL", Icon: MysqlOriginal },
            { name: "PostgreSQL", Icon: PostgresqlOriginal },
        ],
    },
    {
        title: "Mobile",
        icon: "📱",
        items: [
            { name: "React Native", Icon: ReactnativeOriginal },
        ],
    },
];

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
                    <div className="flex justify-center gap-2 sm:gap-4 mb-10">
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

                    {/* Active Group Content — Icon Card Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeGroup}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4 sm:gap-5 max-w-2xl mx-auto">
                                {techGroups[activeGroup].items.map((item, itemIndex) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            delay: itemIndex * 0.06,
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                        whileHover={{ y: -4, scale: 1.03 }}
                                        className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 bg-soft-white rounded-2xl shadow-md border border-nude/30 cursor-default transition-shadow duration-300 hover:shadow-lg"
                                    >
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                                            <item.Icon size={48} />
                                        </div>
                                        <span className="text-xs sm:text-sm font-medium text-charcoal/80 text-center leading-tight">
                                            {item.name}
                                        </span>
                                    </motion.div>
                                ))}
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
