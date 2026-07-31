export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  description: string;
}

// TODO: replace with your real roles/education, most recent first.
export const experience: ExperienceItem[] = [
  {
    role: 'Software Developer',
    org: 'Company Name',
    period: '2024 — Present',
    description: 'One or two lines about your responsibilities and impact in this role.',
  },
  {
    role: 'Software Development Intern',
    org: 'Company Name',
    period: '2023 — 2024',
    description: 'One or two lines about your responsibilities and impact in this role.',
  },
  {
    role: 'B.Tech, Computer Science',
    org: 'University Name',
    period: '2020 — 2024',
    description: 'Relevant coursework, achievements, or activities.',
  },
];
