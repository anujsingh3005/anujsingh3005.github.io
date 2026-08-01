import { brandPaths } from '../data/brandPaths';

export type BadgeType =
  | 'html'
  | 'css'
  | 'js'
  | 'ts'
  | 'react'
  | 'angular'
  | 'reactnative'
  | 'flutter'
  | 'node'
  | 'springboot'
  | 'python'
  | 'java'
  | 'c'
  | 'cplusplus'
  | 'express'
  | 'bootstrap'
  | 'jquery'
  | 'sql'
  | 'postgres'
  | 'mysql'
  | 'mongo'
  | 'firebase'
  | 'git'
  | 'github'
  | 'docker'
  | 'redis'
  | 'nginx'
  | 'aws'
  | 'vscode'
  | 'postman'
  | 'figma'
  | 'powerbi'
  | 'fastapi'
  | 'langgraph'
  | 'ollama'
  | 'chromadb';

const pathKeyByBadge: Partial<Record<BadgeType, keyof typeof brandPaths>> = {
  html: 'html5',
  css: 'css3',
  js: 'javascript',
  ts: 'typescript',
  react: 'react',
  angular: 'angular',
  reactnative: 'reactnative',
  flutter: 'flutter',
  node: 'node',
  springboot: 'springboot',
  python: 'python',
  java: 'java',
  c: 'c',
  cplusplus: 'cplusplus',
  express: 'express',
  bootstrap: 'bootstrap',
  jquery: 'jquery',
  postgres: 'postgresql',
  mysql: 'mysql',
  mongo: 'mongodb',
  firebase: 'firebase',
  git: 'git',
  github: 'github',
  docker: 'docker',
  redis: 'redis',
  nginx: 'nginx',
  aws: 'amazonaws',
  vscode: 'vscode',
  postman: 'postman',
  figma: 'figma',
  powerbi: 'powerbi',
  fastapi: 'fastapi',
  langgraph: 'langgraph',
  ollama: 'ollama',
};

// Badges with no available brand mark fall back to a short text monogram.
const monogramByBadge: Partial<Record<BadgeType, string>> = {
  sql: 'SQL',
  chromadb: 'Chroma',
};

function Logo({ path, size }: { path: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d={path} />
    </svg>
  );
}

interface SkillBadgeProps {
  type: BadgeType;
  size?: number;
}

export function SkillBadge({ type, size = 48 }: SkillBadgeProps) {
  const border = Math.max(size * 0.045, 1.5);
  const iconSize = size * 0.5;
  const monogram = monogramByBadge[type];

  return (
    <div
      style={{ width: size, height: size, borderWidth: border }}
      className="flex items-center justify-center rounded-xl border-current"
    >
      {monogram ? (
        <span
          style={{ fontSize: size * (monogram.length > 3 ? 0.19 : 0.24) }}
          className="font-[family-name:var(--font-display)] font-bold leading-none"
        >
          {monogram}
        </span>
      ) : (
        (() => {
          const pathKey = pathKeyByBadge[type];
          const path = pathKey ? brandPaths[pathKey] : undefined;
          return path ? <Logo path={path} size={iconSize} /> : null;
        })()
      )}
    </div>
  );
}
