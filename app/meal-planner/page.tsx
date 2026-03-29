'use client'

import { useState, useMemo, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useLanguage } from '../lib/LanguageContext'
import { products, Product } from '../products/data'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './meal-planner.module.css'

type MealSlot = 'breakfast' | 'lunch' | 'dinner' | 'snack'
type DayKey = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

interface MealPlan {
  [day: string]: {
    [slot: string]: string[]
  }
}

const DAYS: DayKey[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
const SLOTS: MealSlot[] = ['breakfast', 'lunch', 'dinner', 'snack']
const SLOT_EMOJIS: Record<MealSlot, string> = {
  breakfast: '🌅',
  lunch: '☀️',
  dinner: '🌙',
  snack: '🍎',
}

const STORAGE_KEY = 'visionaries_meal_plan'

function loadPlan(): MealPlan {
  if (typeof window === 'undefined') return {}
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

function parseNutrition(value: string): number {
  return parseInt(value.replace(/[^0-9]/g, '')) || 0
}

function getDayNutrition(dayPlan: { [slot: string]: string[] }) {
  let calories = 0, protein = 0, carbs = 0, fat = 0
  for (const slot of SLOTS) {
    const ids = dayPlan[slot] || []
    for (const id of ids) {
      const product = products.find(p => p.id === id)
      if (product) {
        calories += parseNutrition(product.calories)
        protein += parseNutrition(product.nutrition.protein)
        carbs += parseNutrition(product.nutrition.carbs)
        fat += parseNutrition(product.nutrition.fat)
      }
    }
  }
  return { calories, protein, carbs, fat }
}

export default function MealPlannerPage() {
  const { language, t } = useLanguage()
  const [plan, setPlan] = useState<MealPlan>({})
  const [search, setSearch] = useState('')
  const [selectedSlot, setSelectedSlot] = useState<{ day: DayKey; slot: MealSlot } | null>(null)
  const [activeDay, setActiveDay] = useState<DayKey>('monday')

  useEffect(() => {
    setPlan(loadPlan())
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plan))
  }, [plan])

  const filteredProducts = useMemo(() => {
    if (!search.trim()) return products
    const q = search.toLowerCase()
    return products.filter(p =>
      p.name.vi.toLowerCase().includes(q) ||
      p.name.en.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    )
  }, [search])

  const addProduct = useCallback((productId: string) => {
    if (!selectedSlot) return
    const { day, slot } = selectedSlot
    setPlan(prev => {
      const dayPlan = prev[day] || {}
      const slotItems = dayPlan[slot] || []
      return {
        ...prev,
        [day]: {
          ...dayPlan,
          [slot]: [...slotItems, productId],
        },
      }
    })
  }, [selectedSlot])

  const removeProduct = useCallback((day: DayKey, slot: MealSlot, index: number) => {
    setPlan(prev => {
      const dayPlan = prev[day] || {}
      const slotItems = [...(dayPlan[slot] || [])]
      slotItems.splice(index, 1)
      return {
        ...prev,
        [day]: {
          ...dayPlan,
          [slot]: slotItems,
        },
      }
    })
  }, [])

  const clearDay = useCallback((day: DayKey) => {
    setPlan(prev => {
      const next = { ...prev }
      delete next[day]
      return next
    })
  }, [])

  const clearAll = useCallback(() => {
    setPlan({})
  }, [])

  const weekNutrition = useMemo(() => {
    let calories = 0, protein = 0, carbs = 0, fat = 0
    for (const day of DAYS) {
      const n = getDayNutrition(plan[day] || {})
      calories += n.calories
      protein += n.protein
      carbs += n.carbs
      fat += n.fat
    }
    return { calories, protein, carbs, fat }
  }, [plan])

  const dayNutrition = getDayNutrition(plan[activeDay] || {})
  const dayLabel = t.mealPlanner[activeDay]

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Link href="/" className={styles.backButton}>
          {t.calorieTracker.back}
        </Link>

        <section className={styles.hero}>
          <h1>📅 {t.mealPlanner.title}</h1>
          <p>{t.mealPlanner.subtitle}</p>
        </section>

        <div className={styles.layout}>
          <div className={styles.plannerArea}>
            <div className={styles.dayTabs}>
              {DAYS.map(day => (
                <button
                  key={day}
                  className={`${styles.dayTab} ${activeDay === day ? styles.dayTabActive : ''}`}
                  onClick={() => setActiveDay(day)}
                >
                  {t.mealPlanner[day]}
                </button>
              ))}
            </div>

            <div className={styles.dayHeader}>
              <h2>{dayLabel}</h2>
              <button className={styles.clearDayBtn} onClick={() => clearDay(activeDay)}>
                🗑️ {t.mealPlanner.clearDay}
              </button>
            </div>

            <div className={styles.mealGrid}>
              {SLOTS.map(slot => {
                const items = plan[activeDay]?.[slot] || []
                const isSelected = selectedSlot?.day === activeDay && selectedSlot?.slot === slot
                return (
                  <div
                    key={slot}
                    className={`${styles.mealSlot} ${isSelected ? styles.mealSlotSelected : ''}`}
                    onClick={() => setSelectedSlot({ day: activeDay, slot })}
                  >
                    <div className={styles.slotHeader}>
                      <span className={styles.slotEmoji}>{SLOT_EMOJIS[slot]}</span>
                      <span className={styles.slotLabel}>{t.mealPlanner[slot]}</span>
                    </div>
                    <div className={styles.slotContent}>
                      {items.length === 0 ? (
                        <p className={styles.dropHint}>
                          {isSelected ? '✓ ' : ''}{t.mealPlanner.dropHere}
                        </p>
                      ) : (
                        <div className={styles.slotItems}>
                          {items.map((id, idx) => {
                            const product = products.find(p => p.id === id)
                            if (!product) return null
                            return (
                              <div key={idx} className={styles.slotItem}>
                                <span>{product.emoji} {product.name[language]}</span>
                                <button
                                  className={styles.removeItem}
                                  onClick={e => {
                                    e.stopPropagation()
                                    removeProduct(activeDay, slot, idx)
                                  }}
                                >
                                  ✕
                                </button>
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className={styles.summaryCard}>
              <h3>📊 {t.mealPlanner.daySummary} - {dayLabel}</h3>
              <div className={styles.nutritionRow}>
                <div className={styles.nutritionItem}>
                  <span className={styles.nutritionValue}>{dayNutrition.calories}</span>
                  <span className={styles.nutritionLabel}>{t.mealPlanner.totalCalories}</span>
                </div>
                <div className={styles.nutritionItem}>
                  <span className={styles.nutritionValue}>{dayNutrition.protein}g</span>
                  <span className={styles.nutritionLabel}>{t.mealPlanner.totalProtein}</span>
                </div>
                <div className={styles.nutritionItem}>
                  <span className={styles.nutritionValue}>{dayNutrition.carbs}g</span>
                  <span className={styles.nutritionLabel}>{t.mealPlanner.totalCarbs}</span>
                </div>
                <div className={styles.nutritionItem}>
                  <span className={styles.nutritionValue}>{dayNutrition.fat}g</span>
                  <span className={styles.nutritionLabel}>{t.mealPlanner.totalFat}</span>
                </div>
              </div>
            </div>

            <div className={styles.weeklyCard}>
              <h3>📈 {t.mealPlanner.weeklyOverview}</h3>
              <div className={styles.nutritionRow}>
                <div className={styles.nutritionItem}>
                  <span className={styles.nutritionValue}>{weekNutrition.calories}</span>
                  <span className={styles.nutritionLabel}>{t.mealPlanner.totalCalories}</span>
                </div>
                <div className={styles.nutritionItem}>
                  <span className={styles.nutritionValue}>{weekNutrition.protein}g</span>
                  <span className={styles.nutritionLabel}>{t.mealPlanner.totalProtein}</span>
                </div>
                <div className={styles.nutritionItem}>
                  <span className={styles.nutritionValue}>{weekNutrition.carbs}g</span>
                  <span className={styles.nutritionLabel}>{t.mealPlanner.totalCarbs}</span>
                </div>
                <div className={styles.nutritionItem}>
                  <span className={styles.nutritionValue}>{weekNutrition.fat}g</span>
                  <span className={styles.nutritionLabel}>{t.mealPlanner.totalFat}</span>
                </div>
              </div>
              <button className={styles.clearAllBtn} onClick={clearAll}>
                🗑️ {t.mealPlanner.clearAll}
              </button>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <h3>{t.mealPlanner.availableProducts}</h3>
            <input
              type="text"
              className={styles.searchInput}
              placeholder={t.mealPlanner.searchPlaceholder}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {!selectedSlot && (
              <p className={styles.selectHint}>{t.mealPlanner.dropHere}</p>
            )}
            <div className={styles.productList}>
              {filteredProducts.map(product => (
                <button
                  key={product.id}
                  className={styles.productItem}
                  onClick={() => addProduct(product.id)}
                  disabled={!selectedSlot}
                >
                  <span className={styles.productEmoji}>{product.emoji}</span>
                  <div className={styles.productInfo}>
                    <span className={styles.productName}>{product.name[language]}</span>
                    <span className={styles.productMeta}>
                      {product.calories} · {product.price}
                    </span>
                  </div>
                </button>
              ))}
              {filteredProducts.length === 0 && (
                <p className={styles.noProducts}>{t.mealPlanner.noProducts}</p>
              )}
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}
