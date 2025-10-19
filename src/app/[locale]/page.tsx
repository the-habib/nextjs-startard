// app/page.tsx
// import { ThemeSwitcher } from '@/theme/switcher';
import { Button } from '@/components/ui/button';
import ThemeChanger from '@/components/ThemeChanger';

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-bold">Telweend Theming</h1>
          <ThemeChanger />
        </header>

        <main className="space-y-8">
          <section className="p-6 border rounded-lg bg-[var(--color-muted)] border-[var(--color-border)]">
            <h2 className="mb-4 text-2xl font-semibold">Color Demonstration</h2>

            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-[var(--color-primary-50)] text-center">
                50
              </div>
              <div className="p-4 rounded-lg bg-[var(--color-primary-100)] text-center">
                100
              </div>
              <div className="p-4 rounded-lg bg-[var(--color-primary-500)] text-white text-center">
                500
              </div>
              <div className="p-4 rounded-lg bg-[var(--color-primary-900)] text-white text-center">
                900
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
            </div>
          </section>

          <section className="p-6 border rounded-lg border-[var(--color-border)]">
            <h2 className="mb-4 text-2xl font-semibold">Typography</h2>
            <div className="space-y-4">
              <p className="font-sans" style={{ fontFamily: 'var(--font-sans)' }}>
                Sans-serif font example
              </p>
              <p className="font-serif" style={{ fontFamily: 'var(--font-serif)' }}>
                Serif font example
              </p>
              <p className="font-mono" style={{ fontFamily: 'var(--font-mono)' }}>
                Monospace font example
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}