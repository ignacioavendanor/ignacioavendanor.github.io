export const TECHNOLOGIES = [
  'React',
  'Next.js',
  'TypeScript',
  '.NET Core',
  'Python',
  'Django',
  'SQL Server',
  'PostgreSQL',
  'Power BI',
  'Azure',
  'Docker',
] as const

export type Technology = (typeof TECHNOLOGIES)[number]
