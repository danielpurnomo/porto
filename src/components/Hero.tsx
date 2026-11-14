"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Bot } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import CodeEditorMockup from "./CodeEditorMockup";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl scroll-mt-24 flex-col justify-center px-6 pb-20 pt-36 lg:pt-32"
    >
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left column */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-zinc-300 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for internships &amp; projects
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl"
          >
            Hello, I am{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
            .
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            {profile.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className={cn(
                "group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950",
                "transition-all hover:bg-emerald-400 hover:shadow-[0_0_28px_rgba(16,185,129,0.45)]"
              )}
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.cvUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition-all hover:border-emerald-400/40 hover:bg-white/5 hover:text-emerald-300"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right column — IDE mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-3xl bg-emerald-500/5 blur-2xl" />
          <div className="relative">
            <div className="mb-3 flex items-center gap-2 font-mono text-[11px] text-zinc-500">
              <Bot className="h-3.5 w-3.5 text-indigo-400" />
              Interactive — try the &quot;Apply Fix&quot; button on the error
            </div>
            <CodeEditorMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
