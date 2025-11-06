"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  MapPin,
  GraduationCap,
  Sparkles,
  BookOpenCheck,
  FlaskConical,
  Trophy,
  Link as LinkIcon,
} from "lucide-react";

import UiBadge from "@/components/hero/UiBadge";
import MotionSection from "@/components/hero/MotionSection";
import { Prospectus, ProspectusLabels } from "@/types/prospectus.types";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="ml-4 list-disc space-y-1.5">
      {items.map((it, i) => (
        <li
          key={i}
          className="transition will-change-transform hover:translate-x-0.5"
        >
          {it}
        </li>
      ))}
    </ul>
  );
}

export default function ProspectusCard({
  data,
  labels,
}: {
  data: Prospectus;
  labels?: ProspectusLabels;
}) {
  const reduce = useReducedMotion();
  const sections = labels?.sections ?? {};
  return (
    <motion.article
      id={data.slug}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-xl transition",
        "dark:border-white/10 dark:bg-zinc-900"
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
            <h3 className="text-xl font-semibold tracking-tight text-white drop-shadow-sm">
              {data.name}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <UiBadge>
                <MapPin className="mr-1 h-3.5 w-3.5" />
                {data.city}
              </UiBadge>
              {data.type && <UiBadge>{data.type}</UiBadge>}
              {data.founded && <UiBadge>Founded {data.founded}</UiBadge>}
              {/* <UiBadge className="bg-white/80 text-zinc-900 ring-white/60 dark:bg-zinc-800/80 dark:text-white dark:ring-zinc-700">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                Tier {data.tier}
              </UiBadge> */}
            </div>
          </div>
          <motion.div
            className="rounded-xl bg-white/80 p-3 shadow-md ring-1 ring-black/10 backdrop-blur-sm dark:bg-zinc-800/80 dark:ring-white/10"
            initial={false}
            whileHover={reduce ? undefined : { rotate: 2 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Building2 className="h-6 w-6" />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 grid gap-6 p-6 sm:grid-cols-2">
        <MotionSection
          title={sections.snapshot ?? "Snapshot"}
          icon={<GraduationCap className="h-4 w-4" />}
        >
          <List items={data.snapshot} />
        </MotionSection>
        <MotionSection
          title={sections.facilities ?? "Campus & Facilities"}
          icon={<BookOpenCheck className="h-4 w-4" />}
        >
          <List items={data.facilities} />
        </MotionSection>
        <MotionSection
          title={sections.scholarships ?? "Scholarships & Admissions"}
          icon={<Sparkles className="h-4 w-4" />}
        >
          <List items={data.scholarships} />
        </MotionSection>
        <MotionSection
          title={sections.programs ?? "Programs (focus)"}
          icon={<BookOpenCheck className="h-4 w-4" />}
        >
          <List items={data.programs} />
        </MotionSection>
        <MotionSection
          title={sections.research ?? "Research ecosystem"}
          icon={<FlaskConical className="h-4 w-4" />}
        >
          <List items={data.research} />
        </MotionSection>
        <MotionSection
          title={sections.outcomes ?? "Graduate outcomes"}
          icon={<Trophy className="h-4 w-4" />}
        >
          <List items={data.outcomes} />
        </MotionSection>
      </div>

      {(data?.links?.admissions || data?.links?.scholarships) && (
        <div className="relative z-10 flex items-center justify-between gap-4 border-t border-black/5 bg-zinc-50 p-4 text-sm dark:border-white/10 dark:bg-zinc-950">
          <div className="flex flex-wrap items-center gap-2">
            {data.links?.admissions && (
              <a
                href={data.links.admissions}
                target="_blank"
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 ring-1 ring-inset ring-black/10 transition hover:bg-white dark:ring-white/10 dark:hover:bg-zinc-900"
              >
                <LinkIcon className="h-3.5 w-3.5" /> Admissions
              </a>
            )}
            {data.links?.scholarships && (
              <a
                href={data.links.scholarships}
                target="_blank"
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 ring-1 ring-inset ring-black/10 transition hover:bg-white dark:ring-white/10 dark:hover:bg-zinc-900"
              >
                <LinkIcon className="h-3.5 w-3.5" /> Scholarships
              </a>
            )}
          </div>
        </div>
      )}
    </motion.article>
  );
}
