'use client'

import type { FC } from 'react'

import { ProductCard } from '@/components/product-card'

import { FiltersSheet } from './filters-sheet'
import { NoProjects } from './no-projects'
import { ProductsFilters } from './products-filters'
import { ProductsSearchbar } from './products-searchbar'
import { SortOptions } from './sort-options'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: 'Front of Basic Tee in white.',
    price: '$35',
    color: 'White'
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: 'Front of Basic Tee in gray.',
    price: '$35',
    color: 'Gray'
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: 'Front of Basic Tee in blue.',
    price: '$35',
    color: 'Blue'
  }
]

export const ProductsList: FC = () => {
  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 xl:container">
      <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Explore Your Catalog
        </h1>

        <div className="flex items-center">
          <SortOptions />
          <FiltersSheet />
          <ProductsSearchbar />
        </div>
      </div>

      <section aria-labelledby="products-heading" className="pt-6 pb-24">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <div className="hidden lg:block">
            <ProductsFilters />
          </div>

          <div className="lg:col-span-3">
            <NoProjects />

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
