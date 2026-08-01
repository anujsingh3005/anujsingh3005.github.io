import { ExternalLink, FileText, Users } from 'lucide-react';
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

      <div className="mt-12 flex flex-col gap-5">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 0.08}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <FileText size={20} className="mt-1 flex-shrink-0 text-[var(--color-accent)]" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium uppercase tracking-wide text-[var(--color-accent)]">
                    <span>{pub.type}</span>
                    {pub.status && (
                      <>
                        <span className="text-[var(--color-text-muted)]">·</span>
                        <span className="text-[var(--color-text-muted)] normal-case tracking-normal">
                          {pub.status}
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text)]">
                    {pub.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {pub.venue} · {pub.date}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
                    <Users size={13} />
                    {pub.authors}
                  </p>

                  <p className="mt-4 leading-relaxed text-[var(--color-text)]">{pub.description}</p>

                  {pub.tags && pub.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {pub.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--color-accent)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {(pub.externalUrl || pub.certificateUrl) && (
                    <div className="mt-5 flex flex-wrap items-center gap-5">
                      {pub.externalUrl && (
                        <a
                          href={pub.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
                        >
                          <ExternalLink size={14} />
                          Read publication
                        </a>
                      )}
                      {pub.certificateUrl && (
                        <a
                          href={pub.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
                        >
                          <FileText size={14} />
                          View paper / proof
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
