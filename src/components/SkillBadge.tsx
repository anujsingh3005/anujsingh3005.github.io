import { brandPaths } from '../data/brandPaths';

export type BadgeType =
  | 'html'
  | 'css'
  | 'js'
  | 'react'
  | 'angular'
  | 'reactnative'
  | 'flutter'
  | 'node'
  | 'springboot'
  | 'python'
  | 'sql'
  | 'postgres'
  | 'mongo'
  | 'firebase'
  | 'git'
  | 'github'
  | 'docker'
  | 'aws'
  | 'vscode'
  | 'postman';

const pathKeyByBadge: Partial<Record<BadgeType, keyof typeof brandPaths>> = {
  html: 'html5',
  css: 'css3',
  js: 'javascript',
  react: 'react',
  angular: 'angular',
  reactnative: 'reactnative',
  flutter: 'flutter',
  node: 'node',
  springboot: 'springboot',
  python: 'python',
  postgres: 'postgresql',
  mongo: 'mongodb',
  firebase: 'firebase',
  git: 'git',
  github: 'github',
  docker: 'docker',
  aws: 'amazonaws',
  vscode: 'vscode',
  postman: 'postman',
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

  if (type === 'sql') {
    return (
      <div
        style={{ width: size, height: size, borderWidth: border }}
        className="flex items-center justify-center rounded-xl border-current"
      >
        <span
          style={{ fontSize: size * 0.24 }}
          className="font-[family-name:var(--font-display)] font-bold leading-none"
        >
          SQL
        </span>
      </div>
    );
  }

  const pathKey = pathKeyByBadge[type];
  const path = pathKey ? brandPaths[pathKey] : undefined;

  return (
    <div
      style={{ width: size, height: size, borderWidth: border }}
      className="flex items-center justify-center rounded-xl border-current"
    >
      {path && <Logo path={path} size={iconSize} />}
    </div>
  );
}
