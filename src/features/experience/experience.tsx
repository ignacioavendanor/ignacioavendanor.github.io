import { useTranslation } from 'react-i18next'
import { EXPERIENCES } from '@/data/experience'
import { Timeline } from '@/components/ui/timeline'
import { ExperienceTimeline } from './experience-timeline'
import { Container } from '@/components/layouts/Container'
import { Separator } from '@/components/ui/separator'

export function Experience() {
  const { t } = useTranslation()

  const timelineData = EXPERIENCES.map((item) => ({
    id: item.id,
    logo: item.logo,
    company: String(t(item.companyKey)),
    period: String(t(item.periodKey)),
    location: String(t(item.locationKey)),
    content: (isHighlighted: boolean) => (
      <ExperienceTimeline item={item} isHighlighted={isHighlighted} />
    ),
  }))

  return (
    <section id="experience" className="py-24 overflow-hidden bg-foreground">
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
