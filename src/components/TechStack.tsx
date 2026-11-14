"use client";

import { motion } from "framer-motion";
import {
  AppWindow,
  Atom,
  Smartphone,
  FileCode2,
  Wind,
  Boxes,
  Terminal,
  BrainCircuit,
  Database,
  HardDrive,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { techStack, type TechItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap: Record<TechItem["icon"], LucideIcon> = {
  "app-window": AppWindow,
  atom: Atom,
  smartphone: Smartphone,
  "file-code": FileCode2,
  wind: Wind,
  boxes: Boxes,
  terminal: Terminal,
  brain: BrainCircuit,
  database: Database,
  "hard-drive": HardDrive,
  zap: Zap,
};

function TechCard({ item }: { item: TechItem }) {
  const Icon = iconMap[item.icon];
  return (
    <div
      className={cn(
        "group m-3 flex w-44 shrink-0 flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 text-center",
        "transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50",
        "hover:shadow-[0_0_26px_rgba(16,185,129,0.18)]"
      )}
    >
      <div className="rounded-xl border border-white/10 bg-[#0d1117] p-3 text-zinc-300 transition-colors group-hover:border-emerald-500/40 group-hover:text-emerald-300">
        <Icon className="h-6 w-6" />
      </div>
      <span className="text-sm font-semibold text-zinc-200">{item.name}</span>
      <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
        {item.category}
      </span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
          // 01 — Stack
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Powering My Workflow —{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            My Favorite Tools
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
          The technologies I reach for when turning ideas into shipped products
          — from pixel to production database.
        </p>
      </motion.div>

      {/* Marquee — duplicated track for seamless loop */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="animate-marquee flex w-max">
          {techStack.map((item, i) => (
            <TechCard key={`a-${i}`} item={item} />
          ))}
          {techStack.map((item, i) => (
            <TechCard key={`b-${i}`} item={item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
