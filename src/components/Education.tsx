import { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';
import { PhotoLightbox } from './PhotoLightbox';
import { Reveal } from './Reveal';

export function Education() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
          Education
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
          Where I studied
        </h2>
      </Reveal>

      <div className="mt-12 flex flex-col gap-6">
        {education.map((item, i) => (
          <Reveal key={`${item.degree}-${item.institution}`} delay={i * 0.08}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <GraduationCap size={22} className="mt-1 flex-shrink-0 text-[var(--color-accent)]" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text)]">
                      {item.degree}
                    </h3>
                    <span className="text-sm text-[var(--color-text-muted)]">{item.period}</span>
                  </div>
                  <p className="mt-1 text-[var(--color-accent)]">{item.institution}</p>
                  {item.score && (
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.score}</p>
                  )}
                </div>
              </div>

              {item.semesters && item.semesters.length > 0 && (
                <div className="mt-6">
                  <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
                    Semester-wise CGPA
                  </p>
                  <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-6">
                    {item.semesters.map((sem) => {
                      const clickable = Boolean(sem.scorecardImage);
                      return (
                        <button
                          key={sem.label}
                          type="button"
                          disabled={!clickable}
                          onClick={() =>
                            sem.scorecardImage &&
                            setLightbox({
                              src: sem.scorecardImage,
                              alt: `${item.degree} — ${sem.label} scorecard`,
                            })
                          }
                          className={`rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-2 py-3 text-center transition-colors ${
                            clickable ? 'cursor-pointer hover:border-[var(--color-accent)]' : 'cursor-default'
                          }`}
                        >
                          <p className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-accent)]">
                            {sem.cgpa}
                          </p>
                          <p className="mt-0.5 text-[11px] text-[var(--color-text-muted)]">{sem.label}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {item.coursework.length > 0 && (
                <div className="mt-6">
                  <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text)]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <PhotoLightbox
        src={lightbox?.src ?? ''}
        alt={lightbox?.alt ?? ''}
        open={lightbox !== null}
        onClose={() => setLightbox(null)}
      />
    </section>
  );
}
