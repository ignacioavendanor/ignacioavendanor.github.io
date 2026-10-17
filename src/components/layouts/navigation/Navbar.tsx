import { Menu } from 'lucide-react'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Sidebar } from './Sidebar'
import LanguageToggle from '../LanguageToggle'
import { useNavigation } from '@/hooks/useNavigation'
import { useScroll } from '@/hooks/useScroll'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { isOpen, setMenuOpen } = useNavigation()
  const isScrolled = useScroll(20)
  const { t } = useTranslation()

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-5">
        <a
          href="#"
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <img src="/icons/logo-dark.svg" alt="IA Logo" className="h-8 w-auto" />
        </a>

        <div className="flex items-center gap-3 sm:gap-6">
          <LanguageToggle isScrolled={isScrolled} />

          <Sheet open={isOpen} onOpenChange={setMenuOpen}>
            <Button
              variant="ghost"
              onClick={() => setMenuOpen(true)}
              className={cn(
                'font-bold tracking-wider',
                isScrolled && 'text-primary hover:text-foreground',
              )}
              aria-label={t('menu.title')}
            >
              <span className="hidden md:inline-block text-sm md:text-base mr-2">
                {t('menu.title')}
              </span>
              <Menu className="size-6 sm:size-7 shrink-0" strokeWidth={2} />
            </Button>

            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-full sm:max-w-md bg-foreground border-l border-muted-dark/20 p-0 shadow-2xl focus:outline-none"
            >
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
