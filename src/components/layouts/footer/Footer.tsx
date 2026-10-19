import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Container } from '../Container'
import { Mail } from 'lucide-react'
import { navigationItems } from '@/config/navigation'
import { Separator } from '@/components/ui/separator'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-foreground text-primary-foreground">
      <Container className="flex flex-col items-center justify-between gap-6 py-6 md:flex-row md:gap-4 md:py-4">
        {/* Logo */}
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
          <a href="#" className="transition-opacity hover:opacity-80" aria-label="Inicio">
            <img src="/icons/logo-light.svg" alt="Logo" className="h-7 w-auto sm:h-8" />
          </a>
          <Separator orientation="vertical" className="hidden h-4 bg-muted-dark/40 sm:block" />
          <p className="text-xs text-muted-dark">
            &copy; {currentYear} Ignacio Avendaño. {t('menu.copyright')}.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <nav aria-label="Navegación pie de página">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-muted-dark capitalize">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <a href={`#${item.id}`} className="transition-colors hover:text-primary">
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Separator orientation="vertical" className="hidden h-4 bg-muted-dark/40 sm:block" />

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/funktasthic"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-primary-foreground transition-colors hover:text-primary"
            >
              <FaGithub className="size-5" />
            </a>
            <a
              href="https://linkedin.com/in/ignacioavr"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-primary-foreground transition-colors hover:text-primary"
            >
              <FaLinkedin className="size-5" />
            </a>
            <a
              href="mailto:ignacioavendanoramirez@gmail.com"
              aria-label="Email"
              className="text-primary-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
