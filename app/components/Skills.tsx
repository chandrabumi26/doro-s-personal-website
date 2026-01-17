"use client";

import { motion } from "motion/react";
import ScrollReveal from "./ScrollReveal";

const skills = [
    {
        category: "Frontend Frameworks",
        icon: "⚛️",
        items: ["React", "Next.js", "Vue.js", "Nuxt.js"],
        color: "from-tosca to-tosca-dark",
    },
    {
        category: "Languages",
        icon: "💻",
        items: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
        color: "from-sage to-tosca",
    },
    {
        category: "Styling",
        icon: "🎨",
        items: ["Tailwind CSS", "SCSS", "Styled Components", "CSS Modules"],
        color: "from-terracotta to-nude-warm",
    },
    {
        category: "Tools & Others",
        icon: "🛠️",
        items: ["Git", "Figma", "REST APIs", "GraphQL"],
        color: "from-charcoal to-tosca-dark",
    },
];

export default function Skills() {
    return (
        <section id="skills" className="scroll-snap-section py-24 bg-soft-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-peach/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-56 h-56 bg-tosca-light/15 rounded-full blur-3xl" />

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
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="group relative bg-cream rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                            >
                                {/* Gradient overlay on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                />

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                    className="text-4xl mb-4"
                                >
                                    {skill.icon}
                                </motion.div>

                                {/* Category */}
                                <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-tosca transition-colors duration-300">
                                    {skill.category}
                                </h3>

                                {/* Items */}
                                <ul className="space-y-2">
                                    {skill.items.map((item, itemIndex) => (
                                        <motion.li
                                            key={item}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + itemIndex * 0.05 }}
                                            className="flex items-center gap-2 text-charcoal/70"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-tosca" />
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Decorative corner */}
                                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-nude/50 to-transparent rounded-tl-2xl" />
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
