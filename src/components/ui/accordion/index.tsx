'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import type { ComponentProps, FC } from 'react'

import { ChevronDownIcon } from '@/icons/chevron-down'
import { cn } from '@/utils/cn'

const Accordion: FC<ComponentProps<typeof AccordionPrimitive.Root>> = ({
  ...props
}) => {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

const AccordionItem: FC<ComponentProps<typeof AccordionPrimitive.Item>> = ({
  className,
  ...props
}) => {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-b last:border-b-0', className)}
      {...props}
    />
  )
}

const AccordionTrigger: FC<
  ComponentProps<typeof AccordionPrimitive.Trigger>
> = ({ className, children, ...props }) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

const AccordionContent: FC<
  ComponentProps<typeof AccordionPrimitive.Content>
> = ({ className, children, ...props }) => {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
