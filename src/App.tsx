import { useEffect } from 'react'
import { AnimatePresence } from 'motion/react'

import { Preloader } from './components/layouts/preloader/Preloader'
import { usePreloader } from './hooks/usePreloader'
import { useScrollSpy } from './hooks/useScrollSpy'

import { navigationItems } from './config/navigation'
import { NavigationProvider } from './context/NavigationContext'

// Features
import { Hero } from './features/hero'
import { Navbar } from './components/layouts/navigation/Navbar'
import { About } from './features/about'
import { Experience } from './features/experience'
import { Projects } from './features/projects'
import { Footer } from './components/layouts/footer/Footer'
import { Contact } from './features/contact'

const sectionIds = navigationItems.map((item) => item.id)

function App() {
  const { isPrealoder, seenPreloader } = usePreloader()

  const activeSection = useScrollSpy(sectionIds)

  useEffect(() => {
    if (!isPrealoder) return

    const timeout = setTimeout(() => {
      seenPreloader()
    }, 2000)

    return () => clearTimeout(timeout)
  }, [isPrealoder, seenPreloader])

  return (
    <NavigationProvider activeSection={activeSection}>
      <AnimatePresence>{isPrealoder && <Preloader key="preloader" />}</AnimatePresence>
      {!isPrealoder && <Navbar />}

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </NavigationProvider>
  )
}

export default App
