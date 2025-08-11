import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meet the team - Road Operations',
  description: 'Team collaboration portal for AA UK Road Operations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
} 