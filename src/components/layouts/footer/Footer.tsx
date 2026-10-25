import { Container } from '../Container'
import { navigationItems } from '@/config/navigation'
import { Separator } from '@/components/ui/separator'
import { useTranslation } from 'react-i18next'
import { SOCIAL_LINKS } from '@/data/social-links'
import { Logo } from '@/components/ui/logo'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="w-full bg-foreground text-primary-foreground">
      <Container className="flex flex-col items-center justify-between gap-6 py-6 md:flex-row md:gap-4 md:py-4">
        {/* Logo */}
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
          <a href="#" className="transition-opacity hover:opacity-80" aria-label="Inicio">
            <Logo className="h-7 w-auto sm:h-8" />
          </a>
          <Separator orientation="vertical" className="hidden bg-muted-dark/40 sm:block" />
          <p className="text-xs text-muted-dark">{t('menu.copyright')}</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <nav aria-label="Navegación pie de página">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-muted-dark capitalize">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <a href={`#${item.id}`} className="transition-colors hover:text-primary">
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Separator orientation="vertical" className="hidden bg-muted-dark/40 sm:block" />

          {/* Socials */}
          {SOCIAL_LINKS.map((link) => {
            const isEmail = link.id === 'email'
            const IconComponent = link.icon

            return (
              <div key={link.id} className="group flex flex-col">
                <a
                  href={link.href}
                  target={isEmail ? undefined : '_blank'}
                  rel={isEmail ? undefined : 'noreferrer'}
                  aria-label={t(`contact.${link.id}`)}
                  className="flex w-full items-center justify-between py-1 transition-colors"
                >
                  <span className="flex items-center gap-2.5 text-primary-foreground transition-colors group-hover:text-primary">
                    {IconComponent && <IconComponent className="size-5" />}
                  </span>
                </a>
              </div>
            )
          })}
        </div>
      </Container>
    </footer>
  )
}
