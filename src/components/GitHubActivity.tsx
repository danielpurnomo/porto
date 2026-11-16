"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { Star, GitFork, Github } from "lucide-react";
import { GITHUB_USERNAME, fallbackRepos } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Vue: "#41b883",
  Dart: "#00B4AB",
  PHP: "#4F5D95",
  SCSS: "#c6538c",
  CSS: "#663399",
  HTML: "#e34c26",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  Kotlin: "#A97BFF",
  Shell: "#89e051",
  SQL: "#e38c00",
};

// Repos hidden from the portfolio grid (experiments, coursework scratch repos)
const EXCLUDED_REPOS = new Set(["cobacoba", "ini-tugas"]);

// Fallback descriptions when the GitHub API returns a null/empty description
const descriptionFallbacks: Record<string, string> = {
  "ambatysm-backend":
    "Laravel RESTful API backend for the Ambatysm e-commerce web and mobile platform.",
  porto: "Personal developer portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
  "Kyassha-Frontend":
    "Cross-platform mobile cashier application built with Flutter.",
  "Kyassha-Backend":
    "RESTful API backend service for the Kyassha POS/cashier system.",
  "real-time-SIBI-sign-language-translator":
    "Real-time Indonesian Sign Language (SIBI) translator using MediaPipe hand-landmark extraction and LSTM neural networks.",
  "frontend-pmob":
    "Cross-platform mobile e-commerce application for Ambatysm built with Flutter and integrated with Laravel REST API.",
};

const GENERIC_DESCRIPTION = "Explore the repository on GitHub for details.";

function getRepoDescription(repo: Repo): string {
  const fallback = descriptionFallbacks[repo.name];
  if (fallback) return repo.description?.trim() || fallback;
  return repo.description?.trim() || GENERIC_DESCRIPTION;
}

const calendarTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

function RepoCard({ repo, index }: { repo: Repo; index: number }) {
  const lang = repo.language ?? "Unknown";
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300",
        "hover:border-indigo-500/50 hover:shadow-[0_0_26px_rgba(99,102,241,0.15)]"
      )}
    >
      <h3 className="font-mono text-sm font-semibold text-cyan-300 transition-colors group-hover:text-cyan-200">
        {repo.name}
      </h3>
      <p className="mt-2 flex-1 text-xs leading-relaxed text-zinc-400">
        {getRepoDescription(repo)}
      </p>

      <div className="mt-4 flex items-center gap-4 text-xs text-zinc-400">
        <span className="flex items-center gap-1.5">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: languageColors[lang] ?? "#6b7280" }}
          />
          {lang}
        </span>
        <span className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 text-zinc-500" />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="h-3.5 w-3.5 text-zinc-500" />
          {repo.forks_count}
        </span>
      </div>
    </motion.a>
  );
}

export default function GitHubActivity() {
  const [repos, setRepos] = useState<Repo[]>(fallbackRepos);
  const [isFallback, setIsFallback] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);

    (async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
          {
            signal: controller.signal,
            headers: { Accept: "application/vnd.github+json" },
          }
        );
        if (!res.ok) return; // keep fallback data (rate-limits, bad username)
        const data: Repo[] = await res.json();
        const filtered = data.filter(
          (repo) => !EXCLUDED_REPOS.has(repo.name.toLowerCase())
        );
        if (filtered.length > 0) {
          setRepos(filtered);
          setIsFallback(false);
        }
      } catch {
        // fetch aborted / network error — keep fallback data
      } finally {
        clearTimeout(timer);
      }
    })();

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="contributions"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
          // 03 — Open Source
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Open Source{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Contributions
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
          A living record of commits, experiments, and public repos — powered by
          the GitHub API.
        </p>
      </motion.div>

      {/* Contribution heatmap */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55 }}
        className="mt-12 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md sm:p-7"
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="flex items-center gap-2 font-mono text-xs text-zinc-400">
            <Github className="h-4 w-4" />
            @{GITHUB_USERNAME} — activity graph
          </span>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-cyan-400 hover:text-cyan-300"
          >
            view profile ↗
          </a>
        </div>
        <GitHubCalendar
          username={GITHUB_USERNAME}
          colorScheme="dark"
          theme={calendarTheme}
          blockSize={11}
          blockMargin={5}
          fontSize={13}
          hideColorLegend={false}
        />
      </motion.div>

      {/* Repos */}
      {isFallback && (
        <p className="mt-6 font-mono text-xs text-zinc-500">
          {/* innocuous notice */}
          Showing cached repo data (API rate-limited or placeholder username).
          Update <span className="text-zinc-300">GITHUB_USERNAME</span> in{" "}
          <span className="text-zinc-300">src/data/portfolio.ts</span>.
        </p>
      )}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, i) => (
          <RepoCard key={repo.name} repo={repo} index={i} />
        ))}
      </div>
    </section>
  );
}
