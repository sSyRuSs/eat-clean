'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useLanguage } from '../lib/LanguageContext'
import { useCart } from '../lib/CartContext'
import { products, getProductName, getProductDescription } from '../products/data'
import styles from './ProductSearch.module.css'

export default function ProductSearch() {
  const { language, t } = useLanguage()
  const { addToCart } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [priceRange, setPriceRange] = useState([0, 500000])

  const categories = ['', ...Array.from(new Set(products.map(p => p.category)))]

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const name = getProductName(product, language).toLowerCase()
      const description = getProductDescription(product, language).toLowerCase()
      const query = searchQuery.toLowerCase()

      const matchesSearch = name.includes(query) || description.includes(query)
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory
      const matchesPrice = product.priceValue >= priceRange[0] && product.priceValue <= priceRange[1]

      return matchesSearch && matchesCategory && matchesPrice
    })
  }, [searchQuery, selectedCategory, priceRange, language])

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
              onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
              className={styles.priceInput}
              placeholder="Min"
            />
            <span>-</span>
            <input
              type="number"
              min="0"
              max="500000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 500000])}
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

        {filteredProducts.length === 0 ? (
          <div className={styles.noResults}>
            <p>😕 {t.search.noResults}</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filteredProducts.map(product => (
              <div key={product.id} className={styles.card}>
                <Link href={`/products/${product.id}`} className={styles.cardHeader}>
                  <span className={styles.emoji}>{product.emoji}</span>
                  <h3>{getProductName(product, language)}</h3>
                </Link>
                <p className={styles.description}>
                  {getProductDescription(product, language)}
                </p>
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
        )}
      </div>
    </div>
  )
}
