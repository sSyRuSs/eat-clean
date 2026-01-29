'use client'

import { useMemo, useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import styles from './CalorieTracker.module.css'

type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active'
type Goal = 'maintain' | 'lose' | 'gain'
type Gender = 'male' | 'female'

export default function CalorieTracker() {
  const { t } = useLanguage()
  const [gender, setGender] = useState<Gender>('female')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [activity, setActivity] = useState<ActivityLevel>('moderate')
  const [goal, setGoal] = useState<Goal>('maintain')

  const result = useMemo(() => {
    const w = Number.parseFloat(weight)
    const h = Number.parseFloat(height)
    const a = Number.parseFloat(age)

    if (!w || !h || !a) return null

    const bmr = gender === 'male'
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161

    const activityFactor: Record<ActivityLevel, number> = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725
    }

    const goalAdjust: Record<Goal, number> = {
      maintain: 0,
      lose: -300,
      gain: 300
    }

    const maintenance = bmr * activityFactor[activity]
    const target = maintenance + goalAdjust[goal]

    return {
      maintenance: Math.round(maintenance),
      target: Math.round(target)
    }
  }, [weight, height, age, gender, activity, goal])

  return (
    <section className={styles.tracker}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{t.calorieTracker.title}</h2>
          <p>{t.calorieTracker.subtitle}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.form}>
            <div className={styles.fieldGroup}>
              <label>{t.calorieTracker.gender}</label>
              <div className={styles.segmented}>
                <button
                  type="button"
                  className={gender === 'female' ? styles.active : ''}
                  onClick={() => setGender('female')}
                >
                  {t.calorieTracker.female}
                </button>
                <button
                  type="button"
                  className={gender === 'male' ? styles.active : ''}
                  onClick={() => setGender('male')}
                >
                  {t.calorieTracker.male}
                </button>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label>{t.calorieTracker.weight}</label>
                <input
                  type="number"
                  inputMode="decimal"
                  placeholder={t.calorieTracker.weightPlaceholder}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div className={styles.fieldGroup}>
                <label>{t.calorieTracker.height}</label>
                <input
                  type="number"
                  inputMode="decimal"
                  placeholder={t.calorieTracker.heightPlaceholder}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className={styles.fieldGroup}>
                <label>{t.calorieTracker.age}</label>
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder={t.calorieTracker.agePlaceholder}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label>{t.calorieTracker.activity}</label>
                <select value={activity} onChange={(e) => setActivity(e.target.value as ActivityLevel)}>
                  <option value="sedentary">{t.calorieTracker.sedentary}</option>
                  <option value="light">{t.calorieTracker.light}</option>
                  <option value="moderate">{t.calorieTracker.moderate}</option>
                  <option value="active">{t.calorieTracker.active}</option>
                </select>
              </div>
              <div className={styles.fieldGroup}>
                <label>{t.calorieTracker.goal}</label>
                <select value={goal} onChange={(e) => setGoal(e.target.value as Goal)}>
                  <option value="maintain">{t.calorieTracker.maintain}</option>
                  <option value="lose">{t.calorieTracker.lose}</option>
                  <option value="gain">{t.calorieTracker.gain}</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.result}>
            <div className={styles.card}>
              <h3>{t.calorieTracker.resultTitle}</h3>
              {result ? (
                <div className={styles.numbers}>
                  <div>
                    <span className={styles.label}>{t.calorieTracker.maintenance}</span>
                    <strong>{result.maintenance} kcal</strong>
                  </div>
                  <div>
                    <span className={styles.label}>{t.calorieTracker.target}</span>
                    <strong>{result.target} kcal</strong>
                  </div>
                </div>
              ) : (
                <p className={styles.hint}>{t.calorieTracker.subtitle}</p>
              )}
              <p className={styles.note}>{t.calorieTracker.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
