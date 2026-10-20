import { useRef, useState } from 'react'
import { useMotionValue, useMotionValueEvent, useScroll, useSpring } from 'motion/react'

export function useTimelineProgress() {
  const trackRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([])
  const isHovered = useRef(false)
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 50%', 'end 55%'],
  })

  const targetProgress = useMotionValue(0)
  const activeProgress = useSpring(targetProgress, { stiffness: 120, damping: 20 })

  const getHighlightedIndex = (progress: number) => {
    const track = trackRef.current
    if (!track) return null

    const trackRect = track.getBoundingClientRect()
    if (trackRect.height === 0) return null

    let active: number | null = null
    nodeRefs.current.forEach((node, index) => {
      if (!node) return
      const nodeRect = node.getBoundingClientRect()
      const nodeProgress = (nodeRect.top + nodeRect.height / 2 - trackRect.top) / trackRect.height

      if (nodeProgress - 0.005 <= progress) {
        active = index
      }
    })

    return active
  }

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (isHovered.current) return
    targetProgress.set(progress)
    setHighlightedIndex(getHighlightedIndex(progress))
  })

  const handlePointerEnter = (index: number) => {
    isHovered.current = true
    setHighlightedIndex(index)

    const node = nodeRefs.current[index]
    const track = trackRef.current
    if (!node || !track) return

    const trackRect = track.getBoundingClientRect()
    const nodeRect = node.getBoundingClientRect()
    if (trackRect.height === 0) return

    const progress = (nodeRect.top + nodeRect.height / 2 - trackRect.top) / trackRect.height
    targetProgress.set(progress)
  }

  const handlePointerLeave = () => {
    isHovered.current = false
    const progress = scrollYProgress.get()
    targetProgress.set(progress)
    setHighlightedIndex(getHighlightedIndex(progress))
  }

  return {
    activeProgress,
    highlightedIndex,
    trackRef,
    handlePointerEnter,
    handlePointerLeave,
    setNodeRef: (index: number, node: HTMLDivElement | null) => {
      nodeRefs.current[index] = node
    },
  }
}
