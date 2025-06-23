import {
  type FilterFn,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type Table,
  useReactTable
} from '@tanstack/react-table'
import { useCallback, useMemo } from 'react'

import { useProductsStore } from '@/stores/products-store'
import type { Product } from '@/types/product'

import {
  PRODUCTS_SORT_OPTIONS,
  PRODUCTS_TABLE_COLUMNS
} from './products-list.constants'

interface UseProductsListReturn {
  table: Table<Product>
}

export const useProductsList = (): UseProductsListReturn => {
  const {
    products,
    pagination,
    setPagination,
    miniSearch,
    searchQuery,
    sortOption,
    filters
  } = useProductsStore()(state => state)

  const sorting = useMemo(
    () => (sortOption == null ? [] : PRODUCTS_SORT_OPTIONS[sortOption].value),
    [sortOption]
  )

  const columnFilters = useMemo(() => {
    return Object.entries(filters).map(([key, value]) => {
      return {
        id: key,
        value
      }
    })
  }, [filters])

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
    pageCount: Math.ceil(products.length / pagination.pageSize),
    state: {
      pagination,
      globalFilter: searchQuery,
      sorting,
      columnFilters
    },
    enableGlobalFilter: true,
    globalFilterFn: 'fuzzy',
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return {
    table
  }
}
