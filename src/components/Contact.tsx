import { useState } from 'react';
import type { FormEvent } from 'react';
import { CheckCircle2, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { Reveal } from './Reveal';

type Status = 'idle' | 'sent';

function buildMailto(name: string, email: string, message: string) {
  const subject = `Portfolio contact from ${name}`;
  const body = `${message}\n\n— ${name} (${email})`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [lastMailto, setLastMailto] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');

    const mailtoUrl = buildMailto(name, email, message);
    setLastMailto(mailtoUrl);
    window.location.href = mailtoUrl;
    setStatus('sent');
    form.reset();
  };

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
          {status === 'sent' ? (
            <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center">
              <CheckCircle2 size={32} className="text-[var(--color-accent)]" />
              <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text)]">
                Your email app should be open
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                Your message is pre-filled and addressed to {profile.email} — just hit send from there.
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={lastMailto}
                  className="text-sm font-medium text-[var(--color-accent)] hover:opacity-80"
                >
                  Didn't open? Try again
                </a>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                >
                  Write a new message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                className="inline-flex items-center gap-2 self-start rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition-transform hover:scale-105"
              >
                <Mail size={16} />
                Send message
              </button>
              <p className="text-xs text-[var(--color-text-muted)]">
                Opens your email app with this filled in — nothing is sent until you hit send there.
              </p>
            </form>
          )}
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
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
