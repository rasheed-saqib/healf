import type { PaginationState, Updater } from '@tanstack/react-table'
import type MiniSearch from 'minisearch'
import type { StoreApi, UseBoundStore } from 'zustand'

import type { Product } from '@/types/product'

export interface ProductsState {
  products: Product[]
  pagination: PaginationState
  miniSearch: MiniSearch
  searchQuery: string
  sortOption: string | null
}

export interface ProductsAction {
  setPagination: (data: Updater<PaginationState>) => void
  getProduct: (id: string) => Product | undefined
  setSearchQuery: (query: string) => void
  setSortOption: (option: string | null) => void
}

export type UseProductsStoreContextReturn = UseBoundStore<
  StoreApi<ProductsState & ProductsAction>
>
