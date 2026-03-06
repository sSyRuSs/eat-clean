'use client'

import Link from 'next/link'
import { useLanguage } from '@/app/lib/LanguageContext'
import { useCart } from '@/app/lib/CartContext'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import styles from './product-detail.module.css'
import { Product, getProductName, getProductDescription, getProductFullDescription, getProductIngredients, getProductBenefits, getProductAllergens } from '@/app/products/data'

interface ProductDetailClientProps {
  product: Product
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { language, t } = useLanguage()
  const { addToCart } = useCart()
  const allergens = getProductAllergens(product, language)

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <>
      <Header />

      <main className={styles.main}>
        <Link href="/products" className={styles.backLink}>
          {t.productDetail.backToProducts}
        </Link>

        {product.image && (
          <div className={styles.productImageContainer}>
            <img
              src={product.image}
              alt={getProductName(product, language)}
              className={styles.productHeroImage}
            />
          </div>
        )}

        <div className={styles.productHeader}>
          <div className={styles.productEmoji}>{product.emoji}</div>
          <div className={styles.headerInfo}>
            <h1 className={styles.productName}>{getProductName(product, language)}</h1>
            <p className={styles.shortDescription}>{getProductDescription(product, language)}</p>
            <div className={styles.priceCalories}>
              <span className={styles.price}>{product.price}</span>
              <span className={styles.calories}>📊 {product.calories}</span>
            </div>
          </div>
        </div>

        <div className={styles.contentGrid}>
          <section className={styles.section}>
            <h2>{t.productDetail.description}</h2>
            <p className={styles.fullDescription}>{getProductFullDescription(product, language)}</p>
          </section>

          <section className={styles.section}>
            <h2>{t.productDetail.ingredients}</h2>
            <ul className={styles.ingredientsList}>
              {getProductIngredients(product, language).map((ingredient, index) => (
                <li key={index}>
                  <span className={styles.checkmark}>✓</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2>{t.productDetail.nutrition}</h2>
            <div className={styles.nutritionGrid}>
              <div className={styles.nutritionItem}>
                <span className={styles.nutritionLabel}>{t.productDetail.protein}</span>
                <span className={styles.nutritionValue}>{product.nutrition.protein}</span>
              </div>
              <div className={styles.nutritionItem}>
                <span className={styles.nutritionLabel}>{t.productDetail.carbs}</span>
                <span className={styles.nutritionValue}>{product.nutrition.carbs}</span>
              </div>
              <div className={styles.nutritionItem}>
                <span className={styles.nutritionLabel}>{t.productDetail.fat}</span>
                <span className={styles.nutritionValue}>{product.nutrition.fat}</span>
              </div>
              <div className={styles.nutritionItem}>
                <span className={styles.nutritionLabel}>{t.productDetail.fiber}</span>
                <span className={styles.nutritionValue}>{product.nutrition.fiber}</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>{t.productDetail.benefits}</h2>
            <ul className={styles.benefitsList}>
              {getProductBenefits(product, language).map((benefit, index) => (
                <li key={index}>
                  <span className={styles.icon}>💚</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </section>

          {allergens.length > 0 && (
            <section className={styles.section}>
              <h2>{t.productDetail.allergens}</h2>
              <div className={styles.allergenWarning}>
                <span className={styles.warningIcon}>⚠️</span>
                <p>{t.productDetail.allergenWarning} {allergens.join(', ')}</p>
              </div>
            </section>
          )}
        </div>

        <div className={styles.orderSection}>
          <button className={styles.orderButton} onClick={handleAddToCart}>
            {t.productDetail.orderButton} - {product.price}
          </button>
          <p className={styles.deliveryInfo}>
            {t.productDetail.deliveryInfo}
          </p>
        </div>
      </main>

      <Footer />
    </>
  )
}
