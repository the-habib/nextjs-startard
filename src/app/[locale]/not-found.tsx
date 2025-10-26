import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center page-gradient text-[var(--color-fg)]">
      <div className="surface-glass rounded-2xl p-8 md:p-12 text-center max-w-lg mx-auto">
        <h1 className="text-[5rem] leading-none font-extrabold text-[var(--color-primary)]">
          404
        </h1>
        <h2 className="text-2xl font-semibold mt-2">Page not found</h2>
        <p className="mt-3 text-[color-mix(in_oklab,var(--color-fg),white_30%)]">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link href="/" className="btn btn-lg btn-primary">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
