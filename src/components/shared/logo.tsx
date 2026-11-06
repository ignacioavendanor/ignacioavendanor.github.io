import logo from '@/assets/branding/logo.svg'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <img
      src={logo}
      alt="IA Logo"
      width={48}
      height={43}
      className={className}
      loading="eager"
      decoding="async"
    />
  )
}
