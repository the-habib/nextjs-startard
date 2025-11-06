import { notFound } from "next/navigation";

export default function CatchAll() {
    // This will cause the nearest not-found.tsx (in the [locale] segment) to display
    notFound();
}
