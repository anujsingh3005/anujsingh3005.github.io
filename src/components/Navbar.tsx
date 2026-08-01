import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';
import { useSectionNav } from '../hooks/useSectionNav';
import { PhotoLightbox } from './PhotoLightbox';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Volunteering', id: 'volunteering' },
  { label: 'Publications', id: 'publications' },
  { label: 'Contact', id: 'contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [photoOpen, setPhotoOpen] = useState(false);
  const goTo = useSectionNav();

  const handleClick = (id: string) => {
    if (open) {
      setOpen(false);
      // Wait for the mobile menu's collapse animation to finish so it
      // doesn't fight the scroll-into-view.
      window.setTimeout(() => goTo(id), 300);
    } else {
      goTo(id);
    }
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-lg">
          <div className="flex items-center gap-2 pl-1">
            <button
              type="button"
              onClick={() => setPhotoOpen(true)}
              aria-label={`View ${profile.name}'s photo`}
              className="flex-shrink-0"
            >
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="h-8 w-8 rounded-full border border-[var(--color-border)] object-cover transition-transform hover:scale-110"
              />
            </button>
            <button
              type="button"
              onClick={() => handleClick('top')}
              className="hidden text-sm font-medium text-[var(--color-text)] sm:inline"
            >
              {profile.name}
            </button>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleClick(link.id)}
                className="whitespace-nowrap text-[13px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-[var(--color-bg)] transition-transform hover:scale-105"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)]"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-2 flex flex-col gap-1 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/95 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-lg">
                {links.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleClick(link.id)}
                    className="rounded-xl px-2 py-2 text-left text-[var(--color-text)]"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-[var(--color-accent)] px-4 py-2 text-center text-sm font-medium text-[var(--color-bg)]"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <PhotoLightbox
        src={profile.photoUrl}
        alt={profile.name}
        open={photoOpen}
        onClose={() => setPhotoOpen(false)}
      />
    </header>
  );
}
