"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isPastHero, setIsPastHero] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Get the main scroll container
        const mainElement = document.querySelector("main");
        
        const handleScroll = () => {
            const scrollTop = mainElement ? mainElement.scrollTop : window.scrollY;
            const viewportHeight = window.innerHeight;
            
            setIsScrolled(scrollTop > 50);
            // Check if scrolled past hero section (approximately viewport height)
            setIsPastHero(scrollTop > viewportHeight * 0.5);
        };

        // Listen to scroll on main element (for scroll-snap containers) and window as fallback
        if (mainElement) {
            mainElement.addEventListener("scroll", handleScroll);
        }
        window.addEventListener("scroll", handleScroll);
        
        handleScroll(); // Initial check
        
        return () => {
            if (mainElement) {
                mainElement.removeEventListener("scroll", handleScroll);
            }
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled && !isPastHero
                    ? "bg-cream/90 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <motion.a
                    href="#home"
                    className="text-2xl font-bold text-charcoal flex items-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                        backgroundColor: isPastHero ? "rgb(102, 178, 178)" : "transparent",
                        padding: isPastHero ? "8px 12px" : "0px",
                        borderRadius: isPastHero ? "12px" : "0px",
                        boxShadow: isPastHero ? "0 4px 12px rgba(102, 178, 178, 0.3)" : "none",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <motion.span
                        animate={{
                            color: isPastHero ? "#ffffff" : "rgb(102, 178, 178)",
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        D
                    </motion.span>
                    <motion.span
                        initial={false}
                        animate={{
                            opacity: isPastHero ? 0 : 1,
                            width: isPastHero ? 0 : "auto",
                            color: "#3d3d3d",
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden whitespace-nowrap"
                    >
                        orojatun
                    </motion.span>
                </motion.a>

                {/* Desktop Navigation */}
                <motion.ul
                    initial={false}
                    animate={{
                        opacity: isPastHero ? 0 : 1,
                        y: isPastHero ? -20 : 0,
                        pointerEvents: isPastHero ? "none" : "auto",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="hidden md:flex items-center gap-8"
                >
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.label}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            <a
                                href={item.href}
                                className="text-charcoal hover:text-tosca transition-colors duration-200 font-medium relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tosca transition-all duration-300 group-hover:w-full" />
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Mobile Menu Button */}
                <motion.button
                    initial={false}
                    animate={{
                        opacity: isPastHero ? 0 : 1,
                        scale: isPastHero ? 0.8 : 1,
                        pointerEvents: isPastHero ? "none" : "auto",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="md:hidden p-2 text-charcoal"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </motion.button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && !isPastHero && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-cream/95 backdrop-blur-md border-t border-nude"
                    >
                        <ul className="flex flex-col items-center gap-4 py-6">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <a
                                        href={item.href}
                                        className="text-charcoal hover:text-tosca transition-colors duration-200 font-medium text-lg"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
