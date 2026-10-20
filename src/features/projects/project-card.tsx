import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollSlide } from '@/components/ui/scroll-slide'
import { cn } from '@/lib/utils'

export interface ProjectCardData {
  id: string
  title: string
  description: string
  technologies: readonly string[]
  link?: string
  image: string
}

interface ProjectCardProps {
  data: ProjectCardData[]
  viewProjectLabel: string
}

export function ProjectCard({ data, viewProjectLabel }: ProjectCardProps) {
  return (
    <div className="mx-auto grid max-w-6xl gap-14 sm:gap-20">
      {data.map((project, index) => (
        <ProjectCardItem
          key={project.id}
          project={project}
          index={index}
          viewProjectLabel={viewProjectLabel}
        />
      ))}
    </div>
  )
}

interface ProjectCardItemProps {
  project: ProjectCardData
  index: number
  viewProjectLabel: string
}

function ProjectCardItem({ project, index, viewProjectLabel }: ProjectCardItemProps) {
  const isReversed = index % 2 !== 0

  return (
    <ScrollSlide
      direction={isReversed ? 'right' : 'left'}
      className={cn('group mx-auto grid max-w-6xl items-center gap-5 md:grid-cols-2 md:gap-10')}
    >
      <div
        className={cn(
          'flex min-w-0 items-center justify-center overflow-hidden',
          isReversed && 'md:order-2',
        )}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="h-auto max-h-[42svh] w-full object-contain grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
        />
      </div>

      <div className={cn('min-w-0 py-2', isReversed && 'md:order-1 md:text-right')}>
        <h3 className="text-xl font-black tracking-tight text-foreground sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <div className={cn('mt-5 flex flex-wrap gap-2', isReversed && 'md:justify-end')}>
            {project.technologies.map((technology) => (
              <Badge key={technology} variant="project">
                {technology}
              </Badge>
            ))}
          </div>
        )}

        {project.link && (
          <Button
            render={
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${viewProjectLabel}: ${project.title}`}
              />
            }
            variant="outline"
            className="mt-5"
          >
            {viewProjectLabel}
            <ArrowUpRight aria-hidden="true" />
          </Button>
        )}
      </div>
    </ScrollSlide>
  )
}
