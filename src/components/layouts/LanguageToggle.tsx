import type { Language } from '@/i18n/i18n'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import { cn } from 'cn'

interface LanguageToggleProps {
  isScrolled?: boolean
}

export function LanguageToggle({ isScrolled }: LanguageToggleProps) {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language as Language

  const toggleLanguage = () => {
    const nextLanguage: Language = currentLanguage === 'es' ? 'en' : 'es'
    void i18n.changeLanguage(nextLanguage)
  }

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      className={cn(
        'text-sm font-bold uppercase cursor-pointer transition-colors',
        isScrolled && 'text-primary hover:text-foreground',
      )}
    >
      {currentLanguage === 'es' ? 'ES' : 'EN'}
    </Button>
  )
}

export default LanguageToggle
