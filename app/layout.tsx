import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from './lib/LanguageContext'
import { CartProvider } from './lib/CartContext'
import { CaloriesProvider } from './context/CaloriesContext'
import BackToTop from './components/BackToTop'

export const metadata: Metadata = {
  title: 'Visionaries - Healthy Food for Life',
  description: 'Premium eat clean food products for a healthy lifestyle',
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        <LanguageProvider>
          <CartProvider>
            <CaloriesProvider>
              {children}
              <BackToTop />
            </CaloriesProvider>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
