'use client'

import { useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import { useCart } from '../lib/CartContext'
import { getProductName } from '../products/data'
import OrderForm from './OrderForm'
import styles from './Cart.module.css'

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { language, t } = useLanguage()
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart()
  const [orderFormOpen, setOrderFormOpen] = useState(false)

  const handleCheckout = () => {
    setOrderFormOpen(true)
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.cart}>
        <div className={styles.header}>
          <h2>{t.cart.title}</h2>
          <button className={styles.closeButton} onClick={onClose}>✕</button>
        </div>

        <div className={styles.content}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}>🛒</span>
              <p>{t.cart.empty}</p>
            </div>
          ) : (
            <>
              <div className={styles.items}>
                {items.map(item => (
                  <div key={item.product.id} className={styles.item}>
                    <div className={styles.itemEmoji}>{item.product.emoji}</div>
                    <div className={styles.itemInfo}>
                      <h3>{getProductName(item.product, language)}</h3>
                      <p className={styles.itemPrice}>{item.product.price}</p>
                    </div>
                    <div className={styles.itemActions}>
                      <div className={styles.quantityControl}>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className={styles.removeButton}
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        {t.cart.remove}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.footer}>
                <div className={styles.total}>
                  <span>{t.cart.total}:</span>
                  <span className={styles.totalPrice}>
                    {getTotalPrice().toLocaleString('vi-VN')}đ
                  </span>
                </div>
                <button className={styles.checkoutButton} onClick={handleCheckout}>
                  {t.cart.checkout}
                </button>
                <button className={styles.continueButton} onClick={onClose}>
                  {t.cart.continueShopping}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <OrderForm isOpen={orderFormOpen} onClose={() => setOrderFormOpen(false)} />
    </>
  )
}
