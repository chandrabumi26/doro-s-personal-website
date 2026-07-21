"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import ScrollWordReveal from "./ScrollWordReveal";

export default function SectionWho() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-50px" });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-6"
      style={{ background: "linear-gradient(180deg, var(--cream) 0%, var(--nude) 50%, var(--cream) 100%)" }}
    >
      {/* Decorative blobs */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, var(--tosca-light) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, var(--peach) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1], y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <div className="space-y-8 order-2 md:order-1">
            <ScrollWordReveal
              text="Dorojatun Chandrabumi."
              as="h2"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight"
              delay={0.1}
              staggerDelay={0.12}
            />

            <ScrollWordReveal
              text="A frontend developer from Indonesia."
              as="p"
              className="text-xl md:text-2xl text-charcoal/60 leading-relaxed"
              delay={0.6}
              staggerDelay={0.08}
            />

            <ScrollWordReveal
              text="Building things for the web with 4+ years of experience crafting responsive, beautiful interfaces."
              as="p"
              className="text-lg text-charcoal/50 leading-relaxed"
              delay={1.2}
              staggerDelay={0.06}
            />

            {/* Subtle accent line */}
            <motion.div
              className="w-16 h-1 bg-tosca rounded-full"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 2, ease: [0.25, 0.4, 0.25, 1] }}
            />
          </div>

          {/* Image side */}
          <motion.div
            ref={imageRef}
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={
              imageInView
                ? { opacity: 1, scale: 1, x: 0 }
                : { opacity: 0, scale: 0.8, x: 40 }
            }
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* Background frame */}
            <motion.div
              className="absolute -inset-4 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, var(--tosca) 0%, var(--peach) 100%)",
                opacity: 0.15,
              }}
              animate={{ rotate: [2, 4, 2], scale: [1, 1.02, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -inset-4 rounded-3xl"
              style={{
                background: "linear-gradient(225deg, var(--nude-warm) 0%, var(--sage) 100%)",
                opacity: 0.12,
              }}
              animate={{ rotate: [-1, -3, -1], scale: [1, 1.01, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Image container */}
            <div className="relative aspect-square bg-gradient-to-br from-cream to-nude rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/profile.png"
                alt="Dorojatun Chandrabumi"
                width={500}
                height={500}
                className="object-contain p-6"
                priority
              />

              {/* Floating decorative elements */}
              <motion.div
                className="absolute top-6 left-6 w-8 h-8 border-2 rounded-full"
                style={{ borderColor: "var(--tosca)", opacity: 0.3 }}
                animate={{ y: [0, -10, 0], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-8 right-8 w-6 h-6 rounded-full"
                style={{ backgroundColor: "var(--peach)", opacity: 0.4 }}
                animate={{ y: [0, 8, 0], scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                className="absolute top-1/2 right-6 w-4 h-4 rounded-full"
                style={{ backgroundColor: "var(--tosca)", opacity: 0.3 }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
