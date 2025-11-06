// =============================================
// Tier‑A Prospectus – next-intl messages loader (Slider + Motion)
// Files to add:
//  1) messages/en.json                         <-- i18n data (Tier‑A dataset lives here)
//  2) app/[locale]/prospectus/page.tsx         <-- Page reads from next-intl messages
// Notes:
//  - Uses next-intl App Router setup (you already have it)
//  - Reads the raw messages via `useMessages()` in a client component
//  - Validates the array shape and renders the same slider+motion UI
//  - Keep your other locales (e.g., zh, es) with the same structure
// =============================================

// ---------------------------------------------
// FILE: messages/en.json  (add this structure into your existing file)
// ---------------------------------------------


// ---------------------------------------------
// FILE: app/[locale]/prospectus/page.tsx
// ---------------------------------------------
"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
import { useMessages } from "next-intl";
import {
  Building2,
  MapPin,
  GraduationCap,
  Sparkles,
  BookOpenCheck,
  FlaskConical,
  Trophy,
  Link as LinkIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

// ---------- Types ----------
export type Prospectus = {
  slug: string;
  abbr: string;
  name: string;
  city: string;
  founded?: string;
  type?: string;
  palette?: { primary: string; secondary: string };
  snapshot: string[];
  facilities: string[];
  scholarships: string[];
  programs: string[];
  research: string[];
  outcomes: string[];
  links?: { admissions?: string; scholarships?: string };
};

// ---------- Utils ----------
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// Runtime validation against messages structure
function getProspectusFromMessages(messages: any): { title: string; subtitle: string; items: Prospectus[] } {
  const ns = messages?.prospectus ?? {};
  const raw = ns?.tierA;
  const title = ns?.title ?? "Prospectus";
  const subtitle = ns?.subtitle ?? "";
  if (!Array.isArray(raw)) throw new Error("messages.prospectus.tierA is not an array");
  const slugs = new Set<string>();
  const abbrs = new Set<string>();
  const items: Prospectus[] = [];
  for (const r of raw) {
    if (!r?.slug || !r?.name || !r?.city || !r?.abbr) continue;
    if (slugs.has(r.slug)) console.warn("Duplicate slug:", r.slug);
    if (abbrs.has(r.abbr)) console.warn("Duplicate abbr:", r.abbr);
    slugs.add(r.slug);
    abbrs.add(r.abbr);
    items.push(r as Prospectus);
  }
  if (items.length !== 10) console.warn(`Expected 10 entries, got ${items.length}`);
  return { title, subtitle, items };
}

// ---------- UI atoms ----------
function UiBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
        "bg-black/5 text-black/80 ring-black/10 dark:bg-white/10 dark:text-white/80 dark:ring-white/15",
        className
      )}
    >
      {children}
    </span>
  );
}

function MotionSection({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      initial={false}
      whileHover={reduce ? undefined : { y: -4, scale: 1.01 }}
      whileTap={reduce ? undefined : { scale: 0.995 }}
      transition={{ type: "spring", stiffness: 300, damping: 24, mass: 0.6 }}
      className={
        "rounded-xl border border-black/5 bg-white/70 p-4 backdrop-blur-sm ring-1 ring-black/5 shadow-sm " +
        "dark:border-white/10 dark:bg-zinc-900/60 dark:ring-white/10"
      }
    >
      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100">
        {icon}
        {title}
      </h4>
      <div className="text-sm text-zinc-700 dark:text-zinc-300">{children}</div>
    </motion.section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="ml-4 list-disc space-y-1.5">
      {items.map((it, i) => (
        <li key={i} className="transition will-change-transform hover:translate-x-0.5">{it}</li>
      ))}
    </ul>
  );
}

// ---------- Card ----------
function ProspectusCard({ data, className }: { data: Prospectus; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      id={data.slug}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-xl transition",
        "dark:border-white/10 dark:bg-zinc-900",
        className
      )}
      whileHover={reduce ? undefined : { y: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <motion.div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-r opacity-90",
          data.palette?.primary ?? "from-cyan-500",
          data.palette?.secondary ?? "to-sky-500"
        )}
        initial={false}
        whileHover={reduce ? undefined : { height: 112 }}
      />

      <div className="relative z-10 p-6 pt-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-white drop-shadow-sm">{data.name}</h3>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <UiBadge>
                <MapPin className="mr-1 h-3.5 w-3.5" />
                {data.city}
              </UiBadge>
              {data.type && <UiBadge>{data.type}</UiBadge>}
              {data.founded && <UiBadge>Founded {data.founded}</UiBadge>}
              <UiBadge className="bg-white/80 text-zinc-900 ring-white/60 dark:bg-zinc-800/80 dark:text-white dark:ring-zinc-700">
                <Sparkles className="mr-1 h-3.5 w-3.5" />Tier A
              </UiBadge>
            </div>
          </div>
          <motion.div
            className="rounded-xl bg-white/80 p-3 shadow-md ring-1 ring-black/10 backdrop-blur-sm dark:bg-zinc-800/80 dark:ring-white/10"
            initial={false}
            whileHover={useReducedMotion() ? undefined : { rotate: 2 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Building2 className="h-6 w-6" />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 grid gap-6 p-6 sm:grid-cols-2">
        <MotionSection title="Snapshot" icon={<GraduationCap className="h-4 w-4" />}>
          <List items={data.snapshot} />
        </MotionSection>
        <MotionSection title="Campus & Facilities" icon={<BookOpenCheck className="h-4 w-4" />}>
          <List items={data.facilities} />
        </MotionSection>
        <MotionSection title="Scholarships & Admissions" icon={<Sparkles className="h-4 w-4" />}>
          <List items={data.scholarships} />
        </MotionSection>
        <MotionSection title="Programs (focus)" icon={<BookOpenCheck className="h-4 w-4" />}>
          <List items={data.programs} />
        </MotionSection>
        <MotionSection title="Research ecosystem" icon={<FlaskConical className="h-4 w-4" />}>
          <List items={data.research} />
        </MotionSection>
        <MotionSection title="Graduate outcomes" icon={<Trophy className="h-4 w-4" />}>
          <List items={data.outcomes} />
        </MotionSection>
      </div>

      {(data?.links?.admissions || data?.links?.scholarships) && (
        <div className="relative z-10 flex items-center justify-between gap-4 border-t border-black/5 bg-zinc-50 p-4 text-sm dark:border-white/10 dark:bg-zinc-950">
          <div className="flex flex-wrap items-center gap-2">
            {data.links?.admissions && (
              <a href={data.links.admissions} target="_blank" className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 ring-1 ring-inset ring-black/10 transition hover:bg-white dark:ring-white/10 dark:hover:bg-zinc-900">
                <LinkIcon className="h-3.5 w-3.5" /> Admissions
              </a>
            )}
            {data.links?.scholarships && (
              <a href={data.links.scholarships} target="_blank" className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 ring-1 ring-inset ring-black/10 transition hover:bg-white dark:ring-white/10 dark:hover:bg-zinc-900">
                <LinkIcon className="h-3.5 w-3.5" /> Scholarships
              </a>
            )}
          </div>
          <span className="text-xs opacity-70">Designed for quick comparison</span>
        </div>
      )}
    </motion.article>
  );
}

// ---------- Slider ----------
function ProspectusSlider({ items, title, subtitle }: { items: Prospectus[]; title: string; subtitle: string }) {
  const [idx, setIdx] = useState(0);
  const count = items.length;
  const current = items[idx];
  const go = useCallback((next: number) => setIdx(((next % count) + count) % count), [count]);

  const onKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") go(idx + 1);
      if (e.key === "ArrowLeft") go(idx - 1);
    },
    [go, idx]
  );

  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    const THRESH = 40;
    if (dx < -THRESH) go(idx + 1);
    if (dx > THRESH) go(idx - 1);
    touchStartX.current = null;
  };

  const labels = useMemo(() => items.map((u) => u.abbr), [items]);

  return (
    <>
      <header className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">{subtitle}</p>
      </header>

      <div className="relative" aria-roledescription="carousel">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm tabular-nums opacity-70"><span className="font-medium">{idx + 1}</span> / {count}</div>
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Previous" className="rounded-lg border border-black/10 bg-white p-2 shadow-sm ring-1 ring-black/10 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-900 dark:ring-white/10 dark:hover:bg-zinc-800" onClick={() => go(idx - 1)}>
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button type="button" aria-label="Next" className="rounded-lg border border-black/10 bg-white p-2 shadow-sm ring-1 ring-black/10 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-900 dark:ring-white/10 dark:hover:bg-zinc-800" onClick={() => go(idx + 1)}>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <motion.div key={current.slug} role="group" aria-label={`Slide ${idx + 1}: ${current.name}`} tabIndex={0} onKeyDown={onKey} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25, ease: "easeOut" }}>
          <ProspectusCard data={current} />
        </motion.div>

        <nav className="mt-6 flex flex-wrap items-center justify-center gap-2" aria-label="University pager">
          {labels.map((label, i) => {
            const active = i === idx;
            return (
              <motion.button
                key={label}
                onClick={() => go(i)}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium ring-1 ring-inset transition",
                  active
                    ? "bg-zinc-900 text-white ring-zinc-900 dark:bg-white dark:text-zinc-900 dark:ring-white"
                    : "bg-white text-zinc-700 ring-black/10 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-200 dark:ring-white/10 dark:hover:bg-zinc-800"
                )}
                title={items[i].name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              >
                {label}
              </motion.button>
            );
          })}
        </nav>
      </div>
    </>
  );
}

// ---------- Page ----------
export default function Page() {
  const messages = useMessages();
  let data: { title: string; subtitle: string; items: Prospectus[] };
  try {
    data = getProspectusFromMessages(messages);
  } catch (err: any) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight">Prospectus</h1>
        <p className="mt-3 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800 dark:border-red-900/40 dark:bg-red-950 dark:text-red-200">
          {err?.message ?? "Invalid i18n messages structure."} Ensure messages.prospectus.tierA exists and follows the documented schema.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <ProspectusSlider items={data.items} title={data.title} subtitle={data.subtitle} />
      <footer className="mt-10 text-center text-xs text-zinc-500 dark:text-zinc-400">Built with Next.js App Router · Tailwind CSS v4 · lucide-react · framer-motion · next-intl</footer>
    </main>
  );
}
