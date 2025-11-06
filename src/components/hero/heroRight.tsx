"use client";

import * as React from "react";
import { useMessages } from "next-intl";
import ProspectusSlider from "@/components/hero/ProspectusSlider";
import { extractProspectusFromMessages } from "@/components/hero/prospectus";

export default function ProspectusPage() {
  const messages = useMessages();
  console.log("messages: ", messages);

  try {
    const { items, labels } = extractProspectusFromMessages(messages);

    console.log("items, labels: ", items, labels);

    return (
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">
            {labels?.title ?? "Prospectus"}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            {labels?.subtitle ?? ""}
          </p>
        </header>
        <ProspectusSlider items={items} labels={labels} />
      </main>
    );
  } catch (err: any) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight">Prospectus</h1>
        <p className="mt-3 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800 dark:border-red-900/40 dark:bg-red-950 dark:text-red-200">
          {err?.message ?? "Invalid i18n messages structure."} Ensure
          hero.universities[].prospectus exists and follows the documented
          schema.
        </p>
      </main>
    );
  }
}
