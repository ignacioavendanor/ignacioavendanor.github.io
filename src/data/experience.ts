import bhpLogo from '@/assets/icons/BHP.svg'
import metricLogo from '@/assets/icons/Metric.svg'
import nortransLogo from '@/assets/icons/Nortrans.svg'
import vantazLogo from '@/assets/icons/Vantaz.svg'

export interface ExperienceItem {
  id: string
  logo: string
  companyKey: `experience.${string}.company`
  roleKey: `experience.${string}.role`
  periodKey: `experience.${string}.period`
  locationKey: `experience.${string}.location`
  descriptionKey: `experience.${string}.description`
}

export const EXPERIENCES = [
  {
    id: 'vantaz-group',
    logo: vantazLogo,
    companyKey: 'experience.vantaz.company',
    roleKey: 'experience.vantaz.role',
    periodKey: 'experience.vantaz.period',
    locationKey: 'experience.vantaz.location',
    descriptionKey: 'experience.vantaz.description',
  },
  {
    id: 'nortrans',
    logo: nortransLogo,
    companyKey: 'experience.nortrans.company',
    roleKey: 'experience.nortrans.role',
    periodKey: 'experience.nortrans.period',
    locationKey: 'experience.nortrans.location',
    descriptionKey: 'experience.nortrans.description',
  },
  {
    id: 'metric-studio',
    logo: metricLogo,
    companyKey: 'experience.metric.company',
    roleKey: 'experience.metric.role',
    periodKey: 'experience.metric.period',
    locationKey: 'experience.metric.location',
    descriptionKey: 'experience.metric.description',
  },
  {
    id: 'bhp',
    logo: bhpLogo,
    companyKey: 'experience.bhp.company',
    roleKey: 'experience.bhp.role',
    periodKey: 'experience.bhp.period',
    locationKey: 'experience.bhp.location',
    descriptionKey: 'experience.bhp.description',
  },
] as const satisfies readonly ExperienceItem[]
