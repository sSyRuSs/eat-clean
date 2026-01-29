'use client'

import { useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import styles from './FAQ.module.css'

export default function FAQ() {
  const { language, t } = useLanguage()
  const [activeId, setActiveId] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      questionVi: "Sản phẩm được làm từ nguyên liệu nào?",
      questionEn: "What ingredients are used in the products?",
      answerVi: "Tất cả sản phẩm của chúng tôi được làm từ nguyên liệu organic 100%, không chứa chất bảo quản, hóa chất độc hại, hay chất tăng nạc giả tạo.",
      answerEn: "All our products are made from 100% organic ingredients with no preservatives, harmful chemicals, or artificial additives.",
      emoji: "🥬"
    },
    {
      id: 2,
      questionVi: "Thời gian giao hàng bao lâu?",
      questionEn: "How long does delivery take?",
      answerVi: "Chúng tôi giao hàng trong vòng 24 giờ tại khu vực TP.HCM. Đối với các tỉnh khác, thời gian giao hàng là 2-3 ngày tính từ lúc xác nhận đơn hàng.",
      answerEn: "We deliver within 24 hours in Ho Chi Minh City. For other provinces, delivery takes 2-3 days from order confirmation.",
      emoji: "🚚"
    },
    {
      id: 3,
      questionVi: "Tôi có thể hoàn lại sản phẩm nếu không hài lòng?",
      questionEn: "Can I return a product if I'm not satisfied?",
      answerVi: "Có, nếu sản phẩm bị lỗi hoặc không đáp ứng mô tả, bạn có thể hoàn lại trong vòng 7 ngày kể từ lúc nhận hàng. Vui lòng liên hệ với chúng tôi để xử lý.",
      answerEn: "Yes, if the product is defective or doesn't meet the description, you can return it within 7 days of delivery. Please contact us for processing.",
      emoji: "↩️"
    },
    {
      id: 4,
      questionVi: "Những người bị dị ứng có ăn được không?",
      questionEn: "Can people with allergies eat the products?",
      answerVi: "Chúng tôi có danh sách các chất gây dị ứng cho từng sản phẩm. Vui lòng kiểm tra thành phần trước khi mua hoặc liên hệ với chúng tôi để tư vấn.",
      answerEn: "We provide allergy information for each product. Please check ingredients before purchasing or contact us for consultation.",
      emoji: "⚠️"
    },
    {
      id: 5,
      questionVi: "Tôi có thể tùy chỉnh đơn hàng theo nhu cầu không?",
      questionEn: "Can I customize orders to my needs?",
      answerVi: "Có, bạn có thể yêu cầu tùy chỉnh như thay đổi lượng muối, đường, hay loại bỏ một số nguyên liệu. Hãy ghi chú trong phần 'Ghi chú' khi đặt hàng.",
      answerEn: "Yes, you can request customizations like adjusting salt/sugar or removing ingredients. Please note this in the order notes.",
      emoji: "✏️"
    },
    {
      id: 6,
      questionVi: "Các sản phẩm có hạn sử dụng bao lâu?",
      questionEn: "What is the shelf life of products?",
      answerVi: "Thời gian bảo quản phụ thuộc vào từng sản phẩm, thường từ 3-7 ngày khi bảo quản lạnh (2-4°C). Thông tin chi tiết được in trên bao bì.",
      answerEn: "Shelf life varies by product, usually 3-7 days when stored cold (2-4°C). Details are printed on the packaging.",
      emoji: "📅"
    },
    {
      id: 7,
      questionVi: "Bạn có chấp nhận thanh toán trước không?",
      questionEn: "Do you accept advance payments?",
      answerVi: "Có, chúng tôi chấp nhận thanh toán bằng chuyển khoản ngân hàng, ví điện tử, hoặc thanh toán tiền mặt khi nhận hàng.",
      answerEn: "Yes, we accept bank transfers, e-wallets, or cash on delivery.",
      emoji: "💳"
    },
    {
      id: 8,
      questionVi: "Tôi có được giảm giá nếu mua số lượng lớn?",
      questionEn: "Is there a discount for bulk orders?",
      answerVi: "Có, chúng tôi có chương trình giảm giá cho đơn hàng lớn. Vui lòng liên hệ với chúng tôi để biết thêm chi tiết.",
      answerEn: "Yes, we offer discounts for bulk orders. Please contact us for more details.",
      emoji: "🎁"
    }
  ]

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t.faq.title}</h2>
        <p className={styles.subtitle}>{t.faq.subtitle}</p>

        <div className={styles.accordion}>
          {faqs.map(faq => (
            <div key={faq.id} className={styles.item}>
              <button
                className={`${styles.header} ${activeId === faq.id ? styles.active : ''}`}
                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
              >
                <span className={styles.emoji}>{faq.emoji}</span>
                <span className={styles.question}>
                  {language === 'vi' ? faq.questionVi : faq.questionEn}
                </span>
                <span className={styles.icon}>
                  {activeId === faq.id ? '−' : '+'}
                </span>
              </button>
              {activeId === faq.id && (
                <div className={styles.content}>
                  <p>{language === 'vi' ? faq.answerVi : faq.answerEn}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
