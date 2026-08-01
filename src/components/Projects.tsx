import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { GithubIcon } from './BrandIcons';
import { Reveal } from './Reveal';

function openProjectDetail(slug: string) {
  const base = window.location.href.split('#')[0];
  window.open(`${base}#/project/${slug}`, '_blank', 'noopener,noreferrer');
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
          Projects
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
          Selected work
        </h2>
        <p className="mt-3 text-sm text-[var(--color-text-muted)]">Click a project for the full case study.</p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.1}>
            <div
              role="link"
              tabIndex={0}
              onClick={() => openProjectDetail(project.slug)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') openProjectDetail(project.slug);
              }}
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[var(--color-accent-soft)_0_20px_40px]"
            >
              <div className="aspect-video w-full bg-[var(--color-bg-soft)]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center font-[family-name:var(--font-display)] text-2xl text-[var(--color-text-muted)]">
                    {project.title}
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {project.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--color-accent)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
                    >
                      <GithubIcon size={14} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
