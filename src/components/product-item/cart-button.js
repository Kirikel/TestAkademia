'use client'

import { useProductsContext } from '@/app/providers'
import cn from 'classnames'
import { MdOutlineRemoveShoppingCart, MdOutlineShoppingCart } from 'react-icons/md'

import reset from '@/styles/reset.module.scss'

import s from './product-item.module.scss'

export default function CartButton({ product }) {
  const context = useProductsContext()
  const isInCart = context.products.find(filterProduct => filterProduct.id === product.id)

  return (
    <button
      type='button'
      className={cn(reset.root, s.cartButton)}
      onClick={() => {
        if (!isInCart) context.setProducts(prev => [...prev, product])
        else
          context.setProducts(
            context.products.filter(filterProduct => filterProduct.id !== product.id)
          )
      }}
      aria-label={!isInCart ? 'Добавить в корзину' : 'Удалить из корзины'}
    >
      {!isInCart ? <MdOutlineShoppingCart /> : <MdOutlineRemoveShoppingCart />}
    </button>
  )
}
