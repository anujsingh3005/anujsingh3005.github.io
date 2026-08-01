export interface SemesterResult {
  label: string;
  cgpa: string;
  scorecardImage?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score?: string;
  coursework: string[];
  semesters?: SemesterResult[];
}

// TODO: replace with your real education, most recent first. `semesters` is
// the per-semester CGPA breakdown — update the values and, once you have
// them, set `scorecardImage` per semester (e.g. "/images/scorecards/sem-1.jpg")
// to make that semester's tile open the scanned scorecard in the lightbox.
export const education: EducationItem[] = [
  {
    degree: 'B.Tech, Computer Science',
    institution: 'University Name',
    period: '2020 — 2024',
    score: 'CGPA: 8.5 / 10',
    coursework: [
      'Data Structures',
      'Algorithms',
      'Operating Systems',
      'Database Systems',
      'Computer Networks',
      'Object-Oriented Programming',
    ],
    semesters: [
      { label: 'Sem 1', cgpa: '8.2' },
      { label: 'Sem 2', cgpa: '8.4' },
      { label: 'Sem 3', cgpa: '8.3' },
      { label: 'Sem 4', cgpa: '8.6' },
      { label: 'Sem 5', cgpa: '8.5' },
      { label: 'Sem 6', cgpa: '8.7' },
      { label: 'Sem 7', cgpa: '8.8' },
      { label: 'Sem 8', cgpa: '8.9' },
    ],
  },
];
