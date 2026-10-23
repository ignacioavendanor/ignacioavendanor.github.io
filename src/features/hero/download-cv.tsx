import { useState } from 'react'
import { Download, Loader2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { downloadCv } from '@/lib/api/cv'
import { downloadBlob } from '@/lib/download'
import { isCvDownloadConfigured } from '@/lib/env'

export function DownloadCVButton() {
  const { t } = useTranslation()
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      const blob = await downloadCv()
      downloadBlob(blob, 'CV_Ignacio_Avendaño.pdf')
    } catch (error) {
      console.error('Error al descargar el CV:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button
      type="button"
      size="xl"
      variant="secondary"
      onClick={handleDownload}
      disabled={isDownloading || !isCvDownloadConfigured}
      title={!isCvDownloadConfigured ? t('hero.cvUnavailable') : undefined}
      aria-label={!isCvDownloadConfigured ? t('hero.cvUnavailable') : undefined}
      className="inline-flex items-center gap-2 cursor-pointer transition-shadow duration-200 hover:shadow-md"
    >
      <span>
        {isDownloading
          ? t('hero.download')
          : isCvDownloadConfigured
            ? t('hero.cv')
            : t('hero.cvUnavailable')}
      </span>

      {isDownloading ? (
        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
      ) : (
        <span className="flex items-center justify-center">
          <Download className="h-4 w-4" />
        </span>
      )}
    </Button>
  )
}
