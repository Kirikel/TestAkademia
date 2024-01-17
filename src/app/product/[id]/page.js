import Gallery from '@/app/product/[id]/gallery'
import { IoStar } from 'react-icons/io5'

import { getProduct } from '@/lib/api/endpoints'

import CartButton from './cart-button'
import s from './product.module.scss'

export default async function Page(props) {
  const id = props.params.id
  const product = await getProduct(id)

  return (
    <div className={s.main}>
      <div data-gallery>
        <Gallery images={product.images} />
      </div>
      <div className={s.content}>
        <div className={s.title}>{product.title}</div>
        <div className={s.description}>{product.description}</div>

        <div className={s.row}>
          <div className={s.price}>
            <div data-value>${product.price}</div>
            <div data-stars>
              <span>{product.rating}</span>
              <IoStar />
            </div>
          </div>
          <CartButton product={product} />
        </div>
      </div>
    </div>
  )
}
