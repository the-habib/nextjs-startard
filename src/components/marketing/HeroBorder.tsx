import { Button } from "../ui/button";
import { Link } from "@/i18n/navigation";

export default function HeroModern() {
  return (
    <section className="relative overflow-hidden hero-gradient">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-blob hero-blob-primary absolute -top-16 -left-10 h-64 w-64" />
        <div className="hero-blob hero-blob-accent absolute -top-24 right-0 h-72 w-72" />
      </div>

      {/* content */}
      <div className="container-x max-w-7xl mx-auto py-16 md:py-24">
        <div className="hero-surface relative p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12 items-center">
            {/* copy */}
            <div>
              <p className="text-xs md:text-sm font-semibold tracking-wide uppercase mb-3 text-[color-mix(in_oklab,var(--color-fg),white_35%)]">
                Introducing
              </p>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Build{" "}
                <span className="text-[var(--color-primary)]">beautiful</span>{" "}
                UIs that adapt to your theme
              </h1>

              <p
                className="mt-4 text-base md:text-lg
                            text-[color-mix(in_oklab,var(--color-fg),white_30%)]"
              >
                No borders. No hardcoded colors. Pure token-driven styles with
                Tailwind v4
                <code className="ml-1"> @theme</code>.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/get-started">
                  <Button className="btn btn-lg btn-primary">
                    Get started
                  </Button>
                </Link>
                <Link href="/docs" className="btn btn-lg btn-ghost">
                  Read docs
                </Link>
              </div>
            </div>

            {/* artwork pane (pure CSS, no borders) */}
            <div className="relative">
              <div
                className="
                  rounded-xl h-48 md:h-64
                  bg-[color-mix(in_oklab,var(--color-card),var(--color-primary)_8%)]
                  shadow-lg
                "
              />
              {/* subtle light sweep */}
              <div
                className="
                  pointer-events-none absolute inset-x-6 -top-6 h-20
                  rounded-full
                  bg-[radial-gradient(60%_120%_at_50%_0%,white_35%,transparent_70%)]
                  opacity-40
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
