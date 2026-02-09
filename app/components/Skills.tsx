"use client";

import { motion } from "motion/react";
import ScrollReveal from "./ScrollReveal";

const skills = [
    {
        category: "Frontend Frameworks",
        icon: "⚛️",
        items: ["React", "Next.js", "Vue.js", "Nuxt.js"],
        borderColor: "bg-tosca",
        iconBg: "bg-tosca/10",
        iconBorder: "border-tosca/20",
        dotColor: "bg-tosca",
        hoverBg: "bg-tosca/5",
    },
    {
        category: "Languages",
        icon: "💻",
        items: ["TypeScript", "JavaScript", "HTML5", "CSS3", "PHP"],
        borderColor: "bg-sage",
        iconBg: "bg-sage/10",
        iconBorder: "border-sage/20",
        dotColor: "bg-sage",
        hoverBg: "bg-sage/5",
    },
    {
        category: "Styling",
        icon: "🎨",
        items: ["Tailwind CSS", "SCSS", "Styled Components", "CSS Modules"],
        borderColor: "bg-peach",
        iconBg: "bg-peach/20",
        iconBorder: "border-peach/30",
        dotColor: "bg-peach",
        hoverBg: "bg-peach/5",
    },
    {
        category: "Tools & Others",
        icon: "🛠️",
        items: ["Git", "Figma", "REST APIs", "GraphQL"],
        borderColor: "bg-terracotta",
        iconBg: "bg-terracotta/10",
        iconBorder: "border-terracotta/20",
        dotColor: "bg-terracotta",
        hoverBg: "bg-terracotta/5",
    },
];

export default function Skills() {
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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <ScrollReveal key={skill.category} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="group relative h-full"
                            >
                                {/* Card */}
                                <div className="relative h-full bg-cream rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-nude/50 overflow-hidden">
                                    {/* Top accent line */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 ${skill.borderColor} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                                    
                                    {/* Hover background tint */}
                                    <div className={`absolute inset-0 ${skill.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className={`relative w-14 h-14 ${skill.iconBg} rounded-xl flex items-center justify-center text-3xl mb-5 border ${skill.iconBorder}`}
                                    >
                                        {skill.icon}
                                    </motion.div>

                                    {/* Category */}
                                    <h3 className="relative text-lg font-bold text-charcoal mb-4 group-hover:text-tosca-dark transition-colors duration-300">
                                        {skill.category}
                                    </h3>

                                    {/* Items */}
                                    <ul className="relative space-y-2.5">
                                        {skill.items.map((item, itemIndex) => (
                                            <motion.li
                                                key={item}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 + itemIndex * 0.05 }}
                                                className="flex items-center gap-3 text-charcoal/70 group-hover:text-charcoal/90 transition-colors duration-300"
                                            >
                                                <span className={`w-1.5 h-1.5 rounded-full ${skill.dotColor}`} />
                                                <span className="text-sm">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Additional skills badges */}
                <ScrollReveal delay={0.5}>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-12 flex flex-wrap justify-center gap-3"
                    >
                        {["Responsive Design", "Performance Optimization", "Clean Code", "Agile/Scrum", "CI/CD"].map((badge, index) => (
                            <motion.span
                                key={badge}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{ delay: 0.4 + index * 0.05 }}
                                className="px-4 py-2 bg-nude/50 border border-nude rounded-full text-sm text-charcoal/70 hover:text-charcoal hover:border-tosca/30 hover:bg-tosca/5 transition-all duration-300 cursor-default"
                            >
                                {badge}
                            </motion.span>
                        ))}
                    </motion.div>
                </ScrollReveal>
            </div>
        </section>
    );
}
