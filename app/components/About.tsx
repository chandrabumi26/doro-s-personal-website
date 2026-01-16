"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
    return (
        <section id="about" className="py-24 bg-nude/30 relative overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-tosca-light/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-peach/20 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image/Illustration */}
                    <ScrollReveal direction="left">
                        <div className="relative">
                            {/* Retro frame */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-tosca/20 to-peach/20 rounded-3xl rotate-3" />
                            <div className="absolute -inset-4 bg-gradient-to-br from-nude-warm/30 to-sage/20 rounded-3xl -rotate-2" />
                            <div className="relative bg-gradient-to-br from-tosca to-tosca-dark rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
                                <div className="text-9xl">👨‍💻</div>
                                {/* Retro patterns */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-soft-white rounded-full" />
                                    <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-soft-white rounded-full" />
                                    <div className="absolute top-1/2 right-8 w-4 h-4 bg-soft-white rounded-full" />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Content */}
                    <div>
                        <ScrollReveal>
                            <span className="inline-block px-4 py-2 bg-tosca/10 rounded-full text-tosca-dark text-sm font-medium mb-4">
                                About Me
                            </span>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                                Passionate about crafting{" "}
                                <span className="text-tosca">beautiful</span> interfaces
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                                With over 4 years of experience in frontend development, I
                                specialize in building modern, responsive web applications
                                using React, Next.js, Vue.js, and TypeScript. I believe in
                                writing clean, maintainable code that delivers exceptional user
                                experiences.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
                                When I'm not coding, you'll find me exploring new design
                                trends, experimenting with animations, or enjoying a good cup
                                of coffee while sketching UI ideas.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-soft-white rounded-lg shadow-sm">
                                    <span className="text-2xl">🚀</span>
                                    <div>
                                        <p className="font-bold text-charcoal">50+</p>
                                        <p className="text-xs text-charcoal/60">Projects</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-soft-white rounded-lg shadow-sm">
                                    <span className="text-2xl">⭐</span>
                                    <div>
                                        <p className="font-bold text-charcoal">4+</p>
                                        <p className="text-xs text-charcoal/60">Years Exp.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-soft-white rounded-lg shadow-sm">
                                    <span className="text-2xl">☕</span>
                                    <div>
                                        <p className="font-bold text-charcoal">∞</p>
                                        <p className="text-xs text-charcoal/60">Coffee</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
