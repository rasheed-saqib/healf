import type { ColumnDef } from '@tanstack/react-table'

import type { Product } from '@/types/product'

import { fuzzySort } from './products-list.utils'

export const PRODUCTS_TABLE_COLUMNS: Array<ColumnDef<Product>> = [
  { accessorKey: 'id' },
  { accessorKey: 'title', sortingFn: fuzzySort },
  { accessorKey: 'description', sortingFn: fuzzySort },
  {
    accessorKey: 'vendor',
    sortingFn: fuzzySort,
    filterFn: (row, columnId, filters: string[]) => {
      if (!Array.isArray(filters) || filters.length === 0) {
        return true
      }

      return filters.some(
        filter => filter.toLowerCase() === row.original.vendor.toLowerCase()
      )
    }
  },
  {
    accessorKey: 'type',
    sortingFn: fuzzySort,
    filterFn: (row, columnId, filters: string[]) => {
      if (!Array.isArray(filters) || filters.length === 0) {
        return true
      }

      return filters.some(
        filter => filter.toLowerCase() === row.original.status.toLowerCase()
      )
    }
  },
  {
    accessorKey: 'status',
    sortingFn: fuzzySort,
    filterFn: (row, columnId, filters: string[]) => {
      if (!Array.isArray(filters) || filters.length === 0) {
        return true
      }

      return filters.some(
        filter => filter.toLowerCase() === row.original.status.toLowerCase()
      )
    }
  },
  {
    accessorKey: 'price_range',
    sortingFn: (rowA, rowB) => {
      const a =
        ((rowA.original.price_range.min_variant_price?.amount ?? 0) +
          (rowA.original.price_range.max_variant_price?.amount ?? 0)) /
        2
      const b =
        ((rowB.original.price_range.min_variant_price?.amount ?? 0) +
          (rowB.original.price_range.max_variant_price?.amount ?? 0)) /
        2
      return a - b
    }
  },
  { accessorKey: 'inventory' },
  { accessorKey: 'variants' },
  {
    accessorKey: 'created_at',
    sortingFn: (rowA, rowB) => {
      return new Date(rowA.original.created_at).getTime() -
        new Date(rowB.original.created_at).getTime() >
        0
        ? 1
        : -1
    }
  }
]

export const PRODUCTS_SORT_OPTIONS: Record<
  string,
  {
    label: string
    value: Array<{
      id: string
      desc: boolean
    }>
  }
> = {
  most_popular: {
    label: 'Most Popular',
    value: [
      {
        id: 'variants',
        desc: false
      }
    ]
  },
  newest: {
    label: 'Newest',
    value: [
      {
        id: 'created_at',
        desc: false
      }
    ]
  },
  lowest_price: {
    label: 'Lowest Price',
    value: [
      {
        id: 'price_range',
        desc: false
      }
    ]
  },
  highest_price: {
    label: 'Highest Price',
    value: [
      {
        id: 'price_range',
        desc: true
      }
    ]
  }
}
