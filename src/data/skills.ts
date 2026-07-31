export interface SkillGroup {
  category: string;
  items: string[];
}

// TODO: adjust to your real skill set.
export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Docker', 'GitHub Actions', 'AWS', 'Vercel'],
  },
];
