import type { BadgeType } from '../components/SkillBadge';

export interface SkillItem {
  name: string;
  badge: BadgeType;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

// TODO: adjust to your real skill set.
export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', badge: 'html' },
      { name: 'CSS', badge: 'css' },
      { name: 'JavaScript', badge: 'js' },
      { name: 'React', badge: 'react' },
      { name: 'Angular', badge: 'angular' },
      { name: 'React Native', badge: 'reactnative' },
      { name: 'Flutter', badge: 'flutter' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', badge: 'node' },
      { name: 'Spring Boot', badge: 'springboot' },
      { name: 'Python', badge: 'python' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'SQL', badge: 'sql' },
      { name: 'PostgreSQL', badge: 'postgres' },
      { name: 'MongoDB', badge: 'mongo' },
      { name: 'Firebase', badge: 'firebase' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', badge: 'git' },
      { name: 'GitHub', badge: 'github' },
      { name: 'Docker', badge: 'docker' },
      { name: 'AWS', badge: 'aws' },
      { name: 'VS Code', badge: 'vscode' },
      { name: 'Postman', badge: 'postman' },
    ],
  },
];
