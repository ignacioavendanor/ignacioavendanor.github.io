import type { Language } from '@/i18n/i18n'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'

export function LanguageToggle() {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language as Language

  const toggleLanguage = () => {
    const nextLanguage: Language = currentLanguage === 'es' ? 'en' : 'es'
    void i18n.changeLanguage(nextLanguage)
  }

  return (
    <Button
      onClick={toggleLanguage}
      variant="control"
      size={'lg'}
      className="cursor-pointer uppercase text-inherit transition-colors"
    >
      {currentLanguage === 'es' ? 'ES' : 'EN'}
    </Button>
  )
}

export default LanguageToggle
