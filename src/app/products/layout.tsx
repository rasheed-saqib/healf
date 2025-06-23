import type { FC, PropsWithChildren } from 'react'

import { ProductsLayout } from '@/layouts/products-layout'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <ProductsLayout>{children}</ProductsLayout>
}

export default Layout
