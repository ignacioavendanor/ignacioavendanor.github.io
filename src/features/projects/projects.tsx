import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layouts/Container'
import { ProjectCard, type ProjectCardData } from './project-card'
import { Reveal } from '@/components/ui/reveal'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/data/projects'

export function Projects() {
  const { t } = useTranslation()
  const projectsData: ProjectCardData[] = PROJECTS.map((project) => ({
    id: project.id,
    title: t(project.titleKey),
    description: t(project.descriptionKey),
    technologies: project.techsKey ? t(project.techsKey, { returnObjects: true }) : [],
    link: 'link' in project && typeof project.link === 'string' ? project.link : undefined,
    image: project.image,
  }))

  return (
    <section
      id="projects"
      className="flex min-h-svh items-center overflow-x-clip py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-10">
          <Reveal y={10} duration={0.4}>
            <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
              {t('projects.eyebrow')}
              <span className="block text-primary">{t('projects.accent')}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} y={6} duration={0.4}>
            <Separator className="my-4 bg-linear-to-r from-transparent via-primary to-transparent" />
          </Reveal>
        </div>
        <ProjectCard data={projectsData} viewProjectLabel={t('projects.viewProject')} />
      </Container>
    </section>
  )
}
