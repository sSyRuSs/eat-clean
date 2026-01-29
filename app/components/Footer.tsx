'use client'

import { useLanguage } from '../lib/LanguageContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    { name: 'Facebook', icon: 'f', url: 'https://facebook.com' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com' },
    { name: 'Zalo', icon: 'Z', url: 'https://zalo.me' },
    { name: 'Phone', icon: '☎️', url: 'tel:+84123456789' }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h4>{t.footer.about}</h4>
            <p>Eat clean every day, stay healthy always.</p>
          </div>

          <div className={styles.section}>
            <h4>{t.footer.contact}</h4>
            <p>📍 {t.footer.address}</p>
            <p>📞 {t.footer.phone}</p>
            <p>📧 {t.footer.email}</p>
          </div>

          <div className={styles.section}>
            <h4>{t.footer.followUs}</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2026 Eat Clean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
