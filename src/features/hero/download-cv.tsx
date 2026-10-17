import { useState } from 'react'
import { Download, Loader2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'

const MotionButton = motion.create(Button)

export function DownloadCVButton() {
  const { t } = useTranslation()
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <MotionButton
      type="button"
      size="xl"
      variant="secondary"
      onClick={handleDownload}
      disabled={isDownloading}
      initial="initial"
      whileHover={isDownloading ? 'initial' : 'hover'}
      whileTap={isDownloading ? 'initial' : 'tap'}
      variants={{
        initial: { scale: 1, y: 0 },
        hover: { scale: 1.02, y: -2 },
        tap: { scale: 0.98, y: 0 },
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      className="inline-flex items-center gap-2 cursor-pointer transition-shadow duration-200 hover:shadow-md"
    >
      <span>{isDownloading ? t('hero.download') : t('hero.cv')}</span>

      {isDownloading ? (
        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
      ) : (
        <motion.div
          variants={{
            initial: { y: 0 },
            hover: { y: 3 },
          }}
          transition={{ type: 'spring', stiffness: 600, damping: 20 }}
          className="flex items-center justify-center"
        >
          <Download className="h-4 w-4" />
        </motion.div>
      )}
    </MotionButton>
  )
}
