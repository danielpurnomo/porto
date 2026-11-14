"use client";

import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Certification } from "@/data/portfolio";

export default function CertificateModal({
  cert,
  onClose,
}: {
  cert: Certification | null;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className={cn(
        "fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm",
        !cert && "pointer-events-none"
      )}
    >
      {cert && (
        <motion.div
          initial={{ scale: 0.94, y: 16 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.94, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]",
            "shadow-[0_0_60px_rgba(16,185,129,0.12)]"
          )}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-zinc-100">
                {cert.title}
              </h3>
              <p className="font-mono text-[11px] text-zinc-500">
                {cert.issuer} · {cert.issuedDate}
              </p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 shrink-0 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:bg-white/5 hover:text-zinc-100"
            >
              Close
            </button>
          </div>

          {/* PDF preview */}
          <div className="flex min-h-[50vh] flex-1 items-center justify-center bg-[#0d1117]">
            {cert.pdfUrl && !cert.pdfUrl.startsWith("#") ? (
              <iframe
                src={cert.pdfUrl}
                title={`${cert.title} — PDF preview`}
                className="h-full min-h-[50vh] w-full"
              />
            ) : (
              <div className="flex flex-col items-center gap-3 p-10 text-center">
                <FileText className="h-10 w-10 text-zinc-600" />
                <p className="max-w-sm text-sm text-zinc-400">
                  PDF preview unavailable. Drop the certificate file at{" "}
                  <code className="font-mono text-emerald-400">
                    /public{cert.pdfUrl}
                  </code>{" "}
                  — update{" "}
                  <code className="font-mono text-emerald-400">pdfUrl</code> in{" "}
                  <code className="font-mono text-emerald-400">
                    src/data/portfolio.ts
                  </code>
                  .
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
