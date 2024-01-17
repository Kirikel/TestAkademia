'use client'

import { useProductsContext } from '@/app/providers'

import { ProductItem } from '@/components/product-item'

import s from './cart.module.scss'

export default function Cart() {
  const context = useProductsContext()

  return (
    <div>
      <h1 className={s.mainTitle}>Корзина</h1>

      {context.products.length ? (
        <div className={s.productsGrid}>
          {context.products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className={s.empty}>Корзина пуста</div>
      )}
    </div>
  )
}
