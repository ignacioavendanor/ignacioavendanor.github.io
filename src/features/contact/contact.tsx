import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layouts/Container'
import { Separator } from '@/components/ui/separator'
import { SOCIAL_LINKS } from '@/data/social-links'
import { ArrowUpRight } from 'lucide-react'

export function Contact() {
  const { t } = useTranslation()

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 sm:py-20 bg-foreground text-primary-foreground transition-colors"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Call To Action */}
          <div className="relative flex flex-col justify-center space-y-4 lg:col-span-7">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 select-none font-black tracking-tight leading-none text-primary-foreground/5 text-8xl sm:text-9xl md:text-[180px] lg:text-[220px]"
            >
              IA
            </span>

            <div className="relative z-10">
              <h1 className="text-6xl font-black tracking-tight uppercase leading-none text-primary-foreground sm:text-7xl md:text-8xl">
                {t('contact.title')}
              </h1>
            </div>

            <p className="relative z-10 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              <span className="font-semibold text-primary-foreground">
                “{t('contact.reference')}”
              </span>
              {t('contact.author')}
            </p>
          </div>

          <div className="flex flex-col justify-center w-full space-y-6 lg:col-span-5">
            {SOCIAL_LINKS.map((link) => (
              <div key={link.id} className="group flex flex-col">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-between pb-1.5 text-lg font-bold tracking-wider text-primary-foreground transition-colors hover:text-primary sm:text-xl"
                >
                  <span className="uppercase transition-colors group-hover:text-primary">
                    {t(`contact.${link.id}`)}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-primary-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
                <Separator className="bg-linear-to-r from-primary-foreground to-primary-foreground/10 group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-primary/10" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
