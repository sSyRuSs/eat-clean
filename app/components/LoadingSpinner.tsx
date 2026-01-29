'use client'

import { useEffect, useState } from 'react'
import styles from './LoadingSpinner.module.css'

export default function LoadingSpinner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Small delay to avoid showing spinner for instant transitions
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}>
        <div className={styles.leaf1}>🥬</div>
        <div className={styles.leaf2}>🥒</div>
        <div className={styles.leaf3}>🥕</div>
      </div>
      <p className={styles.text}>Loading...</p>
    </div>
  )
}
