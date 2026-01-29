'use client'

import React, { useState, useMemo } from 'react'
import { useLanguage } from '@/app/lib/LanguageContext'
import { useCalories } from '@/app/context/CaloriesContext'
import styles from './CalorieTrackerFullPage.module.css'

type Gender = 'male' | 'female'
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active'
type Goal = 'maintain' | 'lose' | 'gain'

export default function CalorieTrackerFullPage() {
  const { t } = useLanguage()
  const { bmrData, setBmrData } = useCalories()
  
  const [gender, setGender] = useState<Gender>((bmrData?.gender as Gender) || 'male')
  const [weight, setWeight] = useState<string>(bmrData?.weight?.toString() || '')
  const [height, setHeight] = useState<string>(bmrData?.height?.toString() || '')
  const [age, setAge] = useState<string>(bmrData?.age?.toString() || '')
  const [activity, setActivity] = useState<ActivityLevel>((bmrData?.activity as ActivityLevel) || 'moderate')
  const [goal, setGoal] = useState<Goal>((bmrData?.goal as Goal) || 'maintain')

  const result = useMemo(() => {
    const w = Number.parseFloat(weight)
    const h = Number.parseFloat(height)
    const a = Number.parseFloat(age)

    if (!w || !h || !a) return null

    const bmr =
      gender === 'male'
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161

    const activityFactor: Record<ActivityLevel, number> = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
    }

    const goalAdjust: Record<Goal, number> = {
      maintain: 0,
      lose: -300,
      gain: 300,
    }

    const maintenance = bmr * activityFactor[activity]
    const target = maintenance + goalAdjust[goal]

    return {
      maintenance: Math.round(maintenance),
      target: Math.round(target),
      bmr: Math.round(bmr),
    }
  }, [weight, height, age, gender, activity, goal])

  const handleSave = () => {
    if (result) {
      setBmrData({
        maintenance: result.maintenance,
        target: result.target,
        gender,
        weight: Number.parseFloat(weight),
        height: Number.parseFloat(height),
        age: Number.parseFloat(age),
        activity,
        goal,
      })
      alert(t.calorieTracker?.saved || 'Đã lưu thông tin!')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{t.calorieTracker?.title || 'Calorie Tracker'}</h1>
        <p>{t.calorieTracker?.subtitle || 'Tính toán nhu cầu calo hàng ngày của bạn'}</p>
      </div>

      <div className={styles.calculatorSection}>
        <div className={styles.formSection}>
          <h2>{t.calorieTracker?.personalInfo || 'Thông tin cá nhân'}</h2>
          
          <div className={styles.fieldgroup}>
            <label>{t.calorieTracker?.gender || 'Giới tính'}:</label>
            <div className={styles.segmentedButtons}>
              <button
                className={`${styles.segmentBtn} ${gender === 'male' ? styles.active : ''}`}
                onClick={() => setGender('male' as Gender)}
              >
                {t.calorieTracker?.male || 'Nam'}
              </button>
              <button
                className={`${styles.segmentBtn} ${gender === 'female' ? styles.active : ''}`}
                onClick={() => setGender('female' as Gender)}
              >
                {t.calorieTracker?.female || 'Nữ'}
              </button>
            </div>
          </div>

          <div className={styles.fieldgroup}>
            <label htmlFor="weight">{t.calorieTracker?.weight || 'Cân nặng'} (kg)</label>
            <input
              id="weight"
              type="number"
              min="20"
              max="200"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className={styles.input}
              placeholder="70"
            />
          </div>

          <div className={styles.fieldgroup}>
            <label htmlFor="height">{t.calorieTracker?.height || 'Chiều cao'} (cm)</label>
            <input
              id="height"
              type="number"
              min="100"
              max="230"
              step="0.1"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className={styles.input}
              placeholder="170"
            />
          </div>

          <div className={styles.fieldgroup}>
            <label htmlFor="age">{t.calorieTracker?.age || 'Tuổi'}</label>
            <input
              id="age"
              type="number"
              min="15"
              max="100"
              step="1"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={styles.input}
              placeholder="30"
            />
          </div>

          <div className={styles.fieldgroup}>
            <label htmlFor="activity">{t.calorieTracker?.activity || 'Mức độ hoạt động'}:</label>
            <select
              id="activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value as ActivityLevel)}
              className={styles.select}
            >
              <option value="sedentary">{t.calorieTracker?.sedentary || 'Ít vận động'}</option>
              <option value="light">{t.calorieTracker?.light || 'Nhẹ'}</option>
              <option value="moderate">{t.calorieTracker?.moderate || 'Vừa phải'}</option>
              <option value="active">{t.calorieTracker?.active || 'Rất hoạt động'}</option>
            </select>
          </div>

          <div className={styles.fieldgroup}>
            <label htmlFor="goal">{t.calorieTracker?.goal || 'Mục tiêu'}:</label>
            <select
              id="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value as Goal)}
              className={styles.select}
            >
              <option value="maintain">{t.calorieTracker?.maintain || 'Duy trì'}</option>
              <option value="lose">{t.calorieTracker?.lose || 'Giảm cân'}</option>
              <option value="gain">{t.calorieTracker?.gain || 'Tăng cân'}</option>
            </select>
          </div>

          <button onClick={handleSave} className={styles.saveBtn}>
            {t.calorieTracker?.save || 'Lưu thông tin'}
          </button>
        </div>

        <div className={styles.resultSection}>
          {result ? (
            <>
              <h2>{t.calorieTracker?.results || 'Kết quả'}</h2>
              
              <div className={styles.resultCard}>
                <div className={styles.resultItem}>
                  <span className={styles.label}>{t.calorieTracker?.bmr || 'BMR'}</span>
                  <div className={styles.value}>{result.bmr}</div>
                  <span className={styles.unit}>cal/day</span>
                </div>
              </div>

              <div className={styles.resultCard}>
                <div className={styles.resultItem}>
                  <span className={styles.label}>{t.calorieTracker?.maintenance || 'Duy trì cân nặng'}</span>
                  <div className={styles.value}>{result.maintenance}</div>
                  <span className={styles.unit}>cal/day</span>
                </div>
              </div>

              <div className={styles.resultCard}>
                <div className={styles.resultItem}>
                  <span className={styles.label}>{t.calorieTracker?.daily || 'Mục tiêu hàng ngày'}</span>
                  <div className={styles.value}>{result.target}</div>
                  <span className={styles.unit}>cal/day</span>
                </div>
              </div>

              <div className={styles.note}>
                {goal === 'lose' && (
                  <p>💡 {t.calorieTracker?.loseNote || 'Để giảm cân, hãy tiêu thụ 300 cal ít hơn mục tiêu hàng ngày'}</p>
                )}
                {goal === 'gain' && (
                  <p>💡 {t.calorieTracker?.gainNote || 'Để tăng cân, hãy tiêu thụ 300 cal nhiều hơn mục tiêu hàng ngày'}</p>
                )}
                {goal === 'maintain' && (
                  <p>💡 {t.calorieTracker?.maintainNote || 'Để duy trì cân nặng, hãy tiêu thụ theo mục tiêu hàng ngày'}</p>
                )}
              </div>
            </>
          ) : (
            <div className={styles.placeholder}>
              <p>{t.calorieTracker?.fillForm || 'Điền đầy đủ thông tin để xem kết quả'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
