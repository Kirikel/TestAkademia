'use client'

import { useState } from 'react'

import { createContext } from '@/utils/create-context'

const [ProductsProvider, useContext] = createContext('ProductsContext')

export const useProductsContext = () => useContext('ProductsContext')

export default function Providers({ children }) {
  const [products, setProducts] = useState([])

  return (
    <ProductsProvider products={products} setProducts={setProducts}>
      {children}
    </ProductsProvider>
  )
}
