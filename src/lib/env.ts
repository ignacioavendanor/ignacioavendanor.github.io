export const env = {
  GOOGLE_API_KEY: import.meta.env.VITE_GOOGLE_API_KEY,
  GOOGLE_CV_FILE_ID: import.meta.env.VITE_GOOGLE_CV_FILE_ID,
} as const

export const isCvDownloadConfigured = Boolean(env.GOOGLE_API_KEY && env.GOOGLE_CV_FILE_ID)
