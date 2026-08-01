export interface ExperienceStat {
  value: string;
  label: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  status?: string;
  stats?: ExperienceStat[];
  achievements: string[];
  tags?: string[];
  certificateUrl?: string;
}

// TODO: replace with your real roles, most recent first. `certificateUrl`
// should point to a LOR / internship completion certificate / offer letter
// if you have one to link — omit the field if you don't.
export const experience: ExperienceItem[] = [
  {
    role: 'Software Developer',
    org: 'Company Name',
    period: '2024 — Present',
    status: 'Current',
    stats: [
      { value: '40%', label: 'Faster load times' },
      { value: '12+', label: 'Features shipped' },
    ],
    achievements: [
      'One or two lines about a concrete win — what you built, the problem it solved, and the measurable impact.',
      'A second achievement, ideally with a number attached (users, performance, time saved).',
    ],
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    role: 'Software Development Intern',
    org: 'Company Name',
    period: '2023 — 2024',
    status: 'Internship',
    stats: [{ value: '3', label: 'Projects shipped' }],
    achievements: [
      'One or two lines about your responsibilities and impact in this role.',
      'A second bullet describing a specific contribution or result.',
    ],
    tags: ['JavaScript', 'REST APIs'],
    certificateUrl: 'https://example.com/certificate/internship-completion',
  },
];
