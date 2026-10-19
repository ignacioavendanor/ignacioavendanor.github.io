import { Badge } from '@/components/ui/badge'
import { TECHNOLOGIES } from '@/data/technologies'

export function AboutTechnologies() {
  return (
    <div className="flex max-w-xl flex-wrap gap-1.5 sm:gap-2">
      {TECHNOLOGIES.map((tech) => (
        <Badge key={tech} variant="outline">
          {tech}
        </Badge>
      ))}
    </div>
  )
}
