import type { BadgeType } from '../components/SkillBadge';

export interface SkillItem {
  name: string;
  badge: BadgeType;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', badge: 'python' },
      { name: 'Java', badge: 'java' },
      { name: 'JavaScript', badge: 'js' },
      { name: 'TypeScript', badge: 'ts' },
      { name: 'HTML', badge: 'html' },
      { name: 'CSS', badge: 'css' },
      { name: 'C', badge: 'c' },
      { name: 'C++', badge: 'cplusplus' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React', badge: 'react' },
      { name: 'React Native', badge: 'reactnative' },
      { name: 'Node.js', badge: 'node' },
      { name: 'Express.js', badge: 'express' },
      { name: 'Flutter', badge: 'flutter' },
      { name: 'Spring Boot', badge: 'springboot' },
      { name: 'Bootstrap', badge: 'bootstrap' },
      { name: 'jQuery', badge: 'jquery' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', badge: 'postgres' },
      { name: 'MongoDB', badge: 'mongo' },
      { name: 'MySQL', badge: 'mysql' },
    ],
  },
  {
    category: 'Tools & Infrastructure',
    items: [
      { name: 'Docker', badge: 'docker' },
      { name: 'Redis', badge: 'redis' },
      { name: 'Nginx', badge: 'nginx' },
      { name: 'AWS', badge: 'aws' },
      { name: 'GitHub', badge: 'github' },
      { name: 'Postman', badge: 'postman' },
      { name: 'Figma', badge: 'figma' },
      { name: 'Power BI', badge: 'powerbi' },
    ],
  },
  {
    category: 'AI / ML Stack',
    items: [
      { name: 'FastAPI', badge: 'fastapi' },
      { name: 'LangGraph', badge: 'langgraph' },
      { name: 'Ollama', badge: 'ollama' },
      { name: 'ChromaDB', badge: 'chromadb' },
    ],
  },
];
