const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
const GOOGLE_CV_FILE_ID = import.meta.env.VITE_GOOGLE_CV_FILE_ID

if (!GOOGLE_API_KEY || !GOOGLE_CV_FILE_ID) {
  throw new Error('Missing required environment variables')
}

export const env = {
  GOOGLE_API_KEY: import.meta.env.VITE_GOOGLE_API_KEY,
  GOOGLE_CV_FILE_ID: import.meta.env.VITE_GOOGLE_CV_FILE_ID,
} as const
