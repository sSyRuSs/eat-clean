'use client'

import Link from 'next/link'
import { useLanguage } from './lib/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import PromoBanner from './components/PromoBanner'
import Gallery from './components/Gallery'
import CalorieTracker from './components/CalorieTracker'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import styles from './page.module.css'

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            {t.home.heroTitle}
          </h1>
          <p className={styles.heroSubtitle}>
            {t.home.heroSubtitle}
          </p>
          <Link href="/products" className={styles.ctaButton}>
            {t.home.ctaButton}
          </Link>
        </section>

        <PromoBanner />

        <section className={styles.features}>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🌿</span>
            <h3>{t.home.feature1Title}</h3>
            <p>{t.home.feature1Desc}</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>💪</span>
            <h3>{t.home.feature2Title}</h3>
            <p>{t.home.feature2Desc}</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>✨</span>
            <h3>{t.home.feature3Title}</h3>
            <p>{t.home.feature3Desc}</p>
          </div>
        </section>

        <section className={styles.aboutSection}>
          <h2>{t.home.aboutTitle}</h2>
          <p>{t.home.aboutText}</p>
        </section>

        <Gallery />

        <CalorieTracker />

        <Testimonials />

        <FAQ />

        <Newsletter />
      </main>

      <Footer />
    </>
  )
}
