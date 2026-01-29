'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/app/lib/LanguageContext'
import { useCalories } from '@/app/context/CaloriesContext'
import styles from './MealLogger.module.css'

export default function MealLogger({ date }: { readonly date: string }) {
  const { t } = useLanguage()
  const { addMeal } = useCalories()
  
  const [mealName, setMealName] = useState('')
  const [calories, setCalories] = useState('')
  const [protein, setProtein] = useState('')
  const [carbs, setCarbs] = useState('')
  const [fat, setFat] = useState('')
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }))

  const handleAddMeal = () => {
    if (!mealName || !calories) {
      alert(t.calorieTracker?.fillRequired || 'Vui lòng điền đầy đủ thông tin')
      return
    }

    const newMeal = {
      id: Date.now().toString(),
      name: mealName,
      calories: Number.parseFloat(calories),
      protein: Number.parseFloat(protein) || 0,
      carbs: Number.parseFloat(carbs) || 0,
      fat: Number.parseFloat(fat) || 0,
      time,
      date,
    }

    addMeal(newMeal)

    // Reset form
    setMealName('')
    setCalories('')
    setProtein('')
    setCarbs('')
    setFat('')
    setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }))
    alert(t.calorieTracker?.mealAdded || 'Thêm bữa ăn thành công!')
  }

  return (
    <div className={styles.container}>
      <h3>{t.calorieTracker?.addMeal || 'Thêm bữa ăn'}</h3>
      
      <div className={styles.form}>
        <div className={styles.fieldgroup}>
          <label htmlFor="mealName">{t.calorieTracker?.mealName || 'Tên bữa ăn'}:</label>
          <input
            id="mealName"
            type="text"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
            placeholder={t.calorieTracker?.mealNamePlaceholder || 'VD: Cơm gạo lứt'}
            className={styles.input}
          />
        </div>

        <div className={styles.fieldgroup}>
          <label htmlFor="time">{t.calorieTracker?.time || 'Thời gian'}:</label>
          <input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.fieldgroup}>
          <label htmlFor="calories">{t.calorieTracker?.calories || 'Calories'} *:</label>
          <input
            id="calories"
            type="number"
            min="0"
            step="1"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            placeholder="500"
            className={styles.input}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.fieldgroup}>
            <label htmlFor="protein">{t.calorieTracker?.protein || 'Protein'} (g):</label>
            <input
              id="protein"
              type="number"
              min="0"
              step="0.1"
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
              placeholder="25"
              className={styles.input}
            />
          </div>

          <div className={styles.fieldgroup}>
            <label htmlFor="carbs">{t.calorieTracker?.carbs || 'Carbs'} (g):</label>
            <input
              id="carbs"
              type="number"
              min="0"
              step="0.1"
              value={carbs}
              onChange={(e) => setCarbs(e.target.value)}
              placeholder="50"
              className={styles.input}
            />
          </div>

          <div className={styles.fieldgroup}>
            <label htmlFor="fat">{t.calorieTracker?.fat || 'Chất béo'} (g):</label>
            <input
              id="fat"
              type="number"
              min="0"
              step="0.1"
              value={fat}
              onChange={(e) => setFat(e.target.value)}
              placeholder="10"
              className={styles.input}
            />
          </div>
        </div>

        <button onClick={handleAddMeal} className={styles.addBtn}>
          {t.calorieTracker?.addMeal || 'Thêm bữa ăn'}
        </button>
      </div>
    </div>
  )
}
