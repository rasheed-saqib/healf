import type { FC } from 'react'

import { ProductDetails } from '@/features/products/product-details'
import type { PropsWithParams } from '@/types/next'

const Page: FC<PropsWithParams<{ productId: string }>> = async ({ params }) => {
  const { productId } = await params

  return <ProductDetails id={productId} />
}

export default Page
