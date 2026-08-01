export interface VolunteerItem {
  role: string;
  org: string;
  period: string;
  description: string;
}

// TODO: replace with your real volunteering experience, most recent first.
export const volunteering: VolunteerItem[] = [
  {
    role: 'Coding Mentor',
    org: 'Local Coding Bootcamp',
    period: '2024 — Present',
    description: 'Mentor beginners through their first projects, covering web fundamentals and debugging habits.',
  },
  {
    role: 'Technical Volunteer',
    org: 'Community Tech Meetup',
    period: '2023 — 2024',
    description: 'Helped organize workshops and provided hands-on support during beginner-friendly coding sessions.',
  },
];
