'use client'

import Link from 'next/link'
import { useLanguage } from '../lib/LanguageContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './products.module.css'
import { products, getProductName, getProductDescription } from '@/app/products/data'

export default function Products() {
  const { language, t } = useLanguage()

  return (
    <>
      <Header />

      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1>{t.products.pageTitle}</h1>
          <p>{t.products.pageSubtitle}</p>
        </div>

        <div className={styles.productsGrid}>
          {products.map(product => (
            <Link key={product.id} href={`/products/${product.id}`} className={styles.productCard}>
              <div className={styles.productEmoji}>{product.emoji}</div>
              <h3 className={styles.productName}>{getProductName(product, language)}</h3>
              <p className={styles.productDescription}>{getProductDescription(product, language)}</p>
              <div className={styles.productInfo}>
                <span className={styles.calories}>{product.calories}</span>
                <span className={styles.price}>{product.price}</span>
              </div>
              <button className={styles.orderButton}>{t.products.viewDetails}</button>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
