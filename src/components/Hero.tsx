import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { useSectionNav } from '../hooks/useSectionNav';

export function Hero() {
  const goTo = useSectionNav();

  return (
    <section id="top" className="relative flex min-h-[92svh] items-center overflow-hidden px-6">
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-4 py-1.5 text-sm text-[var(--color-text-muted)] backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          </span>
          Open to work · {profile.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance font-[family-name:var(--font-display)] text-[clamp(2.25rem,6vw,4rem)] leading-[1.08] tracking-tight text-[var(--color-text)]"
        >
          Hi, I'm <span className="font-semibold">{profile.name}</span> —
          <br />a {profile.title.toLowerCase()}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-text-muted)]"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => goTo('projects')}
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition-transform hover:scale-105"
          >
            View my work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            type="button"
            onClick={() => goTo('contact')}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <Mail size={16} />
            Contact me
          </button>
        </motion.div>

        <motion.button
          type="button"
          onClick={() => goTo('experience')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
        >
          <ArrowDown size={14} />
          See my experience
        </motion.button>
      </div>
    </section>
  );
}
