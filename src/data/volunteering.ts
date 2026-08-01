export interface VolunteerItem {
  role: string;
  org: string;
  period: string;
  description?: string;
  contributions: string[];
  tags?: string[];
  certificateUrl?: string;
}

// Most recent first. `certificateUrl` points to a LOR in public/docs.
export const volunteering: VolunteerItem[] = [
  {
    role: 'Team Leader & Website Developer',
    org: 'Jacob Classes',
    period: 'May 2025 — Jul 2025',
    contributions: [
      'Led a 4-member team to design and build a website for Jacob Classes, a coaching institute serving students from Std 8th–12th, coordinating directly with the client to align on requirements and timelines.',
      'Personally managed frontend development of the Online Resources Page, and integrated the Sign-Up form with Google Apps Script for registration capture.',
      "Compiled and unified the team's individual contributions into one cohesive codebase, then deployed the final site on GitHub Pages.",
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Google Apps Script', 'GitHub Pages', 'Team Leadership'],
    certificateUrl: '/docs/jacob-classes-lor.pdf',
  },
  {
    role: 'Volunteer',
    org: 'Junoon Foundation',
    // TODO: confirm exact month if you want this dated more precisely.
    period: 'Summer 2024 (1st Year)',
    description:
      'During my first-year summer break, I volunteered with Junoon Foundation, an NGO that has spent over a decade uplifting underprivileged children. I focused on connecting passionate individuals with roles suited to their skills, and engaged with potential sponsors — sharing the impact their support could have on the children we served. The work directly supported education initiatives, ration supply drives, and field trips/annual events for the children.',
    contributions: [
      'Identified and onboarded volunteers into roles aligned with their skills and commitment to the cause.',
      'Engaged prospective sponsors, communicating the tangible impact of their contributions on educational and resource-based initiatives.',
      'Supported on-ground efforts including ration distribution and organizing field trips and annual events for underprivileged children.',
    ],
    tags: ['Volunteer Coordination', 'Sponsor Outreach', 'Community Service', 'Social Impact'],
  },
];
