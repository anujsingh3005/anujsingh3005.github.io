import { profile } from '../data/profile';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
          About
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.3fr] md:items-start">
        <Reveal delay={0.1}>
          <div className="aspect-square w-full max-w-xs overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            A little about me
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
            {profile.bio}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
