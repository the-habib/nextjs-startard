"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html>
      <body className="min-h-screen grid place-items-center page-gradient text-[var(--color-fg)]">
        <div className="surface-glass rounded-2xl p-8 md:p-12 text-center max-w-lg mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-[var(--color-primary)]">
            Something went wrong
          </h1>
          <p className="text-[color-mix(in_oklab,var(--color-fg),white_30%)] mb-6">
            We couldn’t load this page. Try again or return home.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => reset()} className="btn btn-lg btn-primary">
              Try again
            </button>
            <Link href="/" className="btn btn-lg btn-ghost">
              Go home
            </Link>
          </div>

          {error?.digest && (
            <p className="mt-6 text-xs opacity-60">Error ID: {error.digest}</p>
          )}
        </div>
      </body>
    </html>
  );
}
