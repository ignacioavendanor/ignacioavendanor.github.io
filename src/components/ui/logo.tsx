import logo from '@/assets/branding/logo.svg'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <img
      src={logo}
      alt="IA Logo"
      className={className}
      loading="eager"
      decoding="async"
    />
  )
}
