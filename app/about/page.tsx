'use client'

import { useLanguage } from '../lib/LanguageContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './about.module.css'

export default function About() {
  const { t } = useLanguage()

  return (
    <>
      <Header />

      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1>{t.about.pageTitle}</h1>
          <p>{t.about.pageSubtitle}</p>
        </div>

        <section className={styles.story}>
          <div className={styles.storyContent}>
            <h2>{t.about.missionTitle}</h2>
            <p>{t.about.missionText1}</p>
            <p>{t.about.missionText2}</p>
          </div>
        </section>

        <section className={styles.values}>
          <h2>{t.about.valuesTitle}</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>🌱</span>
              <h3>{t.about.value1Title}</h3>
              <p>{t.about.value1Desc}</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>❤️</span>
              <h3>{t.about.value2Title}</h3>
              <p>{t.about.value2Desc}</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>⚡</span>
              <h3>{t.about.value3Title}</h3>
              <p>{t.about.value3Desc}</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>🎯</span>
              <h3>{t.about.value4Title}</h3>
              <p>{t.about.value4Desc}</p>
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <h2>{t.about.contactTitle}</h2>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <div>
                <h4>{t.about.addressLabel}</h4>
                <p>{t.about.addressText}</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <div>
                <h4>{t.about.phoneLabel}</h4>
                <p>{t.about.phoneText}</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <div>
                <h4>{t.about.emailLabel}</h4>
                <p>{t.about.emailText}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
