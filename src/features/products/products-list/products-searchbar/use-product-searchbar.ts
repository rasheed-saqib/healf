import { type KeyboardEvent, useCallback, useMemo, useState } from 'react'
import { useDebounce } from 'use-debounce'

import { useSyncedState } from '@/hooks/use-synced-state'
import { useProductsStore } from '@/stores/products-store'

interface UseProductSearchbarReturn {
  open: boolean
  setOpen: (open: boolean) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  suggestions: string[]
  onInputKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
  onSelectSuggestion: (suggestion: string) => void
  recentSearches: string[]
}

export const useProductSearchbar = (): UseProductSearchbarReturn => {
  const [open, setOpen] = useState(false)
  const { miniSearch, searchQuery, setSearchQuery } = useProductsStore()(
    state => state
  )
  const [recentSearches, setRecentSearches] = useSyncedState<string[]>([], {
    key: 'recent-product-searches'
  })

  const [debouncedSearch] = useDebounce(searchQuery, 300)

  const suggestions = useMemo(() => {
    if (debouncedSearch === '') return []

    const results = miniSearch
      .autoSuggest(debouncedSearch, {
        boost: {
          name: 2,
          description: 1,
          vendor: 1
        }
      })
      .filter(({ score }, _, [f]) => score > f.score / 4)
      .slice(0, 5)

    if (results.length === 1 && results[0].suggestion === debouncedSearch)
      return []

    return results.map(suggestion => suggestion.suggestion)
  }, [debouncedSearch, miniSearch])

  const onInputKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault()

        setRecentSearches(prev => [
          ...new Set([searchQuery.toLowerCase(), ...prev])
        ])

        setOpen(false)
      }
    },
    [setRecentSearches, searchQuery]
  )

  const onSelectSuggestion = useCallback(
    (suggestion: string) => {
      setSearchQuery(suggestion)

      setRecentSearches(prev => [
        ...new Set([suggestion.toLowerCase(), ...prev])
      ])

      setOpen(false)
    },
    [setSearchQuery, setRecentSearches]
  )

  return {
    open,
    setOpen,
    searchQuery,
    setSearchQuery,
    suggestions,
    onInputKeyDown,
    onSelectSuggestion,
    recentSearches: recentSearches.slice(0, 5)
  }
}
