import { ProductItem } from '@/components/product-item'

import { getMainProducts } from '@/lib/api/endpoints'

import s from './home.module.scss'

export default async function Home() {
  // Получаем продукты с fake-api (https://dummyjson.com). Стандартный лимит в 30 продуктов нас устраивает
  const { products } = await getMainProducts()

  return (
    <>
      <h1 className={s.mainTitle}>Каталог</h1>
      <div className={s.productsGrid}>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}
