import { useState } from 'react'

const PRELOADER_STORAGE_KEY = 'preloader-seen'

export function usePreloader() {
  const [isPrealoder, setPreloader] = useState(() => {
    return sessionStorage.getItem(PRELOADER_STORAGE_KEY) !== 'true'
  })

  const seenPreloader = () => {
    sessionStorage.setItem(PRELOADER_STORAGE_KEY, 'true')
    setPreloader(false)
  }

  return {
    isPrealoder,
    seenPreloader,
  }
}
