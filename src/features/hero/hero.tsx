import { Container } from '@/components/layouts/Container'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import profilePic from '@/assets/images/profile-picture.webp'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-background pt-28 lg:block lg:pt-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[30%] bg-primary lg:block"
      />

      <Container className="relative z-20 flex min-h-screen flex-col justify-between lg:flex-row lg:items-center">
        <div className="flex max-w-2xl flex-col items-center py-10 text-center lg:items-start lg:py-20 lg:text-left">
          <h1 className="mt-2 text-5xl font-black uppercase leading-none tracking-tighter sm:text-7xl lg:text-9xl">
            <span className="mb-3 block font-extrabold tracking-wider text-primary sm:text-lg lg:text-xl">
              Software Engineer
            </span>
            Ignacio
            <br />
            Avendaño
          </h1>

          <p className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
            Lorem ipsum <span className="font-semibold italic text-primary">dolor sit amet</span>,
            consectetur adipiscing elit. Sed do eiusmo.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button size={'xl'}>
              <a href="#projects" className="flex items-center">
                Ver Proyectos
                <ArrowUpRight className="ml-1 h-4 w-4 stroke-2" />
              </a>
            </Button>

            <Button variant="outline" size={'xl'}>
              <a href="/cv.pdf" download>
                Descargar CV
              </a>
            </Button>
          </div>
        </div>

        <div className="relative z-10 flex w-full justify-center lg:absolute lg:bottom-0 lg:right-16 lg:w-auto xl:right-24">
          <img
            src={profilePic}
            alt="Ignacio Avendaño"
            className="h-[50vh] w-auto cursor-pointer object-contain grayscale transition-all duration-500 ease-in-out hover:grayscale-0 lg:h-[90vh]"
          />
        </div>
      </Container>
    </section>
  )
}
