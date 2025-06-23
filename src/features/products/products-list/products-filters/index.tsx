'use client'

import { type FC, useCallback, useMemo } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useProductsStore } from '@/stores/products-store'

import { getProductFilterOptions } from '../products-list.utils'

export const ProductsFilters: FC = () => {
  const { products, filters, setFilters } = useProductsStore()(state => state)

  const filterOptions = useMemo(
    () => getProductFilterOptions(products),
    [products]
  )

  const handleFilterChange = useCallback(
    (sectionId: string, optionValue: string) => {
      setFilters({
        ...filters,
        [sectionId]: filters[sectionId]?.includes(optionValue)
          ? filters[sectionId].filter(v => v !== optionValue)
          : [...(filters[sectionId] ?? []), optionValue]
      })
    },
    [filters, setFilters]
  )

  return (
    <form className="mt-4">
      <Accordion type="single" collapsible>
        {filterOptions.map(section => (
          <AccordionItem key={section.id} value={`filter-${section.id}`}>
            <AccordionTrigger className="cursor-pointer">
              <span className="font-medium text-gray-900">{section.name}</span>
            </AccordionTrigger>
            <AccordionContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex gap-3">
                      <Checkbox
                        defaultValue={option.value}
                        id={`filter-mobile-${section.id}-${optionIdx}`}
                        name={section.id}
                        checked={filters[section.id]?.includes(option.value)}
                        onCheckedChange={() => {
                          handleFilterChange(section.id, option.value)
                        }}
                      />
                      <Label
                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </form>
  )
}
