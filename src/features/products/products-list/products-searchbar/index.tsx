import type { FC } from 'react'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { MagnifyingGlassIcon } from '@/icons/magnifying-glass'

export const ProductsSearchbar: FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <MagnifyingGlassIcon className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="top-4 translate-y-0 overflow-hidden p-0 sm:max-w-2xl"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Search Products</DialogTitle>
          <DialogDescription>
            Search for products by name, category, or vendor.
          </DialogDescription>
        </DialogHeader>
        <Command>
          <CommandInput placeholder="Search for products by name, category, or vendor.." />
          <CommandList>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <span>Search Emoji</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
