"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description:
            "A modern e-commerce solution built with Next.js and TypeScript. Features include real-time inventory, secure payments, and responsive design.",
        image: "🛒",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        color: "bg-tosca",
    },
    {
        id: 2,
        title: "Dashboard Analytics",
        description:
            "Interactive dashboard for data visualization with real-time updates. Built using React and D3.js for stunning charts.",
        image: "📊",
        tags: ["React", "D3.js", "REST API"],
        color: "bg-sage",
    },
    {
        id: 3,
        title: "Social Media App",
        description:
            "Full-featured social platform with real-time messaging, posts, and notifications. Vue.js frontend with GraphQL backend.",
        image: "💬",
        tags: ["Vue.js", "GraphQL", "WebSocket"],
        color: "bg-terracotta",
    },
    {
        id: 4,
        title: "Portfolio Generator",
        description:
            "A tool that helps developers create stunning portfolios in minutes. Built with React and includes multiple themes.",
        image: "✨",
        tags: ["React", "TypeScript", "SCSS"],
        color: "bg-nude-warm",
    },
    {
        id: 5,
        title: "Weather Application",
        description:
            "Beautiful weather app with location-based forecasts, animated weather icons, and 7-day predictions.",
        image: "🌤️",
        tags: ["React", "API Integration", "CSS"],
        color: "bg-tosca-light",
    },
];

// Preview documents that peek out on hover (first 3 projects)
const previewDocs = projects.slice(0, 3);

export default function Projects() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDrawerHovered, setIsDrawerHovered] = useState(false);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    return (
        <section id="projects" className="py-24 bg-nude/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-tosca/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-peach/20 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <ScrollReveal className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-tosca/10 rounded-full text-tosca-dark text-sm font-medium mb-4">
                        My Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
                        Featured <span className="text-tosca">Projects</span>
                    </h2>
                    <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
                        Click the drawer below to explore my collection of projects
                    </p>
                </ScrollReveal>

                {/* Filing Cabinet */}
                <ScrollReveal delay={0.2}>
                    <div className="max-w-4xl mx-auto">
                        {/* Cabinet Frame */}
                        <div className="relative">
                            {/* Cabinet Top */}
                            <div className="h-4 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal rounded-t-lg shadow-lg" />

                            {/* Preview documents that fan out on hover (shown above drawer) */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-64 h-24 pointer-events-none">
                                {!isDrawerOpen && previewDocs.map((doc, index) => (
                                    <motion.div
                                        key={doc.id}
                                        className="absolute bottom-0 left-1/2 w-48 h-20 rounded-t-lg shadow-lg origin-bottom"
                                        style={{
                                            zIndex: 3 - index,
                                        }}
                                        initial={{
                                            x: "-50%",
                                            y: 20,
                                            rotate: 0,
                                            opacity: 0
                                        }}
                                        animate={isDrawerHovered ? {
                                            x: "-50%",
                                            y: -10 - (index * 8),
                                            rotate: (index - 1) * 12,
                                            opacity: 1,
                                        } : {
                                            x: "-50%",
                                            y: 20,
                                            rotate: 0,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 25,
                                            delay: index * 0.05,
                                        }}
                                    >
                                        {/* Document paper */}
                                        <div className={`w-full h-full ${doc.color} rounded-t-lg flex items-center justify-center shadow-md border-t-4 border-soft-white/30`}>
                                            <span className="text-2xl">{doc.image}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Drawer */}
                            <motion.div
                                className="relative bg-gradient-to-b from-nude-warm to-nude rounded-b-lg cursor-pointer overflow-visible"
                                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                                onMouseEnter={() => setIsDrawerHovered(true)}
                                onMouseLeave={() => setIsDrawerHovered(false)}
                                animate={{
                                    y: isDrawerHovered && !isDrawerOpen ? -4 : 0,
                                    boxShadow: isDrawerHovered || isDrawerOpen
                                        ? "0 25px 50px -12px rgba(95, 189, 189, 0.25), 0 12px 24px -8px rgba(0, 0, 0, 0.15)"
                                        : "0 10px 40px -10px rgba(0, 0, 0, 0.2)",
                                }}
                                whileTap={{ scale: 0.995 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                {/* Drawer Front */}
                                <motion.div
                                    className="relative z-10 bg-gradient-to-b from-nude-warm/90 to-nude border-4 border-charcoal/10 rounded-b-lg"
                                    animate={{
                                        y: isDrawerOpen ? 20 : 0,
                                        borderColor: isDrawerHovered ? "rgba(95, 189, 189, 0.3)" : "rgba(61, 61, 61, 0.1)",
                                    }}
                                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                >
                                    {/* Drawer Handle */}
                                    <div className="flex justify-center py-6">
                                        <motion.div
                                            className="flex items-center gap-3"
                                            animate={{
                                                rotate: isDrawerHovered && !isDrawerOpen ? [0, -2, 2, -1, 1, 0] : 0,
                                                scale: isDrawerOpen ? 1.1 : 1,
                                            }}
                                            transition={{
                                                rotate: { duration: 0.5, ease: "easeInOut" },
                                                scale: { type: "spring", stiffness: 300, damping: 20 },
                                            }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <motion.div
                                                className="w-24 h-3 bg-gradient-to-r from-charcoal/60 via-charcoal/80 to-charcoal/60 rounded-full shadow-inner"
                                                animate={{
                                                    background: isDrawerHovered
                                                        ? "linear-gradient(to right, rgba(95, 189, 189, 0.6), rgba(95, 189, 189, 0.8), rgba(95, 189, 189, 0.6))"
                                                        : "linear-gradient(to right, rgba(61, 61, 61, 0.6), rgba(61, 61, 61, 0.8), rgba(61, 61, 61, 0.6))",
                                                }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Drawer Label */}
                                    <motion.div
                                        className="text-center pb-6"
                                        animate={{
                                            scale: isDrawerHovered ? 1.02 : 1,
                                        }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    >
                                        <motion.span
                                            className="px-6 py-2 bg-cream/80 rounded border text-charcoal font-medium shadow-sm inline-block"
                                            animate={{
                                                borderColor: isDrawerHovered ? "rgba(95, 189, 189, 0.4)" : "rgba(61, 61, 61, 0.1)",
                                                boxShadow: isDrawerHovered
                                                    ? "0 4px 12px rgba(95, 189, 189, 0.2)"
                                                    : "0 1px 3px rgba(0, 0, 0, 0.1)",
                                            }}
                                        >
                                            📁 Projects Collection
                                        </motion.span>
                                    </motion.div>

                                    {/* Click hint */}
                                    <motion.p
                                        className="text-center text-charcoal/50 text-sm pb-4"
                                        animate={{
                                            opacity: [0.5, 1, 0.5],
                                            color: isDrawerHovered ? "rgba(95, 189, 189, 0.8)" : "rgba(61, 61, 61, 0.5)",
                                        }}
                                        transition={{
                                            opacity: { duration: 2, repeat: Infinity },
                                            color: { duration: 0.3 },
                                        }}
                                    >
                                        {isDrawerOpen ? "Click to close" : "Click to open drawer"}
                                    </motion.p>
                                </motion.div>
                            </motion.div>

                            {/* Documents that come out of drawer */}
                            <AnimatePresence mode="sync">
                                {isDrawerOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.25, 0.4, 0.25, 1],
                                            opacity: { duration: 0.3 },
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-8 space-y-6 pb-4">
                                            {projects.map((project, index) => (
                                                <motion.div
                                                    key={project.id}
                                                    initial={{ opacity: 0, y: -30, rotate: -2 }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                        rotate: index % 2 === 0 ? 1 : -1,
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        y: -20,
                                                        rotate: 0,
                                                        transition: {
                                                            duration: 0.2,
                                                            delay: (projects.length - 1 - index) * 0.05,
                                                        },
                                                    }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 200,
                                                        damping: 25,
                                                        delay: index * 0.1,
                                                    }}
                                                    onMouseEnter={() => setHoveredProject(project.id)}
                                                    onMouseLeave={() => setHoveredProject(null)}
                                                    className="relative group"
                                                >
                                                    {/* Paper shadow */}
                                                    <div className="absolute inset-0 bg-charcoal/10 rounded-lg translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />

                                                    {/* Document */}
                                                    <motion.div
                                                        whileHover={{ rotate: 0, scale: 1.01 }}
                                                        className="relative bg-soft-white rounded-lg p-6 border border-charcoal/5 shadow-lg overflow-hidden"
                                                    >
                                                        {/* Paper lines */}
                                                        <div className="absolute inset-x-8 top-0 bottom-0 flex flex-col gap-8 opacity-5">
                                                            {[...Array(10)].map((_, i) => (
                                                                <div key={i} className="h-px bg-charcoal" />
                                                            ))}
                                                        </div>

                                                        {/* Red margin line */}
                                                        <div className="absolute left-12 top-0 bottom-0 w-px bg-terracotta/30" />

                                                        {/* Hole punches */}
                                                        <div className="absolute left-4 top-1/4 w-3 h-3 rounded-full border-2 border-charcoal/10" />
                                                        <div className="absolute left-4 top-1/2 w-3 h-3 rounded-full border-2 border-charcoal/10" />
                                                        <div className="absolute left-4 top-3/4 w-3 h-3 rounded-full border-2 border-charcoal/10" />

                                                        {/* Content */}
                                                        <div className="flex gap-6 ml-8">
                                                            {/* Project Icon */}
                                                            <motion.div
                                                                animate={{
                                                                    scale: hoveredProject === project.id ? 1.1 : 1,
                                                                }}
                                                                className={`flex-shrink-0 w-20 h-20 ${project.color} rounded-xl flex items-center justify-center text-4xl shadow-lg`}
                                                            >
                                                                {project.image}
                                                            </motion.div>

                                                            {/* Project Info */}
                                                            <div className="flex-1 min-w-0">
                                                                <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-tosca transition-colors duration-300">
                                                                    {project.title}
                                                                </h3>
                                                                <p className="text-charcoal/70 text-sm mb-3 line-clamp-2">
                                                                    {project.description}
                                                                </p>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {project.tags.map((tag) => (
                                                                        <span
                                                                            key={tag}
                                                                            className="px-3 py-1 bg-nude/50 rounded-full text-xs font-medium text-charcoal/80"
                                                                        >
                                                                            {tag}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
