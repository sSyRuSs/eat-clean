import { useLanguage } from '../lib/LanguageContext'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const { language, t } = useLanguage()

  const testimonials = [
    {
      id: 1,
      nameVi: "Nguyễn Thu Hương",
      nameEn: "Nguyen Thu Huong",
      contentVi: "Sản phẩm rất tươi ngon, dinh dưỡng cân đối. Tôi thấy cơ thể khỏe hơn rồi!",
      contentEn: "Fresh and delicious products, perfectly balanced nutrition. I feel healthier!",
      rating: 5,
      emoji: "😍"
    },
    {
      id: 2,
      nameVi: "Trần Đức Minh",
      nameEn: "Tran Duc Minh",
      contentVi: "Giao hàng nhanh, đóng gói cẩn thận. Recommend cho tất cả bạn bè!",
      contentEn: "Fast delivery, careful packaging. Recommending to all my friends!",
      rating: 5,
      emoji: "🌟"
    },
    {
      id: 3,
      nameVi: "Lê Mỹ Linh",
      nameEn: "Le My Linh",
      contentVi: "Giá hợp lý, chất lượng tốt. Mình mua liên tục rồi.",
      contentEn: "Reasonable price, great quality. I keep coming back for more.",
      rating: 4,
      emoji: "👍"
    },
    {
      id: 4,
      nameVi: "Phạm Quốc Huy",
      nameEn: "Pham Quoc Huy",
      contentVi: "Các thành phần 100% organic, không có chất phụ gia. Rất hài lòng!",
      contentEn: "100% organic ingredients, no additives. Very satisfied!",
      rating: 5,
      emoji: "✨"
    },
    {
      id: 5,
      nameVi: "Hoàng Như Ý",
      nameEn: "Hoang Nhu Y",
      contentVi: "Visionaries giúp tôi quản lý cân nặng hiệu quả.",
      contentEn: "Visionaries helped me manage my weight effectively.",
      rating: 5,
      emoji: "💪"
    },
    {
      id: 6,
      nameVi: "Vũ Hải Đông",
      nameEn: "Vu Hai Dong",
      contentVi: "Mùi vị ngon, lại có lợi cho sức khỏe. Đó là điều tôi tìm kiếm!",
      contentEn: "Delicious taste and healthy too. That's what I was looking for!",
      rating: 4,
      emoji: "🤤"
    }
  ]

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t.testimonials.title}</h2>
        <p className={styles.subtitle}>{t.testimonials.subtitle}</p>

        <div className={styles.grid}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={styles.card}>
              <div className={styles.rating}>
                {new Array(testimonial.rating).fill(0).map((_, i) => (
                  <span key={testimonial.id + '-' + i} className={styles.star}>⭐</span>
                ))}
              </div>
              <p className={styles.content}>
                {language === 'vi' ? testimonial.contentVi : testimonial.contentEn}
              </p>
              <div className={styles.author}>
                <span className={styles.emoji}>{testimonial.emoji}</span>
                <span className={styles.name}>
                  {language === 'vi' ? testimonial.nameVi : testimonial.nameEn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
