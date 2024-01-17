'use client'

import { useProductsContext } from '@/app/providers'
import Link from 'next/link'
import { IoCartOutline } from 'react-icons/io5'

import s from './header.module.scss'

export default function CartButton() {
  const { products } = useProductsContext()

  const cartLength = products.length ? products.length : null

  return (
    <Link className={s.cartButton} href='/cart' aria-label='Cart'>
      <IoCartOutline aria-hidden />
      <span hidden={cartLength ? undefined : true}>{cartLength}</span>
    </Link>
  )
}
