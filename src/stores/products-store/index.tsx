'use client'

import type { PaginationState, Updater } from '@tanstack/react-table'
import { persistNSync } from 'persist-and-sync'
import {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useState
} from 'react'
import { create } from 'zustand'

import type {
  ProductsAction,
  ProductsState,
  UseProductsStoreContextReturn
} from './products-store.types'

const createStore = (
  initialState: ProductsState
): UseProductsStoreContextReturn =>
  create<ProductsState & ProductsAction>()(
    persistNSync(
      (set, getState) => ({
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
        }
      }),
      {
        name: 'products-store'
      }
    )
  )

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
  const [store] = useState(() =>
    createStore({
      ...state,
      pagination: {
        pageSize: 12,
        pageIndex: 1
      }
    })
  )

  return (
    <ProductsStoreContext.Provider value={store}>
      {children}
    </ProductsStoreContext.Provider>
  )
}
