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

// {context.products.length
//   ? context.products.map(product => <div key={product.id}>{product.name}</div>)
//   : null}
// <button onClick={() => context.setProducts(prev => [...prev, { id: 6, name: 'John' }])}>
//   Add Product
// </button>
// <button onClick={() => context.setProducts(prev => [...prev, { id: 8, name: 'Kendrick' }])}>
//   Add Product
// </button>
// <button
//   onClick={() => context.setProducts(context.products.filter(product => product.id !== 6))}
// >
//   Remove Product
// </button>
