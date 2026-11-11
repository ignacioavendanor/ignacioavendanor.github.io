import { Container } from '@/components/layouts/Container'
import { Trans, useTranslation } from 'react-i18next'
import { AboutImage } from './about-image'
import { AboutTechnologies } from './about-technologies'
import { Separator } from '@/components/ui/separator'
import { Reveal } from '@/components/shared/reveal'

export function About() {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="w-full bg-primary py-28 text-primary-foreground sm:py-32 lg:py-24"
    >
      <Container>
        <div className="grid w-full grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-[auto_minmax(0,1fr)] md:justify-items-start lg:gap-10">
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

          <div className="flex w-full max-w-2xl flex-col text-left">
            {/* Heading */}
            <Reveal y={10} x={-6} duration={0.35} className="text-center lg:text-left">
              <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-4xl">
                {t('about.title')}
              </h2>
              <Separator className="mt-2 bg-linear-to-r from-primary-foreground to-primary-foreground/10" />
            </Reveal>

            {/* Description */}
            <Reveal
              delay={0.04}
              y={10}
              scale={0.98}
              duration={0.35}
              className="pt-5 text-justify text-sm leading-6 text-muted-accent sm:text-left sm:text-base sm:leading-7 lg:pt-4 lg:text-base"
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
              className="space-y-2 pt-6 sm:pt-7 lg:space-y-1.5 lg:pt-5"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider sm:text-base lg:text-base">
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
              className="pt-5 sm:pt-6 lg:pt-5"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider sm:text-base lg:text-base">
                {t('about.education.title')}
              </h3>
              <p className="text-sm leading-6 text-primary-foreground sm:text-base lg:text-sm">
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
              className="pt-5 sm:pt-6 lg:pt-4"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider sm:text-base lg:text-base">
                {t('about.languages.title')}
              </h3>
              <p className="text-sm leading-6 text-primary-foreground sm:text-base lg:text-sm">
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
