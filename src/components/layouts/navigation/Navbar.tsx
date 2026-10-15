import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { NavigationMenu } from './NavigationMenu'
import LanguageToggle from '../LanguageToggle'
import { useNavigation } from '@/hooks/useNavigation'
import { useTranslation } from 'react-i18next'
import { Separator } from '@/components/ui/separator'

export function Navbar() {
  const { isOpen, setMenuOpen } = useNavigation()
  const { t } = useTranslation()

  return (
    <Sheet open={isOpen} modal={false} onOpenChange={setMenuOpen}>
      <header
        className={`fixed inset-x-0 top-0 z-60 pointer-events-none transition-all duration-300 ${
          isOpen ? 'bg-transparent' : 'bg-background/10 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-5 sm:px-8 pointer-events-auto">
          <a
            href="#"
            className={`flex items-center transition-opacity duration-300 ${
              isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <img src="/icons/logo-dark.svg" alt="IA Logo" className="h-8 w-auto" />
          </a>

          <div className="flex items-center gap-6">
            <div
              className={`transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <LanguageToggle />
            </div>

            <div>
              <SheetTrigger
                render={
                  <Button
                    type="button"
                    variant="ghost"
                    className="font-bold uppercase gap-2 transition-colors"
                  />
                }
              >
                <span>{isOpen ? t('menu.close') : t('menu.title')}</span>

                <div className="relative flex items-center justify-center size-8">
                  <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                      >
                        <X className="size-8" strokeWidth={2} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                      >
                        <Menu className="size-8" strokeWidth={2} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SheetTrigger>
            </div>
          </div>
        </div>

        <div className={`transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
          <Separator />
        </div>
      </header>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="border-l border-border p-0 pt-16"
      >
        <NavigationMenu />
      </SheetContent>
    </Sheet>
  )
}
