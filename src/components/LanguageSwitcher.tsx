"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { useRouter, usePathname } from "@/i18n/navigation"; // from createNavigation

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();     // locale-aware pathname (no need to edit)
    const locale = useLocale();         // current locale
    const [isPending, startTransition] = useTransition();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value as (typeof routing.locales)[number];

        // ✅ Replace the locale segment for the current path
        startTransition(() => {
            router.replace({ pathname }, { locale: nextLocale });
            // or: router.push({ pathname }, { locale: nextLocale });
        });
    };

    return (
        <select
            value={locale}
            onChange={handleChange}
            disabled={isPending}
            className="border border-gray-300 rounded-md px-2 py-1 text-sm bg-transparent dark:text-white"
        >
            {routing.locales.map((loc) => (
                <option key={loc} value={loc}>
                    {loc.toUpperCase()}
                </option>
            ))}
        </select>
    );
}