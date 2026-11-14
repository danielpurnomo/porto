"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/portfolio";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#0a0a0a]/70 px-5 py-3 backdrop-blur-md"
      >
        {/* Brand */}
        <a href="#home" className="font-mono text-lg font-semibold text-zinc-100">
          <span className="text-emerald-400">&lt;</span>
          {profile.monogram}
          <span className="text-emerald-400">/&gt;</span>
        </a>

        {/* Center links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: status + CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Ready to Deploy
          </span>
          <a
            href="#contact"
            className={cn(
              "inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition-all",
              "hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
            )}
          >
            <Briefcase className="h-4 w-4" />
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-white/10 p-2 text-zinc-300 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#0a0a0a]/90 p-4 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/5 hover:text-zinc-100"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950"
              >
                <Briefcase className="h-4 w-4" />
                Hire Me
              </a>
              <span className="mt-2 flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Ready to Deploy
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
