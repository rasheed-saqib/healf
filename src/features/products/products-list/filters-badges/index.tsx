'use client'

import type { FC } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { PRODUCTS_SORT_OPTIONS } from '@/features/products/products-list/products-list.constants'
import { XMarkIcon } from '@/icons/x-mark'
import { useProductsStore } from '@/stores/products-store'

export const FiltersBadges: FC = () => {
  const { sort, setSort, searchQuery, setSearchQuery, filters, setFilters } =
    useProductsStore()(state => state)

  return (
    <ScrollArea>
      <div className="flex items-center gap-2">
        {searchQuery !== '' && (
          <Badge variant="outline" className="rounded-full px-3 py-1.5 text-xs">
            Search: {searchQuery}
            <Button
              variant="ghost"
              size="icon"
              className="size-5"
              onClick={() => {
                setSearchQuery('')
              }}
            >
              <XMarkIcon />
            </Button>
          </Badge>
        )}

        {sort != null && (
          <Badge variant="outline" className="rounded-full px-3 py-1.5 text-xs">
            Sort: {PRODUCTS_SORT_OPTIONS[sort].label}
            <Button
              variant="ghost"
              size="icon"
              className="size-5"
              onClick={() => {
                setSort(null)
              }}
            >
              <XMarkIcon />
            </Button>
          </Badge>
        )}

        {Object.entries(filters)
          .filter(([_, value]) => value.length > 0)
          .map(([key, value]) => (
            <Badge
              variant="outline"
              className="rounded-full px-3 py-1.5 text-xs"
              key={key}
            >
              <span className="capitalize">{key}</span>: {value.join(', ')}
              <Button
                variant="ghost"
                size="icon"
                className="size-5"
                onClick={() => {
                  setFilters({
                    ...filters,
                    [key]: []
                  })
                }}
              >
                <XMarkIcon />
              </Button>
            </Badge>
          ))}
      </div>

      <ScrollBar orientation="horizontal" className="hidden" />
    </ScrollArea>
  )
}
