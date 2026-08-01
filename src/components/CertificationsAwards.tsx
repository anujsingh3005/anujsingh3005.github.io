import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, BadgeCheck, Link as LinkIcon } from 'lucide-react';
import { certifications } from '../data/certifications';
import { Reveal } from './Reveal';

export function CertificationsAwards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
          Certifications &amp; Awards
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
          Recognition along the way
        </h2>
        <p className="mt-3 text-sm text-[var(--color-text-muted)]">Hover a card to preview the certificate.</p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {certifications.map((item, i) => {
          const Icon = item.type === 'award' ? Award : BadgeCheck;
          const isOpen = openIndex === i;

          return (
            <Reveal key={item.title} delay={i * 0.06}>
              <div
                onMouseEnter={() => setOpenIndex(i)}
                onMouseLeave={() => setOpenIndex((cur) => (cur === i ? null : cur))}
                className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors hover:border-[var(--color-accent)]"
              >
                <div className="flex items-start gap-4 p-6">
                  <Icon size={22} className="mt-0.5 flex-shrink-0 text-[var(--color-accent)]" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-[var(--color-text)]">{item.title}</p>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                      {item.issuer} · {item.date}
                    </p>
                  </div>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open certificate reference"
                      className="mt-0.5 flex-shrink-0 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
                    >
                      <LinkIcon size={16} />
                    </a>
                  )}
                </div>

                <AnimatePresence>
                  {isOpen && item.image && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[var(--color-border)] px-6 pb-6 pt-4">
                        <img
                          src={item.image}
                          alt={`${item.title} certificate`}
                          className="w-full rounded-lg border border-[var(--color-border)]"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
