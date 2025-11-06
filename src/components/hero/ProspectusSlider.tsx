"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProspectusCard from "@/components/hero/ProspectusCard";
import { Prospectus, ProspectusLabels } from "@/types/prospectus.types";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProspectusSlider({
  items,
  labels,
}: {
  items: Prospectus[];
  labels?: ProspectusLabels;
}) {
  const tiers = React.useMemo(
    () => Array.from(new Set(items.map((i) => i.tier))).sort(),
    [items]
  );
  const [tier, setTier] = React.useState<string>(tiers[0]);
  const filtered = React.useMemo(
    () => items.filter((i) => i.tier === tier),
    [items, tier]
  );
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => setIdx(0), [tier]);

  const count = filtered.length;
  const current = filtered[idx];
  const go = (next: number) => setIdx(((next % count) + count) % count);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") go(idx + 1);
    if (e.key === "ArrowLeft") go(idx - 1);
  };

  const touchStartX = React.useRef<number | null>(null);
  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = (e.changedTouches[0]?.clientX ?? null) as
      | number
      | null;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    const THRESH = 40;
    if (dx < -THRESH) go(idx + 1);
    if (dx > THRESH) go(idx - 1);
    touchStartX.current = null;
  };

  return (
    <div className="relative" aria-roledescription="carousel">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm tabular-nums opacity-70">
          <span className="font-medium">{idx + 1}</span> / {count}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous"
            className="rounded-lg border border-black/10 bg-white p-2 shadow-sm ring-1 ring-black/10 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-900 dark:ring-white/10 dark:hover:bg-zinc-800"
            onClick={() => go(idx - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next"
            className="rounded-lg border border-black/10 bg-white p-2 shadow-sm ring-1 ring-black/10 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-900 dark:ring-white/10 dark:hover:bg-zinc-800"
            onClick={() => go(idx + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Slide viewport */}
      {current && (
        <motion.div
          key={current.slug}
          role="group"
          aria-label={`Slide ${idx + 1}: ${current.name}`}
          tabIndex={0}
          onKeyDown={onKey}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <ProspectusCard data={current} labels={labels} />
        </motion.div>
      )}

      {/* Footer Row 1: Tier switcher */}
      <nav
        className="mt-6 mb-2 flex flex-wrap items-center justify-center gap-2"
        aria-label="Tier switcher"
      >
        {tiers.map((t) => {
          const active = tier === t;
          return (
            <button
              key={t}
              onClick={() => setTier(t)}
              aria-current={active ? "true" : undefined}
              className={cn(
                "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium ring-1 ring-inset transition",
                active
                  ? "bg-zinc-900 text-white ring-zinc-900 dark:bg-white dark:text-zinc-900 dark:ring-white"
                  : "bg-white text-zinc-700 ring-black/10 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-200 dark:ring-white/10 dark:hover:bg-zinc-800"
              )}
              title={`Tier ${t}`}
            >
              Tier {t}
            </button>
          );
        })}
      </nav>

      {/* Footer Row 2: University short forms */}
      <nav
        className="mb-2 flex flex-wrap items-center justify-center gap-2"
        aria-label="University pager"
      >
        {filtered.map((u, i) => {
          const active = i === idx;
          return (
            <motion.button
              key={u.abbr}
              onClick={() => setIdx(i)}
              aria-current={active ? "true" : undefined}
              className={cn(
                "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium ring-1 ring-inset transition",
                active
                  ? "bg-zinc-900 text-white ring-zinc-900 dark:bg-white dark:text-zinc-900 dark:ring-white"
                  : "bg-white text-zinc-700 ring-black/10 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-200 dark:ring-white/10 dark:hover:bg-zinc-800"
              )}
              title={u.name}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
            >
              {u.abbr}
            </motion.button>
          );
        })}
      </nav>
    </div>
  );
}
