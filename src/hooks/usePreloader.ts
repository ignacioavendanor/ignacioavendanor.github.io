import { useEffect, useState } from 'react'

const PRELOADER_STORAGE_KEY = 'preloader-seen'

export function usePreloader() {
  const [isPreloader, setPreloader] = useState(() => {
    return sessionStorage.getItem(PRELOADER_STORAGE_KEY) !== 'true'
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
