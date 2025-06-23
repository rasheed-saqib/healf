import type { FC, PropsWithChildren } from 'react'

import { getProducts } from '@/services/products'
import { ProductsStoreProvider } from '@/stores/products-store'

export const ProductsLayout: FC<PropsWithChildren> = async ({ children }) => {
  const products = await getProducts()

  return (
    <ProductsStoreProvider state={{ products }}>
      {children}
    </ProductsStoreProvider>
  )
}
