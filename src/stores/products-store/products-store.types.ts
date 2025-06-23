import type { PaginationState, Updater } from '@tanstack/react-table'
import type MiniSearch from 'minisearch'
import type { StoreApi, UseBoundStore } from 'zustand'

import type { Product } from '@/types/product'

export interface ProductsState {
  products: Product[]
  pagination: PaginationState
  miniSearch: MiniSearch
  searchQuery: string
  sort: string | null
  filters: Record<string, string[]>
}

export interface ProductsAction {
  setPagination: (data: Updater<PaginationState>) => void
  getProduct: (id: string) => Product | undefined
  setSearchQuery: (query: string) => void
  setSort: (option: string | null) => void
  setFilters: (filters: Record<string, string[]>) => void
}

export type UseProductsStoreContextReturn = UseBoundStore<
  StoreApi<ProductsState & ProductsAction>
>
