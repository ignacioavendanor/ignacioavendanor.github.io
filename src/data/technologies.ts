export const TECHNOLOGIES = [
  'React',
  'Next.js',
  '.NET Core',
  'Python',
  'SQL Server',
  'PostgreSQL',
  'Azure',
  'Docker',
] as const

export type Technology = (typeof TECHNOLOGIES)[number]
