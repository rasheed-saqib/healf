import { type SortingFn, sortingFns } from '@tanstack/react-table'
import type { SearchResult } from 'minisearch'

import type { Product } from '@/types/product'

function compareItems(a: SearchResult, b: SearchResult): number {
  return a.rank === b.score ? 0 : a.score > b.score ? -1 : 1
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

export const getProductFilters = (): Array<{
  id: string
  name: string
  options: Array<{
    value: string
    label: string
    checked: boolean
  }>
}> => {
  return [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false }
      ]
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: true },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false }
      ]
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: '2l', label: '2L', checked: false },
        { value: '6l', label: '6L', checked: false },
        { value: '12l', label: '12L', checked: false },
        { value: '18l', label: '18L', checked: false },
        { value: '20l', label: '20L', checked: false },
        { value: '40l', label: '40L', checked: true }
      ]
    }
  ]
}
