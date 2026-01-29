'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import styles from './BackToTop.module.css'

export default function BackToTop() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className={`${styles.button} ${visible ? styles.show : ''}`}
      onClick={handleClick}
      aria-label={t.backToTop.label}
      title={t.backToTop.label}
    >
      ↑
    </button>
  )
}
