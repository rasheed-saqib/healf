'use client'

import type { PaginationState, Updater } from '@tanstack/react-table'
import MiniSearch from 'minisearch'
import {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useMemo,
  useState
} from 'react'
import { create } from 'zustand'

import { useEffectOnce } from '@/hooks/use-effect-once'
import type { Product } from '@/types/product'

import type {
  ProductsAction,
  ProductsState,
  UseProductsStoreContextReturn
} from './products-store.types'

const createStore = (
  initialState: ProductsState
): UseProductsStoreContextReturn =>
  create<ProductsState & ProductsAction>()((set, getState) => ({
    ...initialState,
    setPagination: (updaterOrValue: Updater<PaginationState>) => {
      const pagination =
        typeof updaterOrValue === 'function'
          ? updaterOrValue(getState().pagination)
          : updaterOrValue

      set({ pagination })
    },
    getProduct: (id: string) => {
      return getState().products.find(p => p.id.toString() === id)
    },
    setSearchQuery: (searchQuery: string | null) => {
      set({ searchQuery: searchQuery ?? '' })
    },
    setSortOption: (sortOption: string | null) => {
      set({ sortOption })
    }
  }))

const ProductsStoreContext = createContext<ReturnType<
  typeof createStore
> | null>(null)

export const useProductsStore = (): UseProductsStoreContextReturn => {
  const context = useContext(ProductsStoreContext)

  if (context == null)
    throw new Error(
      'useProductsStore must be used within a ProductsStoreContext'
    )

  return context
}

export const ProductsStoreProvider: FC<
  PropsWithChildren & { state: Pick<ProductsState, 'products'> }
> = ({ state, children }) => {
  const miniSearch = useMemo(
    () =>
      new MiniSearch<Product>({
        fields: ['title', 'description'],
        searchOptions: {
          fuzzy: 0.1,
          prefix: true,
          combineWith: 'AND'
        }
      }),
    []
  )

  useEffectOnce(() => {
    miniSearch.addAll(state.products)
  })

  const [store] = useState(() =>
    createStore({
      ...state,
      pagination: {
        pageSize: 12,
        pageIndex: 0
      },
      searchQuery: '',
      sortOption: null,
      miniSearch
    })
  )

  return (
    <ProductsStoreContext.Provider value={store}>
      {children}
    </ProductsStoreContext.Provider>
  )
}
