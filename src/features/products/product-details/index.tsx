'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { type FC, useMemo } from 'react'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { useProductsStore } from '@/stores/products-store'
import { isValidUrl } from '@/utils/url'

interface ProductDetailsProps {
  id: string
}

export const ProductDetails: FC<ProductDetailsProps> = ({ id }) => {
  const { getProduct } = useProductsStore()(state => state)

  const product = useMemo(() => getProduct(id), [id, getProduct])

  if (product == null) {
    return notFound()
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="lg:max-w-lg lg:self-end">
        <div className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {product.title}
          </h1>
        </div>

        <section aria-labelledby="information-heading" className="mt-4">
          <div className="w-full">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900">
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

          <div className="mt-4 space-y-6">
            <p className="text-base text-gray-500">{product.description}</p>

            {isValidUrl(product.url) && (
              <Button size="lg" asChild>
                <Link href={product.url} target="_blank">
                  Explore
                </Link>
              </Button>
            )}
          </div>
        </section>
      </div>

      <div className="mt-10 space-y-6 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <Image
                src={
                  isValidUrl(product.image)
                    ? product.image
                    : `https://placehold.co/1000x1000?text=Healf+Product`
                }
                alt={product.title}
                width={200}
                height={200}
                className="aspect-square w-full rounded-lg object-cover"
              />
            </CarouselItem>
            {product.images.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  alt={`Product image ${index + 1}`}
                  src={
                    isValidUrl(image)
                      ? image
                      : `https://placehold.co/1000x1000?text=Healf+Product+Image+${index + 1}`
                  }
                  width={200}
                  height={200}
                  className="aspect-square w-full object-cover sm:rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}
