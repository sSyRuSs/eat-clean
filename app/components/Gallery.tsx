'use client'

import { useLanguage } from '../lib/LanguageContext'
import styles from './Gallery.module.css'

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=900&q=80',
    altVi: 'Salad gà và rau xanh tươi',
    altEn: 'Chicken salad with fresh greens'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
    altVi: 'Bowl ngũ cốc và trái cây',
    altEn: 'Fruit and grain bowl'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
    altVi: 'Cá hồi nướng và rau củ',
    altEn: 'Grilled salmon with vegetables'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=900&q=80',
    altVi: 'Bowl smoothie trái cây',
    altEn: 'Fruit smoothie bowl'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=900&q=80',
    altVi: 'Salad rau củ màu sắc',
    altEn: 'Colorful vegetable salad'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
    altVi: 'Bữa ăn eat clean đủ dinh dưỡng',
    altEn: 'Balanced eat clean meal'
  }
]

export default function Gallery() {
  const { language, t } = useLanguage()

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{t.gallery.title}</h2>
          <p>{t.gallery.subtitle}</p>
        </div>
        <div className={styles.grid}>
          {images.map((image) => (
            <div key={image.id} className={styles.card}>
              <img
                src={image.src}
                alt={language === 'vi' ? image.altVi : image.altEn}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
