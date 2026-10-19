import { Menu } from 'lucide-react'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
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
        isScrolled ? 'backdrop-blur-md shadow-sm' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4">
        <a href="#" className="flex items-center">
          <img src="/icons/logo-dark.svg" alt="IA Logo" className="h-8 w-auto" />
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />

          <div className="flex items-center self-stretch py-2">
            <Separator orientation="vertical" className="bg-foreground" />
          </div>

          <Sheet open={isOpen} onOpenChange={setMenuOpen}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMenuOpen(true)}
              className="text-sm"
              aria-label={t('menu.title')}
            >
              <span className="hidden md:inline-block mr-2">{t('menu.title')}</span>
              <Menu className="size-5 shrink-0" strokeWidth={2} />
            </Button>

            <SheetContent
              side="right"
              showCloseButton={false}
              className="border-l border-border/10"
            >
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
