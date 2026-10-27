import { Menu } from 'lucide-react'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Sidebar } from './Sidebar'
import LanguageToggle from '../LanguageToggle'
import { useNavigation } from '@/hooks/useNavigation'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layouts/Container'
import { Logo } from '@/components/shared/logo'
import { useScroll } from '@/hooks/useScroll'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { isOpen, setMenuOpen } = useNavigation()
  const { t } = useTranslation()
  const isScrolled = useScroll(20)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 bg-transparent transition-[background-color,backdrop-filter] duration-300',
        isScrolled && 'bg-background/5 backdrop-blur-sm',
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="flex items-center">
          <Logo className="h-8 w-auto" />
        </a>

        <div className="flex items-center gap-1">
          <LanguageToggle />

          <Sheet open={isOpen} onOpenChange={setMenuOpen}>
            <Button
              variant="control"
              size="lg"
              onClick={() => setMenuOpen(true)}
              className="border-transparent bg-transparent px-2 text-foreground transition-[color,opacity] duration-200 hover:opacity-70 active:opacity-50"
              aria-label={t('menu.title')}
            >
              <span className="mr-1 hidden md:inline-block">{t('menu.title')}</span>
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
      </Container>
    </header>
  )
}
