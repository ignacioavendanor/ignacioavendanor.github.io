import { cn } from '@/lib/utils'
import { useScroll } from '@/hooks/useScroll'

export function Brand() {
  const isScrolled = useScroll(20)

  return (
    <a
      href="#home"
      className={cn(
        'text-base font-bold tracking-tight text-foreground sm:text-lg',
        isScrolled &&
          '[-webkit-text-stroke:var(--text-outline-width)_var(--text-outline-color)] [paint-order:stroke_fill]',
      )}
    >
      Ignacio Avendaño
    </a>
  )
}
