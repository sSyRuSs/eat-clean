'use client'

import React, { useMemo } from 'react'
import { useLanguage } from '@/app/lib/LanguageContext'
import { useCalories } from '@/app/context/CaloriesContext'
import styles from './TrackingDashboard.module.css'

export default function TrackingDashboard({ date }: { readonly date: string }) {
  const { t } = useLanguage()
  const { getCurrentDayMeals, getTodayStats, removeMeal } = useCalories()

  const meals = getCurrentDayMeals()
  const stats = getTodayStats()

  const sortedMeals = useMemo(() => {
    return [...meals].sort((a, b) => {
      const timeA = a.time.split(':').map(Number)
      const timeB = b.time.split(':').map(Number)
      return timeA[0] * 60 + timeA[1] - (timeB[0] * 60 + timeB[1])
    })
  }, [meals])

  const macroBreakdown = useMemo(() => {
    const totalCals = stats.totalCalories || 1
    return {
      proteinPercent: Math.round((stats.totalProtein * 4) / totalCals * 100),
      carbsPercent: Math.round((stats.totalCarbs * 4) / totalCals * 100),
      fatPercent: Math.round((stats.totalFat * 9) / totalCals * 100),
    }
  }, [stats])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{t.calorieTracker?.dailyTracking || 'Theo dõi hôm nay'}</h2>
        <span className={styles.date}>{new Date(date).toLocaleDateString('vi-VN')}</span>
      </div>

      {/* Stats Summary */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.label}>{t.calorieTracker?.calories || 'Calories'}</span>
          <div className={styles.value}>{stats.totalCalories}</div>
          <div className={styles.subtext}>
            / {Math.round(stats.totalCalories + stats.remaining)} cal
          </div>
        </div>

        <div className={styles.statCard}>
          <span className={styles.label}>{t.calorieTracker?.protein || 'Protein'}</span>
          <div className={styles.value}>{stats.totalProtein.toFixed(1)}</div>
          <div className={styles.subtext}>g</div>
        </div>

        <div className={styles.statCard}>
          <span className={styles.label}>{t.calorieTracker?.carbs || 'Carbs'}</span>
          <div className={styles.value}>{stats.totalCarbs.toFixed(1)}</div>
          <div className={styles.subtext}>g</div>
        </div>

        <div className={styles.statCard}>
          <span className={styles.label}>{t.calorieTracker?.fat || 'Chất béo'}</span>
          <div className={styles.value}>{stats.totalFat.toFixed(1)}</div>
          <div className={styles.subtext}>g</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className={styles.progressSection}>
        <div className={styles.progressLabel}>
          <span>{t.calorieTracker?.calorieGoal || 'Mục tiêu calo'}:</span>
          <span className={stats.remaining >= 0 ? styles.positive : styles.negative}>
            {stats.remaining >= 0 ? '+' : ''}{stats.remaining} cal {t.calorieTracker?.remaining || 'còn lại'}
          </span>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{
              width: `${Math.min((stats.totalCalories / (Math.round(stats.totalCalories + stats.remaining) || 2000)) * 100, 100)}%`,
            }}
          />
        </div>
      </div>

      {/* Macro Breakdown */}
      <div className={styles.macroSection}>
        <h3>{t.calorieTracker?.macroBreakdown || 'Phân bố chất dinh dưỡng'}</h3>
        <div className={styles.macroChart}>
          <div className={styles.macroBars}>
            <div className={styles.macroBar}>
              <div
                className={styles.macroFill}
                style={{
                  width: `${macroBreakdown.proteinPercent}%`,
                  backgroundColor: '#FF6B6B',
                }}
              />
            </div>
            <div className={styles.macroBar}>
              <div
                className={styles.macroFill}
                style={{
                  width: `${macroBreakdown.carbsPercent}%`,
                  backgroundColor: '#FFA500',
                }}
              />
            </div>
            <div className={styles.macroBar}>
              <div
                className={styles.macroFill}
                style={{
                  width: `${macroBreakdown.fatPercent}%`,
                  backgroundColor: '#90d88b',
                }}
              />
            </div>
          </div>
          <div className={styles.macroLegend}>
            <span>🔴 {t.calorieTracker?.protein || 'Protein'}: {macroBreakdown.proteinPercent}%</span>
            <span>🟠 {t.calorieTracker?.carbs || 'Carbs'}: {macroBreakdown.carbsPercent}%</span>
            <span>🟢 {t.calorieTracker?.fat || 'Chất béo'}: {macroBreakdown.fatPercent}%</span>
          </div>
        </div>
      </div>

      {/* Meals List */}
      <div className={styles.mealsSection}>
        <h3>{t.calorieTracker?.meals || 'Bữa ăn'} ({sortedMeals.length})</h3>
        
        {sortedMeals.length > 0 ? (
          <div className={styles.mealsList}>
            {sortedMeals.map((meal) => (
              <div key={meal.id} className={styles.mealItem}>
                <div className={styles.mealInfo}>
                  <div className={styles.mealHeader}>
                    <span className={styles.mealName}>{meal.name}</span>
                    <span className={styles.mealTime}>{meal.time}</span>
                  </div>
                  <div className={styles.mealMacros}>
                    <span>{meal.calories} cal</span>
                    <span>P: {meal.protein.toFixed(1)}g</span>
                    <span>C: {meal.carbs.toFixed(1)}g</span>
                    <span>F: {meal.fat.toFixed(1)}g</span>
                  </div>
                </div>
                <button
                  className={styles.deleteBtn}
                  onClick={() => {
                    if (confirm(t.calorieTracker?.confirmDelete || 'Bạn chắc chứ?')) {
                      removeMeal(meal.id)
                    }
                  }}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p>{t.calorieTracker?.noMeals || 'Chưa thêm bữa ăn nào'}</p>
          </div>
        )}
      </div>
    </div>
  )
}
