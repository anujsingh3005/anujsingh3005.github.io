import { profile } from '../data/profile';
import { experience } from '../data/experience';
import { Reveal } from './Reveal';

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
              Experience
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Where I've been
            </h2>
          </div>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Download résumé
          </a>
        </div>
      </Reveal>

      <div className="mt-12 border-l border-[var(--color-border)] pl-8">
        {experience.map((item, i) => (
          <Reveal key={`${item.role}-${item.org}`} delay={i * 0.08}>
            <div className="relative pb-12 last:pb-0">
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
