import CartButton from '@/app/_components/cart-button'
import Link from 'next/link'

import s from './header.module.scss'

export default function Header() {
  return (
    <div className={s.headerWrap}>
      <header>
        <Link href='/' data-logo aria-label='Home'>
          Fantasy Shop
        </Link>
        <CartButton />
      </header>
    </div>
  )
}
