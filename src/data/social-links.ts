import type { ElementType } from 'react'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export interface SocialLink {
  id: string
  href: string
  icon: ElementType
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'email',
    href: 'mailto:ignacioavendanoramirez@gmail.com',
    icon: Mail,
  },
  {
    id: 'linkedin',
    href: 'https://linkedin.com/in/ignacioavr',
    icon: FaLinkedin,
  },
  {
    id: 'github',
    href: 'https://github.com/funktasthic',
    icon: FaGithub,
  },
]
