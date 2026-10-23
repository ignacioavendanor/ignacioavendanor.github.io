import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ScrollSlideProps {
  children: ReactNode
  direction: 'left' | 'right'
  className?: string
}

export function ScrollSlide({ children, direction, className }: ScrollSlideProps) {
  const targetRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 50%', 'start 45%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.5 })
  const offset = direction === 'left' ? -112 : 112
  const x = useTransform(progress, [0, 1], [offset, 0])
  const opacity = useTransform(progress, [0, 0.8, 1], [0, 0.8, 1])

  return (
    <motion.div
      ref={targetRef}
      style={{
        x: shouldReduceMotion ? 0 : x,
        opacity: shouldReduceMotion ? 1 : opacity,
      }}
      className={cn('w-full', className)}
    >
      {children}
    </motion.div>
  )
}
