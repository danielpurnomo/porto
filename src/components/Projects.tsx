"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, FolderGit2, Figma } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const accentStyles: Record<Project["accent"], string> = {
  emerald: "from-emerald-500/25 to-emerald-500/5 text-emerald-400",
  cyan: "from-cyan-500/25 to-cyan-500/5 text-cyan-400",
  indigo: "from-indigo-500/25 to-indigo-500/5 text-indigo-400",
  violet: "from-violet-500/25 to-violet-500/5 text-violet-400",
};

const accentGlow: Record<Project["accent"], string> = {
  emerald: "hover:border-emerald-500/50 hover:shadow-[0_0_32px_rgba(16,185,129,0.15)]",
  cyan: "hover:border-cyan-500/50 hover:shadow-[0_0_32px_rgba(6,182,212,0.15)]",
  indigo: "hover:border-indigo-500/50 hover:shadow-[0_0_32px_rgba(99,102,241,0.15)]",
  violet: "hover:border-violet-500/50 hover:shadow-[0_0_32px_rgba(139,92,246,0.15)]",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.12 }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300",
        accentGlow[project.accent]
      )}
    >
      {/* Thumbnail placeholder */}
      <div
        className={cn(
          "relative flex h-44 items-center justify-center bg-gradient-to-br sm:h-52",
          accentStyles[project.accent]
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
        <FolderGit2 className="h-12 w-12 opacity-80" />
        <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-[#0a0a0a]/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-300 backdrop-blur-md">
          featured
        </span>
        <span className="absolute bottom-3 left-4 font-mono text-[10px] tracking-widest text-zinc-500">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-zinc-100 transition-colors group-hover:text-emerald-300">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-white/10 pt-4">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3.5 py-2 text-xs font-semibold text-zinc-300 transition-all hover:border-white/30 hover:text-zinc-100"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}
          {project.repoLinks?.map((repo) => (
            <a
              key={repo.href}
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold text-zinc-300 transition-all hover:border-white/30 hover:text-zinc-100"
            >
              <Github className="h-3.5 w-3.5" />
              {repo.label}
            </a>
          ))}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-300 transition-all hover:bg-emerald-500/20 hover:shadow-[0_0_16px_rgba(16,185,129,0.25)]"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
              {project.demoBadge && (
                <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-1.5 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-amber-300">
                  {project.demoBadge}
                </span>
              )}
            </a>
          )}
          {project.figmaUrl && (
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3 py-2 text-xs font-semibold text-indigo-300 transition-all hover:bg-indigo-500/20 hover:shadow-[0_0_16px_rgba(99,102,241,0.25)]"
            >
              <Figma className="h-3.5 w-3.5" />
              Figma Prototype
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
          // 02 — Portfolio
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Portfolio —{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Work
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
          A selection of production-grade builds and research projects — each
          solving a real problem end-to-end.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
