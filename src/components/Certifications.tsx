"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BadgeCheck,
  ExternalLink,
  Eye,
  ShieldCheck,
} from "lucide-react";
import { certifications, type Certification } from "@/data/portfolio";
import CertificateModal from "./CertificateModal";

function CertCard({
  cert,
  index,
  onView,
}: {
  cert: Certification;
  index: number;
  onView: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.12 }}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_28px_rgba(16,185,129,0.14)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#0d1117] text-emerald-400">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-medium text-emerald-400">
          <BadgeCheck className="h-3 w-3" />
          Verified
        </span>
      </div>

      <h3 className="mt-4 text-base font-bold leading-snug text-zinc-100">
        {cert.title}
      </h3>
      <p className="mt-1.5 font-mono text-xs text-zinc-500">
        {cert.issuer} · {cert.issuedDate}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {cert.skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-zinc-300"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2.5 border-t border-white/10 pt-4">
        <a
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/15 px-3.5 py-2 text-xs font-semibold text-zinc-300 transition-all hover:border-emerald-400/40 hover:text-emerald-300"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Verify
        </a>
        <button
          onClick={onView}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-white/5 px-3.5 py-2 text-xs font-semibold text-zinc-200 transition-all hover:bg-white/10 hover:shadow-[0_0_16px_rgba(16,185,129,0.2)]"
        >
          <Eye className="h-3.5 w-3.5" />
          View PDF
        </button>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const [active, setActive] = useState<Certification | null>(null);

  return (
    <section id="credentials" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
          // 04 — Credentials
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Verified Credentials —{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Licenses &amp; Certifications
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
          Formal proof of the craft — every credential verifiable in one click.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, i) => (
          <CertCard
            key={cert.title}
            cert={cert}
            index={i}
            onView={() => setActive(cert)}
          />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <CertificateModal cert={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
