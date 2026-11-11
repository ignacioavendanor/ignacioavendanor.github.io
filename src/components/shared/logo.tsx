import logo from '@/assets/branding/logo-white.svg'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <img
      src={logo}
      alt="IA"
      width={48}
      height={43}
      className={className}
      loading="eager"
      decoding="async"
    />
  )
}
