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
import { Contact } from './features/contact'

function App() {
  const { isPrealoder, seenPreloader } = usePreloader()

  const sectionId = navigationItems.map((item) => item.id)
  const activeSection = useScrollSpy(sectionId)

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
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </NavigationProvider>
  )
}

export default App
