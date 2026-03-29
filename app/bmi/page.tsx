'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../lib/LanguageContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './bmi.module.css'

type BMICategory = 'underweight' | 'normal' | 'overweight' | 'obese' | null

export default function BMIPage() {
  const { t } = useLanguage()
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState<BMICategory>(null)

  const calculateBMI = () => {
    const w = parseFloat(weight)
    const h = parseFloat(height)
    if (!w || !h || w <= 0 || h <= 0) return

    const heightM = h / 100
    const result = w / (heightM * heightM)
    setBmi(Math.round(result * 10) / 10)

    if (result < 18.5) setCategory('underweight')
    else if (result < 25) setCategory('normal')
    else if (result < 30) setCategory('overweight')
    else setCategory('obese')
  }

  const getCategoryColor = () => {
    switch (category) {
      case 'underweight': return '#5BC0DE'
      case 'normal': return '#6DB86B'
      case 'overweight': return '#FFB347'
      case 'obese': return '#FF6B6B'
      default: return '#A8E6A3'
    }
  }

  const getCategoryLabel = () => {
    if (!category) return ''
    return t.bmi[category]
  }

  const getAdvice = () => {
    if (!category) return ''
    const adviceKey = `${category}Advice` as keyof typeof t.bmi
    return t.bmi[adviceKey] as string
  }

  const getGaugePosition = () => {
    if (!bmi) return 0
    if (bmi < 15) return 0
    if (bmi > 40) return 100
    return ((bmi - 15) / 25) * 100
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Link href="/" className={styles.backButton}>
          {t.calorieTracker.back}
        </Link>

        <section className={styles.hero}>
          <h1>⚖️ {t.bmi.title}</h1>
          <p>{t.bmi.subtitle}</p>
        </section>

        <div className={styles.content}>
          <div className={styles.calculatorCard}>
            <div className={styles.inputGroup}>
              <label>{t.bmi.weight}</label>
              <input
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.value)}
                placeholder={t.bmi.weightPlaceholder}
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>{t.bmi.height}</label>
              <input
                type="number"
                value={height}
                onChange={e => setHeight(e.target.value)}
                placeholder={t.bmi.heightPlaceholder}
                className={styles.input}
              />
            </div>
            <button onClick={calculateBMI} className={styles.calculateBtn}>
              {t.bmi.calculate}
            </button>
          </div>

          <div className={styles.resultCard}>
            {bmi === null ? (
              <div className={styles.placeholder}>
                <span className={styles.placeholderIcon}>📊</span>
                <p>{t.bmi.fillForm}</p>
              </div>
            ) : (
              <div className={styles.result}>
                <div className={styles.bmiValue} style={{ color: getCategoryColor() }}>
                  {bmi}
                </div>
                <div className={styles.bmiLabel}>{t.bmi.yourBMI}</div>

                <div className={styles.gauge}>
                  <div className={styles.gaugeTrack}>
                    <div className={styles.gaugeZone} style={{ background: '#5BC0DE', left: '0%', width: '14%' }} />
                    <div className={styles.gaugeZone} style={{ background: '#6DB86B', left: '14%', width: '26%' }} />
                    <div className={styles.gaugeZone} style={{ background: '#FFB347', left: '40%', width: '24%' }} />
                    <div className={styles.gaugeZone} style={{ background: '#FF6B6B', left: '64%', width: '36%' }} />
                    <div
                      className={styles.gaugeIndicator}
                      style={{ left: `${getGaugePosition()}%` }}
                    />
                  </div>
                  <div className={styles.gaugeLabels}>
                    <span>15</span>
                    <span>18.5</span>
                    <span>25</span>
                    <span>30</span>
                    <span>40</span>
                  </div>
                </div>

                <div className={styles.categoryTag} style={{ background: getCategoryColor() }}>
                  {t.bmi.category}: {getCategoryLabel()}
                </div>

                <div className={styles.advice}>
                  <h4>💡 {t.bmi.advice}</h4>
                  <p>{getAdvice()}</p>
                </div>

                <p className={styles.range}>{t.bmi.range}</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
