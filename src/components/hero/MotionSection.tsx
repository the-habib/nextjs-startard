"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function MotionSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
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
