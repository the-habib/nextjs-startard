import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-[var(--color-bg)] text-[var(--color-text)]">
      <main className="max-w-7xl mx-auto">
        <Hero />
      </main>
    </div>
  );
}
