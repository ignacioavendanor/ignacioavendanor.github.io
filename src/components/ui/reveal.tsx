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
  y = 16,
  x = 0,
  scale = 1,
  duration = 0.45,
  amount = 0.35,
  once = false,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y, x, scale }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount, margin: '-40px' }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
