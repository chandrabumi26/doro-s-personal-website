"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export default function ScrollNav() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const container = document.querySelector('.scroll-snap-container');
        if (!container) return;

        const handleScroll = () => {
            const scrollPosition = container.scrollTop + window.innerHeight / 3;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        container.addEventListener("scroll", handleScroll);
        handleScroll(); // Check initial position
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4"
        >
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-charcoal/10" />

            {sections.map((section, index) => {
                const isActive = activeSection === section.id;
                return (
                    <motion.button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="relative group flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        aria-label={`Navigate to ${section.label}`}
                    >
                        {/* Tooltip */}
                        <span className="absolute left-8 px-3 py-1.5 bg-charcoal text-soft-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                            {section.label}
                            {/* Arrow */}
                            <span className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-charcoal rotate-45" />
                        </span>

                        {/* Dot */}
                        <motion.div
                            className={`relative z-10 rounded-full transition-all duration-300 ${isActive
                                ? "w-3.5 h-3.5 bg-tosca shadow-lg shadow-tosca/40"
                                : "w-2.5 h-2.5 bg-charcoal/30 hover:bg-tosca/50"
                                }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {/* Active ring animation */}
                            {isActive && (
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-tosca/50"
                                    initial={{ scale: 1, opacity: 1 }}
                                    animate={{ scale: 1.8, opacity: 0 }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            )}
                        </motion.div>
                    </motion.button>
                );
            })}
        </motion.nav>
    );
}
