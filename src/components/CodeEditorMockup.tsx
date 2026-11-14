"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  GitBranch,
  XCircle,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

type TokenType = "kw" | "key" | "str" | "bool" | "plain" | "cmt";
interface Token {
  t: TokenType;
  v: string;
}

const tokenClass: Record<TokenType, string> = {
  kw: "text-indigo-400",
  key: "text-cyan-300",
  str: "text-amber-300",
  bool: "text-orange-400",
  plain: "text-zinc-300",
  cmt: "text-zinc-500 italic",
};

const identityLines: Token[][] = [
  [{ t: "kw", v: "const" }, { t: "key", v: " Daniel" }, { t: "plain", v: " = {" }],
  [
    { t: "key", v: "  role" },
    { t: "plain", v: ": " },
    { t: "str", v: '"Fullstack & AI Engineer"' },
    { t: "plain", v: "," },
  ],
  [
    { t: "key", v: "  base" },
    { t: "plain", v: ": " },
    { t: "str", v: '"UNAIR, Surabaya"' },
    { t: "plain", v: "," },
  ],
  [
    { t: "key", v: "  sleep" },
    { t: "plain", v: ": " },
    { t: "str", v: '"8 hours"' },
    { t: "plain", v: "," },
  ],
  [
    { t: "key", v: "  code" },
    { t: "plain", v: ": " },
    { t: "str", v: '"Clean & Scalable"' },
    { t: "plain", v: "," },
  ],
  [
    { t: "key", v: "  motto" },
    { t: "plain", v: ": " },
    { t: "str", v: '"It works on my machine"' },
    { t: "plain", v: "," },
  ],
  [
    { t: "key", v: "  coffee" },
    { t: "plain", v: ": " },
    { t: "str", v: '"Always"' },
    { t: "plain", v: "," },
  ],
  [
    { t: "key", v: "  passion" },
    { t: "plain", v: ": " },
    { t: "bool", v: "true" },
  ],
  [{ t: "plain", v: "};" }],
];

const fixedLine: Token[][] = [
  [
    { t: "key", v: "  sleep" },
    { t: "plain", v: ": " },
    { t: "kw", v: "null" },
    { t: "plain", v: "," },
    { t: "cmt", v: " // 404 Fixed" },
  ],
];

function Line({
  n,
  tokens,
  error,
  fixed,
}: {
  n: number;
  tokens: Token[];
  error?: boolean;
  fixed?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center whitespace-pre px-4 font-mono text-[13px] leading-6",
        fixed && "bg-emerald-500/5"
      )}
    >
      <span className="mr-4 w-5 select-none text-right text-zinc-600">{n}</span>
      <span>
        {tokens.map((tk, i) => (
          <span
            key={i}
            className={cn(
              tokenClass[tk.t],
              error && tk.t === "str" &&
                "underline decoration-red-500 decoration-wavy underline-offset-4"
            )}
          >
            {tk.v}
          </span>
        ))}
      </span>
    </div>
  );
}

export default function CodeEditorMockup() {
  const [fixed, setFixed] = useState(false);
  const [copilotDismissed, setCopilotDismissed] = useState(false);

  const reset = () => {
    setFixed(false);
    setCopilotDismissed(false);
  };

  const showCopilot = !fixed && !copilotDismissed;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117]/80 shadow-2xl shadow-black/40 backdrop-blur-md">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex items-center gap-2 rounded-md border border-white/10 bg-[#0d1117] px-3 py-1">
          <span className="h-2 w-2 rounded-sm bg-emerald-400/80" />
          <span className="font-mono text-xs text-zinc-400">daniel_life.ts</span>
          <span className="text-xs text-zinc-600">—</span>
          <span className="text-xs text-zinc-500">Daniel — Visual Studio Code</span>
        </div>
      </div>

      {/* Code area */}
      <div className="relative py-3">
        {/* Lines 1-3 */}
        {identityLines.slice(0, 3).map((tokens, i) => (
          <Line key={i} n={i + 1} tokens={tokens} />
        ))}

        {/* Line 4 */}
        <Line
          n={4}
          tokens={fixed ? fixedLine[0] : identityLines[3]}
          error={!fixed}
          fixed={fixed}
        />

        {/* AI Copilot popup */}
        <AnimatePresence>
          {showCopilot && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative z-10 mx-4 my-3 ml-14 rounded-xl border border-indigo-500/30 bg-[#101426]/95 shadow-[0_0_28px_rgba(99,102,241,0.18)] backdrop-blur-md"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
                <span className="flex items-center gap-2 font-mono text-xs font-semibold text-indigo-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  AI Copilot Analysis
                </span>
                <span className="rounded-full border border-red-500/30 bg-red-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-red-400">
                  1 Type Error
                </span>
              </div>

              <div className="px-4 py-3">
                <p className="text-xs leading-relaxed text-zinc-300">
                  I detected a logical error in{" "}
                  <span className="font-mono font-semibold text-red-400">line 4</span>.
                  &quot;8 hours&quot; sleep is a{" "}
                  <span className="font-mono text-indigo-300">RealityException</span>{" "}
                  for Information Systems students.
                </p>

                {/* Diff preview */}
                <div className="mt-3 overflow-hidden rounded-lg border border-white/10 font-mono text-[11px]">
                  <div className="bg-red-500/10 px-3 py-1.5 text-red-400">
                    - <span className="text-zinc-500">4</span>  sleep: &#34;8
                    hours&#34;,
                  </div>
                  <div className="bg-emerald-500/10 px-3 py-1.5 text-emerald-400">
                    + <span className="text-zinc-500">4</span>  sleep: null //
                    404
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <button
                    onClick={() => setCopilotDismissed(true)}
                    className="text-[11px] text-zinc-500 transition-colors hover:text-zinc-300"
                  >
                    Dismiss
                  </button>
                  <button
                    onClick={() => setFixed(true)}
                    className="inline-flex items-center gap-1.5 rounded-md bg-indigo-500 px-3 py-1.5 font-mono text-[11px] font-semibold text-white transition-all hover:bg-indigo-400 hover:shadow-[0_0_16px_rgba(99,102,241,0.5)]"
                  >
                    <Check className="h-3.5 w-3.5" />
                    Apply Fix
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lines 5-9 */}
        {identityLines.slice(4).map((tokens, i) => (
          <Line key={i} n={i + 5} tokens={tokens} />
        ))}
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.03] px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-500">
            <GitBranch className="h-3 w-3" />
            main
          </span>
          <span className="font-mono text-[11px] text-zinc-500">TypeScript</span>
        </div>

        <div className="flex items-center gap-2">
          {fixed && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={reset}
              className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 font-mono text-[10px] text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-200"
            >
              <RotateCcw className="h-3 w-3" />
              Reset
            </motion.button>
          )}
          {fixed ? (
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-medium text-emerald-400"
            >
              <CheckCircle2 className="h-3 w-3" />
              Compiled Successfully
            </motion.span>
          ) : (
            <span className="flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-1 font-mono text-[10px] font-medium text-red-400">
              <XCircle className="h-3 w-3" />
              1 problem — Type Error
            </span>
          )}
        </div>
      </div>

      {/* Subtle unobtrusive hint when dismissed without fix */}
      {!fixed && copilotDismissed && (
        <div className="absolute right-4 top-3 hidden items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1.5 font-mono text-[10px] text-amber-400 sm:flex">
          <AlertTriangle className="h-3 w-3" />
          Unresolved: line 4
        </div>
      )}
    </div>
  );
}
