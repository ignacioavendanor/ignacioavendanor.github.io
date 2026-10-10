import { useEffect } from 'react'
import { AnimatePresence } from 'motion/react'

import { Preloader } from './components/layouts/preloader/Preloader'
import { Hero } from './features/hero'
import { usePreloader } from './hooks/usePreloader'

function App() {
  const { isPrealoder, seenPreloader } = usePreloader()

  useEffect(() => {
    if (!isPrealoder) return

    const timeout = setTimeout(() => {
      seenPreloader()
    }, 2000)

    return () => clearTimeout(timeout)
  }, [isPrealoder, seenPreloader])

  return (
    <>
      <AnimatePresence>{isPrealoder && <Preloader key="preloader" />}</AnimatePresence>

      <Hero />
    </>
  )
}

export default App
