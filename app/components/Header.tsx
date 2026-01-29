'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import { useCart } from '../lib/CartContext'
import Cart from './Cart'
import styles from './Header.module.css'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const { getTotalItems } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>🥗 {t.siteName}</div>
          
          <button 
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <div className={`${styles.navContent} ${mobileMenuOpen ? styles.open : ''}`}>
            <ul className={styles.navLinks}>
              <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>{t.nav.home}</Link></li>
              <li><Link href="/products" onClick={() => setMobileMenuOpen(false)}>{t.nav.products}</Link></li>
              <li><Link href="/about" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</Link></li>
              <li><Link href="/blog" onClick={() => setMobileMenuOpen(false)}>{t.nav.blog}</Link></li>
            </ul>
            <div className={styles.headerActions}>
              <div className={styles.languageSwitcher}>
                <button
                  className={language === 'vi' ? styles.active : ''}
                  onClick={() => setLanguage('vi')}
                >
                  VN
                </button>
                <span className={styles.separator}>|</span>
                <button
                  className={language === 'en' ? styles.active : ''}
                  onClick={() => setLanguage('en')}
                >
                  EN
                </button>
              </div>
              <button
                className={styles.cartButton}
                onClick={() => setCartOpen(true)}
                aria-label="Shopping cart"
              >
                🛒
                {getTotalItems() > 0 && (
                  <span className={styles.cartBadge}>{getTotalItems()}</span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
