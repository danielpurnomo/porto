"use client";

import { useState } from "react";
import Image from "next/image";
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

function ProfileAvatar() {
  const [error, setError] = useState(false);

  return (
    <div className="group relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
      <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-500 via-cyan-500 to-indigo-500 opacity-50 blur-[6px] transition-opacity duration-300 group-hover:opacity-80" />
      {error ? (
        <div className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-emerald-500/40 bg-[#0d1117] font-mono text-sm font-bold text-emerald-400 sm:h-16 sm:w-16">
          DP
        </div>
      ) : (
        <Image
          src="/images/profile.jpg"
          alt={profile.name}
          width={128}
          height={128}
          priority
          onError={() => setError(true)}
          className="relative h-14 w-14 cursor-pointer rounded-full border border-white/10 object-cover transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
        />
      )}
      <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#09090b] bg-emerald-500" />

      {/* Enlarged preview on hover */}
      <div className="pointer-events-none absolute left-0 top-full z-50 mt-4 opacity-0 scale-95 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0">
        <div className="relative">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-500/40 via-cyan-500/30 to-indigo-500/40 blur-lg" />
          <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-[0_12px_48px_rgba(0,0,0,0.6)]">
            <Image
              src="/images/profile.jpg"
              alt={profile.name}
              width={256}
              height={256}
              className="h-64 w-64 object-cover"
            />
            <div className="flex items-center justify-between gap-3 bg-[#0d1117]/90 px-4 py-2.5 backdrop-blur-md">
              <span className="font-mono text-xs font-semibold text-zinc-100">
                {profile.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                {profile.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
            className="flex items-center gap-4"
          >
            <ProfileAvatar />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-zinc-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for internships &amp; projects
            </span>
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
              download="CV-Daniel-Purnomo.pdf"
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
