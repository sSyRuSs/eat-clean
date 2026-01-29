'use client'

import Link from 'next/link'
import { useLanguage } from '../lib/LanguageContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './blog.module.css'

const posts = [
  {
    id: '1',
    title: {
      vi: '5 mẹo chuẩn bị bữa ăn eat clean nhanh trong 15 phút',
      en: '5 tips to prep eat clean meals in 15 minutes'
    },
    excerpt: {
      vi: 'Tối ưu thời gian nấu ăn với các bước chuẩn bị đơn giản, tiết kiệm mà vẫn đủ dinh dưỡng.',
      en: 'Optimize cooking time with simple prep steps that save time while staying nutritious.'
    },
    date: '2026-01-12',
    read: '5 min',
    tag: 'Meal Prep'
  },
  {
    id: '2',
    title: {
      vi: 'Cân bằng protein, carb và fat cho người bận rộn',
      en: 'Balancing protein, carbs, and fat for busy people'
    },
    excerpt: {
      vi: 'Gợi ý tỷ lệ dinh dưỡng phù hợp để giữ năng lượng cả ngày mà không tăng cân.',
      en: 'Suggested nutrition ratios to stay energized all day without gaining weight.'
    },
    date: '2026-01-05',
    read: '6 min',
    tag: 'Nutrition'
  },
  {
    id: '3',
    title: {
      vi: 'Top 7 nguyên liệu eat clean nên có trong bếp',
      en: 'Top 7 eat clean ingredients to keep in your kitchen'
    },
    excerpt: {
      vi: 'Danh sách nguyên liệu giúp bạn linh hoạt chế biến nhiều món ăn sạch mỗi tuần.',
      en: 'A list of ingredients that help you create many clean meals every week.'
    },
    date: '2025-12-28',
    read: '4 min',
    tag: 'Ingredients'
  }
]

export default function BlogPage() {
  const { language, t } = useLanguage()

  return (
    <>
      <Header />

      <main className={styles.main}>
        <div className={styles.header}>
          <h1>{t.blog.title}</h1>
          <p>{t.blog.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.tag}>{post.tag}</span>
                <span className={styles.meta}>{post.date} • {post.read}</span>
              </div>
              <h2>
                {language === 'vi' ? post.title.vi : post.title.en}
              </h2>
              <p>
                {language === 'vi' ? post.excerpt.vi : post.excerpt.en}
              </p>
              <Link href="/" className={styles.readMore}>
                {t.blog.readMore}
              </Link>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
