import { volunteering } from '../data/volunteering';
import { Reveal } from './Reveal';

export function Volunteering() {
  return (
    <section id="volunteering" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
          Volunteering
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
          Giving back
        </h2>
      </Reveal>

      <div className="mt-12 border-l border-[var(--color-border)] pl-8">
        {volunteering.map((item, i) => (
          <Reveal key={`${item.role}-${item.org}`} delay={i * 0.08}>
            <div className="relative pb-10 last:pb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
              <p className="text-sm text-[var(--color-text-muted)]">{item.period}</p>
              <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text)]">
                {item.role} · {item.org}
              </h3>
              <p className="mt-2 max-w-2xl text-[var(--color-text-muted)]">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
