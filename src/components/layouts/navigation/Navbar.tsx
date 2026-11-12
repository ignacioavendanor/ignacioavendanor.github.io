import { Menu } from 'lucide-react'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Sidebar } from './Sidebar'
import { Brand } from '@/components/layouts/Brand'
import LanguageToggle from '../LanguageToggle'
import { useNavigation } from '@/hooks/useNavigation'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layouts/Container'
import { useScroll } from '@/hooks/useScroll'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { navigationLinks } from '@/config/navigation'

export function Navbar() {
  const { activeSection, isOpen, setMenuOpen } = useNavigation()
  const { t } = useTranslation()
  const isScrolled = useScroll(20)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 bg-transparent transition-[background-color,backdrop-filter] duration-300',
        isScrolled && 'bg-foreground/5 backdrop-blur-lg',
      )}
    >
      <Container className="relative flex items-center justify-between py-4">
        <Brand />

        <nav
          aria-label={t('menu.title')}
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        >
          <ul className="flex items-center gap-1">
            {navigationLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={item.id === activeSection ? 'location' : undefined}
                  className="inline-flex h-10 items-center px-5 text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary aria-[current=location]:bg-primary aria-[current=location]:text-primary-foreground aria-[current=location]:shadow-md"
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <LanguageToggle />
          <Separator
            orientation="vertical"
            className="mx-1 h-5 rounded-full bg-muted-foreground/50 lg:hidden"
          />

          <Sheet open={isOpen} onOpenChange={setMenuOpen}>
            <Button
              variant="control"
              size="icon-lg"
              onClick={() => setMenuOpen(true)}
              className="border-transparent bg-transparent text-foreground transition-[color,opacity] duration-200 hover:opacity-70 active:opacity-50 lg:hidden"
              aria-label={t('menu.title')}
            >
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
