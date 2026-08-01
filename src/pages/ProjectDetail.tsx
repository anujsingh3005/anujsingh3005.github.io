import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { GithubIcon } from '../components/BrandIcons';
import { ThemeToggle } from '../components/ThemeToggle';
import { Reveal } from '../components/Reveal';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

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
          <h1 className="text-balance font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">{project.summary}</p>

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
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-transform hover:scale-105"
              >
                <ExternalLink size={15} />
                View live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <GithubIcon size={15} />
                View code
              </a>
            )}
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
              Objective
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">{project.objective}</p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)]">
              Approach
            </h2>
            <ol className="mt-4 space-y-4">
              {project.approach.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-xs font-medium text-[var(--color-text-muted)]">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 leading-relaxed text-[var(--color-text)]">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text)]">
              Outcome
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">{project.outcome}</p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <Link
            to="/"
            className="mt-14 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <ArrowLeft size={15} />
            Back to all projects
          </Link>
        </Reveal>
      </main>
    </div>
  );
}
