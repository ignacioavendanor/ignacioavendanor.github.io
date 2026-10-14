import { Container } from '@/components/layouts/Container'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center py-24">
      <Container>
        <p className="text-sm text-muted-foreground">Software Engineer</p>
        <h1 className="mt-4 text-5xl font-black md:text-7xl">Ignacio Avendaño</h1>
      </Container>
    </section>
  )
}
