'use client'

import s from './product.module.scss'

export default function Error() {
  return (
    <div>
      <h2 className={s.empty}>Такого товара не существует</h2>
    </div>
  )
}
