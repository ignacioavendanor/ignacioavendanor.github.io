import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )

    const observeSections = () => {
      observer.disconnect()
      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) observer.observe(element)
      })
    }

    observeSections()

    const mutationObserver = new MutationObserver(observeSections)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutationObserver.disconnect()
      observer.disconnect()
    }
  }, [sectionIds])

  return activeId
}
