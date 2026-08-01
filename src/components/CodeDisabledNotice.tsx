import { AnimatePresence, motion } from 'framer-motion';
import { Lock, Mail, X } from 'lucide-react';
import { profile } from '../data/profile';

interface CodeDisabledNoticeProps {
  open: boolean;
  onClose: () => void;
}

export function CodeDisabledNotice({ open, onClose }: CodeDisabledNoticeProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              <X size={16} />
            </button>

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-soft)]">
              <Lock size={20} className="text-[var(--color-accent)]" />
            </div>

            <p className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text)]">
              Code preview is disabled
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
              This repository is private for now. Kindly contact me if you'd like to take a look.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-transform hover:scale-105"
            >
              <Mail size={15} />
              Contact me
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
