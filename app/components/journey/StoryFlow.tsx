"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  ReactOriginal,
  NextjsOriginal,
  VuejsOriginal,
  TypescriptOriginal,
  JavascriptOriginal,
  JqueryOriginal,
  TailwindcssOriginal,
  SassOriginal,
  PhpOriginal,
  PythonOriginal,
  MysqlOriginal,
  PostgresqlOriginal,
  ReactnativeOriginal,
} from "devicons-react";
import type { ComponentType } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

type TechItem = {
  name: string;
  Icon: ComponentType<{ size?: number | string; className?: string }>;
};

const techFrontend = [
  { name: "React", Icon: ReactOriginal },
  { name: "Next.js", Icon: NextjsOriginal },
  { name: "Vue.js", Icon: VuejsOriginal },
  { name: "TypeScript", Icon: TypescriptOriginal },
  { name: "JavaScript", Icon: JavascriptOriginal },
  { name: "Tailwind CSS", Icon: TailwindcssOriginal },
  { name: "SCSS", Icon: SassOriginal },
  { name: "jQuery", Icon: JqueryOriginal },
];

const techBackend = [
  { name: "PHP", Icon: PhpOriginal },
  { name: "Python", Icon: PythonOriginal },
  { name: "MySQL", Icon: MysqlOriginal },
  { name: "PostgreSQL", Icon: PostgresqlOriginal },
];

const techMobile = [
  { name: "React Native", Icon: ReactnativeOriginal },
];

const projects = [
  {
    title: "Mbizmarket",
    company: "Mbizmarket.co.id",
    role: "Frontend Developer",
    period: "2024 - Present",
    description:
      "An e-procurement platform for local governments. I revamped legacy PHP modules into modern Next.js, implemented government integrations, and migrated to App Router for better performance.",
    logo: "/projects/mbizmarket/logo.png",
    color: "bg-tosca/20",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "PHP"],
    link: "https://mbizmarket.co.id",
    screenshots: [
      "/projects/mbizmarket/screenshot-1.png",
      "/projects/mbizmarket/screenshot-2.png",
      "/projects/mbizmarket/screenshot-3.png",
    ],
  },
  {
    title: "BUMA Internal Apps",
    company: "PT. Bukit Makmur Mandiri Utama",
    role: "Frontend Developer",
    period: "2022 - 2024",
    description:
      "Internal applications for one of Indonesia's largest coal mining contractors. Built scalable procurement and inventory systems using Vue.js 3 with micro front-end architecture.",
    logo: "/projects/buma/logo.png",
    color: "bg-green-100",
    tags: ["Vue.js", "TypeScript", "SCSS", "Azure DevOps"],
    screenshots: [
      "/projects/buma/screenshot-1.png",
      "/projects/buma/screenshot-2.png",
      "/projects/buma/screenshot-3.png",
      "/projects/buma/screenshot-4.png",
      "/projects/buma/screenshot-5.png",
      "/projects/buma/screenshot-6.png",
    ],
  },
  {
    title: "MLDSpot",
    company: "Djarum Super MLD",
    role: "Frontend Developer",
    period: "2021 - 2022",
    description:
      "A points redemption website for consumers. Built receipt verification workflows, points claiming system, and leaderboard features.",
    logo: "/projects/mldspot-logo.png",
    color: "bg-red-100",
    tags: ["Vue.js", "JavaScript", "SCSS", "Laravel"],
    link: "https://www.mldspot.com/",
    screenshots: [
      "/projects/mldspot-1.png",
      "/projects/mldspot-2.png",
      "/projects/mldspot-3.png",
    ],
  },
  {
    title: "Retinad",
    company: "Retinad",
    role: "Frontend Developer",
    period: "2021 - 2022",
    description:
      "A WiFi advertising platform. Migrated legacy CodeIgniter system to modern Laravel with Vue.js frontend, built ad template builder and analytics dashboard.",
    logo: "/projects/retinad-logo.png",
    color: "bg-[#d8137b]",
    tags: ["Laravel", "Vue.js", "jQuery", "SCSS"],
    link: "https://www.retinad.com/",
    screenshots: [
      "/projects/retinad-1.png",
      "/projects/retinad-2.png",
      "/projects/retinad-3.png",
    ],
  },
  {
    title: "SysLaw Partner",
    company: "SYS Law Office",
    role: "Freelancer",
    period: "2025",
    description:
      "A responsive law firm company profile. Collaborated with UI/UX designer, developed with Next.js, and deployed on Vercel with custom domain.",
    logo: "/projects/syslawnpartner/logo.png",
    color: "bg-[#1a365d]",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    link: "https://syslawnpartner.com/",
    screenshots: [
      "/projects/syslawnpartner/screenshot-1.png",
      "/projects/syslawnpartner/screenshot-2.png",
      "/projects/syslawnpartner/screenshot-3.png",
    ],
  },
];

const contactLinks = [
  { name: "GitHub", handle: "chandrabumi26", href: "https://github.com/chandrabumi26" },
  { name: "LinkedIn", handle: "Dorojatun Chandrabumi", href: "https://www.linkedin.com/in/dorojatun-chandrabumi-797200188/" },
  { name: "Reddit", handle: "u/boomi_ciko", href: "https://www.reddit.com/user/boomi_ciko/" },
  { name: "Email", handle: "dorojatun.chandrabumi@gmail.com", href: "mailto:dorojatun.chandrabumi@gmail.com" },
];

// ─── Animated Text Component ─────────────────────────────────────────────────

function AnimatedText({
  text,
  className = "",
  delay = 0,
  stagger = 0.04,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.45,
            delay: delay + i * stagger,
            ease: [0, 0, 0.2, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// ─── Project Slide Component ─────────────────────────────────────────────────

function ProjectSlide({ project }: { project: typeof projects[0] }) {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (!project.screenshots || project.screenshots.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % project.screenshots.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [project.screenshots]);

  return (
    <div className="flex items-center justify-center h-full px-6 py-12">
      <div className="max-w-6xl w-full h-full flex flex-col lg:flex-row gap-10 items-center justify-center">
        {/* Info Side */}
        <div className="flex-1 max-w-lg w-full">
          <div className="flex items-start gap-6 mb-6">
            <motion.div
              className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl ${project.color || 'bg-soft-white'} shadow-xl border border-charcoal/5 flex items-center justify-center p-4 flex-shrink-0`}
              initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <Image
                src={project.logo}
                alt={project.company}
                width={72}
                height={72}
                className="object-contain"
              />
            </motion.div>
            <div className="pt-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="flex flex-wrap items-center gap-2 mb-1"
              >
                <span className="text-xs font-medium text-tosca-dark bg-tosca/10 px-3 py-1 rounded-full">
                  {project.period}
                </span>
                <span className="text-xs font-semibold text-charcoal/60">{project.role}</span>
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mt-2 mb-1">
                <AnimatedText text={project.title} delay={0.2} stagger={0.08} />
              </h3>
              <motion.p
                className="text-sm text-charcoal/50 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {project.company}
              </motion.p>
            </div>
          </div>

          <p className="text-base md:text-lg text-charcoal/70 leading-relaxed mb-6">
            <AnimatedText text={project.description} delay={0.5} stagger={0.02} />
          </p>

          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-cream border border-charcoal/10 rounded-full text-charcoal/70"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-tosca hover:text-tosca-dark transition-colors bg-tosca/5 hover:bg-tosca/10 px-4 py-2 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              whileHover={{ x: 4 }}
            >
              Visit Site →
            </motion.a>
          )}
        </div>

        {/* Carousel Side */}
        <motion.div
          className="flex-1 w-full max-w-2xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="relative aspect-[16/10] w-full bg-charcoal/5 rounded-2xl overflow-hidden border border-charcoal/10 shadow-2xl">
            {project.screenshots && project.screenshots.length > 0 ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImg}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.screenshots[currentImg]}
                    alt={`${project.title} screenshot ${currentImg + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-charcoal/30">
                No screenshots available
              </div>
            )}
            
            {/* Carousel indicators */}
            {project.screenshots && project.screenshots.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {project.screenshots.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentImg ? "bg-charcoal w-6" : "bg-charcoal/30"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}


// ─── Story Pages ─────────────────────────────────────────────────────────────

type StoryPage = {
  id: string;
  render: () => React.ReactNode;
};

function useStoryPages(): StoryPage[] {
  return [
    // ── Page 1: Introduction ──
    {
      id: "intro-1",
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-8"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-cream to-nude shadow-2xl border border-nude/50 mx-auto">
              <Image
                src="/profile.png"
                alt="Dorojatun Chandrabumi"
                width={160}
                height={160}
                className="object-contain p-3"
                priority
              />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-snug max-w-3xl">
            <AnimatedText text="Hi, I'm Dorojatun Chandrabumi." delay={0.3} stagger={0.08} />
          </h2>
          <p className="text-lg md:text-xl text-charcoal/50 mt-6 max-w-2xl leading-relaxed font-medium">
            <AnimatedText text="A developer building intelligent digital experiences." delay={1.0} stagger={0.06} />
          </p>
        </div>
      ),
    },

    // ── Page 2: What I do (AI Story) ──
    {
      id: "intro-2",
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-6 text-center">
          <p className="text-2xl md:text-4xl font-bold text-charcoal leading-snug max-w-4xl">
            <AnimatedText
              text="Recently, my curiosity has led me deep into Agentic AI and business automation."
              delay={0.2}
              stagger={0.05}
            />
          </p>
          <p className="text-lg md:text-xl text-charcoal/60 mt-8 max-w-3xl leading-relaxed">
            <AnimatedText
              text="I'm exploring how to unlock powerful capabilities for personal and enterprise use—implementing models like RAG, RIG, and Hermes to solve complex challenges."
              delay={1.0}
              stagger={0.03}
            />
          </p>
        </div>
      ),
    },

    // ── Page 3: Interests ──
    {
      id: "interests",
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-6 text-center">
          <p className="text-2xl md:text-4xl font-bold text-charcoal leading-snug max-w-3xl">
            <AnimatedText
              text="When I'm not coding, I'm probably reading about world history, especially World War II, or nuclear science."
              delay={0.2}
              stagger={0.05}
            />
          </p>
          <p className="text-lg md:text-xl text-charcoal/60 mt-8 max-w-3xl leading-relaxed">
            <AnimatedText
              text="I also love music. I play the piano — mostly because I wasn't allowed to buy a guitar when I was a kid, so I made the keys work instead."
              delay={1.2}
              stagger={0.03}
            />
          </p>
        </div>
      ),
    },

    // ── Page 4: Tech Stack (Frontend) ──
    {
      id: "tech-front",
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="text-2xl md:text-4xl font-bold text-charcoal text-center mb-8 max-w-3xl">
            <AnimatedText text="For the frontend, I build highly interactive and SEO-friendly applications." delay={0.2} stagger={0.05} />
          </p>
          <p className="text-lg text-charcoal/60 text-center mb-12 max-w-2xl">
            <AnimatedText text="I rely on Next.js and React, paired with TypeScript for safety and Tailwind CSS for scalable styling." delay={1.0} stagger={0.03} />
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl">
            {techFrontend.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 bg-soft-white rounded-2xl shadow-md border border-nude/50 cursor-default transition-shadow duration-300 hover:shadow-lg hover:border-tosca/30 w-28 h-28 sm:w-32 sm:h-32"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.0 + i * 0.08, type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ y: -4, scale: 1.03 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <tech.Icon size={48} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-charcoal/80 text-center leading-tight">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },

    // ── Page 5: Tech Stack (Backend) ──
    {
      id: "tech-back",
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="text-2xl md:text-4xl font-bold text-charcoal text-center mb-8 max-w-3xl">
            <AnimatedText text="On the backend, I build robust APIs and handle complex logic." delay={0.2} stagger={0.05} />
          </p>
          <p className="text-lg text-charcoal/60 text-center mb-12 max-w-2xl">
            <AnimatedText text="I use PHP and Python to power the backend, while MySQL and PostgreSQL are my go-to choices for reliable data storage." delay={1.0} stagger={0.03} />
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl">
            {techBackend.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 bg-soft-white rounded-2xl shadow-md border border-nude/50 cursor-default transition-shadow duration-300 hover:shadow-lg hover:border-tosca/30 w-28 h-28 sm:w-32 sm:h-32"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.0 + i * 0.08, type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ y: -4, scale: 1.03 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <tech.Icon size={48} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-charcoal/80 text-center leading-tight">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },

    // ── Page 6: Tech Stack (Mobile) ──
    {
      id: "tech-mobile",
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="text-2xl md:text-4xl font-bold text-charcoal text-center mb-8 max-w-3xl">
            <AnimatedText text="And when an experience needs to reach native devices..." delay={0.2} stagger={0.05} />
          </p>
          <p className="text-lg text-charcoal/60 text-center mb-12 max-w-2xl">
            <AnimatedText text="I use React Native to build cross-platform mobile applications without compromising performance." delay={1.0} stagger={0.03} />
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl">
            {techMobile.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 bg-soft-white rounded-2xl shadow-md border border-nude/50 cursor-default transition-shadow duration-300 hover:shadow-lg hover:border-tosca/30 w-28 h-28 sm:w-32 sm:h-32"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.0 + i * 0.08, type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ y: -4, scale: 1.03 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <tech.Icon size={48} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-charcoal/80 text-center leading-tight">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },

    // ── Page 7: Projects Intro ──
    {
      id: "projects-intro",
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-6 text-center">
          <p className="text-2xl md:text-4xl font-bold text-charcoal leading-snug max-w-3xl">
            <AnimatedText
              text="Let me show you what I've been working on."
              delay={0.2}
              stagger={0.07}
            />
          </p>
          <p className="text-lg md:text-xl text-charcoal/50 mt-8 max-w-2xl leading-relaxed">
            <AnimatedText
              text="5 projects across different industries — from government procurement to consumer apps."
              delay={1.0}
              stagger={0.04}
            />
          </p>
        </div>
      ),
    },

    // ── Pages 8-12: Individual Projects ──
    ...projects.map((project, idx) => ({
      id: `project-${idx}`,
      render: () => <ProjectSlide project={project} />
    })),

    // ── Page 13: Connect ──
    {
      id: "connect",
      render: () => (
        <div className="flex flex-col items-center justify-center h-full px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-10 max-w-2xl">
            <AnimatedText text="Let's build something together." delay={0.2} stagger={0.1} />
          </h2>

          <motion.div
            className="flex flex-wrap justify-center gap-4 max-w-2xl w-full mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 px-6 py-4 bg-soft-white rounded-full border border-charcoal/10 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-soft-white group-hover:bg-charcoal/80 transition-colors duration-300 flex-shrink-0">
                  {/* Simplistic icons */}
                  {link.name === "GitHub" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  )}
                  {link.name === "LinkedIn" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {link.name === "Reddit" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                    </svg>
                  )}
                  {link.name === "Email" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-charcoal">{link.name}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.a
            href="/pdf/CV-Dorojatun-Chandrabumi.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-tosca text-soft-white rounded-full font-semibold shadow-xl shadow-tosca/20 hover:bg-tosca-dark transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </motion.a>

          <motion.p
            className="mt-16 text-xs text-charcoal/30 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            © {new Date().getFullYear()} Dorojatun Chandrabumi
          </motion.p>
        </div>
      ),
    },
  ];
}

// ─── Main StoryFlow ──────────────────────────────────────────────────────────

export default function StoryFlow() {
  const pages = useStoryPages();
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back

  const totalPages = pages.length;
  const isLastPage = currentPage === totalPages - 1;
  const isFirstPage = currentPage === 0;

  const goNext = useCallback(() => {
    if (isLastPage) return;
    setDirection(1);
    setCurrentPage((p) => p + 1);
  }, [isLastPage]);

  const goPrev = useCallback(() => {
    if (isFirstPage) return;
    setDirection(-1);
    setCurrentPage((p) => p - 1);
  }, [isFirstPage]);

  const variants = {
    enter: (d: number) => ({
      opacity: 0,
      x: d > 0 ? 80 : -80,
      scale: 0.97,
      filter: "blur(6px)",
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (d: number) => ({
      opacity: 0,
      x: d > 0 ? -80 : 80,
      scale: 0.97,
      filter: "blur(6px)",
    }),
  };

  return (
    <div className="h-full w-full relative flex flex-col" style={{ background: "var(--cream)" }}>
      {/* Ambient background blobs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--tosca-light) 0%, transparent 70%)" }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-[350px] h-[350px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--peach) 0%, transparent 70%)" }}
        animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Story content area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={pages[currentPage].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute inset-0"
          >
            {pages[currentPage].render()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom bar: progress + navigation */}
      <div className="relative z-20 px-6 py-5 flex items-center justify-between">
        {/* Back button */}
        <motion.button
          onClick={goPrev}
          disabled={isFirstPage}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
            isFirstPage
              ? "opacity-0 pointer-events-none"
              : "text-charcoal/60 hover:text-charcoal bg-charcoal/5 hover:bg-charcoal/10"
          }`}
          whileHover={!isFirstPage ? { x: -3 } : undefined}
          whileTap={!isFirstPage ? { scale: 0.95 } : undefined}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </motion.button>

        {/* Progress dots */}
        <div className="flex items-center gap-1.5">
          {pages.map((_, i) => (
            <motion.div
              key={i}
              className={`rounded-full transition-all duration-400 ${
                i === currentPage
                  ? "w-6 h-2 bg-tosca"
                  : i < currentPage
                  ? "w-2 h-2 bg-tosca/40"
                  : "w-2 h-2 bg-charcoal/15"
              }`}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          ))}
        </div>

        {/* Next button */}
        <motion.button
          onClick={goNext}
          disabled={isLastPage}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
            isLastPage
              ? "opacity-0 pointer-events-none"
              : "bg-tosca text-soft-white hover:bg-tosca-dark shadow-lg shadow-tosca/20"
          }`}
          whileHover={!isLastPage ? { x: 3 } : undefined}
          whileTap={!isLastPage ? { scale: 0.95 } : undefined}
        >
          Continue
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
