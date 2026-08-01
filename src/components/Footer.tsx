import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-[var(--color-text-muted)] sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>"Passion turns potential into performance. Give me a purpose, and my drive will handle the rest."</p>
      </div>
    </footer>
  );
}
