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
        <div className="flex items-center gap-1">
          <nav aria-label={t('menu.title')} className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigationLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={item.id === activeSection ? 'location' : undefined}
                    className="inline-flex h-10 items-center px-4 text-sm font-semibold tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary aria-[current=location]:text-foreground aria-[current=location]:[-webkit-text-stroke:var(--text-outline-width)_var(--text-outline-color)] aria-[current=location]:[paint-order:stroke_fill]"
                  >
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Sheet open={isOpen} onOpenChange={setMenuOpen}>
            <Button
              variant="control"
              size="icon-lg"
              onClick={() => setMenuOpen(true)}
              aria-label={t('menu.title')}
              className="border-transparent bg-transparent px-1 transition-opacity duration-200 hover:opacity-70 active:opacity-50 lg:hidden"
            >
              <span
                className={cn(
                  'flex size-6 shrink-0 items-center justify-center rounded-md bg-foreground text-background transition-[transform,box-shadow] duration-200 group-active/button:scale-95',
                  isScrolled && 'shadow-[0_0_0_var(--text-outline-width)_var(--text-outline-color)]',
                )}
              >
                <Menu aria-hidden className="size-4" strokeWidth={2.5} />
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

          <Separator
            orientation="vertical"
            className={cn(
              'mx-1 h-5 rounded-full transition-colors duration-300',
              isScrolled ? 'bg-muted-foreground' : 'bg-foreground',
            )}
          />
          <LanguageToggle />
        </div>
      </Container>
    </header>
  )
}
