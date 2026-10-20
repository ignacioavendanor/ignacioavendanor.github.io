import { Badge } from '@/components/ui/badge'
import { TECHNOLOGIES } from '@/data/technologies'

export function AboutTechnologies() {
  return (
    <div className="flex w-full max-w-2xl flex-wrap gap-2 sm:gap-2.5">
      {TECHNOLOGIES.map((tech) => (
        <Badge
          key={tech}
          variant="outline"
          className="h-auto max-w-full px-2.5 py-1 text-xs sm:text-sm 2xl:px-3 2xl:py-1.5 2xl:text-base"
        >
          {tech}
        </Badge>
      ))}
    </div>
  )
}
