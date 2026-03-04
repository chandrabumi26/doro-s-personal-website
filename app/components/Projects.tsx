"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import ProjectModal, { ProjectData } from "./ProjectModal";
import Image from "next/image";

const projects: ProjectData[] = [
    {
        id: 1,
        title: "Mbizmarket",
        company: "Mbizmarket.co.id",
        role: "Frontend Developer",
        period: "2024 - Present",
        description:
            "Mbizmarket is an e-procurement platform based on marketplace concept, primarily used by local governments for goods procurement. The platform provides a comprehensive solution for managing procurement processes, from product discovery to transaction completion.",
        logo: "/projects/mbizmarket/logo.png",
        screenshots: [
            "/projects/mbizmarket/screenshot-1.png",
            "/projects/mbizmarket/screenshot-2.png",
            "/projects/mbizmarket/screenshot-3.png",
        ],
        tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "PHP", "Phalcon Framework", "GIT"],
        highlights: [
            "Revamped legacy PHP modules into modern Next.js architecture",
            "Implemented government-related integrations (INAPROC, LKPP)",
            "Enhanced tax and transaction workflows for compliance",
            "Improved company profile management features",
            "Strengthened system reliability through error tracking",
            "Refactored outdated dependencies for better maintainability",
            "Migrated projects to Next.js App Router for improved performance",
        ],
        color: "bg-tosca/20",
        link: "https://mbizmarket.co.id",
    },
    {
        id: 2,
        title: "BUMA Internal Apps",
        company: "PT. Bukit Makmur Mandiri Utama",
        role: "Frontend Developer",
        period: "2022 - 2024",
        description:
            "Developed and maintained internal applications supporting procurement, inventory, and pricing workflows at BUMA (PT. Bukit Makmur Mandiri Utama), one of Indonesia's largest coal mining contractors. Built scalable solutions using Vue.js 3, Vuex, and TypeScript in an Agile environment, leveraging micro front-end architecture for modular systems.",
        logo: "/projects/buma/logo.png",
        screenshots: [
            "/projects/buma/screenshot-1.png",
            "/projects/buma/screenshot-2.png",
            "/projects/buma/screenshot-3.png",
            "/projects/buma/screenshot-4.png",
            "/projects/buma/screenshot-5.png",
            "/projects/buma/screenshot-6.png",
        ],
        tags: ["Vue.js", "TypeScript", "SCSS", "Azure DevOps", "GIT"],
        highlights: [
            "Transformed SAP MIGO transactions into a modern web application",
            "Created an inventory monitoring dashboard for real-time tracking",
            "Delivered a price list management application with upload/validation features",
            "Developed procurement contract management and reporting system",
            "Implemented micro front-end architecture for modular and maintainable systems",
            "Enhanced operational efficiency and system accessibility across the organization",
        ],
        color: "bg-green-100",
    },
    {
        id: 3,
        title: "MLDSpot",
        company: "Djarum Super MLD",
        role: "Frontend Developer",
        period: "2021 - 2022",
        description:
            "MLDSpot is a points redemption website for Djarum Super MLD consumers. Users can claim MLDPOINTS by submitting their purchase receipt reference numbers and uploading receipt photos from retail stores like Indomaret. The accumulated points can then be redeemed for exclusive merchandise and rewards.",
        logo: "/projects/mldspot-logo.png",
        screenshots: [
            "/projects/mldspot-1.png",
            "/projects/mldspot-2.png",
            "/projects/mldspot-3.png",
        ],
        tags: ["Vue.js", "JavaScript", "SCSS", "Laravel"],
        highlights: [
            "Improved data transfer speed from microservices",
            "Built receipt photo upload and verification workflow",
            "Developed points claiming system with transaction code validation",
            "Implemented leaderboard system for user engagement",
            "Created responsive member dashboard interface",
        ],
        color: "bg-red-100",
        link: "https://www.mldspot.com/",
    },
    {
        id: 4,
        title: "Retinad",
        company: "Retinad",
        role: "Frontend Developer",
        period: "2021 - 2022",
        description:
            "Retinad is a WiFi advertising platform that delivers ads through WiFi login portals. Established since 2018, the platform features a web-based management system. Due to the legacy technology (CodeIgniter) being inefficient for further development, the system was modernized to support microservices architecture and Test-Driven Development on both backend and frontend.",
        logo: "/projects/retinad-logo.png",
        screenshots: [
            "/projects/retinad-1.png",
            "/projects/retinad-2.png",
            "/projects/retinad-3.png",
        ],
        tags: ["Laravel", "Vue.js", "jQuery", "SCSS"],
        highlights: [
            "Migrated legacy CodeIgniter system to modern Laravel architecture",
            "Built WiFi login portal ad template builder",
            "Implemented theme management system for venues",
            "Developed billing and package management features",
            "Created activity tracking and analytics dashboard",
        ],
        color: "bg-[#d8137b]",
        link: "https://www.retinad.com/",
    },
    {
        id: 5,
        title: "SysLaw Partner",
        company: "SYS Law Office",
        role: "Freelancer",
        period: "2025",
        description:
            "Designed and developed a responsive law firm company profile website to present firm information, services, and brand identity. Collaborated closely with a UI/UX designer to translate design concepts into a polished, production-ready web experience. Responsibilities included frontend development, performance optimization, and deployment. The website was deployed on Vercel and configured with a custom domain to ensure reliable hosting and smooth delivery for the client.",
        logo: "/projects/syslawnpartner/logo.png",
        screenshots: [
            "/projects/syslawnpartner/screenshot-1.png",
            "/projects/syslawnpartner/screenshot-2.png",
            "/projects/syslawnpartner/screenshot-3.png",
        ],
        tags: ["Next.js", "React.js", "Tailwind CSS"],
        highlights: [
            "Built responsive law firm company profile website",
            "Collaborated with UI/UX designer to implement design concepts",
            "Developed frontend with Next.js and React.js",
            "Implemented Tailwind CSS for modern, maintainable styling",
            "Optimized performance for fast page load times",
            "Deployed on Vercel with custom domain configuration",
        ],
        color: "bg-[#1a365d]",
        link: "https://syslawnpartner.com/",
    },
];

// Preview documents that peek out on hover (first 3 projects)
const previewDocs = projects.slice(0, 3);

export default function Projects() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDrawerHovered, setIsDrawerHovered] = useState(false);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);


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
                        {/* Folder Container */}
                        <div className="relative">
                            {/* Documents peeking out from folder on hover - positioned ABOVE folder */}
                            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-40 pointer-events-none z-20">
                                {previewDocs.map((doc, index) => (
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
                                        animate={(isDrawerHovered) ? {
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
                                            {/* Company logo */}
                                            <div className="mt-2 flex justify-center">
                                                <Image src={doc.logo} alt={doc.company} width={48} height={24} className="object-contain" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Folder with hover detection */}
                            <motion.div
                                className="relative cursor-pointer z-10"
                                onClick={() => {
                                    setIsDrawerOpen(!isDrawerOpen);
                                    if (isDrawerOpen) setIsDrawerHovered(true);
                                    else setIsDrawerHovered(false);
                                }}
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
                                        className="absolute top-0 left-0 right-0 h-1/4 bg-linear-to-b from-white/30 to-transparent pointer-events-none"
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
                                                Projects Collection
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
                                        onClick={() => setSelectedProject(project)}
                                        className="relative group cursor-pointer"
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
                                                {/* Project Logo */}
                                                <motion.div
                                                    animate={{
                                                        scale: hoveredProject === project.id ? 1.1 : 1,
                                                    }}
                                                    className={`shrink-0 w-20 h-20 ${project.color} rounded-xl flex items-center justify-center shadow-lg p-2`}
                                                >
                                                    <Image src={project.logo} alt={project.company} width={64} height={64} className="object-contain" />
                                                </motion.div>

                                                {/* Project Info */}
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-xl font-bold text-charcoal mb-1 group-hover:text-tosca transition-colors duration-300">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-charcoal/70 text-sm mb-3 line-clamp-2">
                                                        {project.description}
                                                    </p>
                                                    <motion.span
                                                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-tosca group-hover:text-tosca-dark transition-colors duration-300"
                                                        whileHover={{ x: 4 }}
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                        View Project Details
                                                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </motion.span>
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

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={selectedProject !== null}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}
