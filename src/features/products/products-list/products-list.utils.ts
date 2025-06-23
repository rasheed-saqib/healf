import { type SortingFn, sortingFns } from '@tanstack/react-table'
import type { SearchResult } from 'minisearch'

import type { Product } from '@/types/product'

const compareItems = (a: SearchResult, b: SearchResult): number => {
  return a.rank === b.score ? 0 : a.score > b.score ? 1 : -1
}

const getValidOptions = (
  products: Product[],
  key: keyof Product
): Array<{ label: string; value: string }> => {
  return [
    ...new Set(
      products.map(product => {
        return product[key] as string
      })
    )
  ]
    .filter(value => value != null && value !== '')
    .map(value => ({
      label: value,
      value
    }))
}

export const fuzzySort: SortingFn<Product> = (rowA, rowB, columnId) => {
  let dir = 0

  if (rowA.columnFiltersMeta[columnId] != null) {
    dir = compareItems(
      rowA.columnFiltersMeta[columnId]?.rank,
      rowB.columnFiltersMeta[columnId]?.rank
    )
  }

  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
}

export const getProductFilterOptions = (
  products: Product[]
): Array<{
  id: string
  name: string
  options: Array<{
    value: string
    label: string
  }>
}> => {
  return [
    {
      id: 'vendor',
      name: 'Vendor',
      options: getValidOptions(products, 'vendor')
    },
    {
      id: 'type',
      name: 'Type',
      options: getValidOptions(products, 'type')
    },
    {
      id: 'status',
      name: 'Status',
      options: getValidOptions(products, 'status')
    }
  ]
}
