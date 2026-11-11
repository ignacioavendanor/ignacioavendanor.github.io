import { lazy, Suspense } from 'react'
import { SectionsSkeleton } from './components/layouts/SectionsSkeleton'
import { Preloader } from './components/layouts/preloader/Preloader'
import { Navbar } from './components/layouts/navigation/Navbar'
import { Footer } from './components/layouts/footer/Footer'

import { navigationItems } from './config/navigation'
import { NavigationProvider } from './context/NavigationContext'
import { usePreloader } from './hooks/usePreloader'
import { useScrollSpy } from './hooks/useScrollSpy'

// Features
import { Hero } from './features/hero'

const About = lazy(() => import('./features/about').then((m) => ({ default: m.About })))
const Experience = lazy(() =>
  import('./features/experience').then((m) => ({ default: m.Experience })),
)
const Projects = lazy(() => import('./features/projects').then((m) => ({ default: m.Projects })))
const Contact = lazy(() => import('./features/contact').then((m) => ({ default: m.Contact })))

const sectionIds = navigationItems.map((item) => item.id)

function App() {
  const { isPreloader } = usePreloader()
  const activeSection = useScrollSpy(sectionIds)

  if (isPreloader) {
    return (
      <NavigationProvider activeSection={activeSection}>
        <Preloader />
      </NavigationProvider>
    )
  }

  return (
    <NavigationProvider activeSection={activeSection}>
      <div className="flex min-h-svh flex-col">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <Suspense fallback={<SectionsSkeleton />}>
            <About />
            <Experience />
            <Projects />
            <Contact />
          </Suspense>
        </main>

        <Footer />
      </div>
    </NavigationProvider>
  )
}

export default App
