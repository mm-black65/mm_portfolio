import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getYouTubeVideoId(url: string): string | null {
  if (!url) return null
  
  // Handle youtube.com/shorts/VIDEO_ID
  const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/)
  if (shortsMatch) return shortsMatch[1]
  
  // Handle youtu.be/VIDEO_ID
  const youtubeShortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)
  if (youtubeShortMatch) return youtubeShortMatch[1]
  
  // Handle youtube.com/watch?v=VIDEO_ID
  const watchMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/)
  if (watchMatch) return watchMatch[1]
  
  return null
}

export function isYouTubeUrl(url: string): boolean {
  return /youtube\.com|youtu\.be/.test(url)
}
