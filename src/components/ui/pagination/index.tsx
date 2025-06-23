import type { ComponentProps, FC } from 'react'

import { type Button, BUTTON_VARIANTS } from '@/components/ui/button'
import { ChevronDoubleLeftIcon } from '@/icons/chevron-double-left'
import { ChevronDoubleRightIcon } from '@/icons/chevron-double-right'
import { ChevronLeftIcon } from '@/icons/chevron-left'
import { ChevronRightIcon } from '@/icons/chevron-right'
import { EllipsisHorizontalIcon } from '@/icons/ellipsis-horizontal'
import { cn } from '@/utils/cn'

const Pagination: FC<ComponentProps<'nav'>> = ({ className, ...props }) => {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  )
}

const PaginationContent: FC<ComponentProps<'ul'>> = ({
  className,
  ...props
}) => {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  )
}

const PaginationItem: FC<ComponentProps<'li'>> = ({ ...props }) => {
  return <li data-slot="pagination-item" {...props} />
}

const PaginationLink: FC<
  {
    isActive?: boolean
  } & Pick<ComponentProps<typeof Button>, 'size' | 'disabled'> &
    ComponentProps<'a'>
> = ({ className, isActive = false, size = 'icon', ...props }) => {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        BUTTON_VARIANTS({
          variant: isActive ? 'outline' : 'ghost',
          size
        }),
        className
      )}
      {...props}
    />
  )
}

const PaginationPrevious: FC<ComponentProps<typeof PaginationLink>> = ({
  className,
  ...props
}) => {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="icon"
      className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden">Previous</span>
    </PaginationLink>
  )
}

const PaginationNext: FC<ComponentProps<typeof PaginationLink>> = ({
  className,
  ...props
}) => {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="icon"
      className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
      {...props}
    >
      <span className="hidden">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

const PaginationFirst: FC<ComponentProps<typeof PaginationLink>> = ({
  className,
  ...props
}) => {
  return (
    <PaginationLink
      aria-label="Go to first page"
      size="icon"
      className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
      {...props}
    >
      <span className="hidden">Last</span>
      <ChevronDoubleLeftIcon />
    </PaginationLink>
  )
}

const PaginationLast: FC<ComponentProps<typeof PaginationLink>> = ({
  className,
  ...props
}) => {
  return (
    <PaginationLink
      aria-label="Go to last page"
      size="icon"
      className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
      {...props}
    >
      <span className="hidden">Last</span>
      <ChevronDoubleRightIcon />
    </PaginationLink>
  )
}

const PaginationEllipsis: FC<ComponentProps<'span'>> = ({
  className,
  ...props
}) => {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <EllipsisHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
}
