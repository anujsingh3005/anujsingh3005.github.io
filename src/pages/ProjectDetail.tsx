import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Users } from 'lucide-react';
import { projects } from '../data/projects';
import { profile } from '../data/profile';
import { GithubIcon } from '../components/BrandIcons';
import { CodeDisabledNotice } from '../components/CodeDisabledNotice';
import { ThemeToggle } from '../components/ThemeToggle';
import { Reveal } from '../components/Reveal';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [noticeOpen, setNoticeOpen] = useState(false);

  if (!project) {
    return (
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="text-lg text-[var(--color-text)]">Project not found.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>
      </main>
    );
  }

  const metaLine = [project.timeline, project.deployedAt ?? project.platform].filter(Boolean).join(' · ');

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="mx-auto flex max-w-4xl items-center justify-between rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-lg">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
          >
            <ArrowLeft size={16} />
            Back to {profile.name}
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <Reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
            Project
          </p>
          <h1 className="text-balance font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-[var(--color-text-muted)]">{project.tagline}</p>
          {metaLine && <p className="mt-2 text-sm text-[var(--color-text-muted)]">{metaLine}</p>}

          {project.teamNote && (
            <p className="mt-4 flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
              <Users size={15} className="mt-0.5 flex-shrink-0" />
              {project.teamNote}
            </p>
          )}
          {project.contribution && (
            <p className="mt-2 text-sm font-medium text-[var(--color-accent)]">
              Your contribution: {project.contribution}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setNoticeOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <GithubIcon size={15} />
              View code
            </button>
          </div>
        </Reveal>

        {project.image && (
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
              <img src={project.image} alt={project.title} className="w-full object-cover" />
            </div>
          </Reveal>
        )}

        <Reveal delay={0.15}>
          <div className="mt-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)]">
              System Overview
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">{project.overview}</p>
          </div>
        </Reveal>

        {project.featureGroups.map((group, gi) => (
          <Reveal key={group.heading} delay={0.18 + gi * 0.05}>
            <div className="mt-12">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)]">
                {group.heading}
              </h2>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-[var(--color-accent)]" />
                    <span className="leading-relaxed text-[var(--color-text)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        {project.extraSection && (
          <Reveal delay={0.3}>
            <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)]">
                {project.extraSection.heading}
              </h2>
              <ul className="mt-4 space-y-3">
                {project.extraSection.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-[var(--color-accent)]" />
                    <span className="leading-relaxed text-[var(--color-text)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        <Reveal delay={0.35}>
          <Link
            to="/"
            className="mt-14 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <ArrowLeft size={15} />
            Back to all projects
          </Link>
        </Reveal>
      </main>

      <CodeDisabledNotice open={noticeOpen} onClose={() => setNoticeOpen(false)} />
    </div>
  );
}
