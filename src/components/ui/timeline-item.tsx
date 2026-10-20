import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

export interface TimelineEntry {
  id: string
  logo: string
  company: string
  period: string
  location: string
  content: (isHighlighted: boolean) => ReactNode
}

interface TimelineItemProps {
  item: TimelineEntry
  index: number
  isHighlighted: boolean
  onPointerEnter: (index: number) => void
  onPointerLeave: () => void
  setNodeRef: (node: HTMLDivElement | null) => void
}

export function TimelineItem({
  item,
  index,
  isHighlighted,
  onPointerEnter,
  onPointerLeave,
  setNodeRef,
}: TimelineItemProps) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      onPointerEnter={() => onPointerEnter(index)}
      onPointerLeave={onPointerLeave}
      className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-6 gap-y-7 py-20 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-0 md:py-28"
    >
      <div
        className={cn(
          'col-start-2 min-w-0 md:row-start-1',
          isEven ? 'md:col-start-1 md:pr-10 md:text-right' : 'md:col-start-3 md:pl-10 md:text-left',
        )}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
          {item.period}
        </p>
        <h3
          className={cn(
            'text-2xl font-black tracking-tight transition-colors sm:text-3xl',
            isHighlighted ? 'text-primary' : 'text-primary-foreground',
          )}
        >
          {item.company}
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-dark">
          {item.location}
        </p>
      </div>

      <div
        ref={setNodeRef}
        className="relative col-start-1 row-span-2 row-start-1 flex h-24 w-24 items-center justify-center justify-self-center md:col-start-2 md:row-span-1 md:h-28 md:w-28"
      >
        <span
          aria-hidden="true"
          className={cn(
            'absolute inset-0 rounded-full bg-primary blur-md transition-opacity duration-300',
            isHighlighted ? 'opacity-100' : 'opacity-0',
          )}
        />
        <div
          className={cn(
            'relative z-10 flex h-full w-full items-center justify-center rounded-full border-4 bg-foreground p-4 transition-colors duration-300',
            isHighlighted ? 'border-primary' : 'border-border/10',
          )}
        >
          <img
            src={item.logo}
            alt={`${item.company} logo`}
            className="max-h-14 max-w-14 object-contain md:max-h-16 md:max-w-16"
          />
        </div>
      </div>

      <div
        className={cn(
          'col-start-2 min-w-0 md:row-start-1',
          isEven ? 'md:col-start-3 md:pl-10' : 'md:col-start-1 md:pr-10',
        )}
      >
        {item.content(isHighlighted)}
      </div>
    </motion.article>
  )
}
