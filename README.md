# Anuj Singh — Portfolio

Personal portfolio site built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion. Deployed to GitHub Pages as the root profile site.

## Before you deploy — fill in real content

Everything below is placeholder and marked with `// TODO` comments:

- `src/data/profile.ts` — name, tagline, bio, email, résumé path, social links
- `src/data/education.ts` — your real degree(s) and coursework
- `src/data/skills.ts` — your real skills
- `src/data/projects.ts` — your real projects (add screenshots to `public/images/`)
- `src/data/experience.ts` — your real roles, achievements, and stats
- `src/data/certifications.ts` — your real certifications and awards
- `src/data/volunteering.ts` — your real volunteering experience
- `src/data/publications.ts` — your real publications (or delete the section from `src/App.tsx` if not applicable)
- `public/resume.pdf` — replace with your real résumé (a placeholder copy from the project folder was used)
- `src/components/Contact.tsx` — replace `FORM_ENDPOINT` with your own [Formspree](https://formspree.io) form ID so the contact form actually delivers messages

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy (GitHub Pages)

1. Create a GitHub repo named exactly `anujsingh3005.github.io`.
2. Push this project to that repo's `main` branch.
3. In the repo's **Settings → Pages**, set "Source" to **GitHub Actions**.
4. Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to `https://anujsingh3005.github.io`.
