import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { useTimelineProgress } from '@/hooks/useTimelineProgress'
import { TimelineItem, type TimelineEntry } from './timeline-item'

interface TimelineProps {
  data: TimelineEntry[]
  className?: string
}

export function Timeline({ data, className }: TimelineProps) {
  const {
    activeProgress,
    highlightedIndex,
    trackRef,
    handlePointerEnter,
    handlePointerLeave,
    setNodeRef,
  } = useTimelineProgress()

  return (
    <div className={cn('relative w-full font-sans', className)}>
      <div ref={trackRef} className="relative">
        <div className="absolute inset-y-0 left-12 w-1 -translate-x-1/2 bg-linear-to-b from-transparent via-border/10 to-transparent md:left-1/2" />
        <motion.div
          aria-hidden="true"
          style={{ scaleY: activeProgress, transformOrigin: 'top' }}
          className="absolute inset-y-0 left-12 z-1 w-2 -translate-x-1/2 bg-linear-to-b from-transparent via-primary via-90% to-primary/30 blur-md md:left-1/2"
        />
        <motion.div
          aria-hidden="true"
          style={{ scaleY: activeProgress, transformOrigin: 'top' }}
          className="absolute inset-y-0 left-12 z-1 w-1 -translate-x-1/2 bg-linear-to-b from-transparent via-primary via-90% to-primary/20 md:left-1/2"
        />

        <div className="relative z-10">
          {data.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isHighlighted={highlightedIndex !== null && index <= highlightedIndex}
              onPointerEnter={handlePointerEnter}
              onPointerLeave={handlePointerLeave}
              setNodeRef={(node) => setNodeRef(index, node)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
