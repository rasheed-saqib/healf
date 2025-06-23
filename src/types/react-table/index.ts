import type { FilterFn } from '@tanstack/react-table'
import type { SearchResult } from 'minisearch'

declare module '@tanstack/react-table' {
  //add fuzzy filter to the filterFns
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    rank: SearchResult
  }
}
