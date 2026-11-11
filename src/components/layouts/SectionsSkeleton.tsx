import { Container } from './Container'
import { Skeleton } from '../ui/skeleton'

const sections = [
  {
    id: 'about',
    className: 'bg-primary py-28 sm:py-32 lg:py-24',
    block: 'bg-primary-foreground/10',
  },
  { id: 'experience', className: 'bg-foreground py-32', block: 'bg-primary-foreground/10' },
  { id: 'projects', className: 'py-32', block: '' },
  { id: 'contact', className: 'bg-foreground py-20', block: 'bg-primary-foreground/10' },
]

export function SectionsSkeleton() {
  return (
    <div aria-busy="true">
      {sections.map(({ id, className, block }) => (
        <section key={id} id={id} aria-hidden="true" className={className}>
          <Container className="space-y-6">
            <Skeleton className={`h-12 w-1/2 ${block}`} />
            <Skeleton className={`h-48 w-full ${block}`} />
          </Container>
        </section>
      ))}
    </div>
  )
}
