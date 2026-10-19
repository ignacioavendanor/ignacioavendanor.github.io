import { useTranslation } from 'react-i18next'
import aboutMe from '@/assets/images/about-me.png'

export function AboutImage() {
  const { t } = useTranslation()

  return (
    <div className="group relative aspect-4/5 w-44 xs:w-52 sm:w-60 md:w-80 lg:w-96 xl:w-102 overflow-hidden shadow-2xl">
      <img
        src={aboutMe}
        alt={t('about.title')}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-primary opacity-60 mix-blend-color transition-opacity duration-500 ease-in-out group-hover:opacity-20"
      />
    </div>
  )
}
