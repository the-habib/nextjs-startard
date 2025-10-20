"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/config/nav-links";
import ThemeChanger from "@/components/ThemeChanger";

interface ClientNavBarProps {
  widthClass?: string;
}

export default function ClientNavBar({
  widthClass = "max-w-content",
}: ClientNavBarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className={`container-x ${widthClass} h-16 flex items-center`}>
      {/* Brand */}
      <Link
        href="/"
        aria-label="Home"
        className="inline-flex items-center gap-2 font-bold text-lg tracking-tight"
      >
        <span className="inline-block h-6 w-6 rounded-lg bg-brand-gradient" />
        AlphaQ
      </Link>

      {/* Desktop Nav */}
      <nav className="ml-6 hidden md:flex items-center gap-2">
        {NAV_LINKS.map((item) => (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={() => setActiveDropdown(item.sub ? item.href : null)}
            onMouseLeave={() => item.sub && setActiveDropdown(null)}
          >
            <Link
              href={item.href}
              className={[
                "px-3 py-2 rounded-lg text-sm font-medium transition",
                isActive(item.href)
                  ? "active-primary-chip"
                  : "hover-bg-primary-tint",
              ].join(" ")}
            >
              {item.label}
            </Link>

            {item.sub && activeDropdown === item.href && (
              <div
                className="
                  absolute left-0 top-full mt-1 min-w-[200px]
                  rounded-xl surface-popover overflow-hidden animate-fadeIn
                "
              >
                {item.sub.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-sm hover:bg-[color-mix(in_oklab,var(--color-primary),white_10%)]"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Right side */}
      <div className="ml-auto hidden md:flex items-center gap-3">
        <ThemeChanger />
        <Link
          href="/signup"
          className="
            inline-flex items-center justify-center rounded-xl px-4 h-10 text-sm font-medium
            bg-[var(--color-primary)] text-[var(--color-primary-foreground)]
            hover:opacity-90 transition
          "
        >
          Get started
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        aria-label="Open menu"
        onClick={() => setMobileOpen(true)}
        className="
          md:hidden ml-auto inline-flex items-center justify-center h-10 w-10 rounded-lg
          hover-bg-primary-tint
        "
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-[color-mix(in_oklab,var(--color-bg),black_35%)]"
          />
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm surface-popover overflow-y-auto animate-slideIn">
            <div className="flex items-center justify-between h-16 px-4">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="font-semibold"
              >
                AlphaQ
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="h-10 w-10 flex items-center justify-center rounded-lg hover-bg-primary-tint"
              >
                ✕
              </button>
            </div>

            <div className="p-4 space-y-2">
              {NAV_LINKS.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 rounded-lg text-base font-medium hover-bg-primary-tint"
                  >
                    {item.label}
                  </Link>
                  {item.sub && (
                    <div className="ml-4 pl-3 space-y-1">
                      {item.sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-2 py-1.5 text-sm opacity-90 hover:opacity-100"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 flex items-center justify-between">
                <ThemeChanger />
                <Link
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center rounded-xl px-4 h-10 text-sm font-medium bg-[var(--color-primary)] text-[var(--color-primary-foreground)]"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
