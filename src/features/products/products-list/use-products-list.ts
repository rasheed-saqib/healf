import {
  type FilterFn,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  type Table,
  useReactTable
} from '@tanstack/react-table'
import { useCallback, useMemo } from 'react'

import { useProductsStore } from '@/stores/products-store'
import type { Product } from '@/types/product'

import { PRODUCTS_TABLE_COLUMNS } from './products-list.constants'

interface UseProductsListReturn {
  table: Table<Product>
}

export const useProductsList = (): UseProductsListReturn => {
  const { products, pagination, setPagination, miniSearch, searchQuery } =
    useProductsStore()(state => state)

  const hits = useMemo(() => {
    const results = miniSearch.search(searchQuery)

    return new Map(results.map(hit => [hit.id, hit]))
  }, [searchQuery, miniSearch])

  const filterProducts: FilterFn<Product> = useCallback(
    (row, _, __, addMeta) => {
      if (searchQuery === '') {
        return true
      }

      const rank = hits.get(row.original.id)

      if (rank != null) {
        addMeta({
          rank
        })
      }

      return rank != null
    },
    [searchQuery, hits]
  )

  const table = useReactTable({
    data: products,
    columns: PRODUCTS_TABLE_COLUMNS,
    filterFns: {
      fuzzy: filterProducts
    },
    pageCount: Math.floor(products.length / pagination.pageSize),
    state: {
      pagination,
      globalFilter: searchQuery
    },
    enableGlobalFilter: true,
    globalFilterFn: 'fuzzy',
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return {
    table
  }
}
