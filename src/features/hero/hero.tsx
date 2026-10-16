import { motion } from 'motion/react'
import { Container } from '@/components/layouts/Container'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import profilePic from '@/assets/images/profile-picture.webp'
import { useTranslation } from 'react-i18next'
import { DownloadCvButton } from './download-cv'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="home"
      className="relative flex min-h-svh w-full flex-col justify-center overflow-hidden bg-background py-4 xs:py-6 sm:py-12 md:py-16 lg:py-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-primary lg:block"
      />

      <Container className="relative z-20 flex min-h-svh flex-col-reverse items-center justify-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-start lg:gap-0">
        <div className="flex w-full flex-col items-center px-2 text-center sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-xl lg:items-start lg:text-left xl:max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-2xl font-black uppercase leading-none xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            <span className="mb-1 block text-xs font-extrabold uppercase tracking-tight text-primary xs:mb-2 sm:text-sm lg:text-xl xl:text-2xl">
              {t('hero.role')}
            </span>
            Ignacio
            <br />
            Avendaño
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground xs:mt-3 sm:mt-5 sm:max-w-md md:mt-6 md:max-w-lg md:text-lg"
          >
            Lorem ipsum <span className="font-semibold italic text-primary">dolor sit amet</span>,
            consectetur adipiscing elit. Sed do eiusmo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="mt-4 flex flex-wrap items-center justify-center gap-2.5 xs:mt-5 xs:gap-3 sm:mt-7 sm:gap-4 lg:justify-start"
          >
            <Button size="xl">
              <a href="#projects" className="flex items-center">
                Ver Proyectos
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 stroke-2 sm:ml-2 sm:h-4 sm:w-4" />
              </a>
            </Button>

            <DownloadCvButton />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="relative flex w-full justify-center lg:absolute lg:bottom-0 lg:right-14 lg:w-auto xl:right-32 2xl:right-10"
        >
          <img
            src={profilePic}
            alt="Ignacio Avendaño"
            className="h-56 w-auto cursor-pointer object-contain object-bottom grayscale transition-all duration-500 ease-in-out hover:grayscale-0 xs:h-72 sm:h-80 md:h-[42vh] lg:h-svh lg:pt-10 2xl:pt-12"
          />
        </motion.div>
      </Container>
    </section>
  )
}
