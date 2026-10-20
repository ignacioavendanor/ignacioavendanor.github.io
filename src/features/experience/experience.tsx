import { Trans, useTranslation } from 'react-i18next'
import { EXPERIENCES } from '@/data/experience'
import { Timeline } from '@/components/ui/timeline'
import { Container } from '@/components/layouts/Container'
import { Separator } from '@/components/ui/separator'
import type { TimelineEntry } from '@/components/ui/timeline-item'

export function Experience() {
  const { t } = useTranslation()

  const timelineData: TimelineEntry[] = EXPERIENCES.map((exp) => ({
    id: exp.id,
    logo: exp.logo,
    company: t(exp.companyKey),
    period: t(exp.periodKey),
    location: t(exp.locationKey),
    role: t(exp.roleKey),
    description: (
      <Trans
        i18nKey={exp.descriptionKey}
        components={{
          highlight: <span className="font-semibold text-primary" />,
        }}
      />
    ),
    techs: t(exp.techsKey, { returnObjects: true }),
  }))

  return (
    <section id="experience" className="py-30 overflow-hidden bg-foreground">
      <Container>
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-primary-foreground">
            {t('experience.eyebrow')}
            <span className="block text-primary">{t('experience.accent')}</span>
          </h2>
          <Separator className="my-4 bg-linear-to-r from-transparent via-primary-foreground to-transparent" />
        </div>

        {/* Timeline */}
        <Timeline data={timelineData} />
      </Container>
    </section>
  )
}
