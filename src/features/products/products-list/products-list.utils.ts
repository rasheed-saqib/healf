import { type SortingFn, sortingFns } from '@tanstack/react-table'
import type { SearchResult } from 'minisearch'

import type { Product } from '@/types/product'

/**
 * Compare two search results based on their scores.
 * @param a - SearchResult object with a score
 * @param b - SearchResult object with a score
 * @return - Returns 0 if scores are equal, 1 if a's score is greater, -1 if b's score is greater.
 */
const compareItems = (a: SearchResult, b: SearchResult): number => {
  return a.rank === b.score ? 0 : a.score > b.score ? 1 : -1
}

/**
 * Get valid options for a given key from the products array.
 * @param products - Array of products
 * @param key - The key to extract options from each product
 * @return - Returns an array of objects with label and value properties, representing unique options for the specified key.
 */
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

/**
 * Fuzzy sort function for products based on a specific column.
 * @param rowA - The first row to compare
 * @param rowB - The second row to compare
 * @param columnId - The column ID to sort by
 * @return - Returns a number indicating the sort order: negative if rowA should come before rowB, positive if rowB should come before rowA, and 0 if they are equal.
 */
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

/**
 * Get filter options for products based on their vendor, type, and status.
 * @param products
 * @return - Returns an array of objects, each containing an id, name, and options for filtering products.
 */
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
