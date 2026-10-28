import type { Language } from '@/i18n/i18n'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { useScroll } from '@/hooks/useScroll'

export function LanguageToggle() {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language as Language
  const isScrolled = useScroll(20)

  const toggleLanguage = () => {
    const nextLanguage: Language = currentLanguage === 'es' ? 'en' : 'es'
    void i18n.changeLanguage(nextLanguage)
  }

  return (
    <Button
      onClick={toggleLanguage}
      variant="control"
      size={'lg'}
      className={cn(
        'min-w-10 cursor-pointer border-transparent bg-transparent px-2 uppercase text-foreground transition-[color,opacity] duration-200 hover:opacity-70 active:opacity-50',
        isScrolled &&
          '[-webkit-text-stroke:var(--text-outline-width)_var(--text-outline-color)] [paint-order:stroke_fill]',
      )}
    >
      {currentLanguage === 'es' ? 'ES' : 'EN'}
    </Button>
  )
}

export default LanguageToggle
