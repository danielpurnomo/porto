"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import { profile, socials } from "@/data/portfolio";

const socialIcons: Record<string, ReactNode> = {
  GitHub: <Github className="h-5 w-5" />,
  LinkedIn: <Linkedin className="h-5 w-5" />,
  Email: <Mail className="h-5 w-5" />,
  Instagram: <Instagram className="h-5 w-5" />,
};

export default function Footer() {
  return (
    <footer id="contact" className="px-6 pb-12 pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
            // 05 — Let&apos;s Talk
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
            I don&apos;t just write code;{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              I build solutions.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-zinc-400 sm:text-base">
            Got an ambitious product, a messy codebase, or a research challenge?
            My inbox is always open.
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-zinc-300 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:text-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.18)]"
            >
              {socialIcons[s.label] ?? <Terminal className="h-5 w-5" />}
              {s.label}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-16 max-w-6xl border-t border-white/10 pt-6">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © 2026 {profile.name}. Built with Next.js, Tailwind CSS &amp;
            Passion.
          </p>
          <p className="font-mono text-[11px] text-zinc-600">
            <span className="text-emerald-500">const</span> status ={" "}
            <span className="text-amber-300">&quot;shipping&quot;</span>
            <span className="animate-pulse text-emerald-400">▌</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
