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
    <footer className="bg-foreground">
      <Container className="flex flex-col items-center justify-between gap-2 py-2 sm:flex-row sm:gap-4 sm:py-4">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <a href="#" className="transition-opacity hover:opacity-80">
            <img src="/icons/logo-light.svg" alt="Logo" className="h-8 w-auto" />
          </a>
          <Separator orientation="vertical" />
          <span className="text-xs text-muted-dark whitespace-nowrap">
            &copy; {currentYear} Ignacio Avendaño. {t('menu.copyright')}.
          </span>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <nav aria-label="Navegación pie de página">
            <ul className="flex items-center gap-4 text-xs font-medium text-muted-dark sm:gap-5 capitalize">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <a href={`#${item.id}`} className="transition-colors hover:text-primary">
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Separator orientation="vertical" />

          {/* Socials */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/funktasthic"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-background hover:text-primary transition-colors"
            >
              <FaGithub className="size-5 sm:size-6" />
            </a>
            <a
              href="https://linkedin.com/in/ignacioavr"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-background hover:text-primary transition-colors"
            >
              <FaLinkedin className="size-5 sm:size-6" />
            </a>
            <a
              href="mailto:ignacioavendanoramirez@gmail.com"
              aria-label="Email"
              className="text-background hover:text-primary transition-colors"
            >
              <Mail className="size-5 sm:size-6" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
