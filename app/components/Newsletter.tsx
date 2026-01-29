'use client'

import { useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage(t.newsletter.error)
      return
    }

    setStatus('loading')

    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setMessage(t.newsletter.success)
      setEmail('')
      
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
    }, 1000)
  }

  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t.newsletter.title}</h2>
          <p className={styles.subtitle}>{t.newsletter.subtitle}</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder={t.newsletter.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              className={styles.button}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? '...' : t.newsletter.subscribe}
            </button>
          </form>

          {message && (
            <p className={`${styles.message} ${styles[status]}`}>
              {message}
            </p>
          )}
        </div>

        <div className={styles.benefits}>
          <h3>{t.newsletter.benefits}</h3>
          <ul>
            <li>✨ {t.newsletter.benefit1}</li>
            <li>🎁 {t.newsletter.benefit2}</li>
            <li>💡 {t.newsletter.benefit3}</li>
            <li>📢 {t.newsletter.benefit4}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
