import { useEffect, useState } from 'react'

const PRELOADER_STORAGE_KEY = 'preloader-seen'

export function usePreloader() {
  const [isPreloader, setPreloader] = useState(() => {
    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return !shouldReduceMotion && sessionStorage.getItem(PRELOADER_STORAGE_KEY) !== 'true'
  })

  const seenPreloader = () => {
    sessionStorage.setItem(PRELOADER_STORAGE_KEY, 'true')
    setPreloader(false)
  }

  useEffect(() => {
    if (!isPreloader) return

    const timeout = setTimeout(() => {
      seenPreloader()
    }, 2000)

    return () => clearTimeout(timeout)
  }, [isPreloader])

  return {
    isPreloader,
    seenPreloader,
  }
}
