import {
  getCoreRowModel,
  getPaginationRowModel,
  type Table,
  useReactTable
} from '@tanstack/react-table'

import { useProductsStore } from '@/stores/products-store'
import type { Product } from '@/types/product'

interface UseProductsListReturn {
  table: Table<Product>
}

export const useProductsList = (): UseProductsListReturn => {
  const { products, pagination, setPagination } = useProductsStore()(
    state => state
  )

  const table = useReactTable({
    data: products,
    columns: [],
    pageCount: Math.floor(products.length / pagination.pageSize),
    state: {
      pagination
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return {
    table
  }
}
