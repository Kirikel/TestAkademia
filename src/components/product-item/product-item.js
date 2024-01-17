import Image from 'next/image'
import Link from 'next/link'

import CartButton from './cart-button'
import s from './product-item.module.scss'

export default function ProductItem({ product }) {
  return (
    <div className={s.root}>
      <div className={s.imageWrap}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <Link href={`/product/${product.id}`} />
      </div>
      <Link href={`/product/${product.id}`} data-title>
        {product.title}
      </Link>
      <div data-desc>{product.description}</div>
      <div data-row>
        <div>${product.price}</div>
        <CartButton product={product} />
      </div>
    </div>
  )
}
