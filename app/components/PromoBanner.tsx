'use client'

import Link from 'next/link'
import { useLanguage } from '../lib/LanguageContext'
import styles from './PromoBanner.module.css'

export default function PromoBanner() {
  const { t } = useLanguage()

  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.badge}>{t.promo.badge}</div>
        <div className={styles.text}>
          <h2>{t.promo.title}</h2>
          <p>{t.promo.subtitle}</p>
        </div>
        <Link href="/products" className={styles.cta}>
          {t.promo.cta}
        </Link>
      </div>
    </section>
  )
}
