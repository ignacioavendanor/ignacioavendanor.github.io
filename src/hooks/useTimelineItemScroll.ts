import { useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { useRef } from 'react'

export function useTimelineItemScroll(isEven: boolean) {
  const articleRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ['start 50%', 'start 45%'],
  })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.5 })
  const enterFrom = isEven ? -112 : 112
  const horizontalPosition = useTransform(smoothProgress, [0, 1], [enterFrom, 0])
  const opacity = useTransform(smoothProgress, [0, 0.8, 1], [0, 0.8, 1])

  return {
    articleRef,
    style: {
      x: shouldReduceMotion ? 0 : horizontalPosition,
      opacity: shouldReduceMotion ? 1 : opacity,
    },
  }
}
