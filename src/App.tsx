import { Preloader } from './components/layouts/preloader/Preloader'
import { Navbar } from './components/layouts/navigation/Navbar'
import { Footer } from './components/layouts/footer/Footer'

import { navigationItems } from './config/navigation'
import { NavigationProvider } from './context/NavigationContext'
import { usePreloader } from './hooks/usePreloader'
import { useScrollSpy } from './hooks/useScrollSpy'

// Features
import { Hero } from './features/hero'
import { About } from './features/about'
import { Experience } from './features/experience'
import { Projects } from './features/projects'
import { Contact } from './features/contact'

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
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </NavigationProvider>
  )
}

export default App
