import { motion } from 'motion/react'
import { Container } from '@/components/layouts/Container'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import profilePic from '@/assets/images/profile-picture.webp'
import { Trans, useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center justify-center overflow-x-clip bg-background py-6 xs:py-8 sm:py-10 lg:py-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-primary lg:block"
      />

      <Container>
        <div className="relative z-20 flex flex-col-reverse items-center justify-center gap-2 xs:gap-2.5 sm:gap-4 lg:min-h-svh lg:flex-row lg:items-end lg:justify-start lg:gap-8 xl:gap-12">
          {/* En mobile la caja de texto mide solo lo que ocupan sus textos (sin flex-1); en desktop recupera lg:flex-1 */}
          <div className="flex w-full min-w-0 flex-initial flex-col items-center justify-center text-center sm:max-w-xl md:max-w-2xl lg:max-w-xl lg:flex-1 lg:items-start lg:self-center lg:text-left xl:max-w-2xl">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full text-3xl font-black uppercase leading-none tracking-tight xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            >
              <span className="mb-0.5 block text-xs font-bold uppercase tracking-wider text-primary xs:mb-1 sm:text-base lg:mb-2 lg:text-lg xl:text-xl">
                {t('hero.role')}
              </span>
              Ignacio
              <br />
              Avendaño
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="mt-1 max-w-xs text-xs leading-relaxed text-muted-foreground xs:mt-1.5 sm:max-w-md sm:text-sm md:mt-2 md:max-w-lg md:text-base lg:mt-4 lg:text-lg"
            >
              <Trans
                i18nKey="hero.description"
                components={{
                  highlight: <span className="font-semibold text-primary" />,
                }}
              />
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="mt-2.5 flex flex-wrap items-center justify-center gap-2 xs:mt-3 xs:gap-2.5 sm:mt-3.5 sm:gap-3 lg:mt-5 lg:justify-start lg:gap-4"
            >
              <Button size="xl">
                <a href="#projects" className="flex items-center">
                  {t('hero.cta')}
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 stroke-2 sm:ml-2 sm:h-4 sm:w-4" />
                </a>
              </Button>

              <Button size="xl" variant="outline">
                <a href="#contact" className="flex items-center">
                  {t('hero.secondarycta')}
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="flex shrink min-w-0 items-center justify-center self-center lg:items-end lg:self-end"
          >
            <img
              src={profilePic}
              alt="Ignacio Avendaño"
              className="h-auto w-40 max-w-full object-cover xs:w-48 sm:w-60 md:w-80 lg:w-98 xl:w-105"
              loading="eager"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
