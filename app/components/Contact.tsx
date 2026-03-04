"use client";

import { motion } from "motion/react";
import ScrollReveal from "./ScrollReveal";

const contactLinks = [
    {
        name: "GitHub",
        value: "github.com/chandrabumi26",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        href: "https://github.com/chandrabumi26",
    },
    {
        name: "LinkedIn",
        value: "Dorojatun Chandrabumi",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        href: "https://www.linkedin.com/in/dorojatun-chandrabumi-797200188/",
    },
    {
        name: "Reddit",
        value: "u/boomi_ciko",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
            </svg>
        ),
        href: "https://www.reddit.com/user/boomi_ciko/",
    },
    {
        name: "Email",
        value: "dorojatun.chandrabumi@gmail.com",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
        ),
        href: "mailto:dorojatun.chandrabumi@gmail.com",
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
                        className="relative bg-linear-to-br from-cream to-nude/50 rounded-3xl p-5 sm:p-8 md:p-12 shadow-xl border border-nude-warm/20 overflow-hidden"
                    >
                        {/* Decorative corner */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-tosca/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-peach/20 rounded-full blur-2xl" />

                        <div className="relative z-10">
                            {/* Greeting */}
                            <div className="text-center mb-6 sm:mb-10">
                                <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
                                    Ready to start a project?
                                </h3>
                            </div>

                            {/* Contact Links Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                                        className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-soft-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-tosca/20 min-w-0"
                                    >
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-charcoal flex items-center justify-center text-soft-white group-hover:bg-tosca transition-colors duration-300 shrink-0">
                                            {link.icon}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs sm:text-sm text-charcoal/60">{link.name}</p>
                                            <p className="font-medium text-sm sm:text-base text-charcoal group-hover:text-tosca transition-colors duration-300 truncate">
                                                {link.value}
                                            </p>
                                        </div>
                                        <svg
                                            className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal/30 group-hover:text-tosca group-hover:translate-x-1 transition-all duration-300 shrink-0"
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

                            {/* CTA Buttons */}
                            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                <motion.a
                                    href="/pdf/CV-Dorojatun-Chandrabumi.pdf"
                                    download
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-tosca text-soft-white rounded-full font-semibold shadow-lg shadow-tosca/30 hover:bg-tosca-dark transition-colors duration-200 text-sm sm:text-base"
                                >
                                    <svg
                                        className="w-4 h-4 sm:w-5 sm:h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    <span>Download CV</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </ScrollReveal>
            </div>
        </section>
    );
}
