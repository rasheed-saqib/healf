import type { Table } from '@tanstack/react-table'
import type { FC } from 'react'

import {
  Pagination,
  PaginationContent,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import type { Product } from '@/types/product'

interface ProductsPaginationProps {
  table: Table<Product>
}

const PAGE_SIZES = [12, 24, 48, 96]

export const ProductsPagination: FC<ProductsPaginationProps> = ({ table }) => {
  const currentPage = table.getState().pagination.pageIndex + 1
  const pageSize = table.getState().pagination.pageSize
  const totalItems = table.getPrePaginationRowModel().rows.length

  const totalPages = Math.ceil(totalItems / pageSize)

  return (
    <div className="mt-8 flex w-full items-center justify-between">
      <p className="text-sm text-neutral-600">
        Page {currentPage} of {totalPages} | Total:{' '}
        {table.getFilteredRowModel().rows.length} items
      </p>

      <div className="flex items-center gap-8">
        <Pagination className="justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationFirst
                onClick={table.firstPage}
                disabled={!table.getCanPreviousPage()}
                isActive={currentPage === 1}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationPrevious
                onClick={table.previousPage}
                disabled={currentPage === 1}
              />
            </PaginationItem>

            <PaginationLink className="w-fit min-w-9 px-2" isActive>
              {currentPage}
            </PaginationLink>

            <PaginationItem>
              <PaginationNext
                onClick={table.nextPage}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLast
                onClick={() => {
                  table.setPageIndex(totalPages - 1)
                }}
                disabled={!table.getCanNextPage()}
                isActive={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <Select
          value={pageSize.toString()}
          onValueChange={value => {
            table.setPageSize(Number.parseInt(value))
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Page Size</SelectLabel>
              {PAGE_SIZES.map(size => (
                <SelectItem key={size} value={size.toString()}>
                  {size}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
