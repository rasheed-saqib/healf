import type { FC } from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger
} from '@/components/ui/select'

const SORT_OPTIONS = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false }
]

export const SortOptions: FC = () => {
  return (
    <Select>
      <SelectTrigger className="hover:bg-accent hover:text-accent-foreground border-none bg-transparent shadow-none focus-visible:border-0 focus-visible:ring-0">
        Sort
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort options</SelectLabel>
          {SORT_OPTIONS.map(option => (
            <SelectItem key={option.name} value={option.name}>
              {option.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
