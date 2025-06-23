import type { ColumnDef } from '@tanstack/react-table'

import type { Product } from '@/types/product'

import { fuzzySort } from './products-list.utils'

export const PRODUCTS_TABLE_COLUMNS: Array<ColumnDef<Product>> = [
  { accessorKey: 'id' },
  { accessorKey: 'title', sortingFn: fuzzySort },
  { accessorKey: 'description', sortingFn: fuzzySort },
  { accessorKey: 'vendor', sortingFn: fuzzySort },
  { accessorKey: 'type', sortingFn: fuzzySort },
  { accessorKey: 'status', sortingFn: fuzzySort }
]
