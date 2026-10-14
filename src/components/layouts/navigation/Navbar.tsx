import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { NavigationMenu } from './NavigationMenu'
import LanguageToggle from '../LanguageToggle'
import { useNavigation } from '@/hooks/useNavigation'
import { useTranslation } from 'react-i18next'

export function Navbar() {
  const { isOpen, toggleMenu, closeMenu } = useNavigation()
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-60 pointer-events-none transition-all duration-300 ${
          isScrolled && !isOpen ? 'bg-background/10 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-5 sm:px-8 pointer-events-auto">
          <a
            href="#"
            className={`flex items-center transition-opacity duration-300 ${
              isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <img src="/images/logo.svg" alt="Logo" className="h-8 w-auto" />
          </a>

          <div className="flex items-center gap-6">
            <div
              className={`transition-opacity duration-300 ${
                isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <LanguageToggle />
            </div>

            <div>
              <Button
                type="button"
                variant="ghost"
                onClick={toggleMenu}
                className="font-bold uppercase gap-2 transition-colors"
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
              </Button>
            </div>
          </div>
        </div>

        <div
          className={`transition-opacity duration-300 ${isScrolled && !isOpen ? 'opacity-100' : 'opacity-0'}`}
        ></div>
      </header>

      <Sheet open={isOpen} onOpenChange={(open) => !open && closeMenu()}>
        <SheetContent
          side="right"
          showCloseButton={false}
          className="border-l border-border p-0 pt-16"
        >
          <NavigationMenu />
        </SheetContent>
      </Sheet>
    </>
  )
}
