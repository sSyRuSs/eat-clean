'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useLanguage } from '../lib/LanguageContext'
import { useCart } from '../lib/CartContext'
import { products, getProductName, getProductDescription, MealType } from '../products/data'
import styles from './ProductSearch.module.css'

export default function ProductSearch() {
  const { language, t } = useLanguage()
  const { addToCart } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedMealType, setSelectedMealType] = useState<MealType | ''>('')
  const [priceRange, setPriceRange] = useState([0, 500000])

  const categories = ['', ...Array.from(new Set(products.map(p => p.category)))]
  const mealTypes: { value: MealType | ''; label: string }[] = [
    { value: '', label: t.search.allMeals || 'All' },
    { value: 'combo', label: t.search.combo || 'Saving Combos' },
    { value: 'breakfast', label: t.search.breakfast || 'Breakfast' },
    { value: 'dessert', label: t.search.dessert || 'Dessert' },
    { value: 'lunch', label: t.search.lunch || 'Lunch' },
    { value: 'snack', label: t.search.snack || 'Drinks' }
  ]

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const name = getProductName(product, language).toLowerCase()
      const description = getProductDescription(product, language).toLowerCase()
      const query = searchQuery.toLowerCase()

      const matchesSearch = name.includes(query) || description.includes(query)
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory
      const matchesMealType = selectedMealType === '' || product.mealType === selectedMealType
      const matchesPrice = product.priceValue >= priceRange[0] && product.priceValue <= priceRange[1]

      return matchesSearch && matchesCategory && matchesMealType && matchesPrice
    })
  }, [searchQuery, selectedCategory, selectedMealType, priceRange, language])

  // Group products by meal type
  const productsByMealType = useMemo(() => {
    const grouped: Record<MealType, typeof filteredProducts> = {
      combo: [],
      breakfast: [],
      dessert: [],
      lunch: [],
      snack: []
    }
    
    filteredProducts.forEach(product => {
      if (product.mealType in grouped) {
        grouped[product.mealType].push(product)
      }
    })
    
    return grouped
  }, [filteredProducts])

  const mealTypeLabels: Record<MealType, string> = {
    combo: t.search.combo || 'Saving Combos',
    breakfast: t.search.breakfast || 'Breakfast',
    dessert: t.search.dessert || 'Dessert',
    lunch: t.search.lunch || 'Lunch',
    snack: t.search.snack || 'Drinks'
  }

  const renderProductSection = (mealType: MealType, products: typeof filteredProducts) => {
    if (products.length === 0) return null

    return (
      <div key={mealType} className={styles.mealTypeSection}>
        <div className={styles.sectionDivider}>
          <h2 className={styles.sectionTitle}>{mealTypeLabels[mealType]}</h2>
        </div>
        <div className={styles.grid}>
          {products.map(product => (
            <div key={product.id} className={styles.card}>
              <Link href={`/products/${product.id}`} className={styles.cardLink}>
                {product.image && (
                  <div className={styles.imageContainer}>
                    <img
                      src={product.image}
                      alt={getProductName(product, language)}
                      className={styles.productImage}
                    />
                    <div className={styles.imageOverlay}>
                      <h3 className={styles.overlayTitle}>{getProductName(product, language)}</h3>
                      <p className={styles.overlayDescription}>
                        {getProductDescription(product, language)}
                      </p>
                    </div>
                  </div>
                )}
              </Link>
              <div className={styles.cardFooter}>
                <span className={styles.price}>{product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className={styles.addButton}
                >
                  {t.search.addToCart}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const groupedMealTypes: MealType[] = ['combo', 'breakfast', 'lunch', 'dessert', 'snack']

  let resultContent
  if (filteredProducts.length === 0) {
    resultContent = (
      <div className={styles.noResults}>
        <p>😕 {t.search.noResults}</p>
      </div>
    )
  } else if (selectedMealType === '') {
    resultContent = (
      <div>
        {groupedMealTypes.map(mealType =>
          renderProductSection(mealType, productsByMealType[mealType])
        )}
      </div>
    )
  } else {
    resultContent = (
      <div className={styles.grid}>
        {filteredProducts.map(product => (
          <div key={product.id} className={styles.card}>
            <Link href={`/products/${product.id}`} className={styles.cardLink}>
              {product.image && (
                <div className={styles.imageContainer}>
                  <img
                    src={product.image}
                    alt={getProductName(product, language)}
                    className={styles.productImage}
                  />
                  <div className={styles.imageOverlay}>
                    <h3 className={styles.overlayTitle}>{getProductName(product, language)}</h3>
                    <p className={styles.overlayDescription}>
                      {getProductDescription(product, language)}
                    </p>
                  </div>
                </div>
              )}
            </Link>
            <div className={styles.cardFooter}>
              <span className={styles.price}>{product.price}</span>
              <button
                onClick={() => addToCart(product)}
                className={styles.addButton}
              >
                {t.search.addToCart}
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        {/* Search Bar */}
        <div className={styles.filterGroup}>
          <label htmlFor="search">{t.search.label}</label>
          <input
            id="search"
            type="text"
            placeholder={t.search.placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.input}
          />
        </div>

        {/* Meal Type Filter Tabs */}
        <div className={styles.filterGroup}>
          <label>{t.search.mealType || 'Meal Type'}</label>
          <div className={styles.mealTypeTabs}>
            {mealTypes.map(type => (
              <button
                key={type.value}
                onClick={() => setSelectedMealType(type.value)}
                className={`${styles.mealTypeTab} ${selectedMealType === type.value ? styles.active : ''}`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className={styles.filterGroup}>
          <label htmlFor="category">{t.search.category}</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={styles.select}
          >
            <option value="">{t.search.allCategories}</option>
            {categories.map(cat => cat && (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div className={styles.filterGroup}>
          <label>{t.search.price}</label>
          <div className={styles.priceInputs}>
            <input
              type="number"
              min="0"
              max="500000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number.parseInt(e.target.value) || 0, priceRange[1]])}
              className={styles.priceInput}
              placeholder="Min"
            />
            <span>-</span>
            <input
              type="number"
              min="0"
              max="500000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value) || 500000])}
              className={styles.priceInput}
              placeholder="Max"
            />
          </div>
        </div>

        {/* Reset Button */}
        <button
          onClick={() => {
            setSearchQuery('')
            setSelectedCategory('')
            setSelectedMealType('')
            setPriceRange([0, 500000])
          }}
          className={styles.resetButton}
        >
          {t.search.reset}
        </button>
      </div>

      {/* Results */}
      <div className={styles.results}>
        <p className={styles.resultCount}>
          {t.search.found}: {filteredProducts.length}
        </p>

        {resultContent}
      </div>
    </div>
  )
}
