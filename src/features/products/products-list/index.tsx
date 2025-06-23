'use client'

import type { FC } from 'react'

import { ProductCard } from '@/components/product-card'

import { FiltersSheet } from './filters-sheet'
import { NoProjects } from './no-projects'
import { ProductsFilters } from './products-filters'
import { ProductsPagination } from './products-pagination'
import { ProductsSearchbar } from './products-searchbar'
import { SortOptions } from './sort-options'
import { useProductsList } from './use-products-list'

export const ProductsList: FC = () => {
  const { table } = useProductsList()

  const products = table.getRowModel().rows.map(row => row.original)

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
            {products.length === 0 && <NoProjects />}

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <ProductsPagination table={table} />
          </div>
        </div>
      </section>
    </main>
  )
}
