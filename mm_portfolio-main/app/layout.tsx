import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mahi Ahalawat | Robotics & AI Portfolio",
  description:
    'Portfolio of Mahi Ahalawat — Robotics and AI engineering student at JIIT. Projects spanning Embedded Systems, IoT, AI, and Machine Learning.',
  keywords: ['Mahi Ahalawat', 'Robotics', 'AI', 'Embedded Systems', 'IoT', 'Machine Learning', 'Portfolio', 'JIIT', 'ESP32', 'Arduino'],
  authors: [{ name: 'Mahi Ahalawat' }],
  openGraph: {
    title: "Mahi Ahalawat | Robotics & AI Portfolio",
    description: 'Robotics and AI engineering student building intelligent embedded systems, IoT solutions, and hackathon projects.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mahi Ahalawat | Robotics & AI Portfolio",
    description: 'Robotics and AI engineering student building intelligent embedded systems, IoT solutions, and hackathon projects.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  )
}



