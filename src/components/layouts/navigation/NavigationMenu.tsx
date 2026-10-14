import { motion } from 'motion/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { navigationItems } from '@/config/navigation'
import { useNavigation } from '@/hooks/useNavigation'
import { Separator } from '@/components/ui/separator'

export function NavigationMenu() {
  const { t } = useTranslation()
  const { activeSection, closeMenu } = useNavigation()

  return (
    <div className="flex flex-col h-full bg-background text-foreground overflow-y-auto">
      <div className="flex flex-col grow justify-center px-6 sm:px-12 py-8">
        <nav className="flex flex-col gap-6 sm:gap-8">
          {navigationItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              {activeSection === item.id && (
                <span className="size-3 rounded-full bg-primary inline-block shrink-0" />
              )}
              <motion.a
                href={`#${item.id}`}
                onClick={closeMenu}
                whileHover={{ x: 12 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`text-3xl sm:text-5xl font-black uppercase transition-colors w-fit block ${
                  activeSection === item.id ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                {t(item.label)}
              </motion.a>
            </div>
          ))}
        </nav>
      </div>

      <Separator className="shrink-0" />
      <div className="flex flex-col gap-4 px-6 sm:px-12 py-6 shrink-0 pb-10 sm:pb-6">
        <div className="flex flex-col gap-1">
          <span className="text-sm uppercase text-muted-foreground">{t('contact.email')}</span>
          <a
            href="mailto:ignacioavendanoramirez@gmail.com"
            className="text-base sm:text-xl font-extrabold text-primary hover:underline break-all"
          >
            ignacioavendanoramirez@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm uppercase text-muted-foreground">{t('contact.socials')}</span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/funktasthic"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FaGithub className="size-7 sm:size-8" />
            </a>
            <a
              href="https://linkedin.com/in/ignacioavr"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FaLinkedin className="size-7 sm:size-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
