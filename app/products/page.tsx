'use client'

import { useLanguage } from '../lib/LanguageContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductSearch from '../components/ProductSearch'
import styles from './products.module.css'

export default function Products() {
  const { t } = useLanguage()

  return (
    <>
      <Header />

      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1>{t.products.pageTitle}</h1>
          <p>{t.products.pageSubtitle}</p>
        </div>

        <ProductSearch />
      </main>

      <Footer />
    </>
  )
}
