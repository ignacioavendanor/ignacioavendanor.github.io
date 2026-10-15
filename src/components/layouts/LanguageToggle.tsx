import type { Language } from '@/i18n/i18n'
import { useTranslation } from 'react-i18next'

export function LanguageToggle() {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language as Language

  const toggleLanguage = () => {
    const nextLanguage: Language = currentLanguage === 'es' ? 'en' : 'es'
    void i18n.changeLanguage(nextLanguage)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm uppercase text-background hover:text-primary transition-colors cursor-pointer"
    >
      {currentLanguage === 'es' ? 'EN' : 'ES'}
    </button>
  )
}

export default LanguageToggle
