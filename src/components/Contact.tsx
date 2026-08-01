import { Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { GithubIcon, LinkedinIcon, XIcon } from './BrandIcons';
import { Reveal } from './Reveal';

// TODO: create a free form at https://formspree.io and replace this endpoint
// with your own form ID (e.g. "https://formspree.io/f/xxxxabcd").
const FORM_ENDPOINT = 'https://formspree.io/f/your-form-id';

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
          Contact
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
          Let's work together
        </h2>
        <p className="mt-4 max-w-xl text-lg text-[var(--color-text-muted)]">
          Have a role, project, or idea in mind? My inbox is open.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <Reveal delay={0.1}>
          <form action={FORM_ENDPOINT} method="POST" className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)]"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={5}
              className="resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)]"
            />
            <button
              type="submit"
              className="self-start rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition-transform hover:scale-105"
            >
              Send message
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex h-full flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
            <div>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-lg font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
              >
                <Mail size={18} />
                {profile.email}
              </a>
              <p className="mt-3 text-[var(--color-text-muted)]">
                Based in {profile.location}. Open to full-time roles and freelance work.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={profile.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <XIcon size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
