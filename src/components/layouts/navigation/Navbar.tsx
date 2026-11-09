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
import { Separator } from '@/components/ui/separator'

export function Navbar() {
  const { isOpen, setMenuOpen } = useNavigation()
  const { t } = useTranslation()
  const isScrolled = useScroll(20)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 bg-transparent transition-[background-color,backdrop-filter] duration-300',
        isScrolled && 'bg-foreground/5 backdrop-blur-lg',
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="flex items-center">
          <Logo className="h-8 w-auto" />
        </a>

        <div className="flex items-center gap-1">
          <LanguageToggle />
          <Separator
            orientation="vertical"
            className="mx-1 h-5 rounded-full bg-muted-foreground/50"
          />

          <Sheet open={isOpen} onOpenChange={setMenuOpen}>
            <Button
              variant="control"
              size="lg"
              onClick={() => setMenuOpen(true)}
              className="border-transparent bg-transparent px-2 text-foreground transition-[color,opacity] duration-200 hover:opacity-70 active:opacity-50"
              aria-label={t('menu.title')}
            >
              <span
                className={cn(
                  'mr-1 hidden md:inline-block',
                  isScrolled &&
                    '[-webkit-text-stroke:var(--text-outline-width)_var(--text-outline-color)] [paint-order:stroke_fill]',
                )}
              >
                {t('menu.title')}
              </span>
              <span className="relative size-5 shrink-0">
                {isScrolled && (
                  <Menu
                    aria-hidden
                    className="absolute inset-0 size-5"
                    strokeWidth={4.5}
                    style={{ stroke: 'var(--text-outline-color)' }}
                  />
                )}
                <Menu
                  className="absolute inset-0 size-5"
                  strokeWidth={2}
                  style={{ stroke: 'var(--foreground)' }}
                />
              </span>
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
