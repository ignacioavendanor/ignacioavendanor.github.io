import { motion, type HTMLMotionProps } from 'motion/react'

interface RevealProps extends HTMLMotionProps<'div'> {
  delay?: number
  y?: number
  duration?: number
}

export function Reveal({ children, delay = 0, y = 16, duration = 0.45, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
