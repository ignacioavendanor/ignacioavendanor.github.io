import { motion } from 'motion/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { navigationItems } from '@/config/navigation'
import { useNavigation } from '@/hooks/useNavigation'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { DownloadCvButton } from '@/features/hero/download-cv'

export function Sidebar() {
  const { t } = useTranslation()
  const { activeSection, closeMenu } = useNavigation()

  return (
    <div className="flex h-full flex-col bg-foreground text-background overflow-y-auto selection:bg-primary selection:text-background">
      <div className="flex items-center justify-center px-6 sm:px-10 py-4 sm:py-5 shrink-0">
        <Button
          variant="ghost"
          onClick={closeMenu}
          className="group gap-2 px-3 py-2 text-background hover:text-primary"
        >
          <span className="text-sm font-bold uppercase tracking-wider">{t('menu.close')}</span>
          <X
            className="size-6 transition-transform duration-200 group-hover:rotate-90"
            strokeWidth={2}
          />
        </Button>
      </div>

      <Separator />

      <nav
        aria-label="Menú principal"
        className="flex grow flex-col justify-center gap-6 px-6 sm:px-10 lg:px-14 py-4 min-h-0"
      >
        <ul className="flex flex-col gap-4 sm:gap-6 m-0 p-0 list-none">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <li key={item.id} className="flex items-center gap-4">
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="size-3.5 bg-primary shrink-0 shadow-[2px_2px_0px_#000]"
                  />
                )}

                <motion.a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  whileHover={{ x: 12 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={cn(
                    'text-3xl sm:text-5xl font-black uppercase tracking-tight transition-colors w-fit block',
                    isActive ? 'text-primary' : 'text-background hover:text-primary',
                  )}
                >
                  {t(item.label)}
                </motion.a>
              </li>
            )
          })}
        </ul>

        <div className="pt-2 *:w-full">
          <DownloadCvButton />
        </div>
      </nav>

      <Separator />

      <footer className="flex shrink-0 flex-col gap-4 px-6 sm:px-10 lg:px-14 py-4 sm:py-5">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-bold tracking-widest text-muted-dark">
            {t('contact.email')}
          </span>
          <a
            href="mailto:ignacioavendanoramirez@gmail.com"
            className="text-base sm:text-lg font-bold text-background hover:text-primary transition-colors underline decoration-2 underline-offset-4 w-fit break-all"
          >
            ignacioavendanoramirez@gmail.com
          </a>
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-bold tracking-widest text-muted-dark">
            {t('contact.socials')}
          </span>
          <div className="flex items-center gap-2 pt-1">
            <a
              href="https://github.com/funktasthic"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-1 -ml-1 text-background hover:text-primary transition-colors"
            >
              <FaGithub className="size-6 sm:size-7" />
            </a>
            <a
              href="https://linkedin.com/in/ignacioavr"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-1 text-background hover:text-primary transition-colors"
            >
              <FaLinkedin className="size-6 sm:size-7" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
