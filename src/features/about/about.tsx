import { Container } from '@/components/layouts/Container'
import { Trans, useTranslation } from 'react-i18next'
import { AboutImage } from './about-image'
import { AboutTechnologies } from './about-technologies'
import { Separator } from '@/components/ui/separator'
import { DownloadCVButton } from '../hero'
import { Reveal } from '@/components/shared/reveal'

export function About() {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="w-full bg-primary py-20 text-primary-foreground sm:py-24 lg:py-26 2xl:py-48"
    >
      <Container>
        <div className="grid w-full grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-[auto_minmax(0,1fr)] md:justify-items-start lg:gap-14 xl:gap-16 2xl:gap-20">
          {/* Image */}
          <Reveal
            y={14}
            scale={0.96}
            delay={0.08}
            duration={0.45}
            className="flex w-full items-center justify-center md:w-auto"
          >
            <AboutImage />
          </Reveal>

          <div className="flex w-full flex-col text-left">
            {/* Heading */}
            <Reveal y={10} x={-6} duration={0.35} className="text-center lg:text-left">
              <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                {t('about.title')}
              </h2>
              <Separator className="mt-2 bg-linear-to-r from-primary-foreground to-primary-foreground/10" />
            </Reveal>

            {/* CTA */}
            <div className="order-2 flex w-full justify-center pt-2 sm:pt-4 lg:order-5 lg:w-auto lg:justify-start lg:pt-2">
              <DownloadCVButton />
            </div>

            {/* Description */}
            <Reveal
              delay={0.04}
              y={10}
              scale={0.98}
              duration={0.35}
              className="order-1 pt-4 text-justify text-sm leading-relaxed text-muted-accent sm:text-left sm:text-base lg:order-1 lg:pt-3 lg:text-lg"
            >
              <p>
                <Trans
                  i18nKey="about.description"
                  components={{
                    highlight: <span className="font-semibold text-accent-foreground" />,
                  }}
                />
              </p>
            </Reveal>

            {/* Stack */}
            <Reveal
              delay={0.09}
              y={10}
              scale={0.98}
              duration={0.35}
              className="order-3 space-y-2 pt-5 sm:pt-6 lg:order-2 lg:space-y-1 lg:pt-2"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider sm:text-sm lg:text-lg 2xl:text-xl">
                {t('about.technologies')}
              </h3>
              <AboutTechnologies />
            </Reveal>

            {/* Education */}
            <Reveal
              delay={0.14}
              y={10}
              scale={0.98}
              duration={0.35}
              className="order-4 pt-6 sm:pt-7 lg:order-3 lg:pt-4"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider sm:text-sm lg:text-lg 2xl:text-2xl">
                {t('about.education.title')}
              </h3>
              <p className="text-xs leading-relaxed text-primary-foreground sm:text-sm lg:text-base 2xl:text-xl">
                {t('about.education.degree')}
                <br />
                <span className="text-muted-accent">{t('about.education.institution')}</span>
              </p>
            </Reveal>

            {/* Languages */}
            <Reveal
              delay={0.19}
              y={10}
              scale={0.98}
              duration={0.35}
              className="order-5 pt-6 sm:pt-7 lg:order-4 lg:pt-2.5"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider sm:text-sm lg:text-lg 2xl:text-2xl">
                {t('about.languages.title')}
              </h3>
              <p className="text-xs leading-relaxed text-primary-foreground sm:text-sm lg:text-base 2xl:text-xl">
                {t('about.languages.native.name')}
                <span className="text-muted-accent"> • {t('about.languages.native.level')}</span>
                <br />
                {t('about.languages.secondary.name')}
                <span className="text-muted-accent"> • {t('about.languages.secondary.level')}</span>
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
