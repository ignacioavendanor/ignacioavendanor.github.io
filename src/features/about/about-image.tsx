import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import aboutMe from '@/assets/images/about-me.png'

export function AboutImage() {
  const { t } = useTranslation()

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative aspect-[4/5] w-full max-w-56 xs:max-w-64 sm:max-w-72 md:w-80 md:max-w-none lg:w-96 xl:w-[410px] overflow-hidden shadow-2xl"
    >
      <motion.img
        src={aboutMe}
        alt={t('about.title')}
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.06 },
        }}
        transition={{
          duration: 0.45,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="h-full w-full object-cover"
      />
      <motion.div
        aria-hidden="true"
        variants={{
          rest: { opacity: 0.6 },
          hover: { opacity: 0.2 },
        }}
        transition={{
          duration: 0.45,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute inset-0 bg-primary mix-blend-color"
      />
    </motion.div>
  )
}
