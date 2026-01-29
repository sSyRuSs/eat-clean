'use client'

import Link from 'next/link'
import { useLanguage } from '../lib/LanguageContext'
import styles from './Header.module.css'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>🥗 {t.siteName}</div>
        <ul className={styles.navLinks}>
          <li><Link href="/">{t.nav.home}</Link></li>
          <li><Link href="/products">{t.nav.products}</Link></li>
          <li><Link href="/about">{t.nav.about}</Link></li>
        </ul>
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
      </nav>
    </header>
  )
}
