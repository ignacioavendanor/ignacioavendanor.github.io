import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '@/locales/en'
import es from '@/locales/es'

export const LANGUAGES = ['es', 'en'] as const
export type Language = (typeof LANGUAGES)[number]

void i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  supportedLngs: LANGUAGES,
  resources: { es, en },
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language === 'en' ? 'en' : 'es'
})

document.documentElement.lang = 'es'

export default i18n
