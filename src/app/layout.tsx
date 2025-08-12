import type { Metadata } from 'next'
import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'

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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-aa-dark transition-colors">
        {children}
        <ThemeToggle />
      </body>
    </html>
  )
} 