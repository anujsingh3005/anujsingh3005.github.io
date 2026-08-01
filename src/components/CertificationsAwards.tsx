import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, BadgeCheck, Link as LinkIcon, Users } from 'lucide-react';
import { awards, certifications, type CertAward } from '../data/certifications';
import { Reveal } from './Reveal';

function AwardCard({ item, isOpen, onEnter, onLeave }: {
  item: CertAward;
  isOpen: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors hover:border-[var(--color-accent)]"
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <Award size={22} className="mt-0.5 flex-shrink-0 text-[var(--color-accent)]" />
          <div className="min-w-0 flex-1">
            <p className="font-medium text-[var(--color-text)]">{item.title}</p>
            {item.result && (
              <span className="mt-2 inline-block rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--color-accent)]">
                {item.result}
              </span>
            )}
            {item.project && (
              <p className="mt-2 text-sm font-medium text-[var(--color-text)]">{item.project}</p>
            )}
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              {[item.venue, item.date].filter(Boolean).join(' · ')}
            </p>
            {item.details && (
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.details}</p>
            )}
          </div>
          {item.certificateUrl && (
            <a
              href={item.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open certificate reference"
              className="mt-0.5 flex-shrink-0 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <LinkIcon size={16} />
            </a>
          )}
        </div>
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
                alt={`${item.title} photo`}
                className="w-full rounded-lg border border-[var(--color-border)]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CertCard({ item }: { item: CertAward }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]">
      <BadgeCheck size={22} className="mt-0.5 flex-shrink-0 text-[var(--color-accent)]" />
      <div className="min-w-0 flex-1">
        <p className="font-medium text-[var(--color-text)]">{item.title}</p>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          {[item.issuer, item.date].filter(Boolean).join(' · ')}
        </p>
        {item.instructors && (
          <p className="mt-1 flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
            <Users size={13} />
            {item.instructors}
          </p>
        )}
        {(item.score || item.duration) && (
          <span className="mt-2 inline-block rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--color-accent)]">
            {item.score ?? item.duration}
          </span>
        )}
      </div>
      {item.certificateUrl && (
        <a
          href={item.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open certificate reference"
          className="mt-0.5 flex-shrink-0 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          <LinkIcon size={16} />
        </a>
      )}
    </div>
  );
}

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
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-12 text-sm font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
          Hackathons &amp; Competitions
        </p>
      </Reveal>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {awards.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <AwardCard
              item={item}
              isOpen={openIndex === i}
              onEnter={() => setOpenIndex(i)}
              onLeave={() => setOpenIndex((cur) => (cur === i ? null : cur))}
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.05}>
        <p className="mt-12 text-sm font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
          Certifications
        </p>
      </Reveal>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {certifications.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <CertCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
