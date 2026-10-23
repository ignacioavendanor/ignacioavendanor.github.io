import { motion, useReducedMotion, type Variants } from 'motion/react'

const FIRST_NAME = 'IGNACIO'.split('')
const LAST_NAME = 'AVENDAÑO'.split('')

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
}

const letterVariants: Variants = {
  hidden: { opacity: 0.2 },
  show: {
    opacity: 1,
    transition: { duration: 0.15 },
  },
}

export function Preloader() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-background overflow-hidden"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={shouldReduceMotion ? undefined : { y: '-100%' }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.h1
        variants={containerVariants}
        initial={shouldReduceMotion ? false : 'hidden'}
        animate={shouldReduceMotion ? undefined : 'show'}
        className="text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-none select-none"
        style={{
          color: 'var(--background)',
          WebkitTextStroke: '8px var(--primary)',
          paintOrder: 'stroke fill',
        }}
      >
        <div className="flex justify-center flex-wrap">
          {FIRST_NAME.map((char, index) => (
            <motion.span key={`first-${index}`} variants={letterVariants} className="inline-block">
              {char}
            </motion.span>
          ))}
        </div>

        <div className="flex justify-center flex-wrap mt-2">
          {LAST_NAME.map((char, index) => (
            <motion.span key={`last-${index}`} variants={letterVariants} className="inline-block">
              {char}
            </motion.span>
          ))}
        </div>
      </motion.h1>
    </motion.div>
  )
}
