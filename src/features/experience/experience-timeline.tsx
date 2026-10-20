import { useTranslation } from 'react-i18next'
import type { ExperienceItem } from '@/data/experience'
import { cn } from '@/lib/utils'

interface ExperienceTimelineProps {
  item: ExperienceItem
  isHighlighted: boolean
}

export function ExperienceTimeline({ item, isHighlighted }: ExperienceTimelineProps) {
  const { t } = useTranslation()

  const role = t(item.roleKey)
  const descriptions = t(item.descriptionKey, { returnObjects: true })

  return (
    <div className="space-y-3">
      <h4
        className={cn(
          'text-lg font-bold tracking-tight transition-colors duration-300 sm:text-xl',
          isHighlighted ? 'text-primary' : 'text-primary-foreground',
        )}
      >
        {role}
      </h4>

      <ul className="list-disc space-y-2 pl-5 text-xs leading-relaxed text-muted-dark sm:text-sm">
        {descriptions.map((point) => (
          <li key={point} className="pl-0.5 leading-normal">
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}
