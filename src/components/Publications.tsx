import { ExternalLink, FileText } from 'lucide-react';
import { publications } from '../data/publications';
import { Reveal } from './Reveal';

export function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
          Publications
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
          Writing &amp; research
        </h2>
      </Reveal>

      <div className="mt-12 flex flex-col gap-4">
        {publications.map((pub, i) => {
          const content = (
            <div className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]">
              <FileText size={20} className="mt-0.5 flex-shrink-0 text-[var(--color-accent)]" />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-[var(--color-text)]">{pub.title}</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {pub.venue} · {pub.date}
                </p>
              </div>
              {pub.url && (
                <ExternalLink size={16} className="mt-0.5 flex-shrink-0 text-[var(--color-text-muted)]" />
              )}
            </div>
          );

          return (
            <Reveal key={pub.title} delay={i * 0.06}>
              {pub.url ? (
                <a href={pub.url} target="_blank" rel="noopener noreferrer" className="block">
                  {content}
                </a>
              ) : (
                content
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
