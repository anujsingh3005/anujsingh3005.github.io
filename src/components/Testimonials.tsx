import { Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { Reveal } from './Reveal';

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
          Testimonials
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
          What people say
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <Quote size={20} className="mb-4 text-[var(--color-accent)]" />
              <p className="flex-1 text-[var(--color-text)]">{t.quote}</p>
              <div className="mt-6">
                <p className="font-medium text-[var(--color-text)]">{t.name}</p>
                <p className="text-sm text-[var(--color-text-muted)]">{t.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
