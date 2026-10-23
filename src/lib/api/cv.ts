import { api } from '@/lib/api/axios'
import { env, isCvDownloadConfigured } from '@/lib/env'

export async function downloadCv(): Promise<Blob> {
  if (!isCvDownloadConfigured) {
    throw new Error(
      'CV download is unavailable. Configure VITE_GOOGLE_API_KEY and VITE_GOOGLE_CV_FILE_ID.',
    )
  }

  try {
    const { data } = await api.get<Blob>(
      `/drive/v3/files/${encodeURIComponent(env.GOOGLE_CV_FILE_ID)}/export`,
      {
        responseType: 'blob',
        params: {
          mimeType: 'application/pdf',
          key: env.GOOGLE_API_KEY,
        },
      },
    )
    return data
  } catch (error) {
    console.error('Error downloading CV:', error)
    throw error
  }
}
