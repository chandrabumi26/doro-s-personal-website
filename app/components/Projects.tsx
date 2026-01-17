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
        <section id="projects" className="scroll-snap-section py-24 bg-nude/20 relative overflow-hidden">
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
                        {/* Folder Container */}
                        <div className="relative">
                            {/* Documents peeking out from folder on hover - positioned ABOVE folder */}
                            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-40 pointer-events-none z-20">
                                {!isDrawerOpen && previewDocs.map((doc, index) => (
                                    <motion.div
                                        key={doc.id}
                                        className="absolute bottom-0 left-1/2 origin-bottom"
                                        style={{
                                            zIndex: 3 - index,
                                        }}
                                        initial={{
                                            x: "-50%",
                                            y: 50,
                                            rotate: 0,
                                            opacity: 0
                                        }}
                                        animate={isDrawerHovered ? {
                                            x: `calc(-50% + ${(index - 1) * 40}px)`,
                                            y: -20,
                                            rotate: (index - 1) * 12,
                                            opacity: 1,
                                        } : {
                                            x: "-50%",
                                            y: 50,
                                            rotate: 0,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            type: "spring" as const,
                                            stiffness: 200,
                                            damping: 20,
                                            delay: index * 0.05,
                                        }}
                                    >
                                        {/* Document paper with lines */}
                                        <div className="w-36 h-44 bg-soft-white rounded-lg shadow-xl border border-charcoal/10 p-3 flex flex-col">
                                            {/* Document header lines */}
                                            <div className="w-full h-2 bg-charcoal/20 rounded mb-2" />
                                            <div className="w-3/4 h-2 bg-charcoal/10 rounded mb-3" />
                                            {/* Document content lines */}
                                            <div className="space-y-2 flex-1">
                                                <div className="w-full h-1.5 bg-charcoal/10 rounded" />
                                                <div className="w-5/6 h-1.5 bg-charcoal/10 rounded" />
                                                <div className="w-full h-1.5 bg-charcoal/10 rounded" />
                                                <div className="w-4/5 h-1.5 bg-charcoal/10 rounded" />
                                            </div>
                                            {/* Document icon */}
                                            <div className="text-xl text-center mt-2">{doc.image}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Folder with hover detection */}
                            <motion.div
                                className="relative cursor-pointer z-10"
                                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                                onMouseEnter={() => setIsDrawerHovered(true)}
                                onMouseLeave={() => setIsDrawerHovered(false)}
                                whileTap={{ scale: 0.995 }}
                            >
                                {/* Folder Back Layer (darker) */}
                                <div
                                    className="absolute inset-0 rounded-2xl"
                                    style={{
                                        background: "linear-gradient(to bottom, #C4956C, #A87942)",
                                        transform: "translateY(-6px)",
                                    }}
                                />

                                {/* Folder Tab */}
                                <motion.div
                                    className="relative mx-auto w-36 h-7 rounded-t-xl -mb-1 z-10"
                                    style={{
                                        background: "linear-gradient(to bottom, #E8B87C, #D4A574)",
                                    }}
                                    animate={{
                                        y: isDrawerHovered && !isDrawerOpen ? -6 : 0,
                                        width: isDrawerHovered ? 150 : 144,
                                    }}
                                    transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
                                />

                                {/* Folder Main Body */}
                                <motion.div
                                    className="relative rounded-2xl shadow-2xl overflow-hidden"
                                    style={{
                                        background: "linear-gradient(to bottom, #E8B87C, #D4A574)",
                                    }}
                                    animate={{
                                        y: isDrawerHovered && !isDrawerOpen ? -6 : 0,
                                        boxShadow: isDrawerHovered || isDrawerOpen
                                            ? "0 25px 50px -12px rgba(212, 165, 116, 0.5), 0 12px 24px -8px rgba(0, 0, 0, 0.2)"
                                            : "0 10px 40px -10px rgba(0, 0, 0, 0.3)",
                                    }}
                                    transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
                                >
                                    {/* Folder shine effect */}
                                    <motion.div
                                        className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"
                                        animate={{
                                            opacity: isDrawerHovered ? 0.5 : 0.3,
                                        }}
                                    />

                                    {/* Folder inner lip/curve */}
                                    <div
                                        className="absolute inset-x-4 top-3 h-4 rounded-t-full"
                                        style={{ background: "rgba(255,255,255,0.2)" }}
                                    />

                                    {/* Folder Content Area */}
                                    <div className="relative z-10 p-8 pt-8">
                                        {/* Folder Label */}
                                        <motion.div
                                            className="text-center mb-4"
                                            animate={{
                                                scale: isDrawerHovered ? 1.02 : 1,
                                            }}
                                            transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
                                        >
                                            <motion.span
                                                className="px-6 py-2.5 bg-soft-white rounded-lg text-charcoal font-semibold shadow-lg inline-block"
                                                animate={{
                                                    y: isDrawerHovered ? -2 : 0,
                                                    boxShadow: isDrawerHovered
                                                        ? "0 8px 20px rgba(0, 0, 0, 0.15)"
                                                        : "0 4px 10px rgba(0, 0, 0, 0.1)",
                                                }}
                                            >
                                                📁 Projects Collection
                                            </motion.span>
                                        </motion.div>

                                        {/* Click hint */}
                                        <motion.p
                                            className="text-center text-charcoal/70 text-sm font-medium"
                                            animate={{
                                                opacity: [0.6, 1, 0.6],
                                            }}
                                            transition={{
                                                opacity: { duration: 2, repeat: Infinity },
                                            }}
                                        >
                                            {isDrawerOpen ? "Click to close folder" : "Click to open folder"}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </ScrollReveal>

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
                            {/* Projects list */}
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
        </section>
    );
}
