import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react'

interface RevealProps extends HTMLMotionProps<'div'> {
  delay?: number
  y?: number
  x?: number
  scale?: number
  duration?: number
  amount?: number
  once?: boolean
}

export function Reveal({
  children,
  delay = 0,
  y = 3,
  x = 0,
  scale = 1,
  duration = 0.2,
  amount = 0.35,
  once = true,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const reducedY = Math.sign(y) * Math.min(Math.abs(y), 3)
  const reducedX = Math.sign(x) * Math.min(Math.abs(x), 3)
  const reducedScale = 1 + (scale - 1) * 0.15

  return (
    <motion.div
      initial={
        shouldReduceMotion ? false : { opacity: 0, y: reducedY, x: reducedX, scale: reducedScale }
      }
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount, margin: '-40px' }}
      transition={{
        duration: shouldReduceMotion ? 0 : Math.min(duration, 0.2),
        delay: shouldReduceMotion ? 0 : Math.min(delay, 0.04),
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
