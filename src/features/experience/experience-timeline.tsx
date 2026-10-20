import type { ReactNode } from 'react'

interface ExperienceTimelineProps {
  role: string
  description: ReactNode
}

export function ExperienceTimeline({ role, description }: ExperienceTimelineProps) {
  return (
    <div>
      <h4 className="text-lg font-bold tracking-tight text-primary-foreground sm:text-xl">
        {role}
      </h4>

      <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground sm:text-base">
        {description}
      </p>
    </div>
  )
}
