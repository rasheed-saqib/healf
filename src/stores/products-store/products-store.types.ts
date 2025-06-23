import type { PaginationState, Updater } from '@tanstack/react-table'
import type { StoreApi, UseBoundStore } from 'zustand'

import type { Product } from '@/types/product'

export interface ProductsState {
  products: Product[]
  pagination: PaginationState
}

export interface ProductsAction {
  setPagination: (data: Updater<PaginationState>) => void
  getProduct: (id: string) => Product | undefined
}

export type UseProductsStoreContextReturn = UseBoundStore<
  StoreApi<ProductsState & ProductsAction>
>
