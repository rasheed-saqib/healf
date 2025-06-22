import Link from 'next/link'
import type { FC } from 'react'

import { ABSOLUTE_ROUTES } from '@/constants/routes'

interface ProductCardProps {
  product: {
    id: number
    name: string
    href: string
    imageSrc: string
    imageAlt: string
    price: string
    color: string
  }
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div key={product.id} className="group relative">
      <img
        alt={product.imageAlt}
        src={product.imageSrc}
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={ABSOLUTE_ROUTES.getProduct(product.id.toString())}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  )
}
