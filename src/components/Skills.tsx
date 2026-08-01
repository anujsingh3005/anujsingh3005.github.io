import { skillCategories } from '../data/skills';
import { SkillBadge } from './SkillBadge';
import { Reveal } from './Reveal';

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
          Skills
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
          What I work with
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skillCategories.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="mb-5 text-sm font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-5">
                {group.items.map((item) => (
                  <div key={item.name} className="flex w-16 flex-col items-center gap-2 text-center">
                    <div className="text-[var(--color-text)]">
                      <SkillBadge type={item.badge} size={40} />
                    </div>
                    <span className="text-xs leading-tight text-[var(--color-text-muted)]">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
