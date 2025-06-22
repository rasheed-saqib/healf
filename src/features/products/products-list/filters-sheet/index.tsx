import type { FC } from 'react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { FunnelIcon } from '@/icons/funnel'

import { ProductsFilters } from '../products-filters'

export const FiltersSheet: FC = () => {
  return (
    <Sheet>
      <SheetTrigger className="relative z-40 lg:hidden" asChild>
        <Button size="icon" variant="ghost">
          <FunnelIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-lg font-medium text-gray-900">
            Filters
          </SheetTitle>
        </SheetHeader>

        <div className="px-4">
          <ProductsFilters />
        </div>
      </SheetContent>
    </Sheet>
  )
}
