import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '@/locales/en'
import es from '@/locales/es'

export const LANGUAGES = ['es', 'en'] as const
export type Language = (typeof LANGUAGES)[number]

const SEO_COPY: Record<
  Language,
  {
    title: string
    description: string
    jobTitle: string
    locale: string
    areasOfExpertise: string[]
  }
> = {
  es: {
    title: 'Ignacio Avendaño | Ingeniero de Software Full-Stack',
    description:
      'Ingeniero de Software Full-Stack en Antofagasta, Chile, con experiencia en arquitectura de software, integración de sistemas y soluciones escalables con .NET, Next.js y Azure.',
    jobTitle: 'Ingeniero de Software',
    locale: 'es_CL',
    areasOfExpertise: [
      'Desarrollo Full-Stack',
      'Arquitectura de software',
      'Integración de sistemas',
      'Desarrollo web',
      'Plataformas en la nube',
    ],
  },
  en: {
    title: 'Ignacio Avendaño | Full-Stack Software Engineer',
    description:
      'Full-stack software engineer in Antofagasta, Chile, with experience in software architecture, systems integration, and scalable solutions using .NET, Next.js, and Azure.',
    jobTitle: 'Software Engineer',
    locale: 'en_US',
    areasOfExpertise: [
      'Full-stack development',
      'Software architecture',
      'Systems integration',
      'Web development',
      'Cloud platforms',
    ],
  },
}

const SITE_URL = 'https://ignacioavendanor.github.io/'

function updateSeoMetadata(language: Language) {
  const copy = SEO_COPY[language]
  const updateMeta = (id: string, content: string) => {
    const element = document.getElementById(id)
    if (!(element instanceof HTMLMetaElement)) {
      throw new Error(`SEO meta tag not found: ${id}`)
    }
    element.content = content
  }

  document.title = copy.title
  document.documentElement.lang = language
  updateMeta('meta-description', copy.description)
  updateMeta('og-title', copy.title)
  updateMeta('og-description', copy.description)
  updateMeta('og-url', SITE_URL)
  updateMeta('og-locale', copy.locale)
  updateMeta('twitter-title', copy.title)
  updateMeta('twitter-description', copy.description)

  const structuredData = document.getElementById('seo-structured-data')
  if (!(structuredData instanceof HTMLScriptElement)) {
    throw new Error('SEO structured data script not found')
  }
  structuredData.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}#person`,
        name: 'Ignacio Avendaño',
        url: SITE_URL,
        jobTitle: copy.jobTitle,
        description: copy.description,
        knowsAbout: copy.areasOfExpertise,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Antofagasta',
          addressCountry: 'CL',
        },
        knowsLanguage: ['es', 'en'],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}#website`,
        url: SITE_URL,
        name: copy.title,
        inLanguage: language,
        publisher: { '@id': `${SITE_URL}#person` },
      },
    ],
  })
}

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
  updateSeoMetadata(language === 'en' ? 'en' : 'es')
})

updateSeoMetadata('es')

export default i18n
