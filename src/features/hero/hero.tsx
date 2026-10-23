import { Container } from '@/components/layouts/Container'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { ArrowUpRight } from 'lucide-react'
import profilePic from '@/assets/images/profile-picture.webp'
import { Trans, useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center justify-center overflow-x-clip bg-background py-10 lg:h-svh lg:py-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-primary lg:block"
      />

      <Container className="h-full">
        <div className="relative z-20 flex h-full flex-col-reverse items-center justify-center gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8 xl:gap-12">
          <div className="flex w-full min-w-0 flex-col items-center justify-center text-center lg:flex-1 lg:items-start lg:self-center lg:text-left">
            <Reveal y={28} scale={0.96} delay={0.05} duration={0.55} className="w-full">
              <h1 className="w-full text-3xl font-extrabold uppercase tracking-tighter xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                <span className="mb-4 block text-xs font-bold uppercase leading-normal tracking-wider text-primary sm:mb-5 sm:text-base lg:text-lg xl:text-xl">
                  {t('hero.role')}
                </span>
                Ignacio
                <br />
                Avendaño
              </h1>
            </Reveal>

            <Reveal
              y={18}
              x={-8}
              delay={0.12}
              duration={0.45}
              className="mt-2 max-w-sm sm:max-w-none lg:max-w-lg"
            >
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm lg:text-lg">
                <Trans
                  i18nKey="hero.description"
                  components={{
                    highlight: <span className="font-semibold text-primary" />,
                  }}
                />
              </p>
            </Reveal>

            <Reveal
              delay={0.2}
              y={18}
              duration={0.45}
              className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
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
            </Reveal>
          </div>

          <Reveal
            delay={0.18}
            y={32}
            scale={0.94}
            duration={0.65}
            className="flex shrink-0 items-center justify-center self-center lg:self-end"
          >
            <img
              src={profilePic}
              alt="Ignacio Avendaño"
              className="h-auto w-48 object-contain object-bottom xs:w-56 sm:w-64 md:w-80 xl:w-95 2xl:w-110 grayscale transition duration-300 ease-in-out hover:grayscale-0"
              loading="eager"
              decoding="async"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
