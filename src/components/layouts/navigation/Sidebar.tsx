import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { navigationItems } from '@/config/navigation'
import { useNavigation } from '@/hooks/useNavigation'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { DownloadCVButton } from '@/features/hero/download-cv'
import { SOCIAL_LINKS } from '@/data/social-links'

export function Sidebar() {
  const { t } = useTranslation()
  const { activeSection, closeMenu } = useNavigation()

  return (
    <div className="flex h-svh flex-col bg-foreground text-primary-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <div className="flex items-center justify-center px-6 sm:px-10 py-2.5 shrink-0">
        <Button variant="control" onClick={closeMenu} className="group gap-2 px-3 py-1 h-auto">
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
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className={cn(
                    'text-4xl sm:text-4xl lg:text-4xl font-black uppercase tracking-tight transition-colors w-fit block leading-none',
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary-foreground',
                  )}
                >
                  {t(item.label)}
                </a>
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
      <div className="flex shrink-0 flex-col gap-3 px-6 sm:px-10 lg:px-14 py-3 sm:py-4">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-muted-dark uppercase">
          {t('contact.socials')}
        </span>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {SOCIAL_LINKS.map(({ id, href, icon: Icon }) => {
            const isEmail = id === 'email'
            const externalAttrs = isEmail ? {} : { target: '_blank', rel: 'noreferrer' }

            return (
              <a
                key={id}
                href={href}
                {...externalAttrs}
                className={cn(
                  'inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-primary-foreground transition-colors hover:text-primary',
                  isEmail && 'underline decoration-1 underline-offset-2',
                )}
              >
                {!isEmail && <Icon className="size-5 shrink-0" />}
                <span>{isEmail ? href.replace('mailto:', '') : t(`contact.${id}`)}</span>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
