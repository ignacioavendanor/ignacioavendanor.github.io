import { motion } from 'motion/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { navigationItems } from '@/config/navigation'
import { useNavigation } from '@/hooks/useNavigation'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { DownloadCVButton } from '@/features/hero/download-cv'

export function Sidebar() {
  const { t } = useTranslation()
  const { activeSection, closeMenu } = useNavigation()

  return (
    <div className="flex h-svh flex-col bg-foreground text-primary-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <div className="flex items-center justify-center px-6 sm:px-10 py-2.5 shrink-0">
        <Button
          variant="ghost"
          onClick={closeMenu}
          className="group gap-2 px-3 py-1 h-auto text-primary-foreground hover:text-muted-accent"
        >
          <span className="text-sm sm:text-base font-medium tracking-wider">{t('menu.close')}</span>
          <X
            className="size-5 sm:size-6 transition-transform duration-200 group-hover:rotate-90"
            strokeWidth={2}
          />
        </Button>
      </div>

      <Separator />

      {/* Nav items */}
      <nav
        aria-label={t('menu.title')}
        className="flex grow flex-col justify-center px-6 sm:px-10 lg:px-14 py-2 sm:py-3 min-h-0"
      >
        <ul className="flex flex-col gap-6 sm:gap-7 lg:gap-8 m-0 p-0 list-none">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <li key={item.id} className="relative flex items-center">
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -left-6 sm:-left-8 size-3.5 sm:size-4 bg-primary"
                  />
                )}

                <motion.a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={cn(
                    'text-4xl sm:text-4xl lg:text-4xl font-black uppercase tracking-tight transition-colors w-fit block leading-none',
                    isActive
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-primary-foreground',
                  )}
                >
                  {t(item.label)}
                </motion.a>
              </li>
            )
          })}
        </ul>

        <div className="pt-6 sm:pt-7 shrink-0 *:w-full">
          <DownloadCVButton />
        </div>
      </nav>

      <Separator />

      {/* Footer */}
      <div className="flex shrink-0 flex-col gap-2 sm:gap-3 px-6 sm:px-10 lg:px-14 py-2.5 sm:py-3.5">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-muted-dark uppercase">
            {t('contact.email')}
          </span>
          <a
            href="mailto:ignacioavendanoramirez@gmail.com"
            className="text-sm sm:text-base font-semibold text-primary-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-2 w-fit break-all"
          >
            ignacioavendanoramirez@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-0.5">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-muted-dark uppercase">
            {t('contact.socials')}
          </span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-0.5">
            <a
              href="https://github.com/funktasthic"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="group inline-flex items-center gap-2 text-primary-foreground transition-colors hover:text-primary"
            >
              <FaGithub className="size-5 sm:size-6 shrink-0" />
              <span className="text-sm sm:text-base font-semibold">@funktasthic</span>
            </a>

            <a
              href="https://linkedin.com/in/ignacioavr"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group inline-flex items-center gap-2 text-primary-foreground transition-colors hover:text-primary"
            >
              <FaLinkedin className="size-5 sm:size-6 shrink-0" />
              <span className="text-sm sm:text-base font-semibold">Ignacio Avendaño</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
