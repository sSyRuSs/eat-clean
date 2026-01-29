'use client'

import Link from 'next/link'
import { useLanguage } from './lib/LanguageContext'
import styles from './not-found.module.css'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <div className={styles.emoji}>🥗</div>
        <h2 className={styles.subtitle}>{t.notFound.title}</h2>
        <p className={styles.description}>{t.notFound.description}</p>
        
        <div className={styles.links}>
          <Link href="/" className={styles.primaryButton}>
            {t.notFound.goHome}
          </Link>
          <Link href="/products" className={styles.secondaryButton}>
            {t.notFound.viewProducts}
          </Link>
        </div>
      </div>
    </div>
  )
}
