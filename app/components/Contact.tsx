"use client";

import { motion } from "motion/react";
import ScrollReveal from "./ScrollReveal";

const contactLinks = [
    {
        name: "Email",
        value: "hello@dorojatun.dev",
        icon: "📧",
        href: "mailto:hello@dorojatun.dev",
    },
    {
        name: "LinkedIn",
        value: "linkedin.com/in/dorojatun",
        icon: "💼",
        href: "https://linkedin.com",
    },
    {
        name: "GitHub",
        value: "github.com/dorojatun",
        icon: "🐙",
        href: "https://github.com",
    },
    {
        name: "Twitter",
        value: "@dorojatun",
        icon: "🐦",
        href: "https://twitter.com",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-soft-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-1/3 left-0 w-72 h-72 bg-tosca/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-0 w-56 h-56 bg-peach/20 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <ScrollReveal className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-tosca/10 rounded-full text-tosca-dark text-sm font-medium mb-4">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
                        Let&apos;s work <span className="text-tosca">together</span>
                    </h2>
                    <p className="text-charcoal/70 text-lg max-w-xl mx-auto">
                        Have a project in mind? I&apos;d love to hear about it. Drop me a message
                        and let&apos;s create something amazing together.
                    </p>
                </ScrollReveal>

                {/* Contact Card */}
                <ScrollReveal delay={0.2}>
                    <motion.div
                        whileHover={{ y: -4 }}
                        className="relative bg-gradient-to-br from-cream to-nude/50 rounded-3xl p-8 md:p-12 shadow-xl border border-nude-warm/20 overflow-hidden"
                    >
                        {/* Decorative corner */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-tosca/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-peach/20 rounded-full blur-2xl" />

                        <div className="relative z-10">
                            {/* Greeting */}
                            <div className="text-center mb-10">
                                <motion.span
                                    animate={{ rotate: [0, 20, 0, 20, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                                    className="inline-block text-5xl mb-4"
                                >
                                    👋
                                </motion.span>
                                <h3 className="text-2xl font-bold text-charcoal">
                                    Ready to start a project?
                                </h3>
                            </div>

                            {/* Contact Links Grid */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                {contactLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        target={link.href.startsWith("http") ? "_blank" : undefined}
                                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        whileHover={{ scale: 1.02, x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="group flex items-center gap-4 p-4 bg-soft-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-tosca/20"
                                    >
                                        <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                            {link.icon}
                                        </span>
                                        <div>
                                            <p className="text-sm text-charcoal/60">{link.name}</p>
                                            <p className="font-medium text-charcoal group-hover:text-tosca transition-colors duration-300">
                                                {link.value}
                                            </p>
                                        </div>
                                        <svg
                                            className="w-5 h-5 ml-auto text-charcoal/30 group-hover:text-tosca group-hover:translate-x-1 transition-all duration-300"
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
                                    </motion.a>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-10 text-center">
                                <motion.a
                                    href="mailto:hello@dorojatun.dev"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-tosca text-soft-white rounded-full font-semibold shadow-lg shadow-tosca/30 hover:bg-tosca-dark transition-colors duration-200"
                                >
                                    <span>Send Me a Message</span>
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </ScrollReveal>
            </div>
        </section>
    );
}
