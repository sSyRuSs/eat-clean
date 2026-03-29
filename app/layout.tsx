import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from './lib/LanguageContext'
import { CartProvider } from './lib/CartContext'
import { CaloriesProvider } from './context/CaloriesContext'
import { ThemeProvider } from './lib/ThemeContext'
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
    <html lang="vi" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <CartProvider>
              <CaloriesProvider>
                {children}
                <BackToTop />
              </CaloriesProvider>
            </CartProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
