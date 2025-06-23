import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { ABSOLUTE_ROUTES } from '@/constants/routes'
import type { Product } from '@/types/product'
import { isValidUrl } from '@/utils/url'

interface ProductCardProps {
  product: Product
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div key={product.id} className="group relative">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={
            isValidUrl(product.image)
              ? product.image
              : `https://placehold.co/1000x1000?text=Healf+Product`
          }
          alt={product.title}
          fill
          className="rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
      </div>
      <div className="mt-4">
        <div>
          <h3 className="line-clamp-1 font-bold text-gray-700">
            <Link href={ABSOLUTE_ROUTES.getProduct(product.id)}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title} - {product.vendor}
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-600">
          {product.price_range.min_variant_price != null && (
            <>
              {product.price_range.min_variant_price.amount}{' '}
              {product.price_range.min_variant_price.currency_code}
            </>
          )}
          -
          {product.price_range.max_variant_price != null && (
            <>
              {product.price_range.max_variant_price.amount}{' '}
              {product.price_range.max_variant_price.currency_code}
            </>
          )}
        </p>
      </div>
    </div>
  )
}
