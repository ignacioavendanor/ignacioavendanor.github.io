import portfolio from '@/assets/images/projects/portfolio.webp'
import sgp from '@/assets/images/projects/sgp.webp'

export interface ProjectItem {
  id: string
  titleKey: `projects.${string}.title`
  descriptionKey: `projects.${string}.description`
  link?: string
  techsKey?: `projects.${string}.techs`
  image: string
}

export const PROJECTS = [
  {
    id: 'portfolio',
    titleKey: 'projects.portfolio.title',
    descriptionKey: 'projects.portfolio.description',
    techsKey: 'projects.portfolio.techs',
    image: portfolio,
  },
  {
    id: 'sgp',
    titleKey: 'projects.sgp.title',
    descriptionKey: 'projects.sgp.description',
    image: sgp,
    techsKey: 'projects.sgp.techs',
  },
] as const satisfies readonly ProjectItem[]
