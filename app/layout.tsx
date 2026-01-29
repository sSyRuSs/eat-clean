import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from './lib/LanguageContext'

export const metadata: Metadata = {
  title: 'Eat Clean - Healthy Food for Life',
  description: 'Premium eat clean food products for a healthy lifestyle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
