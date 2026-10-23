import { type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8', className)} {...props}>
      {children}
    </div>
  )
}
