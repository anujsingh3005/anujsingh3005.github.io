import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, Check, FileCheck } from 'lucide-react';
import { profile } from '../data/profile';
import { experience } from '../data/experience';
import { Reveal } from './Reveal';

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experience[activeIndex];

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

      <Reveal delay={0.1}>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
          <div className="relative flex gap-4 overflow-x-auto pb-2 lg:block lg:overflow-visible lg:border-l lg:border-[var(--color-border)] lg:pb-0">
            {experience.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={`${item.role}-${item.org}`}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className="group relative flex-shrink-0 text-left lg:block lg:w-full lg:pb-8 lg:pl-6 lg:last:pb-0"
                >
                  <span
                    className="absolute hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full transition-colors lg:top-1.5 lg:left-0 lg:block"
                    style={{
                      background: isActive ? 'var(--color-accent)' : 'var(--color-border)',
                    }}
                  />
                  <p
                    className="text-sm font-medium transition-colors"
                    style={{ color: isActive ? 'var(--color-accent)' : 'var(--color-text)' }}
                  >
                    {item.role}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">{item.org}</p>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)]">
                  {active.role}
                </h3>
                {active.status && (
                  <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-medium uppercase tracking-wide text-[var(--color-bg)]">
                    {active.status}
                  </span>
                )}
              </div>
              <p className="mt-1 font-medium text-[var(--color-accent)]">@ {active.org}</p>
              <p className="mt-2 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                <Calendar size={14} />
                {active.period}
              </p>

              {active.stats && active.stats.length > 0 && (
                <>
                  <div className="mt-6 border-t border-[var(--color-border)]" />
                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {active.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl bg-[var(--color-bg-soft)] px-4 py-5 text-center"
                      >
                        <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-accent)]">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs text-[var(--color-text-muted)]">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <p className="mt-6 text-sm font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
                Key Achievements
              </p>
              <ul className="mt-3 space-y-2.5">
                {active.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-2.5 text-[var(--color-text)]">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-[var(--color-accent)]" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              {active.tags && active.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {active.certificateUrl && (
                <a
                  href={active.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition-colors hover:opacity-80"
                >
                  <FileCheck size={16} />
                  View certificate / LOR
                </a>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
