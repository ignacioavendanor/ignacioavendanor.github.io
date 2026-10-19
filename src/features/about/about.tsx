import { Container } from '@/components/layouts/Container'
import { Trans, useTranslation } from 'react-i18next'
import { AboutImage } from './about-image'
import { AboutTechnologies } from './about-technologies'
import { Separator } from '@/components/ui/separator'
import { DownloadCVButton } from '../hero'
import { Reveal } from '@/components/ui/reveal'

export function About() {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="w-full bg-primary py-16 sm:py-20 lg:py-26 text-primary-foreground"
    >
      <Container>
        <div className="grid w-full grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-[auto_1fr] md:justify-items-start lg:gap-14 xl:gap-16">
          {/* Image */}
          <Reveal className="flex w-full items-center justify-center md:w-auto">
            <AboutImage />
          </Reveal>

          <div className="flex w-full flex-col text-left">
            {/* Heading */}
            <Reveal className="text-center lg:text-left">
              <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
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
              delay={0.05}
              className="order-1 pt-4 text-sm leading-relaxed text-muted-accent sm:text-base lg:order-1 lg:pt-3 lg:text-lg"
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
            <Reveal delay={0.1} className="order-3 space-y-1 pt-2 sm:pt-4 lg:order-2 lg:pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider sm:text-sm lg:text-lg">
                {t('about.technologies')}
              </h3>
              <AboutTechnologies />
            </Reveal>

            {/* Education */}
            <Reveal delay={0.15} className="order-4 pt-2 sm:pt-6 lg:order-3 lg:pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider sm:text-sm lg:text-lg">
                {t('about.education.title')}
              </h3>
              <p className="text-xs leading-relaxed text-primary-foreground sm:text-sm lg:text-base">
                {t('about.education.degree')}
                <br />
                <span className="text-muted-accent">{t('about.education.institution')}</span>
              </p>
            </Reveal>

            {/* Languages */}
            <Reveal delay={0.2} className="order-5 pt-4 sm:pt-6 lg:order-4 lg:pt-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider sm:text-sm lg:text-lg">
                {t('about.languages.title')}
              </h3>
              <p className="text-xs leading-relaxed text-primary-foreground sm:text-sm lg:text-base">
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
