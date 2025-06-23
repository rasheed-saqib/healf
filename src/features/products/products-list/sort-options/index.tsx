'use client'

import type { FC } from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useProductsStore } from '@/stores/products-store'

import { PRODUCTS_SORT_OPTIONS } from '../products-list.constants'

export const SortOptions: FC = () => {
  const { sortOption, setSortOption } = useProductsStore()(state => state)

  return (
    <Select value={sortOption ?? ''} onValueChange={setSortOption}>
      <SelectTrigger className="hover:bg-accent hover:text-accent-foreground border-none bg-transparent shadow-none focus-visible:border-0 focus-visible:ring-0">
        <SelectValue placeholder="Sort" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort options</SelectLabel>
          {Object.entries(PRODUCTS_SORT_OPTIONS).map(([key, { label }]) => (
            <SelectItem key={key} value={key}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
