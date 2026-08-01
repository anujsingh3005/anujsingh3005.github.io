import { Check, FileCheck } from 'lucide-react';
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

      <div className="mt-12 flex flex-col gap-5">
        {volunteering.map((item, i) => (
          <Reveal key={`${item.role}-${item.org}`} delay={i * 0.08}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text)]">
                  {item.role} · {item.org}
                </h3>
                <span className="text-sm text-[var(--color-text-muted)]">{item.period}</span>
              </div>

              {item.description && (
                <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">{item.description}</p>
              )}

              <ul className="mt-4 space-y-2.5">
                {item.contributions.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[var(--color-text)]">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-[var(--color-accent)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {item.tags && item.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {item.certificateUrl && (
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition-colors hover:opacity-80"
                >
                  <FileCheck size={16} />
                  View certificate / LOR
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
