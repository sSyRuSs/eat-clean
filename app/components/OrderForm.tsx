'use client'

import { useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import { useCart } from '../lib/CartContext'
import styles from './OrderForm.module.css'

interface OrderFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function OrderForm({ isOpen, onClose }: OrderFormProps) {
  const { t } = useLanguage()
  const { clearCart, getTotalPrice } = useCart()
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    note: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the order to a backend
    setShowSuccess(true)
    clearCart()
  }

  const handleClose = () => {
    setFormData({ name: '', phone: '', address: '', note: '' })
    setShowSuccess(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      <div className={styles.overlay} onClick={handleClose} />
      <div className={styles.modal}>
        {!showSuccess ? (
          <>
            <div className={styles.header}>
              <h2>{t.orderForm.title}</h2>
              <button className={styles.closeButton} onClick={handleClose}>✕</button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">{t.orderForm.name}</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder={t.orderForm.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">{t.orderForm.phone}</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder={t.orderForm.phonePlaceholder}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="address">{t.orderForm.address}</label>
                <textarea
                  id="address"
                  required
                  rows={3}
                  placeholder={t.orderForm.addressPlaceholder}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="note">{t.orderForm.note}</label>
                <textarea
                  id="note"
                  rows={2}
                  placeholder={t.orderForm.notePlaceholder}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                />
              </div>

              <div className={styles.total}>
                <span>{t.cart.total}:</span>
                <span className={styles.totalPrice}>
                  {getTotalPrice().toLocaleString('vi-VN')}đ
                </span>
              </div>

              <div className={styles.actions}>
                <button type="submit" className={styles.submitButton}>
                  {t.orderForm.submit}
                </button>
                <button type="button" className={styles.cancelButton} onClick={handleClose}>
                  {t.orderForm.cancel}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className={styles.success}>
            <div className={styles.successIcon}>✅</div>
            <h2>{t.orderForm.successTitle}</h2>
            <p>{t.orderForm.successMessage}</p>
            <button className={styles.closeSuccessButton} onClick={handleClose}>
              {t.orderForm.close}
            </button>
          </div>
        )}
      </div>
    </>
  )
}
