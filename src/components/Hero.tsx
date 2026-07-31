import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { profile } from '../data/profile';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] items-center overflow-hidden px-6"
    >
      <div
        aria-hidden
        className="animate-blob absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--color-accent)] opacity-20 blur-[110px]"
      />
      <div
        aria-hidden
        className="animate-blob absolute -bottom-40 left-[-10%] h-[380px] w-[380px] rounded-full bg-[var(--color-accent)] opacity-10 blur-[110px]"
        style={{ animationDelay: '-9s' }}
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center rounded-full border border-[var(--color-border)] px-4 py-1.5 text-sm text-[var(--color-text-muted)]"
        >
          {profile.title} · {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,5.25rem)] font-semibold leading-[1.05] tracking-tight text-[var(--color-text)]"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)] sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            View my work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <Mail size={16} />
            Contact me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
