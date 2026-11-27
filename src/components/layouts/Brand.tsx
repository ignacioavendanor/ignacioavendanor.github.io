import { cn } from '@/lib/utils'
import { useScroll } from '@/hooks/useScroll'

export function Brand() {
  const isScrolled = useScroll(20)

  return (
    <a
      href="#home"
      className={cn(
        'text-base font-bold tracking-tight text-foreground sm:text-lg',
        isScrolled && '[-webkit-text-stroke:1px_var(--color-border)] [paint-order:stroke_fill]',
      )}
    >
      Ignacio Avendaño
    </a>
  )
}
