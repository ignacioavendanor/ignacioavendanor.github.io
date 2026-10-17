import { useMemo, useState } from 'react'
import throttle from 'lodash.throttle'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { downloadCv } from '@/lib/api/cv'
import { downloadBlob } from '@/lib/download'

export function DownloadCvButton() {
  const { t } = useTranslation()
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = useMemo(
    () =>
      throttle(
        async () => {
          try {
            setIsDownloading(true)

            const blob = await downloadCv()

            downloadBlob(blob, 'CV_Ignacio_Avendano.pdf')
          } finally {
            setIsDownloading(false)
          }
        },
        3000,
        {
          leading: true,
          trailing: false,
        },
      ),
    [],
  )

  return (
    <Button
      type="button"
      size={'xl'}
      variant={'secondary'}
      onClick={handleDownload}
      disabled={isDownloading}
    >
      {isDownloading ? t('hero.download') : t('hero.cv')}
    </Button>
  )
}
