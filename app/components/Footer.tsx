'use client'

import { useLanguage } from '../lib/LanguageContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className={styles.footer}>
      <p>&copy; 2026 Eat Clean. {t.footer}</p>
    </footer>
  )
}
