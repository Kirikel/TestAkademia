'use client'

import s from './product.module.scss'

export default function Error({ error, reset }) {
  return (
    <div>
      <h2 className={s.empty}>{error.message}</h2>
    </div>
  )
}
