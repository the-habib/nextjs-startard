"use client";

import * as React from "react";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function UiBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
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
