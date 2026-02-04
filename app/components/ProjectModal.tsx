"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export interface ProjectData {
    id: number;
    title: string;
    company: string;
    role: string;
    period: string;
    description: string;
    logo: string;
    screenshots: string[];
    tags: string[];
    highlights: string[];
    color: string;
    link?: string;
}

interface ProjectModalProps {
    project: ProjectData | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    // Cache project data so it persists during exit animation
    const [displayedProject, setDisplayedProject] = useState<ProjectData | null>(null);
    // Track the previous project ID to detect changes
    const [prevProjectId, setPrevProjectId] = useState<number | null>(null);

    // React-recommended pattern: adjust state during render based on props
    // See: https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
    if (project && project.id !== prevProjectId) {
        setPrevProjectId(project.id);
        setDisplayedProject(project);
        setCurrentImageIndex(0);
    }

    const nextImage = useCallback(() => {
        if (!displayedProject) return;
        setDirection(1);
        setCurrentImageIndex((prev) =>
            prev === displayedProject.screenshots.length - 1 ? 0 : prev + 1
        );
    }, [displayedProject]);

    const prevImage = useCallback(() => {
        if (!displayedProject) return;
        setDirection(-1);
        setCurrentImageIndex((prev) =>
            prev === 0 ? displayedProject.screenshots.length - 1 : prev - 1
        );
    }, [displayedProject]);

    // Handle ESC key and arrow navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose, nextImage, prevImage]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
        }),
    };

    return (
        <AnimatePresence>
            {isOpen && displayedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ backdropFilter: "blur(0px)" }}
                        animate={{ backdropFilter: "blur(8px)" }}
                        exit={{ backdropFilter: "blur(0px)" }}
                        className="absolute inset-0 bg-charcoal/60"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ 
                            opacity: 1, 
                            y: 0, 
                            scale: 1,
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }
                        }}
                        exit={{ 
                            opacity: 0, 
                            y: 60, 
                            scale: 0.95,
                            transition: {
                                duration: 0.2,
                                ease: [0.4, 0, 1, 1],
                            }
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl max-h-[90vh] bg-soft-white rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 w-10 h-10 bg-charcoal/10 hover:bg-charcoal/20 rounded-full flex items-center justify-center transition-colors"
                        >
                            <svg
                                className="w-5 h-5 text-charcoal"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </motion.button>

                        {/* Scrollable Content */}
                        <div className="overflow-y-auto max-h-[90vh] projects-scroll">
                            {/* Image Carousel Section */}
                            <div className="relative bg-linear-to-br from-tosca/10 to-peach/10 p-6 pb-8">
                                {/* Carousel Container */}
                                <div className="relative aspect-video rounded-xl overflow-hidden bg-charcoal/5 shadow-lg">
                                    <AnimatePresence initial={false} custom={direction} mode="wait">
                                        <motion.div
                                            key={currentImageIndex}
                                            custom={direction}
                                            variants={slideVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{
                                                x: { type: "spring", stiffness: 300, damping: 30 },
                                                opacity: { duration: 0.2 },
                                            }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={displayedProject.screenshots[currentImageIndex]}
                                                alt={`${displayedProject.title} screenshot ${currentImageIndex + 1}`}
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Navigation Arrows */}
                                    {displayedProject.screenshots.length > 1 && (
                                        <>
                                            <motion.button
                                                whileHover={{ scale: 1.1, x: -2 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    prevImage();
                                                }}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-soft-white/90 hover:bg-soft-white rounded-full shadow-lg flex items-center justify-center"
                                            >
                                                <svg
                                                    className="w-5 h-5 text-charcoal"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M15 19l-7-7 7-7"
                                                    />
                                                </svg>
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.1, x: 2 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    nextImage();
                                                }}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-soft-white/90 hover:bg-soft-white rounded-full shadow-lg flex items-center justify-center"
                                            >
                                                <svg
                                                    className="w-5 h-5 text-charcoal"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </motion.button>
                                        </>
                                    )}
                                </div>

                                {/* Dots Indicator */}
                                {displayedProject.screenshots.length > 1 && (
                                    <div className="flex justify-center gap-2 mt-4">
                                        {displayedProject.screenshots.map((_, index) => (
                                            <motion.button
                                                key={index}
                                                onClick={() => {
                                                    setDirection(index > currentImageIndex ? 1 : -1);
                                                    setCurrentImageIndex(index);
                                                }}
                                                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                                    index === currentImageIndex
                                                        ? "bg-tosca"
                                                        : "bg-charcoal/20 hover:bg-charcoal/40"
                                                }`}
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.9 }}
                                                animate={{
                                                    scale: index === currentImageIndex ? 1.2 : 1,
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="p-6 md:p-8">
                                {/* Header with Logo */}
                                <div className="flex items-start gap-4 mb-6">
                                    <motion.div
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                        className={`shrink-0 w-16 h-16 md:w-20 md:h-20 ${displayedProject.color} rounded-xl shadow-lg p-2 flex items-center justify-center`}
                                    >
                                        <Image
                                            src={displayedProject.logo}
                                            alt={`${displayedProject.company} logo`}
                                            width={64}
                                            height={64}
                                            className="object-contain"
                                        />
                                    </motion.div>
                                    <div className="flex-1 min-w-0">
                                        <motion.h2
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 }}
                                            className="text-2xl md:text-3xl font-bold text-charcoal mb-1"
                                        >
                                            {displayedProject.company}
                                        </motion.h2>
                                        <motion.p
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.15 }}
                                            className="text-tosca-dark font-medium"
                                        >
                                            {displayedProject.role}
                                        </motion.p>
                                        <motion.p
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-charcoal/60 text-sm"
                                        >
                                            {displayedProject.period}
                                        </motion.p>
                                    </div>
                                </div>

                                {/* Description */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.25 }}
                                    className="mb-6"
                                >
                                    <h3 className="text-lg font-semibold text-charcoal mb-2">About</h3>
                                    <p className="text-charcoal/70 leading-relaxed">{displayedProject.description}</p>
                                </motion.div>

                                {/* Key Contributions */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="mb-6"
                                >
                                    <h3 className="text-lg font-semibold text-charcoal mb-3">Key Contributions</h3>
                                    <ul className="space-y-2">
                                        {displayedProject.highlights.map((highlight, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.35 + index * 0.05 }}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-tosca/20 flex items-center justify-center">
                                                    <svg
                                                        className="w-3 h-3 text-tosca-dark"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                                <span className="text-charcoal/70 text-sm">{highlight}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Tech Stack */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <h3 className="text-lg font-semibold text-charcoal mb-3">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {displayedProject.tags.map((tag, index) => (
                                            <motion.span
                                                key={tag}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.45 + index * 0.03 }}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="px-4 py-2 rounded-full text-sm font-medium bg-nude/50 text-charcoal shadow-sm"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Visit Link */}
                                {displayedProject.link && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="mt-8 pt-6 border-t border-charcoal/10"
                                    >
                                        <motion.a
                                            href={displayedProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-tosca hover:bg-tosca-dark text-soft-white rounded-xl font-medium transition-colors shadow-lg"
                                        >
                                            <span>Visit Website</span>
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </motion.a>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
