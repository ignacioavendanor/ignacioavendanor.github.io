import { motion } from 'motion/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { navigationItems } from '@/config/navigation'
import { useNavigation } from '@/hooks/useNavigation'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const { t } = useTranslation()
  const { activeSection, closeMenu } = useNavigation()

  return (
    <div className="flex h-full flex-col bg-foreground text-background overflow-y-auto selection:bg-primary selection:text-background">
      <div className="flex items-center justify-center px-6 sm:px-10 py-6 shrink-0">
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
        className="flex grow flex-col justify-center px-6 sm:px-10 lg:px-14 py-4"
        aria-label="Menú principal"
      >
        <ul className="flex flex-col gap-6 sm:gap-7 m-0 p-0 list-none">
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
                    'text-3xl sm:text-5xl font-black uppercase tracking-tight transition-colors w-fit block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    isActive ? 'text-primary' : 'text-background hover:text-primary',
                  )}
                >
                  {t(item.label)}
                </motion.a>
              </li>
            )
          })}
        </ul>
      </nav>

      <Separator />

      <footer className="flex shrink-0 flex-col gap-5 px-6 sm:px-10 lg:px-14 py-6 pb-10 sm:pb-8">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-dark">
            {t('contact.email')}
          </span>
          <a
            href="mailto:ignacioavendanoramirez@gmail.com"
            className="text-base sm:text-lg font-extrabold text-background hover:text-primary transition-colors underline decoration-2 underline-offset-4 w-fit break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            ignacioavendanoramirez@gmail.com
          </a>
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-dark">
            {t('contact.socials')}
          </span>
          <div className="flex items-center gap-2 pt-1">
            <a
              href="https://github.com/funktasthic"
              target="_blank"
              rel="noreferrer"
              className="p-1 -ml-1 text-background hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <FaGithub className="size-6 sm:size-7" />
            </a>
            <a
              href="https://linkedin.com/in/ignacioavr"
              target="_blank"
              rel="noreferrer"
              className="p-1 text-background hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <FaLinkedin className="size-6 sm:size-7" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
